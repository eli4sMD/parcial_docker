# Aplicación de Búsqueda de Información de Animales en Wikipedia

Esta es una aplicación web que permite buscar información sobre animales en Wikipedia y mostrar la descripción del animal junto con su imagen.

## Instrucciones para Ejecutar

Siga estos pasos para ejecutar la aplicación en su entorno local:
Es recomendable ejecutar npm i en la carpeta del proyecto antes de iniciar
## Construye la imagen de Docker:

```bash
docker build -t parcial_docker .
```
Inicializa el clúster Swarm (si aún no está inicializado):

```bash
docker swarm init
```

Crea un archivo docker-compose.yml en la carpeta del proyecto con el siguiente contenido:

```bash
yaml
Copy code
version: '3'

services:
  app:
    image: parcial_docker
    ports:
      - "3000:3000"
    deploy:
      replicas: 5
```

Despliega la aplicación con Swarm:

```bash
docker stack deploy -c docker-compose.yml docker_animales
```

La aplicación estará disponible en http://localhost:3000 en tu navegador.

Para detener y eliminar los contenedores y servicios:

```bash
docker stack rm docker_animales
```
```bash
docker swarm leave --force
```