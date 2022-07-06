# FormationPlus

In this Repo, you can find the source code of this REST API (front-end: ReactJS, back-end: NodeJS/Express) with database files and a .exe file that is ready to run.

**1- To connect the machine to the database files, follow these instructions:**

- Install [Microsoft SQL Server Managment Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16)

- Install [Microsoft SQL Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

- Copy or cut and paste both the .mdf and .ldf database files in to the MS SQL Server path location on your system: YourPC/C:/Program Files/Microsoft SQL Server/YourSQLExpressServerName/MSSQL/DATA

- Open SQL Server Managment Studio, it will suggest a connection to the SQL Express Server with Windows Authentication, click connect

- Once opened, right click on Databases folder in the Object Explorer and select Attach option

- When you clicked Attach, a window will open, In this just click on Add button, select the database .mdf and .ldf files and add it

- Refresh your databases, now you can access the FormationPlus DB

**2- To run the back-end server, run these instructions from your bash:**

- cd YourPC/PathToTheClonedProject/Code/Softia_REST_Backend

- npm install

- node server.js, now the server is listening on localhost:8000


**3- To access the Web Application, run these instructions from your another bash:**

- cd YourPC/PathToTheClonedProject/Code/Softia_REST_Frontend/formation-plus

- npm install

- npm start, now the app is served on localhost:3000