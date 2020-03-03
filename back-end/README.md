# Description
This is the back-end part of a boilerplate application that can be use to present yourself with a description, 
the projects you worked on, and your passions, as a curriculum vitae can do it.
It use Java Spring Boot, with a Rest API access to provide data to the front-end. The database it needs to be connected to is 
a MySQL database.

# Prerequisite
* Having Java 8 installed on your computer. You can download it [here](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html).
* The repository of this project cloned on your computer.
* Having a MySQl local server running on your computer. You can download [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
to create a new local server like explained [here](https://ladvien.com/data-analytics-mysql-localhost-setup/).  


# Installation
To correctly start the back-end service, you need to add an application.properties file in the src/main/resources folder, 
with the same data as in application.properties.example but with your server url, user and password to replace the 
dummy values.  
When this is done, open a new command Windows Command Line panel in the back-end folder and execute this command to create the .jar file:  
```$xslt
$ mvn clean package
```
And then, go to the target folder just create using this command:
```$xslt
$ cd target
```
To be able to start the project on the Tomcat default port 8080 with the following command:
```$xslt
$ java -jar online-cv-boilerplate-0.0.1-SNAPSHOT.jar
```
Notice that you might need to install Apache Tomcat on your computer to be able to run the previous command. 
You can download Tomcat 9 it at this [link](https://tomcat.apache.org/download-90.cgi).

As the project is using JPA Hibernate to create the entities in the database, you just need to create a MySql server 
on your computer to be able to start the app 
Make sur that the user you are using for your server has the correct permissions to modify, create, update tables.