<?php

namespace App\Usuario;



class Login extends \pan\Kore\Api{

	/**
	 * Undocumented variable
	 *
	 * @var \Entities\Usuario
	 */
	protected $_Usuario;

	public function __construct(){
		parent::__construct();
	}

	
	/**
	 * Valida ingreso de usuario
	 * POST
	 * {email, pass}
	 * @return void
	 */
	public function loginUsuario()
	{
		$params = $this->request->getParametros();

		$inputJSON = file_get_contents('php://input');
		$params = json_decode($inputJSON, true); 
		
		
		$response = array();

		if (!isset($params['email']) or !isset($params['password'])) {
			$response['correcto'] = false;
			$response['mensaje'] = 'Parámetros no válidos';
			$this->response->toJson($response); die;
		}

		if (filter_var($params['email'], FILTER_VALIDATE_EMAIL) === false) {
			$response['correcto'] = false;
			$response['mensaje'] = 'Formato email no correcto';
			$this->response->toJson($response); die;
		}

		if ($params['password'] === '') {
			$response['correcto'] = false;
			$response['mensaje'] = 'Password vacío. Debe ingresar su password';
			$this->response->toJson($response); die;
		}
		
		$this->_Usuario = new \Entities\Usuario;
		$usuario = $this->_Usuario->join('perfil')->where(array('bo_habilitado_usuario' => 1, 'gl_email_usuario' => trim($params['email']), 'gl_pass_usuario' => \Pan\Utils\HashPan::getSha512($params['password'])))->runQuery()->getRows(0);
		
		if (!$usuario) {
			$response['correcto'] = false;
			$response['mensaje'] = 'Usuario no válido';
			
		} else {
			
			$response['correcto'] = true;
			$response['usuario'] = array(
				'token' => $usuario->gl_token_usuario,
				'nombres' => $usuario->gl_nombres_usuario,
				'apellidos' => $usuario->gl_apellidos_usuario,
				'perfil' => $usuario->gl_nombre_perfil,
				'perfil_id' => $usuario->id_perfil_usuario
			);
		}

		
		$this->response->toJson($response);

	}


	/**
	 * Genera y envia nueva password al usuario
	 * POST
	 * [email]
	 * @return void
	 */
	public function solicitarPass()
	{
		
	}
	

}