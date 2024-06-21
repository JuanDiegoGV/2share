### HOW TO START THE PROJECT

### Requirements.
You must have docker installed on your computer.
If you have problems check that the ports are not busy on your computer.

### 1. Docker.

##### 1.1 Make sure you are in the root /2share folder.
##### 1.2 Open a console on this folder.
##### 1.3 Run the command `cd backend` and then the command `docker build . -t backend:latest`.
##### 1.4 Run the command `cd ../frontend` and then the command `docker build . -t frontend:latest`.
##### 1.5 Run the command `cd ..` and then the command `docker-compose up`.

### 2. Postgres.

##### 1.1 Open in your browser the address [pgAdmin](http://localhost:5050/).
##### 1.2 Log in with the credentials email: admin@admin.com and password:root.
##### 1.3 Right click on the Servers tab, then on Register and then on Server.
##### 1.4 In the Name field type 'groceryListApp'.
##### 1.4 Then in the Connection tab in the Host name field type 'database', in the Username field type 'postgres' and in the Password field type 'root', then click on save.
##### 1.5 Pull down the groceryListApp menu, then click on Databases and then on the groceryListApp database.
##### 1.6 Right click on the groceryListApp database, then click on Restore.
##### 1.7 In the Filename field click on the folder icon, in the window that opens click on the three dots in the top right corner, then on Upload.
##### 1.8 Now we will drag on this new window the database.sql file in the /2share/backup folder, once uploaded we will click on the icon to close the window (different from the icon to delete the file just uploaded), then we select the database.sql file and click on select.
##### 1.9 Then click on Restore.

### 3. Grocery list app.

##### 1.1 Open in your browser the address [GroceryListApp](http://localhost/login).
##### 1.2 Login with the credentials username: example@2share.com and password:test.


# BEST PRACTICES AND SECURITY

### 1. General.
#### 1.1. Have the versions of the libraries in exact form, without the symbol ^, this to have better control and to update manually and consciously the packages.
#### 1.2 Use conventions such as standard js for consistency in the code.
#### 1.3 It is recommended to use the vs code extension called thunder client to view the api documentation, it can be imported with the groceryListAppApi.json file.
#### 1.4 The http response codes that should be 404 or 204 I replace them with others for frontend convenience.

### 2. Backend.
#### 2.1. Configure correctly the headers in the http requests to guarantee security in the communication, for this purpose the helmet library is recommended.
#### 2.2. Put the variables of connections to databases, token of apis, secrets, etc. in a file .env and not to make it public, since they are important data, (in this case they are shown for convenience of revision).
#### 2.3. Encrypt the generated session jwt for security.
#### 2.4 Do not store passwords directly in the database, they should be encrypted or use other methods to ensure better protection of this information.
#### 2.5 Sanitise the data received, for this purpose we recommend an orm or libraries such as express-validator to protect the api from attacks.
#### 2.6 Perform tests for more cases, this obviously takes more time.

### 3. Frontend
#### 3.1. Use a different state handler than react's Context api, as using this tool can lead to performance problems and unnecessary code complexity, alternatives such as zustand, jotai, redux, etc. are recommended.
#### 3.2. Use a tool like vite.js instead of create-react-app because this is deprecated and quite inefficient.
#### 3.3. Use tools like react-query that provide great control and utilities for data fetching, some advantages are state management over queries, cache, refetching, lazyLoading, etc.