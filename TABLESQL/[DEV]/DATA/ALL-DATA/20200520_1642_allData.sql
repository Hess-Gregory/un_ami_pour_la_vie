-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3308
-- Généré le : mer. 20 mai 2020 à 14:40
-- Version du serveur :  8.0.20
-- Version de PHP : 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `un_ami_pour_la_vie`
--

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id_category`, `USER_idUSER`, `isOnline`, `dateOnline`, `classDiv`, `idDiv`, `dateCreation`) VALUES
(1, 1, 1, NULL, NULL, NULL, '2019-09-14 04:08:33'),
(2, 2, 0, NULL, NULL, NULL, '2019-09-14 04:08:33');

--
-- Déchargement des données de la table `categorylang`
--

INSERT INTO `categorylang` (`id_categorylang`, `tags`, `id_category`, `CHOISELANG_idCHOISELANG`, `catSlug`, `title`, `description`, `dateCreation`) VALUES
(1, 'Index, page, website', 1, 1, NULL, 'INDEX', 'Page accueil', '2019-09-14 04:08:33'),
(2, 'Index, page, website', 1, 2, NULL, 'INDEX', 'Home page', '2019-09-14 04:08:33'),
(3, 'Info, actualité, presse', 2, 1, 'news', 'NEWS', 'Actualités', '2019-09-14 04:08:33'),
(4, 'Info, actuality, press', 2, 2, 'news', 'NEWS', 'News', '2019-09-14 04:08:33');

--
-- Déchargement des données de la table `choiselang`
--

INSERT INTO `choiselang` (`idCHOISELANG`, `nameLang`) VALUES
(1, 'Français'),
(2, 'Neerlandais'),
(3, 'Anglais');

--
-- Déchargement des données de la table `lang`
--

INSERT INTO `lang` (`id_lang`, `id_post`, `CATEGORYLANG_id_categorylang`, `CHOISELANG_idCHOISELANG`, `title`, `subTitle`, `content`, `dateCreation`) VALUES
(1, 1, 1, 1, 'Bienvenu sur l\'index', NULL, 'LaLa Fr', '2019-09-14 04:08:33'),
(2, 1, 1, 2, 'Welkom in pagina index', NULL, 'LaLa NL', '2019-09-14 04:08:33'),
(3, 2, 2, 1, 'Article 1', NULL, 'lorem Fr', '2019-09-14 04:08:33'),
(4, 2, 2, 2, 'Artikle 1', NULL, 'Lorem Nl', '2019-09-14 04:08:33');

--
-- Déchargement des données de la table `lang_media`
--

INSERT INTO `lang_media` (`LANG_id_lang`, `MEDIA_idMEDIA`) VALUES
(1, 3),
(3, 3),
(2, 4),
(4, 4);

--
-- Déchargement des données de la table `media`
--

INSERT INTO `media` (`idMEDIA`, `mediaPath`, `renameFile`, `USER_idUSER`, `typeFIle`, `dateCreation`, `format`, `altAttributes`, `description`, `tags`) VALUES
(1, 'Img01.jpg', 'Image-01', 1, NULL, '2019-09-14 04:08:33', NULL, NULL, NULL, 'Image, chat, medore'),
(2, 'Img02.jpg', 'Image-02', 2, NULL, '2019-09-14 04:08:33', NULL, NULL, NULL, 'Image, chien, Loulou'),
(3, 'Img03.jpg', 'Image-03', 1, NULL, '2019-09-14 04:08:33', NULL, NULL, NULL, 'Image, chien, Lala'),
(4, 'Img04.jpg', 'Image-04', 2, NULL, '2019-09-14 04:08:33', NULL, NULL, NULL, 'Image, chat, Rofuse');

--
-- Déchargement des données de la table `media_has_slide`
--

INSERT INTO `media_has_slide` (`MEDIA_idMEDIA`, `SLIDE_idSLIDE`) VALUES
(1, 1),
(2, 2),
(3, 3);

--
-- Déchargement des données de la table `picture`
--

INSERT INTO `picture` (`id`, `id_user`, `name`, `description`, `url`, `active`, `created_date`, `updated_date`) VALUES
(121, 2, '789.png', NULL, 'http://localhost:4000/public/789.png', 0, '2020-01-16 18:01:50', '2020-01-18 00:59:47'),
(124, 2, '7894.png', NULL, 'http://localhost:4000/public/7894.png', 0, '2020-01-17 05:22:38', '2020-01-18 00:59:53'),
(125, 2, '7895.png', NULL, 'http://localhost:4000/public/7895.png', 1, '2020-01-17 05:22:38', '2020-01-18 00:59:53'),
(126, 1, 'téléchargement.png', NULL, 'http://localhost:4000/public/téléchargement.png', 0, '2020-01-17 14:26:03', '2020-01-18 01:39:09'),
(127, 2, '1.png', NULL, 'http://localhost:4000/public/1.png', 0, '2020-01-18 01:00:24', NULL),
(128, 2, '77.png', NULL, 'http://localhost:4000/public/77.png', 0, '2020-01-18 01:00:24', NULL),
(129, 2, '78.png', NULL, 'http://localhost:4000/public/78.png', 0, '2020-01-18 01:00:24', NULL),
(130, 1, '644.jpg', NULL, 'http://localhost:4000/public/644.jpg', 0, '2020-01-18 01:09:53', '2020-01-18 01:38:51'),
(131, 1, '745.png', NULL, 'http://localhost:4000/public/745.png', 0, '2020-01-18 01:09:53', '2020-01-18 01:39:04'),
(132, 1, '789.png', NULL, 'http://localhost:4000/public/789.png', 0, '2020-01-18 01:09:53', '2020-01-19 03:24:46'),
(133, 1, '1.png', NULL, 'http://localhost:4000/public/1.png', 0, '2020-01-18 04:57:42', '2020-01-19 03:24:54'),
(134, 1, '77.png', NULL, 'http://localhost:4000/public/77.png', 0, '2020-01-18 04:57:42', NULL),
(135, 1, '78.png', NULL, 'http://localhost:4000/public/78.png', 1, '2020-01-18 04:57:42', '2020-01-19 03:24:54'),
(136, 1, '644.jpg', NULL, 'http://localhost:4000/public/644.jpg', 0, '2020-01-18 04:57:42', NULL),
(137, 1, '745.png', NULL, 'http://localhost:4000/public/745.png', 0, '2020-01-18 04:57:42', NULL),
(138, 1, '789.png', NULL, 'http://localhost:4000/public/789.png', 0, '2020-01-18 04:57:42', NULL),
(139, 1, 'jkdkfhsd.jpg', NULL, 'http://localhost:4000/public/jkdkfhsd.jpg', 0, '2020-01-18 05:17:50', NULL),
(140, 1, 'kjgjh.jpg', NULL, 'http://localhost:4000/public/kjgjh.jpg', 0, '2020-01-18 05:17:50', NULL),
(141, 1, 'logo.png', NULL, 'http://localhost:4000/public/logo.png', 0, '2020-01-18 05:17:50', NULL),
(142, 1, 'nvg.jpg', NULL, 'http://localhost:4000/public/nvg.jpg', 0, '2020-01-18 05:17:50', NULL),
(143, 1, 'uffiugk.jpg', NULL, 'http://localhost:4000/public/uffiugk.jpg', 0, '2020-01-18 05:17:50', NULL),
(144, 1, 'uygiuhil.jpg', NULL, 'http://localhost:4000/public/uygiuhil.jpg', 0, '2020-01-18 05:17:50', NULL),
(145, 76, '445.png', NULL, 'http://localhost:4000/public/445.png', 0, '2020-01-20 11:39:17', NULL),
(146, 76, '644.jpg', NULL, 'http://localhost:4000/public/644.jpg', 1, '2020-01-20 11:39:17', '2020-01-20 11:39:37'),
(147, 69, '644.jpg', NULL, 'http://localhost:4000/public/644.jpg', 0, '2020-01-21 12:38:30', NULL),
(148, 155, 'kjgjh.jpg', NULL, 'http://localhost:4000/public/kjgjh.jpg', 1, '2020-01-21 15:06:14', '2020-01-21 15:36:34'),
(149, 155, 'logo3.png', NULL, 'http://localhost:4000/public/logo3.png', 0, '2020-01-21 15:07:57', NULL),
(150, 155, '78.png', NULL, 'http://localhost:4000/public/78.png', 0, '2020-01-21 15:10:47', NULL),
(151, 155, 'uygiuhil.jpg', NULL, 'http://localhost:4000undefineduygiuhil.jpg', 0, '2020-01-21 15:23:47', NULL),
(152, 155, 'jkdkfhsd.jpg', NULL, 'http://localhost:4000/./public/users//jkdkfhsd.jpg', 0, '2020-01-21 15:27:17', NULL),
(153, 155, 'jbkjnbl.jpg', NULL, 'http://localhost:4000./public/users/jbkjnbl.jpg', 0, '2020-01-21 15:28:28', NULL),
(154, 155, '445.png', NULL, 'http://localhost:4000/public/users/445.png', 0, '2020-01-21 15:35:52', NULL),
(155, 160, '82268397_118690759652096_823418408295989248_n.jpg', NULL, 'http://localhost:4000/public/users/82268397_118690759652096_823418408295989248_n.jpg', 1, '2020-01-24 06:59:51', '2020-01-24 06:59:58'),
(156, 160, 'photo-38.jpg', NULL, 'http://localhost:4000/public/users/photo-38.jpg', 0, '2020-01-24 15:26:33', NULL),
(157, 160, 'photo-39.jpg', NULL, 'http://localhost:4000/public/users/photo-39.jpg', 0, '2020-01-24 15:26:33', NULL),
(158, 160, 'photo-43.jpg', NULL, 'http://localhost:4000/public/users/photo-43.jpg', 0, '2020-01-24 15:26:33', NULL),
(159, 160, 'photo-28.jpg', NULL, 'http://localhost:4000/public/users/photo-28.jpg', 0, '2020-01-24 15:26:33', NULL),
(160, 156, 'img_1932.jpg', NULL, 'http://localhost:4000/public/users/img_1932.jpg', 1, '2020-01-24 21:09:17', '2020-01-24 21:09:24'),
(161, 2, 'sans-titre---3-gris21.png', NULL, 'http://localhost:4000/public/users/sans-titre---3-gris21.png', 0, '2020-01-28 20:33:35', NULL),
(162, 2, 'img_0180.jpg', NULL, 'http://localhost:4000/public/users/img_0180.jpg', 0, '2020-01-29 00:43:55', NULL),
(163, 2, 'photo-41.jpg', NULL, 'http://localhost:4000/public/users/photo-41.jpg', 0, '2020-01-29 00:43:55', NULL);

--
-- Déchargement des données de la table `post`
--

INSERT INTO `post` (`id_post`, `USER_idUSER`, `id_category`, `creatDate`, `dateOnline`, `isOnline`, `classDiv`, `IdDiv`) VALUES
(1, 1, 1, '2019-09-14 04:08:33', NULL, 0, NULL, NULL),
(2, 2, 2, '2019-09-14 04:08:33', NULL, 0, NULL, NULL);

--
-- Déchargement des données de la table `post_media`
--

INSERT INTO `post_media` (`MEDIA_idMEDIA`, `POST_id_post`) VALUES
(1, 1),
(2, 1),
(3, 2);

--
-- Déchargement des données de la table `role`
--

INSERT INTO `role` (`idROLE`, `roleName`) VALUES
(1, 'Visiteur'),
(2, 'Membre'),
(3, 'Vétérinaire'),
(4, 'Personnels '),
(5, 'Rédacteur'),
(6, 'Modérateur'),
(7, 'Admin'),
(8, 'Super-Admin'),
(9, 'WebMaster');

--
-- Déchargement des données de la table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20191027192106-create-new-user.js'),
('20191027192259-create-new-user-2.js'),
('20191027200229-create-users.js');

--
-- Déchargement des données de la table `slide`
--

INSERT INTO `slide` (`idSLIDE`, `order`, `title1`, `title2`, `isActif`) VALUES
(1, 2, NULL, NULL, NULL),
(2, 3, NULL, NULL, NULL),
(3, 1, NULL, NULL, NULL);

--
-- Déchargement des données de la table `slug`
--

INSERT INTO `slug` (`idSLUG`, `slugText`, `id_categorylang`, `id_lang`, `idMEDIA`) VALUES
(1, 'cat index fr', 1, NULL, NULL),
(2, 'ca index nl', 2, NULL, NULL),
(3, 'art1 fr', NULL, 1, NULL),
(4, 'art1 nl', NULL, 2, NULL),
(5, 'art2 fr', NULL, 3, NULL),
(6, 'art2 nl', NULL, 4, NULL),
(7, 'photo 1', NULL, NULL, 1);

--
-- Déchargement des données de la table `tag`
--

INSERT INTO `tag` (`tagId`, `tagText`, `idMEDIA`, `id_categorylang`, `id_lang`) VALUES
(1, 't2', NULL, 1, NULL),
(2, 't4', 4, NULL, NULL),
(3, 't5', NULL, 2, 4),
(4, 't6', 1, 2, 3),
(5, 't1', NULL, NULL, 3),
(6, 't3', NULL, NULL, NULL);

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `isActive`, `raison`, `role`, `asbl`, `firstName`, `lastName`, `birthday`, `sexGenre`, `created_date`, `updated_date`, `adressbook`, `adPvStreet`, `adPvNum`, `adPvZip`, `adPvCity`, `adPvCountry`, `adPvLat`, `adPvLong`, `firm`, `tva`, `adProStreet`, `adProNum`, `adProZip`, `adProCity`, `adProCountry`, `adProLat`, `adProLong`, `contPhonePro`, `contPhonePv`, `contPhoneGsm`, `contFacebook`, `contWebsite`, `shortDesc`, `longDesc`, `pachMedia`, `newRegister`) VALUES
(1, 'Greg_FullStack', 'test@test.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 9, 'Full Stack developpeur', 'Hess', 'Gregory', '1981-09-21', 'Homme', '2019-09-14 04:08:33', '2020-05-20 14:40:26', 1, 'Grand Route', '174', 1620, 'Drogenbos', 'be', '0.00000000', '0.00000000', 'FullHestack', '', 'grand route', '174', 1620, 'Drogenbos', 'be', NULL, NULL, '', '0496204538', '0496204538', 'http://www.facebook.com/gsweet1981', 'http://www.hess-gregory.be', 'cvbc', 'vbcbnvb', 'https://avatars0.githubusercontent.com/u/54554193?s=460&v=4', 0),
(2, 'Maité_refuge', 'm.dedobbeleer@live.be', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 8, NULL, 'Maïté', 'Dedobbeleer', '1963-07-15', 'Homme', '2019-09-14 04:08:33', '2020-05-20 13:47:46', 0, 'Rue des Airelles', '80', 4100, 'Seraing', 'Belgique', '0.00000000', '0.00000000', 'Un Ami Pour La Vie', NULL, 'Rue des Airelles', '80', 4100, 'Seraing', 'Belgique', '50.59607000', '5.52233800', NULL, NULL, '0494599104', NULL, NULL, NULL, 'Je test\nIci', 'https://scontent-bru2-1.xx.fbcdn.net/v/t31.0-8/p960x960/20786131_105237040203410_3176292095929270762_o.jpg?_nc_cat=102&_nc_oc=AQmMuJKspqm0ZX0v9_4Q84Oa6pww84DmVDISXplrBC6z70ndId2lP00x5-R5P6u0omB47_KWnfi7Fvn0_W_bY9mH&_nc_ht=scontent-bru2-1.xx&_nc_tp=1&oh=bb673629c4c1ad6fdc5f21280d562dfb&oe=5ED91304', 0),
(69, 'bspiersf', 'bspiersf@youku.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 4, NULL, 'Blake', 'Spiers', NULL, 'Male', '2019-11-07 00:10:49', '2020-01-28 20:35:36', 1, 'Northwestern', '07', 7536, 'Tournai', 'Belgium', '0.00000000', '0.00000000', 'Walter LLC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/voluptatibusquiitaque.bmp?size=150x150&set=set1', 0),
(76, 'gblowm', 'gblowm@macromedia.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 4, NULL, 'Giacinta', 'Blow', NULL, 'Female', '2019-11-07 00:10:49', '2020-01-28 20:34:11', 0, 'Grayhawk', '351', 7604, 'Péruwelz', 'Belgium', '0.00000000', '0.00000000', 'Murray-Lind', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/voluptasquaedebitis.bmp?size=150x150&set=set1', 0),
(155, 'sdgdfgdfg', 'dfdffdgd@fdfgdf.dfgd', '$2a$08$KJjaMh/FmJk4p.ToEYIvy.OvpCagHIb2zwprZIIM0ruNr2a6zqhnW', 1, NULL, 7, NULL, 'fgfdgdf', 'fghyfhbn', '1983-07-13', 'Homme', '2020-01-03 20:15:22', '2020-01-20 11:37:37', 0, NULL, NULL, NULL, NULL, NULL, '0.00000000', '0.00000000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(156, 'Jean-rie', 'ejonsson2@ifeng.be', '$2a$08$onhjR2vKuErjTIft31QDS.5Vp9i0obFGc5twklvDFl3V1m7pKoGFm', 0, NULL, 6, NULL, 'Eolala', 'Ronsson', '2001-08-15', 'Femme', '2020-01-22 13:27:15', '2020-01-28 20:35:40', 0, 'Waubesa', '715', 6834, 'Bouillon', 'BE', '50.79261250', '4.30983290', 'McDermott LLC', NULL, NULL, NULL, NULL, NULL, 'BE', '51.00000000', '4.00000000', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(157, 'ccxxfff', 'cdfff@kdkd.dd', '$2a$08$NIYYN4RmkWr7PF6g5JleXu.E6H0yXIGixsiu8kGfaG9H/0enih4/S', 1, NULL, 2, NULL, 'ghfghfg', 'fghfghf', NULL, 'Homme', '2020-01-22 14:06:15', NULL, 1, NULL, '74', NULL, NULL, NULL, '50.85272760', '4.35596840', NULL, NULL, NULL, NULL, NULL, NULL, '', '50.72509470', '4.53108790', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(158, 'fghfghjg', 'hgjghghj@ggjhg.gh', '$2a$08$0edrSsvuFzX/EEpnNqtcUuhEVUcxiRzbYuvjqK4sQ2AG6zGjlJ9He', 1, NULL, 7, NULL, 'gffh', 'fgfhg', NULL, 'Homme', '2020-01-22 14:12:17', NULL, 1, NULL, NULL, NULL, NULL, 'BE', '50.81084350', '4.29125550', NULL, NULL, NULL, NULL, NULL, NULL, 'BE', '50.84879530', '4.34715130', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(159, 'dfgfgd', 'dfgdfgdf@dfsd.dsf', '$2a$08$r8rLmF05t7hmB/yhjjxGx.ChC8KVSyTpi8SLFO83szp.FX.RW8KkC', 1, NULL, 7, NULL, 'ddred', 'dfghfg', NULL, 'Homme', '2020-01-22 14:40:05', '2020-01-22 14:41:22', 1, 'Avenue des Arts', '56', 1000, 'Bruxelles', 'BE', '50.84101520', '4.36680790', NULL, NULL, 'Chaussée de Mons', '1432', 1070, 'Anderlecht', '', '50.81084350', '4.29125550', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(160, 'fgfgf', 'fdgdfdfgdf@dfssd.sd', '$2a$08$AZvh7Bp31qmRL/3d7T0SNOWeTOqWkbv51XuW8k/hCcUvw93aKInZi', 1, NULL, 6, NULL, 'sdfsddf', 'ezedscx', '2001-12-11', 'Homme', '2020-01-22 14:45:28', NULL, 1, 'Avenue Louise', '500', 1000, 'Bruxelles', 'BE', '50.81641580', '4.37232680', 'IKEA Anderlecht', NULL, 'Chaussée de Mons', '1432', 1070, 'Anderlecht', 'BE', '50.81084350', '4.29125550', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(161, 'gdsss', 'dfgddf@dfd.dfg', '$2a$08$SBFK.KEZPkzdcgQ5jS1wc.uUHhk4.zzzk/SaUy2Z8enFlJAaOzfd6', 1, NULL, 6, NULL, 'fgfggh', 'dfgd', NULL, 'Homme', '2020-01-22 14:50:54', '2020-01-23 23:35:24', 1, 'Rue de la Pêcherie', '174', 1180, 'Uccle', 'BE', '50.79284700', '4.35471050', 'IKEA Anderlecht', NULL, 'Chaussée de Mons', '1432', 1070, 'Anderlecht', 'BE', '50.81084350', '4.29125550', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0),
(163, 'fdfgdfg', 'dfgdfg@dssf.df', '$2a$08$agGcObg7K1Xt03/n0bSd1.bkwG77ff0jv8Nmz7.WPksYn.s1.TgFq', 1, NULL, 7, NULL, 'fgghfg', 'dfgdf', NULL, 'Femme', '2020-01-22 14:55:24', '2020-01-28 20:34:28', 1, 'Rue Bara', '175', 1070, 'Anderlecht', NULL, '50.83292080', '4.32751260', 'IKEA Anderlecht', NULL, 'Chaussée de Mons', '1432', 1070, 'Anderlecht', '', '50.81084350', '4.29125550', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Structure de la vue `adressbook`
--
DROP TABLE IF EXISTS `adressbook`;

DROP VIEW IF EXISTS `adressbook`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `adressbook`  AS  select `user`.`id` AS `id`,`user`.`firm` AS `firm`,`user`.`asbl` AS `asbl`,`user`.`lastName` AS `lastName`,`user`.`firstName` AS `firstName`,`user`.`contPhonePv` AS `contPhonePv`,`user`.`contPhoneGsm` AS `contPhoneGsm`,`user`.`contPhonePro` AS `contPhonePro`,`user`.`email` AS `email` from `user` where (`user`.`adressbook` = 1) ;

-- --------------------------------------------------------

--
-- Structure de la vue `listadmin`
--
DROP TABLE IF EXISTS `listadmin`;

DROP VIEW IF EXISTS `listadmin`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `listadmin`  AS  select `user`.`id` AS `id`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`username` AS `username`,`user`.`email` AS `email`,`role`.`roleName` AS `roleName` from (`user` left join `role` on((`user`.`role` = `role`.`idROLE`))) where ((`user`.`isActive` = 1) and (`user`.`role` >= 3)) order by `user`.`role` desc ;

-- --------------------------------------------------------

--
-- Structure de la vue `members`
--
DROP TABLE IF EXISTS `members`;

DROP VIEW IF EXISTS `members`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `members`  AS  select `user`.`id` AS `id`,`user`.`username` AS `username`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`email` AS `email`,`user`.`created_date` AS `created_date`,`user`.`newRegister` AS `newRegister`,`user`.`isActive` AS `isActive`,if((`user`.`isActive` = true),'Activé','Gelé') AS `status`,`role`.`idROLE` AS `idROLE`,`role`.`roleName` AS `roleName` from (`user` left join `role` on((`user`.`role` = `role`.`idROLE`))) ;

-- --------------------------------------------------------

--
-- Structure de la vue `userandrole`
--
DROP TABLE IF EXISTS `userandrole`;

DROP VIEW IF EXISTS `userandrole`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `userandrole`  AS  select `user`.`id` AS `id`,`user`.`username` AS `username`,`user`.`email` AS `email`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`isActive` AS `isActive`,`user`.`newRegister` AS `newRegister`,`user`.`created_date` AS `created_date`,`role`.`roleName` AS `roleName` from (`user` left join `role` on((`user`.`role` = `role`.`idROLE`))) ;

-- --------------------------------------------------------

--
-- Structure de la vue `usernotactive`
--
DROP TABLE IF EXISTS `usernotactive`;

DROP VIEW IF EXISTS `usernotactive`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `usernotactive`  AS  select `user`.`id` AS `id`,`user`.`username` AS `username`,`user`.`email` AS `email`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`isActive` AS `isActive`,`role`.`roleName` AS `roleName` from (`user` left join `role` on((`user`.`role` = `role`.`idROLE`))) where (`user`.`isActive` = 0) ;

-- --------------------------------------------------------

--
-- Structure de la vue `user_is_active`
--
DROP TABLE IF EXISTS `user_is_active`;

DROP VIEW IF EXISTS `user_is_active`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_is_active`  AS  select `user`.`id` AS `id`,`user`.`username` AS `username`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`email` AS `email`,`user`.`created_date` AS `created_date`,`user`.`newRegister` AS `newRegister`,`user`.`isActive` AS `isActive`,if((`user`.`isActive` = true),'Activé','Gelé') AS `status`,`role`.`idROLE` AS `idROLE`,`role`.`roleName` AS `roleName` from (`user` left join `role` on((`user`.`role` = `role`.`idROLE`))) where (`user`.`isActive` = 1) ;

-- --------------------------------------------------------

--
-- Structure de la vue `user_is_notactive`
--
DROP TABLE IF EXISTS `user_is_notactive`;

DROP VIEW IF EXISTS `user_is_notactive`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_is_notactive`  AS  select `user`.`id` AS `id`,`user`.`username` AS `username`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`email` AS `email`,`user`.`created_date` AS `created_date`,`user`.`newRegister` AS `newRegister`,`user`.`isActive` AS `isActive`,if((`user`.`isActive` = true),'Activé','Gelé') AS `status`,`role`.`idROLE` AS `idROLE`,`role`.`roleName` AS `roleName` from (`user` left join `role` on((`user`.`role` = `role`.`idROLE`))) where (`user`.`isActive` = 0) ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
