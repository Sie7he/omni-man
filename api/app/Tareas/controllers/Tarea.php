<?php

namespace App\Tareas;



class Tarea extends \pan\Kore\Controller{

	/**
	 * Undocumented variable
	 *
	 * @var \Entities\Tarea
	 */
	protected $_Tarea;

	/**
	 * Undocumented variable
	 *
	 * @var \Entities\Usuario
	 */
	protected $_Usuario;

	public function __construct(){
		parent::__construct();
	}


	public function save()
	{
		$params = $this->request->getParametros();

		$this->_Tarea = new \Entities\Tarea;
		$this->_Usuario = new \Entities\Usuario;

		$token_usuario = $params['token'];
		$usuario = $this->_Usuario->where(array('gl_token_usuario' => $token_usuario))->runQuery()->getRows();

		$data = array(
			'id_usuario_tarea' => $usuario->id_usuario,
			'id_hito_tarea' => $params['hito'],
			'gl_nombre_tarea' => $params['nombre'],
			'gl_descripcion_tarea' => $params['descripcion'],
			'fc_inicio_tarea' => $params['inicio'],
			'id_prioridad_tarea' => $params['prioridad']
		);

		if (isset($params['id']) and $params['id'] > 0) {

		} else {
			$guardar = $this->_Tarea->create($data);
		}
	}


}