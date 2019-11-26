-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 26 nov. 2019 à 01:54
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

INSERT INTO `picture` (`id_picture`, `USER_idUSER`, `addDate`, `AltPicture`, `Path`) VALUES
(1, 1, '2019-09-14 04:08:33', NULL, 'Le Path1'),
(2, 1, '2019-09-14 04:08:33', NULL, 'Le Path2'),
(3, 2, '2019-09-14 04:08:33', NULL, 'Le Path3');

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
(3, 'Rédacteur'),
(4, 'Modérateur'),
(5, 'Admin'),
(6, 'Super-Admin');

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

INSERT INTO `user` (`id`, `username`, `email`, `password`, `isActive`, `raison`, `role`, `asbl`, `firstName`, `lastName`, `birthday`, `sexGenre`, `created_date`, `updated_date`, `adPvStreet`, `adPvNum`, `adPvZip`, `adPvCity`, `adPvCountry`, `firm`, `tva`, `adProStreet`, `adProNum`, `adProZip`, `adProCity`, `adProCountry`, `contPhonePro`, `contPhonePv`, `contPhoneGsm`, `contFacebook`, `contWebsite`, `shortDesc`, `longDesc`, `createdAt`, `updatedAt`, `pachMedia`) VALUES
(1, 'GsweeT-WebDesign', 'gsweet1981@live.be', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 6, 'Full Stack', 'Hess', 'Gregory', '1981-09-21', 'Homme', '2019-09-14 04:08:33', '2019-11-14 21:54:13', 'Grand Route', '174', 1620, 'Drogenbos', 'be', 'Gsweet WebDesign', '', 'grand route', '174', 1620, 'Drogenbos', 'be', '', '0496204538', '0496204538', 'http://www.facebook.com/gsweet1981', 'http://www.hess-gregory.be', 'cvbc', 'vbcbnvb', NULL, NULL, ''),
(2, 'Maité Refuge', 'sddfhkjd@sdkfds.de', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 2, 'President', 'vanes', 'dkjhdjd', '1989-07-22', 'Femme', '2019-09-14 04:08:33', '2019-11-06 23:14:10', 'grand route', '80', 1620, 'Drogenbos', 'be', 'Un Ami Pour La Vie', '', 'Rue des Airelles', '80', 4100, 'Seraing', 'be', '', '', '0494599104', 'https://www.facebook.com/maite.dbl.56', 'https://www.unamipourlavie.be', '', '', NULL, NULL, ''),
(3, 'nstrangeway0', 'nstrangeway0@slideshare.net', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 1, NULL, 'Neysa', 'Strangeway', NULL, 'Female', '2019-11-07 00:06:42', '2019-11-06 23:11:12', 'Loomis', '8674', 6594, 'Momignies', 'Belgium', 'D\'Amore Inc', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/veritatisautaperiam.jpg?size=150x150&set=set1'),
(4, 'ejonsson1', 'ejonsson1@ifeng.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 2, NULL, 'Eolanda', 'Jonsson', NULL, 'Female', '2019-11-07 00:06:42', '2019-11-06 23:11:31', 'Waubesa', '1', 6834, 'Bouillon', 'Belgium', 'McDermott LLC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/sapientetemporeaut.bmp?size=150x150&set=set1'),
(5, 'foxberry2', 'foxberry2@reddit.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 3, NULL, 'Frederica', 'Oxberry', NULL, 'Female', '2019-11-07 00:06:42', '2019-11-06 23:11:24', 'Vernon', '3877', 6834, 'Bouillon', 'Belgium', 'Ankunding LLC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/quianesciuntnecessitatibus.jpg?size=150x150&set=set1'),
(6, 'hhowland3', 'hhowland3@i2i.jp', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 4, NULL, 'Holmes', 'Howland', NULL, 'Male', '2019-11-07 00:06:42', '2019-11-06 23:11:19', 'Butternut', '67050', 5100, 'Namur', 'Belgium', 'Reinger Group', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/fugasednon.jpg?size=150x150&set=set1'),
(7, 'rgossage4', 'rgossage4@wiley.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 5, NULL, 'Roana', 'Gossage', NULL, 'Female', '2019-11-07 00:06:42', NULL, 'Cardinal', '3', 6594, 'Momignies', 'Belgium', 'Schuster, Gutkowski and Heaney', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/eumdolorenim.bmp?size=150x150&set=set1'),
(8, 'atebbs5', 'atebbs5@ameblo.jp', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 6, NULL, 'Aguste', 'Tebbs', NULL, 'Male', '2019-11-07 00:06:42', NULL, 'Roxbury', '29988', 1170, 'Bruxelles', 'Belgium', 'Hyatt-Dicki', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/atquefacilisquia.jpg?size=150x150&set=set1'),
(60, 'awanell6', 'awanell6@fema.gov', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 4, NULL, 'Adel', 'Wanell', NULL, 'Female', '2019-11-07 00:10:49', '2019-11-06 23:13:33', 'Fairview', '920', 5100, 'Namur', 'Belgium', 'Collier LLC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/noncupiditateeaque.bmp?size=150x150&set=set1'),
(61, 'dlebel7', 'dlebel7@gravatar.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 3, NULL, 'Di', 'Lebel', NULL, 'Female', '2019-11-07 00:10:49', NULL, 'Victoria', '49383', 7536, 'Tournai', 'Belgium', 'Nitzsche, Mohr and Johns', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/temporadoloribusvoluptatem.jpg?size=150x150&set=set1'),
(62, 'obellord8', 'obellord8@tumblr.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 3, NULL, 'Olenolin', 'Bellord', NULL, 'Male', '2019-11-07 00:10:49', '2019-11-06 23:13:24', 'Butternut', '79073', 6042, 'Charleroi', 'Belgium', 'Kassulke, Schultz and Beahan', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/inventoreaconsequatur.bmp?size=150x150&set=set1'),
(63, 'shuglin9', 'shuglin9@lulu.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 4, NULL, 'Sorcha', 'Huglin', NULL, 'Female', '2019-11-07 00:10:49', '2019-11-06 23:13:17', 'Nancy', '06166', 1170, 'Bruxelles', 'Belgium', 'Homenick Group', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/veldignissimosdolorum.png?size=150x150&set=set1'),
(64, 'kcreffeilda', 'kcreffeilda@illinois.edu', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 5, NULL, 'Katharine', 'Creffeild', NULL, 'Female', '2019-11-07 00:10:49', '2019-11-06 23:13:04', 'Monument', '0', 1050, 'Bruxelles', 'Belgium', 'Hermiston, Lindgren and Rutherford', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/dignissimosexaperiam.bmp?size=150x150&set=set1'),
(65, 'yestevezb', 'yestevezb@theguardian.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 6, NULL, 'Yancey', 'Estevez', NULL, 'Male', '2019-11-07 00:10:49', NULL, 'Novick', '5186', 1170, 'Bruxelles', 'Belgium', 'Hilpert-Rodriguez', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/quisquamutad.bmp?size=150x150&set=set1'),
(66, 'dmouanc', 'dmouanc@newsvine.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 3, NULL, 'Dominick', 'Mouan', NULL, 'Male', '2019-11-07 00:10:49', '2019-11-06 23:12:54', 'Spenser', '2689', 7604, 'Péruwelz', 'Belgium', 'Tillman, Hickle and Jaskolski', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/atqueverocommodi.jpg?size=150x150&set=set1'),
(67, 'jcornessd', 'jcornessd@army.mil', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 2, NULL, 'Jillana', 'Corness', NULL, 'Female', '2019-11-07 00:10:49', NULL, 'Spenser', '46', 7823, 'Ath', 'Belgium', 'Bergstrom-Larson', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/etullamquo.png?size=150x150&set=set1'),
(68, 'sbramblee', 'sbramblee@joomla.org', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 3, NULL, 'Sherman', 'Bramble', NULL, 'Male', '2019-11-07 00:10:49', NULL, 'Luster', '3220', 5100, 'Namur', 'Belgium', 'Fisher LLC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/estlaudantiumnihil.jpg?size=150x150&set=set1'),
(69, 'bspiersf', 'bspiersf@youku.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 5, NULL, 'Blake', 'Spiers', NULL, 'Male', '2019-11-07 00:10:49', NULL, 'Northwestern', '07', 7536, 'Tournai', 'Belgium', 'Walter LLC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/voluptatibusquiitaque.bmp?size=150x150&set=set1'),
(70, 'masgodbyg', 'masgodbyg@hubpages.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 6, NULL, 'Marice', 'Asgodby', NULL, 'Female', '2019-11-07 00:10:49', '2019-11-06 23:12:19', 'South', '26449', 6042, 'Charleroi', 'Belgium', 'Bednar LLC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/nisiculpasint.png?size=150x150&set=set1'),
(71, 'tmacquisth', 'tmacquisth@scientificamerican.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 4, NULL, 'Thom', 'MacQuist', NULL, 'Male', '2019-11-07 00:10:49', NULL, 'Old Gate', '0529', 1050, 'Bruxelles', 'Belgium', 'O\'Conner and Sons', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/teneturdoloresplaceat.jpg?size=150x150&set=set1'),
(72, 'ckurteni', 'ckurteni@friendfeed.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 3, NULL, 'Conway', 'Kurten', NULL, 'Male', '2019-11-07 00:10:49', '2019-11-06 23:12:15', 'Longview', '24', 6594, 'Momignies', 'Belgium', 'Smitham, Reinger and Dickens', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/ullamconsequaturoccaecati.jpg?size=150x150&set=set1'),
(73, 'adustj', 'adustj@drupal.org', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 4, NULL, 'Axel', 'Dust', NULL, 'Male', '2019-11-07 00:10:49', NULL, 'Ridgeview', '3657', 5100, 'Namur', 'Belgium', 'Powlowski, Daniel and Greenholt', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/utsaepeveritatis.png?size=150x150&set=set1'),
(74, 'bwhanstallk', 'bwhanstallk@wikimedia.org', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 5, NULL, 'Bellanca', 'Whanstall', NULL, 'Female', '2019-11-07 00:10:49', '2019-11-06 23:12:08', 'Rockefeller', '7783', 1050, 'Bruxelles', 'Belgium', 'O\'Hara, Lebsack and Toy', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/quaslaudantiumut.png?size=150x150&set=set1'),
(75, 'ydeaconsonl', 'ydeaconsonl@wisc.edu', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 4, NULL, 'Yankee', 'Deaconson', NULL, 'Male', '2019-11-07 00:10:49', NULL, 'Maple Wood', '2293', 9404, 'Ninove', 'Belgium', 'Kuvalis-Donnelly', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/molestiaesedet.bmp?size=150x150&set=set1'),
(76, 'gblowm', 'gblowm@macromedia.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 1, '', 5, NULL, 'Giacinta', 'Blow', NULL, 'Female', '2019-11-07 00:10:49', '2019-11-06 23:12:04', 'Grayhawk', '351', 7604, 'Péruwelz', 'Belgium', 'Murray-Lind', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/voluptasquaedebitis.bmp?size=150x150&set=set1'),
(77, 'ckliman', 'ckliman@ibm.com', '$2a$08$tkR/tl3G/y0Wd34Gi8Hk3O6HwdF0kdmOk.nD.n96HwPEPpxG4Vq8u', 0, '', 6, NULL, 'Catherina', 'Klima', NULL, 'Female', '2019-11-07 00:10:49', NULL, 'Hudson', '83', 7604, 'Péruwelz', 'Belgium', 'Parisian-Gottlieb', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://robohash.org/possimussedvel.png?size=150x150&set=set1'),
(105, 'dhfjksdfjk', 'dkjhfds@lsjdkjf.ss', '$2a$08$/NNnbubNA1Ct6cvQAAJ8xer.eM0IhqMendTj.70Vg8R/l7q/IkVCa', 0, '', 1, NULL, 'gregogr', 'dhjskd', NULL, NULL, '2019-11-08 22:04:54', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Déchargement des données de la table `user_picture`
--

INSERT INTO `user_picture` (`idUSER`, `login`, `table1_id`, `table1_id1`, `idPICTURE_USER`, `mediaPath`) VALUES
(1, 'GsweeT-WebDesign', 1, 1, 1, '1.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
