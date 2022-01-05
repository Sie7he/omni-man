<?php

namespace App\Tareas;



class Tarea extends \pan\Kore\Api{

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
		$inputJSON = file_get_contents('php://input');
		$params = json_decode($inputJSON, true); 

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


	public function getPrioridades()
	{
		$_Prioridad = new \Entities\Prioridad;

		$response = array();
		$prioridades = $_Prioridad->all();
		if ($prioridades) {
			foreach ($prioridades as $p) {
				$response[] = array(
					'id' => $p->id_prioridad,
					'nombre' => $p->gl_nombre_prioridad
				);
			}
		}

		$this->response->toJson($response); die;
	}


}