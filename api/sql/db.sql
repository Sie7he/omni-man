/* tabla PERFIL */
create table perfil(
    id_perfil tinyint not null primary key,
    gl_nombre_perfil varchar(50) not null,
    bo_habiltado_perfil tinyint(1) default 1
) default charset=utf8;

insert into perfil values(1, 'ADMINISTRADOR PROYECTOS', 1);
insert into perfil values(2, 'COLABORADOR', 1);


/* tabla USUARIO */
create table usuario(
    id_usuario serial not null primary key,
    gl_token_usuario varchar(250) not null unique,
    gl_pass_usuario varchar(250) not null,
    gl_email_usuario varchar(100) not null unique,
    gl_nombres_usuario varchar(100) not null,
    gl_apellidos_usuario varchar(100) not null,
    gl_telefono_usuario varchar(100) default null,
    id_perfil_usuario tinyint not null,
    bo_habilitado_usuario tinyint(1) default 1,
    foreign key (id_perfil_usuario) references perfil(id_perfil)
) default charset=utf8 auto_increment=1;

insert into usuario(gl_token_usuario, gl_pass_usuario, gl_email_usuario, gl_nombres_usuario, gl_apellidos_usuario, gl_telefono_usuario, id_perfil_usuario, bo_habilitado_usuario) values ('5fc856171aeb7b1eb4ec0c19bbc9a223b38e11bb', '26c669cd0814ac40e5328752b21c4aa6450d16295e4eec30356a06a911c23983aaebe12d5da38eeebfc1b213be650498df8419194d5a26c7e0a50af156853c79', 'admin@correo.cl','Administrador', 'Proyectos', '', 1, 1);


/* tabla ESTADO_PROYECTO */
create table estado(
    id_estado tinyint not null primary key,
    gl_nombre_estado varchar(50) not null,
    bo_habilitado_estado tinyint(1) default 1
) default charset=utf8;

insert into estado values(1, 'CREADO', 1);
insert into estado values(2, 'EN DESARROLLO', 1);
insert into estado values(3, 'EN PAUSA', 1);
insert into estado values(4, 'CERRADO', 1);
insert into estado values(5, 'TERMINADO', 1);
insert into estado values(6, 'ANULADO', 1);


/* tabla PROYECTO */
create table proyecto(
    id_proyecto serial not null primary key,
    gl_nombre_proyecto varchar(1000) not null,
    id_usuario_proyecto bigint unsigned not null,
    id_estado_proyecto tinyint not null,
    fc_inicio_proyecto datetime not null,
    fc_termino_proyecto datetime default null,
    fc_termino_real_proyecto datetime default null,
    foreign key (id_usuario_proyecto) references usuario(id_usuario),
    foreign key (id_estado_proyecto) references estado(id_estado)
) default charset=utf8 auto_increment=1;

/* tabla HITO */
create table hito(
    id_hito serial not null primary key,
    gl_nombre_hito varchar(1000) not null,
    id_proyecto bigint unsigned not null,
    id_estado_hito tinyint not null default 1,
    foreign key (id_proyecto) references proyecto (id_proyecto),
    foreign key (id_estado_hito) references estado (id_estado)
) default charset=utf8 auto_increment=1;


/* tabla ROL */
create table rol(
    id_rol serial not null primary key,
    id_proyecto_rol bigint unsigned not null,
    gl_nombre_rol varchar(100) not null,
    bo_habilitado_rol tinyint(1) default 1,
    foreign key (id_proyecto_rol) references proyecto (id_proyecto)
) default charset=utf8 auto_increment=1;


/* tabla ROL_USUARIO */
create table rol_usuario(
    id_rolusuario serial not null,
    id_rol_rolusuario bigint unsigned not null,
    id_usuario_rolusuario bigint unsigned not null,
    primary key (id_rolusuario, id_rol_rolusuario, id_usuario_rolusuario),
    foreign key (id_rol_rolusuario) references rol (id_rol),
    foreign key (id_usuario_rolusuario) references usuario (id_usuario)
) default charset=utf8 auto_increment=1;


/* tabla PRIORIDAD */
create table prioridad (
    id_prioridad tinyint not null primary key,
    gl_nombre_prioridad varchar(50) not null,
    bo_habilitado_prioridad tinyint(1) default 1
) default charset=utf8;

insert into prioridad values(1, 'BAJA', 1);
insert into prioridad values(2, 'MEDIA', 1);
insert into prioridad values(3, 'ALTA', 1);
insert into prioridad values(4, 'URGENTE', 1);

/* tabla TAREA */
create table tarea (
    id_tarea serial not null primary key,
    id_usuario_tarea bigint unsigned not null,
    id_hito_tarea bigint unsigned not null,
    gl_nombre_tarea varchar(1000) not null,
    gl_descripcion_tarea text default null,
    fc_inicio_tarea datetime not null,
    fc_termino_tarea datetime not null,
    fc_termino_real_tarea datetime default null,
    id_prioridad_tarea tinyint not null,
    foreign key (id_usuario_tarea) references usuario (id_usuario),
    foreign key (id_hito_tarea) references hito (id_hito),
    foreign key (id_prioridad_tarea) references prioridad (id_prioridad)
) default charset=utf8 auto_increment=1;


/* tabla COMENTARIO */
create table comentario (
    id_comentario serial not null primary key,
    id_usuario_comentario bigint unsigned not null,
    id_tarea_comentario bigint unsigned not null,
    fc_registro_comentario datetime not null,
    gl_detalle_comentario text default null,
    bo_habilitado_comentario tinyint(1) default 1,
    foreign key (id_usuario_comentario) references usuario (id_usuario),
    foreign key (id_tarea_comentario) references tarea (id_tarea)
) default charset=utf8 auto_increment=1;

/* tabla DOCUMENTO */
create table documento(
    id_documento serial not null primary key,
    id_tarea_documento bigint unsigned not null,
    id_usuario_documento bigint unsigned not null,
    id_comentario_documento bigint unsigned default null,
    gl_hash_documento varchar(250) not null unique,
    gl_ruta_documento varchar(500) not null,
    gl_nombre_documento varchar(100) not null,
    gl_mime_documento varchar(100) not null,
    fc_registro_documento datetime not null,
    bo_habilitado_documento tinyint(1) default 1,
    foreign key (id_tarea_documento) references tarea (id_tarea),
    foreign key (id_usuario_documento) references usuario (id_usuario),
    foreign key (id_comentario_documento) references comentario (id_comentario)
) default charset=utf8 auto_increment=1;


/* tabla HISTORIAL */
create table historial (
    id_historial serial not null primary key,
    id_usuario_historial bigint unsigned not null,
    id_proyecto_historial bigint unsigned not null,
    id_tarea_historial bigint unsigned default null,
    fc_registro_historial datetime not null,
    gl_detalle_historial text not null,
    bo_habilitado_historial tinyint(1) default 1,
    foreign key (id_usuario_historial) references usuario (id_usuario),
    foreign key (id_proyecto_historial) references proyecto (id_proyecto),
    foreign key (id_tarea_historial) references tarea (id_tarea)
) default charset=utf8 auto_increment=1;

