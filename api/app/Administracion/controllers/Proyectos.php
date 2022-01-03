<?php

namespace App\Administracion;



class Proyectos extends \pan\Kore\Controller{

	/**
	 * Undocumented variable
	 *
	 * @var \Entities\Proyecto
	 */
	protected $_Proyecto;

	/**
	 * Undocumented variable
	 *
	 * @var \Entities\Usuario
	 */
	protected $_Usuario;

	public function __construct(){
		parent::__construct();
	}


	public function get()
	{
		$this->_Proyecto = new \Entities\Proyecto;

		$response = array();

		$proyectos = $this->_Proyecto->all();

		if ($proyectos) {
			foreach ($proyectos as $p) {
				$response[] = array(
					'id' => $p->id_proyecto,
					'nombre' => $p->gl_nombre_proyecto,
					'inicio' => \Fechas::formatearHtml($p->fc_inicio_proyecto),
					'termino' => \Fechas::formatearHtml($p->fc_termino_proyecto),
					'jefe_proyecto' => $p->gl_nombres_usuario . ' ' . $p->gl_apellidos_usuario,
					'estado' => $p->gl_nombre_estado
				);
			}
		}

		$this->response->toJson($response); die;
	}


	public function cambiarEstado()
	{
		$params = $this->request->getParametros();

		$this->_Proyecto = new \Entities\Proyecto;

		$id_proyecto = $params['id'];

		$response = array();
		if ($this->_Proyecto->update(array('id_estado_proyecto' => $params['estado']), $id_proyecto)) {
			$response['correcto'] = true;
			$response['mensaje'] = 'Proyecto ha cambiado de estado';
		} else {
			$response['correcto'] = false;
			$response['mensaje'] = 'Problemas para cambiar de estado';
		}

		$this->response->toJson($response); die;
	}



	public function save()
	{
		$params = $this->request->getParametros();

		$response = array();

		$this->_Proyecto = new \Entities\Proyecto;

		$data = array(
			'gl_nombre_proyecto' => $params['nombre'],
			'id_usuario_proyecto' => $params['jp'],
			'fc_inicio_proyecto' => \Fechas::formatearBaseDatos($params['inicio']),
		);

		$id = 0;
		if (isset($params['id']) and $params['id'] > 0) {
			if ($this->_Proyecto->update($data, $params['id'])) {
				$id = $params['id'];
			}
		} else {
			$data['id_estado_proyecto'] = \Entities\Estado::CREADO;
			$id = $this->_Proyecto->create($data);
		}


		if ($id) {
			$response['correcto'] = true;
			$response['mensaje'] = 'Datos de Proyecto guardados correctamente';
		} else {
			$response['correcto'] = false;
			$response['mensaje'] = 'Hubo problemas para guardar los datos';
		}

		$this->response->toJson($response); die;
	}

}