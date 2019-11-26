-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 26 nov. 2019 à 01:51
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `un_ami_pour_la_vie`
--

-- --------------------------------------------------------

--
-- Structure de la table `archive`
--

DROP TABLE IF EXISTS `archive`;
CREATE TABLE IF NOT EXISTS `archive` (
  `id_lang` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `CATEGORYLANG_id_categorylang` int(11) DEFAULT NULL,
  `CHOISELANG_idCHOISELANG` int(11) NOT NULL,
  `title` varchar(120) DEFAULT NULL,
  `subTitle` varchar(120) DEFAULT NULL,
  `content` longtext,
  `dateCreation` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `USER_idUSER` int(11) NOT NULL,
  `isOnline` tinyint(1) DEFAULT '0',
  `dateOnline` datetime DEFAULT NULL,
  `classDiv` varchar(45) DEFAULT NULL,
  `idDiv` varchar(45) DEFAULT NULL,
  `dateCreation` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_category`),
  KEY `fk_CATEGORY_USER1_idx` (`USER_idUSER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `categorylang`
--

DROP TABLE IF EXISTS `categorylang`;
CREATE TABLE IF NOT EXISTS `categorylang` (
  `id_categorylang` int(11) NOT NULL AUTO_INCREMENT,
  `tags` varchar(120) DEFAULT NULL,
  `id_category` int(11) NOT NULL,
  `CHOISELANG_idCHOISELANG` int(11) NOT NULL,
  `catSlug` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  `dateCreation` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_categorylang`),
  KEY `fk_id_category3_idx` (`id_category`),
  KEY `fk_CATEGORYLANG_CHOISELANG1_idx` (`CHOISELANG_idCHOISELANG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `choiselang`
--

DROP TABLE IF EXISTS `choiselang`;
CREATE TABLE IF NOT EXISTS `choiselang` (
  `idCHOISELANG` int(11) NOT NULL AUTO_INCREMENT,
  `nameLang` varchar(45) NOT NULL,
  PRIMARY KEY (`idCHOISELANG`,`nameLang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `idCOMMENT` bigint(20) NOT NULL AUTO_INCREMENT,
  `idReponse` bigint(20) NOT NULL,
  `author_IP` varchar(100) DEFAULT NULL,
  `fullname` varchar(45) DEFAULT NULL,
  `mail` varchar(60) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `isOnline` tinyint(1) DEFAULT '0',
  `IsDelete` tinyint(1) DEFAULT NULL,
  `raisonDelete` varchar(160) DEFAULT NULL,
  `classDiv` varchar(65) DEFAULT NULL,
  `IdDiv` varchar(45) DEFAULT NULL,
  `id_post` int(11) NOT NULL,
  PRIMARY KEY (`idCOMMENT`),
  KEY `fk_idCOMMENT1_idx` (`idReponse`),
  KEY `fk_id_post2_idx` (`id_post`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `css_script`
--

DROP TABLE IF EXISTS `css_script`;
CREATE TABLE IF NOT EXISTS `css_script` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `design`
--

DROP TABLE IF EXISTS `design`;
CREATE TABLE IF NOT EXISTS `design` (
  `logo` int(11) DEFAULT NULL,
  `backgroundPathImg` varchar(255) DEFAULT NULL,
  `backgroundColor` varchar(255) DEFAULT NULL,
  `backgroundPosition` varchar(255) DEFAULT NULL,
  `backgroundSize` varchar(255) DEFAULT NULL,
  `JumbostronGradientType` varchar(255) DEFAULT NULL,
  `AFontPolice` varchar(45) DEFAULT NULL,
  `JumbostronGradientColor1` varchar(255) DEFAULT NULL,
  `JumbostronGradientOpacity1` int(11) DEFAULT NULL,
  `JumbostronGradientColor2` varchar(45) DEFAULT NULL,
  `JumbostronGradientOpacity2` varchar(45) DEFAULT NULL,
  `contenBackgroundtColor` varchar(45) DEFAULT NULL,
  `ContentBorderColor` varchar(45) DEFAULT NULL,
  `A` varchar(45) DEFAULT NULL,
  `P` varchar(45) DEFAULT NULL,
  `H1` varchar(45) DEFAULT NULL,
  `H2` varchar(45) DEFAULT NULL,
  `H3` varchar(45) DEFAULT NULL,
  `H4` varchar(45) DEFAULT NULL,
  `H5` varchar(45) DEFAULT NULL,
  `H6` varchar(45) DEFAULT NULL,
  `span` varchar(45) DEFAULT NULL,
  `PFontPolice` varchar(255) DEFAULT NULL,
  `H1FontPolice` varchar(255) DEFAULT NULL,
  `H2FontPolice` varchar(255) DEFAULT NULL,
  `H3FontPolice` varchar(255) DEFAULT NULL,
  `H4FontPolice` varchar(255) DEFAULT NULL,
  `H5FontPolice` varchar(255) DEFAULT NULL,
  `H6FontPolice` varchar(255) DEFAULT NULL,
  `spanFontPolice` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `email`
--

DROP TABLE IF EXISTS `email`;
CREATE TABLE IF NOT EXISTS `email` (
  `server` varchar(60) DEFAULT NULL,
  `port` tinyint(4) DEFAULT NULL,
  `identity` varchar(60) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `img`
--

DROP TABLE IF EXISTS `img`;
CREATE TABLE IF NOT EXISTS `img` (
  `backgroundPathId` varchar(60) DEFAULT NULL,
  `LogoPathId` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `lang`
--

DROP TABLE IF EXISTS `lang`;
CREATE TABLE IF NOT EXISTS `lang` (
  `id_lang` int(11) NOT NULL AUTO_INCREMENT,
  `id_post` int(11) NOT NULL,
  `CATEGORYLANG_id_categorylang` int(11) DEFAULT NULL,
  `CHOISELANG_idCHOISELANG` int(11) NOT NULL,
  `title` varchar(120) DEFAULT NULL,
  `subTitle` varchar(120) DEFAULT NULL,
  `content` longtext,
  `dateCreation` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_lang`),
  KEY `fk_id_post1_idx` (`id_post`),
  KEY `fk_LANG_CHOISELANG1_idx` (`CHOISELANG_idCHOISELANG`),
  KEY `fk_LANG_CATEGORYLANG1_idx` (`CATEGORYLANG_id_categorylang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `lang_media`
--

DROP TABLE IF EXISTS `lang_media`;
CREATE TABLE IF NOT EXISTS `lang_media` (
  `LANG_id_lang` int(11) NOT NULL,
  `MEDIA_idMEDIA` int(11) NOT NULL,
  PRIMARY KEY (`LANG_id_lang`,`MEDIA_idMEDIA`),
  KEY `fk_LANG_has_MEDIA_MEDIA1_idx` (`MEDIA_idMEDIA`),
  KEY `fk_LANG_has_MEDIA_LANG1_idx` (`LANG_id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `mailauto`
--

DROP TABLE IF EXISTS `mailauto`;
CREATE TABLE IF NOT EXISTS `mailauto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `adress` varchar(60) DEFAULT NULL,
  `sujjet` varchar(120) DEFAULT NULL,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
  `idMEDIA` int(11) NOT NULL AUTO_INCREMENT,
  `mediaPath` varchar(100) NOT NULL,
  `renameFile` varchar(45) NOT NULL,
  `USER_idUSER` int(11) NOT NULL,
  `typeFIle` varchar(45) DEFAULT NULL,
  `dateCreation` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `format` varchar(45) DEFAULT NULL,
  `altAttributes` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  `tags` varchar(45) NOT NULL,
  PRIMARY KEY (`idMEDIA`,`mediaPath`,`tags`,`renameFile`),
  KEY `fk_MEDIA_USER1_idx` (`USER_idUSER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `media_has_slide`
--

DROP TABLE IF EXISTS `media_has_slide`;
CREATE TABLE IF NOT EXISTS `media_has_slide` (
  `MEDIA_idMEDIA` int(11) NOT NULL,
  `SLIDE_idSLIDE` int(11) NOT NULL,
  PRIMARY KEY (`MEDIA_idMEDIA`,`SLIDE_idSLIDE`),
  KEY `fk_MEDIA_has_SLIDE_SLIDE1_idx` (`SLIDE_idSLIDE`),
  KEY `fk_MEDIA_has_SLIDE_MEDIA1_idx` (`MEDIA_idMEDIA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `picture`
--

DROP TABLE IF EXISTS `picture`;
CREATE TABLE IF NOT EXISTS `picture` (
  `id_picture` int(11) NOT NULL AUTO_INCREMENT,
  `USER_idUSER` int(11) NOT NULL,
  `addDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `AltPicture` varchar(45) DEFAULT NULL,
  `Path` varchar(45) NOT NULL,
  PRIMARY KEY (`id_picture`,`Path`),
  KEY `fk_PICTURE_USER1_idx` (`USER_idUSER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `id_post` int(11) NOT NULL AUTO_INCREMENT,
  `USER_idUSER` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `creatDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateOnline` datetime DEFAULT NULL,
  `isOnline` tinyint(1) DEFAULT '0',
  `classDiv` varchar(45) DEFAULT NULL,
  `IdDiv` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_post`),
  KEY `fk_id_category1_idx` (`id_category`),
  KEY `fk_POST_USER1_idx` (`USER_idUSER`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `post_media`
--

DROP TABLE IF EXISTS `post_media`;
CREATE TABLE IF NOT EXISTS `post_media` (
  `MEDIA_idMEDIA` int(11) NOT NULL,
  `POST_id_post` int(11) NOT NULL,
  PRIMARY KEY (`POST_id_post`,`MEDIA_idMEDIA`),
  KEY `fk_POST_has_MEDIA_MEDIA1_idx` (`MEDIA_idMEDIA`),
  KEY `fk_POST_has_MEDIA_POST1_idx` (`POST_id_post`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `idROLE` int(11) NOT NULL AUTO_INCREMENT,
  `roleName` varchar(60) NOT NULL,
  PRIMARY KEY (`idROLE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `setup`
--

DROP TABLE IF EXISTS `setup`;
CREATE TABLE IF NOT EXISTS `setup` (
  `visibleGoogle` tinyint(1) DEFAULT '0',
  `titleWebsite` varchar(60) DEFAULT NULL,
  `NewsMax` tinyint(3) DEFAULT NULL,
  `excerpt` tinyint(1) DEFAULT NULL,
  `excerptSize` tinyint(3) DEFAULT NULL,
  `slogan` varchar(60) DEFAULT NULL,
  `registerPublic` tinyint(1) DEFAULT '1',
  `CHOISELANG_idCHOISELANG` int(11) NOT NULL DEFAULT '1',
  KEY `fk_SETUP_CHOISELANG1_idx` (`CHOISELANG_idCHOISELANG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `setuppicture`
--

DROP TABLE IF EXISTS `setuppicture`;
CREATE TABLE IF NOT EXISTS `setuppicture` (
  `size` varchar(20) NOT NULL,
  `width` tinyint(4) NOT NULL,
  `height` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `slide`
--

DROP TABLE IF EXISTS `slide`;
CREATE TABLE IF NOT EXISTS `slide` (
  `idSLIDE` int(11) NOT NULL AUTO_INCREMENT,
  `order` tinyint(25) DEFAULT NULL,
  `title1` varchar(45) DEFAULT NULL,
  `title2` varchar(45) DEFAULT NULL,
  `isActif` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`idSLIDE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `slidefx`
--

DROP TABLE IF EXISTS `slidefx`;
CREATE TABLE IF NOT EXISTS `slidefx` (
  `pictureFX` varchar(25) DEFAULT NULL,
  `pictureDELAY` int(11) DEFAULT NULL,
  `pictureDURATION` int(11) DEFAULT NULL,
  `pictureDIRECTION` int(11) DEFAULT NULL,
  `pictureENDDELAY` int(11) DEFAULT NULL,
  `title1FX` varchar(25) DEFAULT NULL,
  `tilte1DELAY` int(11) DEFAULT NULL,
  `title1DURATION` int(11) DEFAULT NULL,
  `title1DIRECTION` int(11) DEFAULT NULL,
  `title1ENDDELAY` int(11) DEFAULT NULL,
  `title1PositionTOP` int(11) DEFAULT NULL,
  `title2FX` varchar(25) DEFAULT NULL,
  `title2DELAY` int(11) DEFAULT NULL,
  `title2DURATION` int(11) DEFAULT NULL,
  `title2DIRECTION` int(11) DEFAULT NULL,
  `title2ENDDELAY` int(11) DEFAULT NULL,
  `title2PositionTOP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `slug`
--

DROP TABLE IF EXISTS `slug`;
CREATE TABLE IF NOT EXISTS `slug` (
  `idSLUG` int(11) NOT NULL AUTO_INCREMENT,
  `slugText` varchar(255) NOT NULL,
  `id_categorylang` int(11) DEFAULT NULL,
  `id_lang` int(11) DEFAULT NULL,
  `idMEDIA` int(11) DEFAULT NULL,
  PRIMARY KEY (`idSLUG`),
  KEY `fk_id_categorylang2_idx` (`id_categorylang`),
  KEY `fk_id_lang2_idx` (`id_lang`),
  KEY `fk_idMEDIA2_idx` (`idMEDIA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `tag`
--

DROP TABLE IF EXISTS `tag`;
CREATE TABLE IF NOT EXISTS `tag` (
  `tagId` int(11) NOT NULL AUTO_INCREMENT,
  `tagText` text NOT NULL,
  `idMEDIA` int(11) DEFAULT NULL,
  `id_categorylang` int(11) DEFAULT NULL,
  `id_lang` int(11) DEFAULT NULL,
  PRIMARY KEY (`tagId`),
  KEY `fk_idMEDIA3_idx` (`idMEDIA`),
  KEY `fk_id_categorylang3_idx` (`id_categorylang`),
  KEY `fk_id_lang3_idx` (`id_lang`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(60) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u',
  `isActive` tinyint(1) DEFAULT '0',
  `raison` text,
  `role` int(11) DEFAULT '1',
  `asbl` varchar(80) DEFAULT NULL,
  `firstName` varchar(60) DEFAULT NULL,
  `lastName` varchar(60) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `sexGenre` varchar(255) DEFAULT NULL,
  `created_date` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `adPvStreet` varchar(255) DEFAULT NULL,
  `adPvNum` char(9) DEFAULT NULL,
  `adPvZip` smallint(5) DEFAULT NULL,
  `adPvCity` varchar(60) DEFAULT NULL,
  `adPvCountry` varchar(60) DEFAULT NULL,
  `firm` varchar(255) DEFAULT NULL,
  `tva` varchar(255) DEFAULT NULL,
  `adProStreet` varchar(255) DEFAULT NULL,
  `adProNum` char(9) DEFAULT NULL,
  `adProZip` smallint(5) DEFAULT NULL,
  `adProCity` varchar(60) DEFAULT NULL,
  `adProCountry` varchar(60) DEFAULT NULL,
  `contPhonePro` varchar(12) DEFAULT NULL,
  `contPhonePv` varchar(12) DEFAULT NULL,
  `contPhoneGsm` varchar(12) DEFAULT NULL,
  `contFacebook` varchar(45) DEFAULT NULL,
  `contWebsite` varchar(120) DEFAULT NULL,
  `shortDesc` longtext,
  `longDesc` longtext,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `pachMedia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`username`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_USER_ROLE1_idx` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `user_picture`
--

DROP TABLE IF EXISTS `user_picture`;
CREATE TABLE IF NOT EXISTS `user_picture` (
  `idUSER` int(11) NOT NULL,
  `login` varchar(60) NOT NULL,
  `table1_id` int(11) NOT NULL,
  `table1_id1` int(11) NOT NULL,
  `idPICTURE_USER` int(11) NOT NULL,
  `mediaPath` varchar(100) NOT NULL,
  PRIMARY KEY (`idUSER`,`login`,`table1_id`,`table1_id1`,`idPICTURE_USER`,`mediaPath`),
  KEY `fk_idPICTURE_USER1_idx` (`idPICTURE_USER`,`mediaPath`),
  KEY `fk_idUSER1_idx` (`idUSER`,`login`,`table1_id`,`table1_id1`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `fk_CATEGORY_USER1` FOREIGN KEY (`USER_idUSER`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `categorylang`
--
ALTER TABLE `categorylang`
  ADD CONSTRAINT `fk_CATEGORYLANG_CHOISELANG1` FOREIGN KEY (`CHOISELANG_idCHOISELANG`) REFERENCES `choiselang` (`idCHOISELANG`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_category3` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_idCOMMENT1` FOREIGN KEY (`idReponse`) REFERENCES `comment` (`idCOMMENT`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_post2` FOREIGN KEY (`id_post`) REFERENCES `post` (`id_post`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `lang`
--
ALTER TABLE `lang`
  ADD CONSTRAINT `fk_LANG_CATEGORYLANG1` FOREIGN KEY (`CATEGORYLANG_id_categorylang`) REFERENCES `categorylang` (`id_categorylang`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_LANG_CHOISELANG1` FOREIGN KEY (`CHOISELANG_idCHOISELANG`) REFERENCES `choiselang` (`idCHOISELANG`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_post1` FOREIGN KEY (`id_post`) REFERENCES `post` (`id_post`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `lang_media`
--
ALTER TABLE `lang_media`
  ADD CONSTRAINT `fk_LANG_has_MEDIA_LANG1` FOREIGN KEY (`LANG_id_lang`) REFERENCES `lang` (`id_lang`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_LANG_has_MEDIA_MEDIA1` FOREIGN KEY (`MEDIA_idMEDIA`) REFERENCES `media` (`idMEDIA`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `media`
--
ALTER TABLE `media`
  ADD CONSTRAINT `fk_MEDIA_USER1` FOREIGN KEY (`USER_idUSER`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `media_has_slide`
--
ALTER TABLE `media_has_slide`
  ADD CONSTRAINT `fk_MEDIA_has_SLIDE_MEDIA1` FOREIGN KEY (`MEDIA_idMEDIA`) REFERENCES `media` (`idMEDIA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_MEDIA_has_SLIDE_SLIDE1` FOREIGN KEY (`SLIDE_idSLIDE`) REFERENCES `slide` (`idSLIDE`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `picture`
--
ALTER TABLE `picture`
  ADD CONSTRAINT `fk_PICTURE_USER1` FOREIGN KEY (`USER_idUSER`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `fk_POST_USER1` FOREIGN KEY (`USER_idUSER`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_category2` FOREIGN KEY (`id_category`) REFERENCES `category` (`id_category`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `post_media`
--
ALTER TABLE `post_media`
  ADD CONSTRAINT `fk_POST_has_MEDIA_MEDIA1` FOREIGN KEY (`MEDIA_idMEDIA`) REFERENCES `media` (`idMEDIA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_POST_has_MEDIA_POST1` FOREIGN KEY (`POST_id_post`) REFERENCES `post` (`id_post`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `setup`
--
ALTER TABLE `setup`
  ADD CONSTRAINT `fk_SETUP_CHOISELANG1` FOREIGN KEY (`CHOISELANG_idCHOISELANG`) REFERENCES `choiselang` (`idCHOISELANG`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `slug`
--
ALTER TABLE `slug`
  ADD CONSTRAINT `fk_idMEDIA2` FOREIGN KEY (`idMEDIA`) REFERENCES `media` (`idMEDIA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_categorylang2` FOREIGN KEY (`id_categorylang`) REFERENCES `categorylang` (`id_categorylang`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_lang2` FOREIGN KEY (`id_lang`) REFERENCES `lang` (`id_lang`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `tag`
--
ALTER TABLE `tag`
  ADD CONSTRAINT `fk_idMEDIA3` FOREIGN KEY (`idMEDIA`) REFERENCES `media` (`idMEDIA`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_categorylang3` FOREIGN KEY (`id_categorylang`) REFERENCES `categorylang` (`id_categorylang`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_id_lang3` FOREIGN KEY (`id_lang`) REFERENCES `lang` (`id_lang`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_USER_ROLE1` FOREIGN KEY (`role`) REFERENCES `role` (`idROLE`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `user_picture`
--
ALTER TABLE `user_picture`
  ADD CONSTRAINT `fk_idPICTURE_USER1` FOREIGN KEY (`idPICTURE_USER`) REFERENCES `picture` (`id_picture`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_idUSER1` FOREIGN KEY (`idUSER`,`login`) REFERENCES `user` (`id`, `username`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
