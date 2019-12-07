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
-- Table structure for table `produce_line`
--

DROP TABLE IF EXISTS `produce_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produce_line` (
  `produce_id` varchar(10) DEFAULT NULL COMMENT '生产线编号',
  `produce_type` varchar(15) NOT NULL COMMENT '生产线类型',
  `produce_name` varchar(8) NOT NULL COMMENT '生产线名称',
  `produce_no` int(50) NOT NULL COMMENT '生产线班次',
  `speed` varchar(5) NOT NULL COMMENT '线速',
  `efficiency` float NOT NULL COMMENT '运行效率',
  `destination_code` varchar(10) NOT NULL COMMENT '流向代码',
  `short_name` varchar(10) NOT NULL COMMENT '编号简称',
  `car_id` varchar(3) DEFAULT NULL COMMENT '白车身码（大写）',
  `color_id` int(2) DEFAULT NULL COMMENT '颜色码',
  `produce_group` int(11) DEFAULT NULL,
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`prod_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produce_line`
--

LOCK TABLES `produce_line` WRITE;
/*!40000 ALTER TABLE `produce_line` DISABLE KEYS */;
INSERT INTO `produce_line` VALUES ('EBD-A','车身线','东部车身A',3,'120',0.95,'a','EA','NAB',0,1,1),('EBD-B','车身线','东部车身B',2,'210',0.85,'b','EB','NAB',0,2,2);
/*!40000 ALTER TABLE `produce_line` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-07 13:49:06
