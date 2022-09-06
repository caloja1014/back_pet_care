# back_pet_care

Componente back-end del proyecto Pet Care (Grupo 6 - Lenguajes de Programación)

# Instalación
1. Clone el proyecto
2. Instale las dependencias con:
```
npm install 
```
3. Ejecute el siguiente query en MySQL Workbench:
```
CREATE USER 'pet_care_user'@'%' IDENTIFIED BY '#Pet_care_123';
GRANT ALL PRIVILEGES ON mydb.pet_care TO'pet_care_user'@'%';
FLUSH PRIVILEGES;
GRANT REFERENCES ON pet_care.* TO'pet_care_user'@'%';
FLUSH PRIVILEGES;
```
En caso de que aparezcan los privilegios denegados, agregar privilegios manualmente en Server > User and Privileges > pet_care_user > Schema Privileges

4. Ejecute el siguiente comando en una consola para crear la base de datos:
```
sequelize db:create
```
5. Inicie el servidor con:
```
npm start
```
6. Para generar la dummy data, ejecutar el siguiente comando en otra consola:
```
npx sequelize-cli db:seed:all --debug
```
