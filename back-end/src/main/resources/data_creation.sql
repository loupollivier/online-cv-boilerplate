use wolf;

insert into projects(id,client,start_date,end_date,team_size) values (1, 'Bourse de Boston', '2019-03-15', null, 6);
insert into projects(id,client,start_date,end_date,team_size) values (2, 'FMSQ', '2019-04-02', '2020-03-20', 3);
insert into projects(id,client,start_date,end_date,team_size) values (3, 'FMSQ', '2019-08-15', '2019-12-03', 3);
insert into projects(id,client,start_date,end_date,team_size) values (4, 'FMSQ', '2019-11-29', '2020-01-10', 1);
insert into projects(id,client,start_date,end_date,team_size) values (5, 'R3D Conseils', '2019-02-15', '2019-03-14', 3);

insert into project_details(id, description, language, position, title, project_id) values (1, 'test desc 1 fr', 'fr', 'test position 1 fr', 'test title 1 fr', 1);
insert into project_details(id, description, language, position, title, project_id) values (2, 'test desc 1 en', 'en', 'test position 1 en', 'test title 1 en', 1);
insert into project_details(id, description, language, position, title, project_id) values (3, 'test desc 2 fr', 'fr', 'test position 2 fr', 'test title 2 fr', 2);
insert into project_details(id, description, language, position, title, project_id) values (4, 'test desc 2 en', 'en', 'test position 2 en', 'test title 2 en', 2);
insert into project_details(id, description, language, position, title, project_id) values (5, 'test desc 3 fr', 'fr', 'test position 3 fr', 'test title 3 fr', 3);
insert into project_details(id, description, language, position, title, project_id) values (6, 'test desc 3 en', 'en', 'test position 3 en', 'test title 3 en', 3);
insert into project_details(id, description, language, position, title, project_id) values (7, 'test desc 4 fr', 'fr', 'test position 4 fr', 'test title 4 fr', 4);
insert into project_details(id, description, language, position, title, project_id) values (8, 'test desc 4 en', 'en', 'test position 4 en', 'test title 4 en', 4);
insert into project_details(id, description, language, position, title, project_id) values (9, 'test desc 5 fr', 'fr', 'test position 5 fr', 'test title 5 fr', 5);
insert into project_details(id, description, language, position, title, project_id) values (10, 'test desc 5 en', 'en', 'test position 5 en', 'test title 5 en', 5);

insert into hobbies(id,image_url) values (1,'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
insert into hobbies(id,image_url) values (2,'https://images2.alphacoders.com/774/thumb-1920-774545.jpg');
insert into hobbies(id,image_url) values (3,'https://images.8tracks.com/cover/i/008/482/851/video-game-characters-wallpaper-2013-widescreen-2-4280.png?rect=234,0,640,640&q=98&fm=jpg&fit=max');

insert into hobby_details(id, name, description, language, hobby_id) values (1, 'Escalade', 'Je pratique l\'escalade depuis tout petit, j\'ai très probablement monté mon premier rocher assuré à l\'âge de 5 ans environs.','fr',1);
insert into hobby_details(id, name, description, language, hobby_id) values (2, 'Climbing','Climbing english description','en', 1);
insert into hobby_details(id, name, description, language, hobby_id) values (3, 'Manga', 'Mes amis de prépa intégré m\'ont mis aux mangas à mon arrivée en école d\'ingénieur, et depuis j\'en lis ou regarde beaucoup en animé. Mes amis de prépa intégré m\'ont mis aux mangas à mon arrivée en école d\'ingénieur, et depuis j\'en lis ou regarde régulièrement.','fr',2);
insert into hobby_details(id, name, description, language, hobby_id) values (4, 'Manga','Manga english description','en', 2);
insert into hobby_details(id, name, description, language, hobby_id) values (5, 'Jeux vidéos', 'Eh oui comme beaucoup de personnes dans ce domaines je joue aux vidéos, j\'aime beaucoup ceux en monde ouvert ou les FPS compétitif.','fr',3);
insert into hobby_details(id, name, description, language, hobby_id) values (6, 'Video games','Video games english description','en', 3);

insert into experiences(id,start_date,end_date) values (1,'2017-06-01','2017-09-01');
insert into experiences(id,start_date,end_date) values (2,'2018-03-01','2017-09-01');
insert into experiences(id,start_date,end_date) values (3,'2019-02-11',null);

insert into experience_details(id, title, description, language, experience_id) values (1, 'Chargé à la cyber sécurité','Chargé de la mise en place de nouvelles bonnes pratiques de cyber-sécurité et d\'un choix de nouvel outil de test d\'intrusion au sein d\'un des projets de Schneider Eletric.','fr',1);
insert into experience_details(id, title, description, language, experience_id) values (2, 'Cyber security officer','Cyber security officer english description.','en',1);
insert into experience_details(id, title, description, language, experience_id) values (3, 'Gestion de projet et ingénierie d\'affaire','Aide au recrutement et placement de candidats chez le clients Amadeus, ainsi que Scrum Master pour un projet interne de gestion des candidats pour Sogeti HighTech.','fr',2);
insert into experience_details(id, title, description, language, experience_id) values (4, 'Project management and business engineering','Project management and business engineering english description.','en',2);
insert into experience_details(id, title, description, language, experience_id) values (5, 'Développeur Full Stack et Scrum Master','Développeur Full Stack et Scrum Master dans le cadre de multiples projets, web et java, développés dans le studio de R3D conseil.','fr',1);
insert into experience_details(id, title, description, language, experience_id) values (6, 'Full stack developer and Scrum master','Full stack developer and Scrum master english description.','en',1);

insert into tools(id,name) values (1,'Microsoft Azure');
insert into tools(id,name) values (2,'Visual Studio Code');
insert into tools(id,name) values (3,'Jira');
insert into tools(id,name) values (4,'Spring Tool Suite');
insert into tools(id,name) values (5,'Intellij');
insert into tools(id,name) values (6,'Microsoft SQL Server Management Studio');
insert into tools(id,name) values (7,'MySQL Worbench');
insert into tools(id,name) values (8,'Docker');
insert into tools(id,name) values (9,'Postman');
insert into tools(id,name) values (10,'Confluence');
insert into tools(id,name) values (11,'Bitbucket');

insert into projects_tools(project_entity_id, tools_id) values (1,2);
insert into projects_tools(project_entity_id, tools_id) values (1,3);
insert into projects_tools(project_entity_id, tools_id) values (1,4);
insert into projects_tools(project_entity_id, tools_id) values (1,5);
insert into projects_tools(project_entity_id, tools_id) values (1,7);
insert into projects_tools(project_entity_id, tools_id) values (1,9);
insert into projects_tools(project_entity_id, tools_id) values (2,3);
insert into projects_tools(project_entity_id, tools_id) values (2,4);
insert into projects_tools(project_entity_id, tools_id) values (2,7);
insert into projects_tools(project_entity_id, tools_id) values (2,9);
insert into projects_tools(project_entity_id, tools_id) values (2,10);
insert into projects_tools(project_entity_id, tools_id) values (2,11);
insert into projects_tools(project_entity_id, tools_id) values (3,1);
insert into projects_tools(project_entity_id, tools_id) values (3,3);
insert into projects_tools(project_entity_id, tools_id) values (3,4);
insert into projects_tools(project_entity_id, tools_id) values (3,7);
insert into projects_tools(project_entity_id, tools_id) values (3,9);
insert into projects_tools(project_entity_id, tools_id) values (3,10);
insert into projects_tools(project_entity_id, tools_id) values (3,11);

insert into technologies(id,name) values (1,'React');
insert into technologies(id,name) values (2,'TypeScript');
insert into technologies(id,name) values (3,'Java');
insert into technologies(id,name) values (4,'GraphQL');
insert into technologies(id,name) values (5,'MySQL');
insert into technologies(id,name) values (6,'Redux');
insert into technologies(id,name) values (7,'Azure');
insert into technologies(id,name) values (8,'SrpingBoot');
insert into technologies(id,name) values (9,'Rest API');
insert into technologies(id,name) values (10,'Jacoco');
insert into technologies(id,name) values (11,'Mockito');
insert into technologies(id,name) values (12,'Lombok');
insert into technologies(id,name) values (13,'Oracle SQL');

insert into projects_technologies(project_entity_id, technologies_id) values (1,1);
insert into projects_technologies(project_entity_id, technologies_id) values (1,2);
insert into projects_technologies(project_entity_id, technologies_id) values (1,3);
insert into projects_technologies(project_entity_id, technologies_id) values (1,5);
insert into projects_technologies(project_entity_id, technologies_id) values (1,6);
insert into projects_technologies(project_entity_id, technologies_id) values (1,8);
insert into projects_technologies(project_entity_id, technologies_id) values (1,9);
insert into projects_technologies(project_entity_id, technologies_id) values (2,3);
insert into projects_technologies(project_entity_id, technologies_id) values (2,8);
insert into projects_technologies(project_entity_id, technologies_id) values (2,10);
insert into projects_technologies(project_entity_id, technologies_id) values (2,11);
insert into projects_technologies(project_entity_id, technologies_id) values (2,12);
insert into projects_technologies(project_entity_id, technologies_id) values (2,13);
insert into projects_technologies(project_entity_id, technologies_id) values (3,3);
insert into projects_technologies(project_entity_id, technologies_id) values (3,5);
insert into projects_technologies(project_entity_id, technologies_id) values (3,7);
insert into projects_technologies(project_entity_id, technologies_id) values (3,8);
insert into projects_technologies(project_entity_id, technologies_id) values (3,9);
insert into projects_technologies(project_entity_id, technologies_id) values (3,10);
insert into projects_technologies(project_entity_id, technologies_id) values (3,11);
insert into projects_technologies(project_entity_id, technologies_id) values (3,12);

SELECT * FROM project_details;