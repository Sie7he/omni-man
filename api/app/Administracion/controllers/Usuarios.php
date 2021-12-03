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


	public function getUsuario($token = null) 
	{
		$response = array();
		if (is_null($token)) {
			$response['correcto'] = false;
			$response['mensaje'] = 'Parametro no valido';
			$this->response->toJson($response);die;
		}
		
	}

}