<?php

namespace Entities;

class Usuario extends \pan\Kore\Entity{

 	protected $table = 'usuario';

	protected $primary_key = 'usuario';

	protected $joins = array(
		'perfil' => 'left join perfil on id_perfil = id_perfil_usuario'
	);

}