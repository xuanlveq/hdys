/*
Navicat MySQL Data Transfer

Source Server         : xuanlveq
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : hdys_2017

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-10 17:42:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for productlist
-- ----------------------------
DROP TABLE IF EXISTS `productlist`;
CREATE TABLE `productlist` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `productname` varchar(500) NOT NULL,
  `url` varchar(300) NOT NULL,
  `newprice` varchar(60) NOT NULL,
  `oldprice` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of productlist
-- ----------------------------
INSERT INTO `productlist` VALUES ('1', ' Nanaday/娜娜日记娜娜日记夏装新款印花显瘦韩版牛仔短裤NI6132蓉', '../img/products/nana1', '281.00', '645');
INSERT INTO `productlist` VALUES ('2', ' 娜娜日记2017夏装新款女装韩版显瘦少女学院时尚套装NI6101蓉0331', '../img/products/nana2', '288.00', '864');
INSERT INTO `productlist` VALUES ('3', ' 娜娜日记2017夏装新款女装宽松两件套裙子套装女短袖NM6553嫤0330', '../img/products/nana3', '308.00', '924');
INSERT INTO `productlist` VALUES ('4', ' 娜娜日记2017夏装新款女装蓝色口袋系带背带裤短裤女NK6535冉0331', '../img/products/nana4', '248.00', '744');
INSERT INTO `productlist` VALUES ('5', ' 娜娜日记2017夏装新款女装抽绳直筒短裤休闲裤少女NP6616媄0331', '../img/products/nana5', '128.00', '384');
INSERT INTO `productlist` VALUES ('6', ' 娜娜日记2017夏装新款女装蓝色条纹蝴蝶结系带显瘦韩版连衣裙蓉', '../img/products/nana6', '268.00', '804');
INSERT INTO `productlist` VALUES ('7', ' 娜娜日记2017夏装新款女装学生宽松露肩连衣裙女学院NT6015嫤0330', '../img/products/nana7', '288.00', '864');
INSERT INTO `productlist` VALUES ('8', ' 娜娜日记2017夏装新款女装藏蓝色背带裤休闲裤五分裤NL6667嬛0330', '../img/products/nana8', '278.00', '834');
INSERT INTO `productlist` VALUES ('9', ' 娜娜日记2017夏装新款女装白色高腰A字裙半身裙短裙NL7005嬛0330', '../img/products/nana9', '218.00', '654');
INSERT INTO `productlist` VALUES ('10', ' 娜娜日记2017夏装新款女装蓝色高腰牛仔裙半身裙中裙NL7158嬛0330', '../img/products/nana10', '218.00', '654');
INSERT INTO `productlist` VALUES ('11', ' 娜娜日记2017夏装新款女装白色高腰小清新连衣裙短裙NL6796嬛0330', '../img/products/nana11', '278.00', '834');
INSERT INTO `productlist` VALUES ('12', ' 娜娜日记2017夏装新款女装蓝色破洞短裤牛仔裤热裤NL6653嬛0330', '../img/products/nana12', '188.00', '564');
INSERT INTO `productlist` VALUES ('13', ' 娜娜日记2017夏装新款女装宽松蓝色背带裤牛仔裤短裤女夏NU栩0330', '../img/products/nana13', '268.00', '804');
INSERT INTO `productlist` VALUES ('14', ' 娜娜日记2017夏季新款女装红色破洞宽松显瘦牛仔裤短裤女夏栩0330', '../img/products/nana14', '238.00', '714');
INSERT INTO `productlist` VALUES ('15', ' 娜娜日记2017夏装新款女装粉色格子百褶半身裙短裙女NP6572媄0330', '../img/products/nana15', '248.00', '744');
INSERT INTO `productlist` VALUES ('16', ' 娜娜日记2017夏装新款女装少女牛仔裙毛边短裙半身裙NP6799媄0330', '../img/products/nana16', '218.00', '654');
SET FOREIGN_KEY_CHECKS=1;
