select 
`un_ami_pour_la_vie`.`user`.`id` AS `id`,
`un_ami_pour_la_vie`.`user`.`firm` AS `firm`,
`un_ami_pour_la_vie`.`user`.`asbl` AS `asbl`,
`un_ami_pour_la_vie`.`user`.`lastName` AS `lastName`,
`un_ami_pour_la_vie`.`user`.`firstName` AS `firstName`,
`un_ami_pour_la_vie`.`user`.`contPhonePv` AS `contPhonePv`,
`un_ami_pour_la_vie`.`user`.`contPhoneGsm` AS `contPhoneGsm`,
`un_ami_pour_la_vie`.`user`.`contPhonePro` AS `contPhonePro`,
`un_ami_pour_la_vie`.`user`.`email` AS `email` 
from `un_ami_pour_la_vie`.`user` where (`un_ami_pour_la_vie`.`user`.`adressbook` = 1)