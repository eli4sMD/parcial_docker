# Use una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar los archivos de la aplicación al directorio de trabajo
COPY package*.json ./
COPY app.js ./
COPY index.html ./

# Instalar las dependencias de la aplicación
RUN npm install

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "node", "app.js" ]