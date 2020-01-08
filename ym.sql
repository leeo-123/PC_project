SET NAMES UTF8;
DROP DATABASE IF EXISTS ym;
CREATE DATABASE ym CHARSET=UTF8;
USE ym;


/**用户信息**/
CREATE TABLE ym_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32)
);

/**用户信息**/
INSERT INTO ym_user VALUES
(NULL, 'dingding', '123456'),
(NULL, 'dangdang', '123456'),
(NULL, 'doudou', '123456'),
(NULL, 'yaya', '123456');

/**创建首页商品表**/
CREATE TABLE `ym_index_product` (
  `lid` int(11) NOT NULL,
  `title` varchar(64) DEFAULT NULL,
  `etitle` varchar(64) DEFAULT NULL,
  `details` varchar(128) DEFAULT NULL,
  `pic1` varchar(128) DEFAULT NULL,
  `pic2` varchar(128) DEFAULT NULL,
  `pic3` varchar(128) DEFAULT NULL,
  `price1` decimal(10,2) DEFAULT NULL,
  `price2` decimal(10,2) DEFAULT NULL,
  `href` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 插入之前先把表清空（truncate） `xz_index_product`
--

TRUNCATE TABLE `ym_index_product`;
--
-- 转存表中的数据 `xz_index_product`
--

INSERT INTO `ym_index_product` (`lid`, `title`,`etitle`, `details`, `pic1`,`pic2`,`pic3`, `price1`,`price2`, `href`) VALUES
(1, '雅诗兰黛', 'ESTEE LAUDER' ,'新款蓝光眼霜和肌透精华套装' , 'img/details/p1_1.png', 'img/details/p1_2.png', 'img/details/p1_3.png', '126.00','880.74', '/product_details.html?lid=1'),
(2, '资生堂', 'SHISEIDO' ,'资生堂安耐防晒 SPF50+   60ml' , 'img/details/p2_1.png', 'img/details/p2_2.png', 'img/details/p2_3.png', '26.88','187.89', '/product_details.html?lid=2'),
(3, '雅诗兰黛', 'ESTEE LAUDER' ,'雅诗兰黛 特润修护及透精华露' , 'img/details/p3_1.png', 'img/details/p3_2.png', 'img/details/p3_3.png', '78.00','545.22', '/product_details.html?lid=3'),
(4, '海蓝之谜', 'LA MER' ,'海蓝之谜经典精华面霜30ml' , 'img/details/p4_1.png', 'img/details/p4_2.png', 'img/details/p4_3.png', '130.00','908.70', '/product_details.html?lid=4'),
(5, 'NARS', 'NARS' ,'NARS遮瑕膏CHANTILL' , 'img/details/p5_1.png', 'img/details/p5_2.png', 'img/details/p5_3.png', '17.18','120.09', '/product_details.html?lid=5'),
(6, '乔治阿玛尼', 'GIORGIO ARMANI' ,'阿玛尼 红管 哑光唇釉' , 'img/details/p6_1.png', 'img/details/p6_2.png', 'img/details/p6_3.png', '26.16','154.90', '/product_details.html?lid=6'),
(7, '波比波郎', 'BOBBI BROWN' ,'波比波郎 控油净澈精华' , 'img/details/p7_1.png', 'img/details/p7_2.png', 'img/details/p7_3.png', '31.19','218.02', '/product_details.html?lid=7'),
(8, 'Refa', 'Refa' ,'REFA 脸部按摩仪 经典版' , 'img/details/p8_1.png', 'img/details/p8_2.png', 'img/details/p8_3.png', '185.17','1294.34', '/product_details.html?lid=8'),
(9, '迪奥', 'DIOR' ,'迪奥烈焰蓝金唇膏' , 'img/details/p9_1.png', 'img/details/p9_2.png', 'img/details/p9_3.png', '22.01','153.85', '/product_details.html?lid=9'),
(10, '海蓝之谜', 'LA MER' ,'海蓝之谜护手霜' , 'img/details/p10_1.png', 'img/details/p10_2.png', 'img/details/p10_3.png', '57.21','399.90', '/product_details.html?lid=10'),
(11, '纪梵希', 'GIVENCHY' ,'纪梵希 小羊皮口红' , 'img/details/p11_1.png', 'img/details/p11_2.png', 'img/details/p11_3.png', '23.17','161.96', '/product_details.html?lid=11'),
(12, '科颜氏', 'KIEHL S' ,'科颜氏维生素C紧肤精华乳' , 'img/details/p12_1.png', 'img/details/p12_2.png', 'img/details/p12_3.png', '70.65','493.84', '/product_details.html?lid=12'),
(13, '雅诗兰黛', 'ESTEE LAUDER' ,'新款蓝光眼霜和肌透精华套装' , 'img/details/p1_1.png', 'img/details/p1_2.png', 'img/details/p1_3.png', '126.00','880.74', '/product_details.html?lid=1'),
(14, '资生堂', 'SHISEIDO' ,'资生堂安耐防晒 SPF50+   60ml' , 'img/details/p2_1.png', 'img/details/p2_2.png', 'img/details/p2_3.png', '26.88','187.89', '/product_details.html?lid=2'),
(15, '雅诗兰黛', 'ESTEE LAUDER' ,'雅诗兰黛 特润修护及透精华露' , 'img/details/p3_1.png', 'img/details/p3_2.png', 'img/details/p3_3.png', '78.00','545.22', '/product_details.html?lid=3'),
(16, '海蓝之谜', 'LA MER' ,'海蓝之谜经典精华面霜30ml' , 'img/details/p4_1.png', 'img/details/p4_2.png', 'img/details/p4_3.png', '130.00','908.70', '/product_details.html?lid=4'),
(17, 'NARS', 'NARS' ,'NARS遮瑕膏CHANTILL' , 'img/details/p5_1.png', 'img/details/p5_2.png', 'img/details/p5_3.png', '17.18','120.09', '/product_details.html?lid=5'),
(18, '乔治阿玛尼', 'GIORGIO ARMANI' ,'阿玛尼 红管 哑光唇釉' , 'img/details/p6_1.png', 'img/details/p6_2.png', 'img/details/p6_3.png', '26.16','154.90', '/product_details.html?lid=6'),
(19, '波比波郎', 'BOBBI BROWN' ,'波比波郎 控油净澈精华' , 'img/details/p7_1.png', 'img/details/p7_2.png', 'img/details/p7_3.png', '31.19','218.02', '/product_details.html?lid=7'),
(20, 'Refa', 'Refa' ,'REFA 脸部按摩仪 经典版' , 'img/details/p8_1.png', 'img/details/p8_2.png', 'img/details/p8_3.png', '185.17','1294.34', '/product_details.html?lid=8'),
(21, '迪奥', 'DIOR' ,'迪奥烈焰蓝金唇膏' , 'img/details/p9_1.png', 'img/details/p9_2.png', 'img/details/p9_3.png', '22.01','153.85', '/product_details.html?lid=9'),
(22, '海蓝之谜', 'LA MER' ,'海蓝之谜护手霜' , 'img/details/p10_1.png', 'img/details/p10_2.png', 'img/details/p10_3.png', '57.21','399.90', '/product_details.html?lid=10'),
(23, '纪梵希', 'GIVENCHY' ,'纪梵希 小羊皮口红' , 'img/details/p11_1.png', 'img/details/p11_2.png', 'img/details/p11_3.png', '23.17','161.96', '/product_details.html?lid=11'),
(24, '科颜氏', 'KIEHL S' ,'科颜氏维生素C紧肤精华乳' , 'img/details/p12_1.png', 'img/details/p12_2.png', 'img/details/p12_3.png', '70.65','493.84', '/product_details.html?lid=12');






