<?php

namespace Entities;

class Perfil extends \pan\Kore\Entity{

 	protected $table = 'perfil';

	protected $primary_key = 'id_perfil';

	
	const ADMINISTRADOR = 1;
	const COLABORADOR = 2;

}