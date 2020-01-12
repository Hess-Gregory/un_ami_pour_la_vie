select 
`un_ami_pour_la_vie`.`user`.`id` AS `id`,
`un_ami_pour_la_vie`.`user`.`username` AS `username`,
`un_ami_pour_la_vie`.`user`.`firstName` AS `firstName`,
`un_ami_pour_la_vie`.`user`.`lastName` AS `lastName`,
`un_ami_pour_la_vie`.`user`.`email` AS `email`,
`un_ami_pour_la_vie`.`user`.`created_date` AS `created_date`,
`un_ami_pour_la_vie`.`user`.`newRegister` AS `newRegister`,
`un_ami_pour_la_vie`.`user`.`isActive` AS `isActive`,
if((`un_ami_pour_la_vie`.`user`.`isActive` = TRUE),'Activé','Gelé') AS `status`,
`un_ami_pour_la_vie`.`role`.`idROLE` AS `idROLE`,
`un_ami_pour_la_vie`.`role`.`roleName` AS `roleName` from (`un_ami_pour_la_vie`.`user` left join `un_ami_pour_la_vie`.`role` on((`un_ami_pour_la_vie`.`user`.`role` = `un_ami_pour_la_vie`.`role`.`idROLE`)))