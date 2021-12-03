<?php

$app_config = array(

    /**
     * nombre de la aplicacion
     */
    'app_name' => 'OMICRON',

    /**
     * version de la aplicacion
     */
    'app_version' => '1.0',


    /**
     * Ambiente de ejecucion
     * PROD - produccion
     * TEST - testing
     * DEV  - desarrollo
     */
    'app_environment' => 'DEV',

    /**
     * Modulo por defecto al iniciar la aplicacion
     */
    'app_default_module' => 'Usuario',

    /**
     * Controlador por defecto al iniciar la aplicacion
     */
    'app_default_controller' => 'Login',

    /**
     * Accion por defecto al iniciar la aplicacion
     */
    'app_default_action' => 'index',

    /**
     * Indicar ruta del template base, en caso de usar uno. Ubicarlo dentro de carpeta app
     */
    'app_default_template' => 'app/template.php',

    /**
     * Definir ruta para mostrar pagina en error 404
     */
    'app_path_404' => '',

    /**
     * Indicar si la aplicacion se ejecuta en ambiente produccion
     */
    'app_is_production' => false,

    /**
     * Salt para hash
     */
    'app_salt' => 'APP_SALT',

    /**
     * Habilita visualizacion de errores
     */
    'app_view_debug' => true,

    /**
     * Define ubicación para almacenar y guardar ficheros dentro de la aplicación
     */
    'app_storage' => 'store',

    /**
     * Definir protocolo HTTP (http o https)
     */
    'app_http_protocol' => 'http'

);
