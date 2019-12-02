-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 02 déc. 2019 à 04:06
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
  `adressbook` tinyint(1) DEFAULT '0',
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
  `pachMedia` varchar(255) DEFAULT NULL,
  `newRegister` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`,`username`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_USER_ROLE1_idx` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `fk_USER_ROLE1` FOREIGN KEY (`role`) REFERENCES `role` (`idROLE`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
