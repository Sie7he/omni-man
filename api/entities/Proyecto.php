<?php

namespace Entities;

class Proyecto extends \pan\Kore\Entity{

 	protected $table = 'proyecto';

	protected $primary_key = 'id_proyecto';

	protected $joins = array(
		'estado' => 'left join estado on id_estado = id_estado_proyecto',
		'jp' => 'left join usuario on id_usuario = id_usuario_proyecto'
	);

}