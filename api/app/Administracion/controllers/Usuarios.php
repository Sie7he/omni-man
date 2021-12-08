<?php

namespace App\Administracion;



class Usuarios extends \pan\Kore\Controller{

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
		$response['usuarios'] = array();
		if ($usuarios) {
			foreach ($usuarios as $usuario) {
				$response['usuarios'][] = array(
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

		$params = $this->request->getParametros();

		if (isset($params['token'])) {

		} else {
			
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

}