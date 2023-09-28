-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: project_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anime`
--

DROP TABLE IF EXISTS `anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anime` (
  `anime_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `synopsis` varchar(500) DEFAULT NULL,
  `episode_count` int DEFAULT NULL,
  `score` decimal(3,2) DEFAULT NULL,
  `type` varchar(6) DEFAULT NULL,
  `aired_from` date DEFAULT NULL,
  `aired_till` date DEFAULT NULL,
  `imgurl` varchar(2083) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`anime_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anime`
--

LOCK TABLES `anime` WRITE;
/*!40000 ALTER TABLE `anime` DISABLE KEYS */;
INSERT INTO `anime` VALUES (1,'Attack on Titan','Several hundred years ago, humans were nearly exterminated by giants. Titans, which are several stories tall, have brought humanity to the brink of extinction. The survivors live in a city surrounded by three concentric walls, protecting them from the Titans.',75,8.90,'TV','2013-04-07','2013-09-28','https://cdn.myanimelist.net/images/anime/10/47347.jpg','Finished'),(2,'One Piece','Monkey D. Luffy sets out to become the King of the Pirates. Along his journey, he recruits a diverse crew of pirates and battles powerful enemies in search of the ultimate treasure, the One Piece.',1000,9.75,'TV','1999-10-20',NULL,'https://cdn.myanimelist.net/images/anime/6/73245.jpg','Ongoing'),(3,'Naruto','Naruto Uzumaki, a mischievous adolescent ninja, dreams of becoming the Hokage?the village leader and strongest ninja. Join Naruto and his friends on their journey to protect the village and achieve their dreams.',220,9.90,'TV','2002-10-03','2007-02-08','https://cdn.myanimelist.net/images/anime/13/17405.jpg','Finished'),(4,'Death Note','Light Yagami discovers a mysterious notebook that grants him the power to kill anyone whose name he writes in it. With this newfound power, Light sets out to cleanse the world of criminals, but his actions attract the attention of a brilliant detective known as L.',37,8.60,'TV','2006-10-04','2007-06-27','https://cdn.myanimelist.net/images/anime/9/9453.jpg','Finished'),(5,'My Hero Academia','In a world where most humans have developed superpowers called Quirks, Izuku Midoriya dreams of becoming a Hero despite being born without a Quirk. Follow Izuku and his classmates as they learn to harness their powers and protect the world from villains.',100,7.40,'TV','2016-04-03',NULL,'https://cdn.myanimelist.net/images/anime/10/78745.jpg','Ongoing'),(6,'Fairy Tail','In the land of Fiore, wizards are a common sight and take on various jobs. Natsu Dragneel and his friends form a wizard guild called Fairy Tail, taking on dangerous quests and facing powerful foes.',300,0.00,'TV','2009-10-12','2019-09-29','https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/18638d44e180fd1b51870106b88e46e4.jpe','Finished'),(7,'Fullmetal Alchemist: Brotherhood ','Two brothers, Edward and Alphonse Elric, use alchemy to try to bring their mother back to life. However, their attempt goes horribly wrong, resulting in Edward losing his arm and leg, and Alphonse losing his entire body. They embark on a journey to find the Philosopher\'s Stone to restore themselves.',64,4.15,'TV','2009-04-05','2010-07-04','https://cdn.myanimelist.net/images/anime/1223/96541.jpg','Finished');
/*!40000 ALTER TABLE `anime` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-28 15:51:35
