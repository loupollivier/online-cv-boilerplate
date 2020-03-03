# Description
This is the back-end part of a boilerplate application that can be use to present yourself with a description, the projects you worked on, and your passions, as curriculum vitae can do it.
It use Java Spring Boot, with a Rest API access to provide data to the front-end. The database it need to connect to is a MySQL database.

# Installation
In order to locally run the application, you will need to install and start the back-end service and create a local MySQL server (see Readme in back-end repository), and then install and start the front-end project (see front-end at https://github.com/loupollivier/online-cv-boilerplate-frontend) .

To correctly start the back-end service, you need to add an application-local.properties file in the resources folder, with the same data as in application.properties but with your server url, user and password.
When this is done, in your IDE starter for this service, specify to use the local profile.
Notice that you can also only modify the properties in application.properties file.

Make sur that the user you are using for your server has the correct permissions to modify, create, update tables.