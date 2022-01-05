<?php

namespace App\Usuario;



class Perfiles extends \pan\Kore\Api{

	/**
	 * Undocumented variable
	 *
	 * @var \Entities\Perfil;
	 */
	protected $_Perfil;

	public function __construct(){
		parent::__construct();
	}


	public function get()
	{

		$this->_Perfil = new \Entities\Perfil;

		$perfiles = $this->_Perfil->all();
		$response = array();
		if ($perfiles) {
			foreach ($perfiles as $perfil) {
				$response[] = array(
					'id' => $perfil->id_perfil,
					'nombre' => $perfil->gl_nombre_perfil
				);
			}
		}

		$this->response->toJson($response); die;
	}



}