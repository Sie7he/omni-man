<?php

namespace App\Administracion;



class Usuarios extends \pan\Kore\Api{

	/**
	 * Undocumented variable
	 *
	 * @var \Entities\Usuario
	 */
	protected $_Usuario;

	/**
	 * Undocumented variable
	 *
	 * @var \Entities\Perfil
	 */
	protected $_Perfil;

	public function __construct(){
		parent::__construct();
	}


	/**
	 * obtener listado de usuarios
	 *
	 * @param [type] $token
	 * @return json
	 */
	public function get($token = null) 
	{
		$response = array();
		
		$this->_Usuario = new \Entities\Usuario;
		$parametros = array('bo_habilitado_usuario' => 1);
		if (!is_null($token)) {
			$parametros['gl_token_usuario'] = trim($token);
		}
		$usuarios = $this->_Usuario->join('perfil')->where($parametros)->runQuery()->getRows();
		
		if ($usuarios) {
			foreach ($usuarios as $usuario) {
				$response[] = array(
					'token' => $usuario->gl_token_usuario,
					'nombres' => $usuario->gl_nombres_usuario,
					'apellidos' => $usuario->gl_apellidos_usuario,
					'email' => $usuario->gl_email_usuario,
					'perfil' => $usuario->gl_nombre_perfil,
					'perfil_id' => $usuario->id_perfil
				);
			}
		}
		
		$this->response->toJson($response);

	}


	public function save()
	{
		$response = array();

		//$params = $this->request->getParametros();
		$inputJSON = file_get_contents('php://input');
		$params = json_decode($inputJSON, true); 

		$this->_Usuario = new \Entities\Usuario;

		$data = array(
			'gl_nombres_usuario' => $params['nombres'],
			'gl_apellidos_usuario' => $params['apellidos'],
			'id_perfil_usuario' => $params['perfil'],
			'gl_email_usuario' => $params['email'],
			'gl_telefono_usuario' => $params['telefono'],
		);
		
		$token = false;
		$enviar_email = false;
		if (isset($params['token'])) {
			if ($this->_Usuario->update($data, null, array('gl_token_usuario' => $params['token']))) {
				$token = $params['token'];
			}
		} else {
			$pass = \Pan\Utils\HashPan::randomPass();
			$hash = \Pan\Utils\HashPan::getSha512($pass);
			$data['gl_pass_usuario'] = $hash;
			$data['gl_token_usuario'] = sha1($params['email'] . date('YmdHis'));
			$id = $this->_Usuario->create($data);
			if ($id) {
				$enviar_email = true;
				$usuario = $this->_Usuario->getByPK($id);
				$token = $usuario->gl_token_usuario;
			}
		}

		if ($token) {
			$response['correcto'] = true;
			$response['mensaje'] = 'Datos de usuario guardados correctamente';
			if ($enviar_email) {
				$mensaje = '<h3>Omicron Project Manager - Registro</h3>';
				$mensaje .= 'Sus datos de acceso son:';
				$mensaje .= '<p>usuario : ' . $params['email'] . '</p>';
				$mensaje .= '<p>password : ' . $pass . '</p>';
				$mail = new \Email($params['email'],'Registro Omicron Project Manager', $mensaje);
				$mail->send();
				$mail = null;
			}
		} else {
			$response['correcto'] = false;
			$response['mensaje'] = 'Hubo un problema al guardar los datos del usuario';
		}
		
		$this->response->toJson($response);die;
	}


	/**
	 * Deshabilitar usuario
	 * {token}
	 * @return void
	 */
	public function delete()
	{
		$response = array();
		$params = $this->resquest->getParametros();
		if (!isset($params['token'])) {
			$response['correcto'] = false;
			$response['mensaje'] = 'Token no válido';
			$this->response->toJson($response);die;
		}

		$this->_Usuario = new \Entities\Usuario;
		if ($this->_Usuario->update(array('bo_habilitado_usuario' => 0),null, array('gl_token_usuario' => trim($params['token'])))) {
			$response['correcto'] = true;
			$response['mensaje'] = 'Usuario deshabilitado';
		} else {
			$response['correcto'] = false;
			$response['mensaje'] = 'Problemas al deshabilitar usuario';
		}

		$this->response->toJson($response);die;
	}


	/**
	 * Obtener listado de colaboradores
	 *
	 * @return void
	 */
	public function getColaboradores()
	{
		$response = array();
		
		$this->_Usuario = new \Entities\Usuario;
		$parametros = array('bo_habilitado_usuario' => 1, 'id_perfil_usuario' => \Entities\Perfil::COLABORADOR);
		
		$usuarios = $this->_Usuario->join('perfil')->where($parametros)->runQuery()->getRows();
		
		if ($usuarios) {
			foreach ($usuarios as $usuario) {
				$response[] = array(
					'token' => $usuario->gl_token_usuario,
					'nombres' => $usuario->gl_nombres_usuario,
					'apellidos' => $usuario->gl_apellidos_usuario,
					'email' => $usuario->gl_email_usuario,
					'perfil' => $usuario->gl_nombre_perfil,
					'perfil_id' => $usuario->id_perfil
				);
			}
		}
		
		$this->response->toJson($response);
	}

}