 
 create table Account(
id INT AUTO_INCREMENT PRIMARY KEY, 
firstname varchar (250) NOT NULL, 
lastname varchar (250) NOT NULL, 
email varchar (250)  NOT NULL,
created timestamp,
upload_id int,
password  varchar (250),
account_type varchar (250),
CONSTRAINT FK_AccountUpload FOREIGN KEY (upload_id)
REFERENCES Upload(id)
ON DELETE NO ACTION ON UPDATE NO ACTION); 


 create table Projects(
 id INT AUTO_INCREMENT PRIMARY KEY, 
 project_name varchar (100) NOT NULL, 
 account_id INT, 
 CONSTRAINT FK_AccountProject FOREIGN KEY (account_id)
 REFERENCES Account(id)
ON DELETE NO ACTION ON UPDATE NO ACTION);

create table Hour(
 id INT AUTO_INCREMENT PRIMARY KEY, 
 date date, 
 hour_logged INT,
 mounth_number INT,
day_number INT,
category_id INT, 
account_id  INT,
CONSTRAINT FK_AccountHour FOREIGN KEY (account_id)
REFERENCES Account(id)
ON DELETE NO ACTION ON UPDATE NO ACTION,
CONSTRAINT FK_HourCategory FOREIGN KEY (category_id )
REFERENCES Category(id)
ON DELETE NO ACTION ON UPDATE NO ACTION);

create table Category(
 id INT AUTO_INCREMENT PRIMARY KEY, 
category_description VARCHAR (250));

create table Upload(
 id INT AUTO_INCREMENT PRIMARY KEY, 
upload_name VARCHAR (100),
hour_id  int,
CONSTRAINT FK_UploadHour FOREIGN KEY (hour_id)
REFERENCES Hour(id)
ON DELETE NO ACTION ON UPDATE NO ACTION);
