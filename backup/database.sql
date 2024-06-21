PGDMP     /                     |            groceryListApp    14.1    14.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    25828    groceryListApp    DATABASE     m   CREATE DATABASE "groceryListApp" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Mexico.1252';
     DROP DATABASE "groceryListApp";
                postgres    false            �            1259    25839    product    TABLE     ^   CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    25838    product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.product_id_seq;
       public          postgres    false    212                       0    0    product_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
          public          postgres    false    211            �            1259    25830    user    TABLE     �   CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying NOT NULL,
    fullname character varying NOT NULL,
    password character varying NOT NULL
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    25829    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    210            	           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    209            �            1259    25882    user_products    TABLE     �   CREATE TABLE public.user_products (
    id integer NOT NULL,
    state character varying,
    user_id integer NOT NULL,
    product_id integer NOT NULL
);
 !   DROP TABLE public.user_products;
       public         heap    postgres    false            �            1259    25881    user_products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.user_products_id_seq;
       public          postgres    false    214            
           0    0    user_products_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.user_products_id_seq OWNED BY public.user_products.id;
          public          postgres    false    213            g           2604    25842 
   product id    DEFAULT     h   ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
 9   ALTER TABLE public.product ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    212    212            f           2604    25833    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209    210            h           2604    25885    user_products id    DEFAULT     t   ALTER TABLE ONLY public.user_products ALTER COLUMN id SET DEFAULT nextval('public.user_products_id_seq'::regclass);
 ?   ALTER TABLE public.user_products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            �          0    25839    product 
   TABLE DATA           +   COPY public.product (id, name) FROM stdin;
    public          postgres    false    212          �          0    25830    user 
   TABLE DATA           B   COPY public."user" (id, username, fullname, password) FROM stdin;
    public          postgres    false    210   H                 0    25882    user_products 
   TABLE DATA           G   COPY public.user_products (id, state, user_id, product_id) FROM stdin;
    public          postgres    false    214                      0    0    product_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.product_id_seq', 2, true);
          public          postgres    false    211                       0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 3, true);
          public          postgres    false    209                       0    0    user_products_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.user_products_id_seq', 6, true);
          public          postgres    false    213            j           2606    25837    user id 
   CONSTRAINT     T   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT id PRIMARY KEY (id) INCLUDE (id);
 3   ALTER TABLE ONLY public."user" DROP CONSTRAINT id;
       public            postgres    false    210            l           2606    25846    product product_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    212            n           2606    25890     user_products user_products_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.user_products
    ADD CONSTRAINT user_products_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.user_products DROP CONSTRAINT user_products_pkey;
       public            postgres    false    214            p           2606    25896    user_products product_id    FK CONSTRAINT     |   ALTER TABLE ONLY public.user_products
    ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES public.product(id);
 B   ALTER TABLE ONLY public.user_products DROP CONSTRAINT product_id;
       public          postgres    false    212    214    3180            o           2606    25891    user_products user_id    FK CONSTRAINT     u   ALTER TABLE ONLY public.user_products
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public."user"(id);
 ?   ALTER TABLE ONLY public.user_products DROP CONSTRAINT user_id;
       public          postgres    false    214    210    3178            �      x�3�,�O,�2�,.MO,����� :n      �   �   x���A
�0е=�'�4mM�� ��m���:0���>����Y�C��+�r�U�G�5��R�"^X5�9c��sf B���gI5�
uD��9��g�s1f����c��%@,%�d���%��,l�B������ܰ�>���d��:�>ɦ�����^>�{uι?�̅P         *   x�3�,(-)��KW��SHJ,�N-�4�4�2�*n����� ��X     