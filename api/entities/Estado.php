<?php

namespace Entities;

class Estado extends \pan\Kore\Entity{

 	protected $table = 'estado';

	protected $primary_key = 'id_estado';

	const CREADO = 1;
	const EN_DESARROLLO = 2;
	const EN_PAUSA = 3;
	const CERRADO = 4;
	const TERMINADO = 5;
	const ANULADO = 6;

}