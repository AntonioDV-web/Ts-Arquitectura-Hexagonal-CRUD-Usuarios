# 🚀 CRUD de Usuarios con Arquitectura Hexagonal y TypeScript
Este proyecto es una aplicación de ejemplo que implementa una API RESTful para la gestión de usuarios, construida con TypeScript y siguiendo los principios de la Arquitectura Hexagonal. El objetivo principal es demostrar la separación de capas y la independencia del framework, lo que permite un desarrollo flexible y fácil de mantener.

## 🧠 ¿Qué es la Arquitectura Hexagonal?
La Arquitectura Hexagonal, también conocida como "Ports and Adapters", es un patrón de diseño que aísla la lógica de negocio (el "núcleo" de la aplicación) de la tecnología externa (bases de datos, frameworks, etc.).

Puertos (Ports): Interfaces que definen la comunicación entre el núcleo de la aplicación y el exterior.

Adaptadores (Adapters): Implementaciones concretas de los puertos que se conectan a tecnologías específicas.

Esta estructura asegura que tu lógica de negocio no dependa directamente de una base de datos o de un framework web, permitiendo cambiar o probar diferentes tecnologías con facilidad.

## 🛠️ Tecnologías utilizadas
* TypeScript: Lenguaje de programación.

* Node.js & Express: Entorno de ejecución y framework para la API.

* espress: Framework para manejar las solicitudes HTTP.

* MySQL: Base de datos relacional para la persistencia de datos.

* dotenv: Para la gestión de variables de entorno.

* morgan: para visualizar en consola las peticiones HTTP.

* cors: Para permitir únicamente una ruta de petición.

## ⚙️ Configuración y ejecución
Sigue estos pasos para poner en marcha el proyecto en tu entorno local.

Requisitos previos
* Node.js (v14 o superior)

* npm o yarn

* MySQL (v5.7 o superior)

### Pasos de instalación
Clona el repositorio

````
git clone https://github.com/AntonioDV-web/Ts-Arquitectura-Hexagonal-CRUD-Usuarios.git
cd Ts-Arquitectura-Hexagonal-CRUD-Usuarios
````
### Instala las dependencias
````
npm install
````
## Configura las variables de entorno
Crea un archivo .env en la raíz del proyecto y agrega tus credenciales de la base de datos.
````
PORT=3000

MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USERNAME=root
MYSQL_PASSWORD=
MYSQL_DATABASE=db_ts_users
````
### Ejecuta el proyecto
````
npm run dev
````
* La API estará disponible en http://localhost:3000.

## 📋 Endpoints de la API
La API expone los siguientes endpoints para la gestión de usuarios. Puedes probarlos con herramientas como Postman o Insomnia.

### Método	Endpoint:
* GET	/users	Obtiene la lista de todos los usuarios.
* GET	/users/:id	Obtiene un usuario por su ID.
* POST	/users	Crea un nuevo usuario.
* PUT	/users/:id	Actualiza un usuario existente.
* DELETE	/users/:id	Elimina un usuario por su ID.
