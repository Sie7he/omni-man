<?php

class Fechas{


	public static function formatearBaseDatos($fecha,$separador="-"){
		if(empty($fecha)){
			return '';
		}
		if (strpos($fecha, " ") !== false){
			$time = explode(" ",$fecha);
			return self::formatearBaseDatos($time[0]) . " " . $time[1];
		}else{
			$fecha = explode("/",$fecha);
			return $fecha[2] . $separador . $fecha[1] . $separador . $fecha[0];
		}


	}


	public static function formatearHtml($fecha,$separador="/"){
		if(empty($fecha)){
			return '';
		}
		if (strpos($fecha, " ") !== false){
			$time = explode(" ",$fecha);
			return self::formatearHtml($time[0]) . " " . $time[1];
		}else{
			$fecha = explode("-",$fecha);
			return $fecha[2] . $separador . $fecha[1] . $separador . $fecha[0];
		}
		
	}

	public static function formatearHtmlAñoPrimero($fecha,$separador="/"){
		if(empty($fecha)){
			return '';
		}
		if (strpos($fecha, " ") !== false){
			$time = explode(" ",$fecha);
			return self::formatearHtml($time[0]) . " " . $time[1];
		}else{
			$fecha = explode("-",$fecha);
			return $fecha[0] . $separador . $fecha[1] . $separador . $fecha[2]; // Formatea AAA/MM/dd
		}
		
	}


	public static function traducirFecha($fecha){
		return str_replace('day','día',str_replace('mon','mes',str_replace('mons','meses',str_replace('year','año',$fecha))));
	}


	public static function fechaLiteral($fecha, $hora = true){
		$fecha = explode(" ",trim($fecha));
		$fecha_dia = $fecha[0];

        $format = "%e de %B de %Y";
        if (strtoupper(substr(PHP_OS, 0, 3)) == 'WIN') {
            $format = preg_replace('#(?<!%)((?:%%)*)%e#', '\1%#d', $format);
        }

        $fecha_dia = strftime($format,strtotime($fecha_dia));
		$fecha_dia = explode(" ",trim($fecha_dia));

		$fecha_tiempo = '';
		if($hora and isset($fecha[1]) and !empty($fecha[1])){
			$fecha_tiempo = ', a las '.$fecha[1];
		}
		return $fecha_dia[0]." de ".ucfirst($fecha_dia[2])." de ".$fecha_dia[4] . $fecha_tiempo; 
	}


	public static function diffDias($fecha_i,$fecha_f,$solo_dias=false){
		if($solo_dias){
			$fecha_i = explode(" ",$fecha_i);
			$fecha_f = explode(" ",$fecha_f);
			$dias	= (strtotime($fecha_i[0])-strtotime($fecha_f[0]))/86400;
			$dias 	= abs($dias); $dias = floor($dias);		
			return $dias;
		}
		$dias	= (strtotime($fecha_i)-strtotime($fecha_f))/86400;
		$dias 	= abs($dias); $dias = floor($dias);		
		return $dias;
	}
        
	public static function diasVencido($fecha){
        
			$fecha_i = explode(" ",$fecha);
			$fecha_f = date("Y-m-d");
                        
			$dias	= (strtotime($fecha_f)-strtotime($fecha_i[0]))/86400;
                        	
			$dias = floor($dias);
			return $dias;
	}


	/**
	 * calcula la edad de una persona segun su fecha de nacimiento en formato AAAA-MM-DD
	 * @param  [type] $fecha_nacimiento [description]
	 * @return [type]                   [description]
	 */
	public function calcularEdad($fecha_nacimiento){
		list($ano,$mes,$dia) = explode("-",$fechanacimiento);
	    $ano_diferencia  = date("Y") - $ano;
	    $mes_diferencia = date("m") - $mes;
	    $dia_diferencia   = date("d") - $dia;
	    if ($dia_diferencia < 0 || $mes_diferencia < 0)
	        $ano_diferencia--;
	    return $ano_diferencia;
	}
    
    public static function nombreMes($mes){
        $meses = array(
            1 => 'Enero',
            2 => 'Febrero',
            3 => 'Marzo',
            4 => 'Abril',
            5 => 'Mayo',
            6 => 'Junio',
            7 => 'Julio',
            8 => 'Agosto',
            9 => 'Septiembre',
            10 => 'Octubre',
            11 => 'Noviembre',
            12 => 'Diciembre'
        );
        
        return $meses[round($mes)];
    }
}