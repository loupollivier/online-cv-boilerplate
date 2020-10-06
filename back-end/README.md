# Description
This is the back-end part of a boilerplate application that can be use to present yourself with a description, 
the projects you worked on, your passions, as a curriculum vitae can do it.
It use Maven, Java Spring Boot, a Rest API access to provide data to the front-end, and JPA Hibernate to communicate with the database. The database it needs to be connected to is 
a MySQL database.

# Prerequisite
* The repository of this project cloned on your computer.
* Java 8 installed on your computer. You can download it [here](https://www.oracle.com/java/technologies/javase-jdk8-downloads.html).
* Maven installed and configured on your computer. You can find a good installation documentation to follow [here](https://mkyong.com/maven/how-to-install-maven-in-windows/).
* MySQl local server running on your computer. You can download [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
to create a new local server like explained [here](https://ladvien.com/data-analytics-mysql-localhost-setup/).
* Apache Tomcat on your computer to be able to run the previous command. You can download Tomcat 9 [here](https://tomcat.apache.org/download-90.cgi).
* I recommend to use Git BASH for windows to use command lines inside it. This is a personal advice and can be ignored. If you want to download it go to [this page](https://gitforwindows.org/). 
Explanation in the next paragraph will suppose you use Git Bash as I do.


# Installation
From the root folder of the project back-end folder, open a new Git Bash window (right click and "Git Bash Here").
You can see there is colored text above the line you are typing in. The blue one warm you about the git branch you are currently working on. 

Then enter the below command line to install the project:
```$xslt
$ mvn clean install
```

If you prefer, open the project on your IDE. I personally use Intellij, if you use it too, then you can directly use the quick commands inside the tab Maven positioned on the right side of the window. 

# Starting
To correctly start the back-end service, you need to add an application.properties file in the src/main/resources folder, 
with the same data as in application.properties.example but with your server url, user and password to replace the 
dummy values.

Now you have two solutions. Firstly, starting the project using command lines. If you have no IDE to work with, this could be a good solution. Follow the above commands to run the project from the Git Bash window you previously opened.

## Starting the project using command lines 
Enter this command to create the .jar file:  
```$xslt
$ mvn clean package
```
Then, go to the target folder just create using this command:
```$xslt
$ cd target
```
To be able to start the project on the Tomcat default port 8080 with the following command:
```$xslt
$ java -jar online-cv-boilerplate-0.0.1-SNAPSHOT.jar
```

## Starting the project using Intellij
Use the quick commands in this order:
```$xslt
$ clean
```
Then:
```$xslt
$ package
```

Then you can start the application using the "play" button.

If You correctly installed Apache Tomcat on your computer and created a new schema on your database server, with the good data in the application.properties file.
The application should be running, and you should be able to send requests to using Postman for example.

Make sur that the user you are using for your server has the correct permissions to modify, create, and update tables.