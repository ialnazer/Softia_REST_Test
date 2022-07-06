# FormationPlus

In this Repo, you can find the source code of this REST API (front-end: ReactJS, back-end: NodeJS/Express) with database files.

Follow these instructions:

**1- Connect your machine to the database files:**

- Install [Microsoft SQL Server Managment Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)

- Install [Microsoft SQL Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

- Copy or cut and paste both the .mdf and .ldf database files in to the MS SQL Server path location on your system: YourPC/C:/Program Files/Microsoft SQL Server/YourSQLExpressServerName/MSSQL/DATA

- Open SQL Server Managment Studio, it will suggest a connection to the SQL Express Server with Windows Authentication, click connect

- Once opened, right click on Databases folder in the Object Explorer and select Attach option

- When you clicked Attach, a window will open, In this just click on Add button, select the database .mdf and .ldf files and add it

- Refresh your databases, now you can access the FormationPlus DB

**2- Run the back-end server:**

- Type the following instructions in your bash:

`cd YourPC/PathToTheClonedProject/Code/Softia_REST_Backend`

`npm install`

- Set up the config file by opening the Code/Softia_REST_Backend/config/db.config.js file and typing your machine name instead of "DESKTOP-TPNAAHT" in the server field that ends with '\\SQLEXPRESS'

- Again from the bash:

`node server.js`

Now the server is listening on Port 8000

**3- Run the Web Application:**

Type the following instructions in another bash:

- cd YourPC/PathToTheClonedProject/Code/Softia_REST_Frontend/formation-plus

- npm install

- npm start

Now the app is served on **localhost:3000**