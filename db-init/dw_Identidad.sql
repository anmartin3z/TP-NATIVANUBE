
CREATE SEQUENCE public.rol_id_rol_seq;

CREATE TABLE public.rol (
                id_rol INTEGER NOT NULL DEFAULT nextval('public.rol_id_rol_seq'),
                grupo VARCHAR(5) NOT NULL,
                CONSTRAINT rol_pk PRIMARY KEY (id_rol)
);


ALTER SEQUENCE public.rol_id_rol_seq OWNED BY public.rol.id_rol;

CREATE TABLE public.usuario (
                cod_persona VARCHAR(20) NOT NULL,
                rol INTEGER NOT NULL,
                nombre VARCHAR(250) NOT NULL,
                apellido VARCHAR(250) NOT NULL,
                fecha_nacimiento DATE NOT NULL,
                estado_civil VARCHAR(50) NOT NULL DEFAULT 'Soltero',
                email VARCHAR(250) NOT NULL,
                direccion VARCHAR(250) NOT NULL,
                departamento VARCHAR(250) NOT NULL,
                nro_casa INTEGER NOT NULL,
                nacionalidad VARCHAR(250) NOT NULL,
                barrio VARCHAR(250) NOT NULL,
                ciudad VARCHAR(250) NOT NULL,
                celular VARCHAR(50),
                password VARCHAR(250) NOT NULL,
                CONSTRAINT cod_persona_pk PRIMARY KEY (cod_persona)
);


CREATE SEQUENCE public.servicio_id_servicio_seq;

CREATE TABLE public.servicio (
                id_servicio INTEGER NOT NULL DEFAULT nextval('public.servicio_id_servicio_seq'),
                persona VARCHAR(20) NOT NULL,
                fecha_solicitud DATE NOT NULL,
                fecha_aprovacion DATE,
                fecha_vencimiento DATE,
                estado VARCHAR(1) NOT NULL,
                motivo VARCHAR(250),
                cod_user_aprueba VARCHAR(20),
                motivo_rechazo VARCHAR(250),
                CONSTRAINT servicio_pk PRIMARY KEY (id_servicio, persona)
);


ALTER SEQUENCE public.servicio_id_servicio_seq OWNED BY public.servicio.id_servicio;

CREATE TABLE public.detalle_servicio (
                id_persona VARCHAR(20) NOT NULL,
                cedula_testigo VARCHAR(20) NOT NULL,
                servicio INTEGER NOT NULL,
                estado VARCHAR(1) NOT NULL,
                CONSTRAINT detalle_servicio_pk PRIMARY KEY (id_persona, cedula_testigo, servicio)
);


ALTER TABLE public.usuario ADD CONSTRAINT rol_usuario_fk
FOREIGN KEY (rol)
REFERENCES public.rol (id_rol)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.servicio ADD CONSTRAINT usuario_servicio_fk
FOREIGN KEY (persona)
REFERENCES public.usuario (cod_persona)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE public.detalle_servicio ADD CONSTRAINT servicio_detalle_servicio_fk
FOREIGN KEY (servicio, id_persona)
REFERENCES public.servicio (id_servicio, persona)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;