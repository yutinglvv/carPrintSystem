-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `history`
--

DROP TABLE IF EXISTS `history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history` (
  `userid` int(5) NOT NULL COMMENT '操作人员id',
  `deal_time` datetime NOT NULL COMMENT '操作时间',
  `history_id` int(200) NOT NULL AUTO_INCREMENT,
  `history_content` varchar(50) NOT NULL COMMENT '操作内容',
  PRIMARY KEY (`history_id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history`
--

LOCK TABLES `history` WRITE;
/*!40000 ALTER TABLE `history` DISABLE KEYS */;
INSERT INTO `history` VALUES (12345,'2019-12-06 17:30:05',1,'修改颜色'),(12345,'2019-12-06 23:40:48',2,'删除颜色'),(12345,'2019-12-07 10:03:33',3,'删除颜色'),(12345,'2019-12-07 10:05:34',4,'删除颜色'),(12345,'2019-12-07 10:05:37',5,'删除颜色'),(12345,'2019-12-07 10:05:41',6,'删除颜色'),(12345,'2019-12-07 10:05:53',7,'删除颜色'),(12345,'2019-12-07 10:06:00',8,'删除颜色'),(12345,'2019-12-07 10:06:05',9,'删除颜色'),(12345,'2019-12-07 10:07:03',10,'删除颜色'),(12345,'2019-12-07 10:07:08',11,'删除颜色'),(12345,'2019-12-07 10:07:12',12,'删除颜色'),(12345,'2019-12-07 10:09:02',13,'新增颜色'),(12345,'2019-12-07 11:14:09',14,'添加生产线'),(12345,'2019-12-07 11:15:05',15,'添加生产线'),(12345,'2019-12-07 11:16:52',16,'添加生产线'),(12345,'2019-12-07 11:17:54',17,'修改生产线'),(12345,'2019-12-07 11:19:43',18,'修改生产线'),(12345,'2019-12-07 11:19:58',19,'删除生产线'),(12345,'2019-12-07 11:22:10',20,'修改生产线'),(12345,'2019-12-07 11:22:24',21,'修改生产线'),(12345,'2019-12-07 11:24:44',22,'修改生产线'),(12345,'2019-12-07 11:24:52',23,'修改生产线'),(12345,'2019-12-07 11:24:57',24,'删除生产线'),(12345,'2019-12-07 11:29:37',25,'修改生产线'),(12345,'2019-12-07 11:30:30',26,'修改生产线'),(12345,'2019-12-07 11:47:10',27,'修改发动机'),(12345,'2019-12-07 11:47:34',28,'删除发动机'),(12345,'2019-12-07 11:47:38',29,'删除发动机'),(12345,'2019-12-07 11:47:53',30,'删除发动机'),(12345,'2019-12-07 11:48:10',31,'新增发动机'),(12345,'2019-12-07 12:12:27',32,'添加生产线'),(12345,'2019-12-07 12:12:40',33,'删除生产线'),(12345,'2019-12-07 12:12:44',34,'删除生产线'),(12345,'2019-12-07 12:12:48',35,'删除生产线'),(12345,'2019-12-07 12:12:50',36,'删除生产线'),(12345,'2019-12-07 12:12:53',37,'删除生产线'),(12345,'2019-12-07 12:12:55',38,'删除生产线'),(12345,'2019-12-07 12:12:57',39,'删除生产线'),(12345,'2019-12-07 12:16:30',40,'添加生产线'),(12345,'2019-12-07 12:36:53',41,'修改生产线'),(12345,'2019-12-07 12:38:38',42,'修改生产线'),(12345,'2019-12-07 12:40:48',43,'修改生产线'),(12345,'2019-12-07 12:40:59',44,'修改生产线'),(12345,'2019-12-07 13:10:43',45,'修改颜色');
/*!40000 ALTER TABLE `history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-07 13:49:05
