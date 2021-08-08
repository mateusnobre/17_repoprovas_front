--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: courses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying NOT NULL,
    "lecturerId" integer
);


--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.courses_id_seq OWNED BY public.courses.id;


--
-- Name: exams; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exams (
    id integer NOT NULL,
    name character varying NOT NULL,
    url character varying NOT NULL,
    "courseId" integer,
    "categoryId" integer
);


--
-- Name: exams_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.exams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: exams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.exams_id_seq OWNED BY public.exams.id;


--
-- Name: lecturers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lecturers (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: lecturers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lecturers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lecturers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lecturers_id_seq OWNED BY public.lecturers.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: courses id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses ALTER COLUMN id SET DEFAULT nextval('public.courses_id_seq'::regclass);


--
-- Name: exams id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams ALTER COLUMN id SET DEFAULT nextval('public.exams_id_seq'::regclass);


--
-- Name: lecturers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lecturers ALTER COLUMN id SET DEFAULT nextval('public.lecturers_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (39, 'P1');
INSERT INTO public.categories VALUES (40, 'P2');
INSERT INTO public.categories VALUES (41, 'Exame');


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.courses VALUES (29, 'Obstetrícia', 30);
INSERT INTO public.courses VALUES (30, 'Imunologia', 31);
INSERT INTO public.courses VALUES (31, 'Imunologia 2', 31);
INSERT INTO public.courses VALUES (32, 'Imunologia 3', 31);
INSERT INTO public.courses VALUES (33, 'Cardiologia 3', 32);
INSERT INTO public.courses VALUES (34, 'Cardiologia 2', 34);
INSERT INTO public.courses VALUES (35, 'Oncologia', 36);
INSERT INTO public.courses VALUES (36, 'Oncologia 2', 36);
INSERT INTO public.courses VALUES (37, 'Imunologia 3', 35);


--
-- Data for Name: exams; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.exams VALUES (26, 'Imunologia', 'https://uab.ufsc.br/biologia/files/2020/08/Imunologia.pdf', 34, 40);
INSERT INTO public.exams VALUES (27, 'Imuno P2 Bizurada', 'https://uab.ufsc.br/biologia/files/2020/08/Imunologia.pdf', 31, 40);


--
-- Data for Name: lecturers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.lecturers VALUES (30, 'Maria');
INSERT INTO public.lecturers VALUES (31, 'Letícia');
INSERT INTO public.lecturers VALUES (32, 'Valéria');
INSERT INTO public.lecturers VALUES (33, 'Ana');
INSERT INTO public.lecturers VALUES (34, 'Patrícia');
INSERT INTO public.lecturers VALUES (35, 'Samyra');
INSERT INTO public.lecturers VALUES (36, 'Juliana');


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.migrations VALUES (2, 1628278550294, 'creatingTables1628278550294');


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 41, true);


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.courses_id_seq', 37, true);


--
-- Name: exams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.exams_id_seq', 27, true);


--
-- Name: lecturers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.lecturers_id_seq', 36, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 2, true);


--
-- Name: categories PK_24dbc6126a28ff948da33e97d3b; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY (id);


--
-- Name: courses PK_3f70a487cc718ad8eda4e6d58c9; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY (id);


--
-- Name: lecturers PK_4dffa0b38d36bfd09610d64b399; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lecturers
    ADD CONSTRAINT "PK_4dffa0b38d36bfd09610d64b399" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: exams PK_b43159ee3efa440952794b4f53e; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY (id);


--
-- Name: exams FK_3dcd9199b8cd801383e623c3d11; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT "FK_3dcd9199b8cd801383e623c3d11" FOREIGN KEY ("courseId") REFERENCES public.courses(id);


--
-- Name: courses FK_991b0b42fb5ca44bf61d3772188; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT "FK_991b0b42fb5ca44bf61d3772188" FOREIGN KEY ("lecturerId") REFERENCES public.lecturers(id);


--
-- Name: exams FK_a4b572eed2e7293985b93a55eb3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- PostgreSQL database dump complete
--

