DROP TABLE bank;

CREATE TABLE `bank` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `bank_name` varchar(10) NOT NULL,
  `account_no` varchar(25) NOT NULL,
  `loan` int(12) NOT NULL,
  `balance` int(12) NOT NULL,
  `note` varchar(30) NOT NULL DEFAULT 'empty',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

INSERT INTO bank VALUES("3","sjib","333","1800","500","not");
INSERT INTO bank VALUES("4","sjib","444","9000","900","sjib");
INSERT INTO bank VALUES("8","brac","777","500","300","brac");
INSERT INTO bank VALUES("11","dbbl","666","0","460","banani");
INSERT INTO bank VALUES("12","dbbl","0000","0","0","test");



DROP TABLE challan;

CREATE TABLE `challan` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `date` varchar(20) NOT NULL,
  `invoice_no` varchar(20) NOT NULL,
  `item` varchar(50) NOT NULL,
  `part` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `delivered_quantity` int(10) NOT NULL,
  `challan_no` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=latin1;

INSERT INTO challan VALUES("1","2014-08-17","147","item name","partno","brand","0","1");
INSERT INTO challan VALUES("2","2014-08-17","147","item name","partno","brand","0","1");
INSERT INTO challan VALUES("3","2014-08-17","147","item name","partno","brand","0","9");
INSERT INTO challan VALUES("4","2014-08-17","147","item name","partno","brand","1","10");
INSERT INTO challan VALUES("5","2014-08-17","147","item name","partno","brand","0","11");
INSERT INTO challan VALUES("6","2014-08-17","147","item name","partno","brand","1","12");
INSERT INTO challan VALUES("7","2014-08-17","146","oring","oring 1","cat","1","2");
INSERT INTO challan VALUES("8","2014-08-17","146","item name","partno","brand","0","2");
INSERT INTO challan VALUES("9","2014-08-17","146","rust","tnky-45","krate","1","2");
INSERT INTO challan VALUES("10","2014-08-17","152","item name","partno","brand","1","2");
INSERT INTO challan VALUES("11","2014-08-17","152","oring","oring 1","cat","2","2");
INSERT INTO challan VALUES("12","2014-08-17","152","rust","tnky-45","krate","3","2");
INSERT INTO challan VALUES("13","2014-08-17","152","item name","partno","brand","3","3");
INSERT INTO challan VALUES("14","2014-08-17","152","oring","oring 1","cat","3","3");
INSERT INTO challan VALUES("15","2014-08-17","152","rust","tnky-45","krate","2","3");
INSERT INTO challan VALUES("16","2014-08-17","152","item name","partno","brand","1","4");
INSERT INTO challan VALUES("17","2014-08-17","152","oring","oring 1","cat","0","4");
INSERT INTO challan VALUES("18","2014-08-17","152","rust","tnky-45","krate","0","4");
INSERT INTO challan VALUES("19","2014-08-17","152","item name","partno","brand","1","5");
INSERT INTO challan VALUES("20","2014-08-17","152","oring","oring 1","cat","1","5");
INSERT INTO challan VALUES("21","2014-08-17","152","rust","tnky-45","krate","2","5");
INSERT INTO challan VALUES("22","2014-08-17","153","item name","partno","brand","5","1");
INSERT INTO challan VALUES("23","2014-08-17","153","oring","oring 1","cat","5","1");
INSERT INTO challan VALUES("24","2014-08-17","153","tank","pipe","podma","5","1");
INSERT INTO challan VALUES("25","2014-08-17","153","tank","pipe","gagi","5","1");
INSERT INTO challan VALUES("26","2014-08-17","153","item name","partno","brand","1","2");
INSERT INTO challan VALUES("27","2014-08-17","153","oring","oring 1","cat","0","2");
INSERT INTO challan VALUES("28","2014-08-17","153","tank","pipe","podma","0","2");
INSERT INTO challan VALUES("29","2014-08-17","153","tank","pipe","gagi","0","2");
INSERT INTO challan VALUES("30","2014-08-17","151","item name","partno","brand","1","1");
INSERT INTO challan VALUES("31","2014-08-17","151","oring","oring 1","cat","1","1");
INSERT INTO challan VALUES("32","2014-08-17","151","rust","tnky-45","krate","1","1");
INSERT INTO challan VALUES("33","2014-08-17","151","item name","partno","brand","1","2");
INSERT INTO challan VALUES("34","2014-08-17","151","oring","oring 1","cat","0","2");
INSERT INTO challan VALUES("35","2014-08-17","151","rust","tnky-45","krate","1","2");
INSERT INTO challan VALUES("36","2014-08-17","151","item name","partno","brand","0","3");
INSERT INTO challan VALUES("37","2014-08-17","151","oring","oring 1","cat","1","3");
INSERT INTO challan VALUES("38","2014-08-17","151","rust","tnky-45","krate","0","3");
INSERT INTO challan VALUES("39","2014-08-17","151","item name","partno","brand","0","4");
INSERT INTO challan VALUES("40","2014-08-17","151","oring","oring 1","cat","0","4");
INSERT INTO challan VALUES("41","2014-08-17","151","rust","tnky-45","krate","0","4");
INSERT INTO challan VALUES("42","2014-08-18","154","item name","partno","brand","1","1");
INSERT INTO challan VALUES("43","2014-08-18","154","oring","oring 1","cat","2","1");
INSERT INTO challan VALUES("44","2014-08-18","154","tank","pipe","gagi","3","1");
INSERT INTO challan VALUES("45","2014-08-18","154","rust","tnky-45","krate","4","1");
INSERT INTO challan VALUES("46","2014-08-18","154","tank","pipe","podma","5","1");
INSERT INTO challan VALUES("47","2014-08-18","154","item name","partno","brand","2","2");
INSERT INTO challan VALUES("48","2014-08-18","154","oring","oring 1","cat","1","2");
INSERT INTO challan VALUES("49","2014-08-18","154","tank","pipe","gagi","1","2");
INSERT INTO challan VALUES("50","2014-08-18","154","rust","tnky-45","krate","1","2");
INSERT INTO challan VALUES("51","2014-08-18","154","tank","pipe","podma","0","2");
INSERT INTO challan VALUES("52","2014-08-18","154","item name","partno","brand","1","3");
INSERT INTO challan VALUES("53","2014-08-18","154","oring","oring 1","cat","1","3");
INSERT INTO challan VALUES("54","2014-08-18","154","tank","pipe","gagi","1","3");
INSERT INTO challan VALUES("55","2014-08-18","154","rust","tnky-45","krate","0","3");
INSERT INTO challan VALUES("56","2014-08-18","154","tank","pipe","podma","0","3");
INSERT INTO challan VALUES("57","2014-08-18","154","item name","partno","brand","1","4");
INSERT INTO challan VALUES("58","2014-08-18","154","oring","oring 1","cat","1","4");
INSERT INTO challan VALUES("59","2014-08-18","154","tank","pipe","gagi","0","4");
INSERT INTO challan VALUES("60","2014-08-18","154","rust","tnky-45","krate","0","4");
INSERT INTO challan VALUES("61","2014-08-18","154","tank","pipe","podma","0","4");
INSERT INTO challan VALUES("62","2014-08-18","153","item name","partno","brand","0","3");
INSERT INTO challan VALUES("63","2014-08-18","153","oring","oring 1","cat","0","3");
INSERT INTO challan VALUES("64","2014-08-18","153","tank","pipe","podma","0","3");
INSERT INTO challan VALUES("65","2014-08-18","153","tank","pipe","gagi","0","3");



DROP TABLE client;

CREATE TABLE `client` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `company` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `representative` varchar(50) NOT NULL,
  `note` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

INSERT INTO client VALUES("15","ashik","East Haji Para; Rampura ; Dhak 1219","01722240864","efrwertwtrt","rterterterw");
INSERT INTO client VALUES("26","binaryfall","afdsafd","868653","ashik","gdfgfhgh");
INSERT INTO client VALUES("28","niko","nibash","012434556767","nibash","vandor");
INSERT INTO client VALUES("31","binary fall","east hazipara, rampura, dhak","01622445252","ashik","");
INSERT INTO client VALUES("33","compliance bd","east hazipara","014545676767","roaman","note");
INSERT INTO client VALUES("34","everfirst","mohakhali","01622445253","syful","note");
INSERT INTO client VALUES("36","mojaddedia","uttara","01622445254","soheb","printing");



DROP TABLE credit_transaction;

CREATE TABLE `credit_transaction` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `date` varchar(20) NOT NULL,
  `purpose` varchar(20) NOT NULL,
  `invoice_no` int(20) NOT NULL,
  `company` varchar(50) NOT NULL,
  `work_order` varchar(30) NOT NULL,
  `voucher` int(20) NOT NULL,
  `pay_from` varchar(40) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `address` varchar(40) NOT NULL,
  `loan_transaction_id` varchar(30) NOT NULL,
  `store_bank` varchar(10) NOT NULL,
  `store_account` varchar(15) NOT NULL,
  `from_bank` varchar(10) NOT NULL,
  `from_account` varchar(15) NOT NULL,
  `checque_or_tt` varchar(15) NOT NULL,
  `amount` int(20) NOT NULL,
  `note` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=latin1;

INSERT INTO credit_transaction VALUES("81","2014-08-14","bank loan","0","","","249","","","","54","","","sjib","222","","123","3");
INSERT INTO credit_transaction VALUES("82","2014-08-14","bank loan","0","","","250","","","","ytiu","","","sjib","222","","757567","65765");
INSERT INTO credit_transaction VALUES("83","2014-08-14","bank loan","0","","","252","","","","ashik","","","brac","777","","0","test");
INSERT INTO credit_transaction VALUES("84","2014-08-16","sale transaction","138","niko","","257","niko","01622445252","address","","","","","","","10001","note");
INSERT INTO credit_transaction VALUES("85","2014-08-16","sale transaction","138","niko","","258","niko","01622445251","address","","","","","","","1","note");
INSERT INTO credit_transaction VALUES("86","2014-08-16","repay advance paymen","0","","100","261","ashik","01622445252","fsdgdfs","","","","","","","20000","fjgk");
INSERT INTO credit_transaction VALUES("87","2014-08-16","repay advance paymen","0","","108","268","pito","01622445252","address","","","","","","","500","pito paid");



DROP TABLE debit_transaction;

CREATE TABLE `debit_transaction` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `date` varchar(50) NOT NULL,
  `purpose` varchar(50) NOT NULL,
  `invoice_no` varchar(50) NOT NULL,
  `work_order` varchar(50) NOT NULL,
  `voucher` int(20) NOT NULL,
  `amount` varchar(50) NOT NULL,
  `paid_amount` varchar(50) NOT NULL,
  `last_paid` varchar(50) NOT NULL,
  `pay_to` varchar(50) NOT NULL,
  `mobile` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `note` varchar(50) NOT NULL,
  `loan_transaction_id` varchar(50) NOT NULL,
  `from_bank` varchar(50) NOT NULL,
  `from_account` varchar(50) NOT NULL,
  `store_bank` varchar(10) NOT NULL,
  `store_account` varchar(10) NOT NULL,
  `cheque_no` varchar(50) NOT NULL,
  `utility_bill_no` varchar(50) NOT NULL,
  `utility_type` varchar(50) NOT NULL,
  `vehicle_no` varchar(50) NOT NULL,
  `vehicle_cost_type` varchar(50) NOT NULL,
  `grand_total` varchar(50) NOT NULL,
  `sale_commision_percentage` varchar(3) NOT NULL,
  `sale_comission_amount` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

INSERT INTO debit_transaction VALUES("1","2014-08-16","advance payment","","100","259","20000","0","20000","ashik","01622445252","address","sofware advance","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("2","2014-08-16","local purchase","","101","260","80000","80000","80000","ashik","01622445252","address","sof","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("3","2014-08-16","office rent","","104","262","90000","90000","90000","mr.x","01622445252","address","mr.y carry that","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("4","2014-08-16","office rent","","107","263","4343","4344","4344","dfsg","01622445252","fgdfg","","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("5","2014-08-16","office rent","","4444","264","2000","1000","1000","someone","01622445252","address","","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("6","2014-08-16","office rent","","4444","265","2000","1500","500","asfshf","01622445252","address","ni","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("7","2014-08-16","advance payment","","108","266","500","0","500","pito","01622445252","address","service","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("8","2014-08-16","conveyance bill","","109","267","400","400","400","pito","01622445252","address","","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("9","2014-08-16","office rent","","112","269","90000","45000","45000","mr. nurul amin","01622445252","address","","","","","","","","","","","","","","");
INSERT INTO debit_transaction VALUES("10","2014-08-19","salary","","1234","270","2345","5467","5467","ashik","01622445252","dsfd`","fgtgh","","","","","","","","","","","","","");



DROP TABLE get_invoice_no;

CREATE TABLE `get_invoice_no` (
  `id` int(1) NOT NULL,
  `lastInvoiceNum` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO get_invoice_no VALUES("1","157");



DROP TABLE get_voucher_no;

CREATE TABLE `get_voucher_no` (
  `id` int(2) NOT NULL DEFAULT '1',
  `current_voucher` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO get_voucher_no VALUES("1","271");



DROP TABLE hand_cash;

CREATE TABLE `hand_cash` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `date` varchar(15) NOT NULL,
  `amount` int(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

INSERT INTO hand_cash VALUES("7","2014-08-15","0");
INSERT INTO hand_cash VALUES("8","2014-08-16","211242");
INSERT INTO hand_cash VALUES("9","2014-08-19","205775");



DROP TABLE inventory_core;

CREATE TABLE `inventory_core` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `part_no` varchar(20) NOT NULL,
  `item_name` varchar(20) NOT NULL,
  `brand` varchar(15) NOT NULL,
  `quantity` int(10) NOT NULL,
  `provision` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

INSERT INTO inventory_core VALUES("8","tnky-45","rust","krate","5","0");
INSERT INTO inventory_core VALUES("9","oring 1","oring","cat","5","0");
INSERT INTO inventory_core VALUES("10","partno","item name","brand","5","53");
INSERT INTO inventory_core VALUES("11","pipe","tank","gagi","10","0");
INSERT INTO inventory_core VALUES("12","pipe","tank","podma","10","0");



DROP TABLE inventory_surface;

CREATE TABLE `inventory_surface` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `date` varchar(12) NOT NULL,
  `company` varchar(20) NOT NULL,
  `work_order` varchar(25) NOT NULL,
  `purchase_invoice` varchar(25) NOT NULL,
  `challan` varchar(15) NOT NULL,
  `part_no` varchar(10) NOT NULL,
  `item_name` varchar(15) NOT NULL,
  `brand` varchar(12) NOT NULL,
  `quantity` int(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

INSERT INTO inventory_surface VALUES("1","2014-08-16","ashik","1323343","67678","1","oring 1","oring","cat","10");
INSERT INTO inventory_surface VALUES("2","2014-08-16","","","","","oring 1","oring","cat","1");
INSERT INTO inventory_surface VALUES("3","2014-08-16","","","","","oring 1","oring","cat","3");
INSERT INTO inventory_surface VALUES("4","2014-08-17","ashik","w9876","invoice","123","partno","item name","brand","25");
INSERT INTO inventory_surface VALUES("5","2014-08-17","ashik","546","6576576","5","pipe","tank","gagi","20");
INSERT INTO inventory_surface VALUES("6","2014-08-17","ashik","546","6576576","5","pipe","tank","podma","20");



DROP TABLE invoice_core;

CREATE TABLE `invoice_core` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `date` varchar(12) NOT NULL,
  `invoice_no` varchar(15) NOT NULL,
  `work_order` varchar(25) NOT NULL,
  `company` varchar(20) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `subtotal` int(10) NOT NULL,
  `discount` int(7) NOT NULL,
  `vat` int(7) NOT NULL,
  `tax` int(7) NOT NULL,
  `grand_total` int(10) NOT NULL,
  `paid` int(10) NOT NULL,
  `bad_draft` int(10) NOT NULL DEFAULT '0',
  `challan_no` int(20) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

INSERT INTO invoice_core VALUES("1","2014-08-15","137","werwqe","ashik","01722240864","16936","5","847","847","0","0","18624","1");
INSERT INTO invoice_core VALUES("2","2014-08-15","138","4234","niko","012434556767","13736","4","549","549","10831","10833","4831","1");
INSERT INTO invoice_core VALUES("3","2014-08-16","139","wo123","everfirst","01622445253","246","6","5","7","252","0","0","1");
INSERT INTO invoice_core VALUES("4","2014-08-16","140","","","","0","0","0","0","0","0","0","1");
INSERT INTO invoice_core VALUES("5","2014-08-16","141","wo00000","binaryfall","868653","4000000","1000","79980","119970","4198950","0","0","1");
INSERT INTO invoice_core VALUES("6","2014-08-16","142","","binaryfall","868653","140742","0","0","0","140742","0","0","1");
INSERT INTO invoice_core VALUES("7","2014-08-16","143","445678909","binaryfall","868653","12000","2000","0","0","10000","0","0","1");
INSERT INTO invoice_core VALUES("8","2014-08-16","144","wo","ashik","01722240864","1200","0","0","0","1200","0","0","1");
INSERT INTO invoice_core VALUES("9","2014-08-16","145","w00000000","binaryfall","868653","40000","0","0","0","40000","0","0","1");
INSERT INTO invoice_core VALUES("10","2014-08-17","146","","ashik","01722240864","18510","510","360","540","18900","0","0","2");
INSERT INTO invoice_core VALUES("11","2014-08-17","147","","ashik","01722240864","6170","170","120","120","6240","0","0","12");
INSERT INTO invoice_core VALUES("12","2014-08-17","148","8989090","ashik","01722240864","8708","4","348","348","9400","0","0","3");
INSERT INTO invoice_core VALUES("13","2014-08-17","149","poip","ashik","01722240864","134836350","3","4045090","4045090","142926528","4","0","4");
INSERT INTO invoice_core VALUES("14","2014-08-17","150","","ashik","01722240864","1845","0","0","0","1845","0","0","1");
INSERT INTO invoice_core VALUES("15","2014-08-17","151","123","binaryfall","868653","2064","0","0","0","2064","0","0","5");
INSERT INTO invoice_core VALUES("16","2014-08-17","152","67689808-","binaryfall","868653","1845","0","0","0","1845","0","0","5");
INSERT INTO invoice_core VALUES("17","2014-08-17","153","234567","ashik","01722240864","89856","856","2670","2670","90000","0","4340","4");
INSERT INTO invoice_core VALUES("18","2014-08-18","154","tytruyt","ashik","01722240864","825","25","0","0","800","0","0","5");
INSERT INTO invoice_core VALUES("19","2014-08-18","155","yhtuy","ashik","01722240864","624","0","0","0","624","0","0","1");
INSERT INTO invoice_core VALUES("20","2014-08-18","156","","ashik","01722240864","105525","0","0","0","105525","0","0","1");



DROP TABLE invoice_surface;

CREATE TABLE `invoice_surface` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `date` varchar(17) NOT NULL,
  `invoice_no` varchar(20) NOT NULL,
  `work_order` varchar(20) NOT NULL,
  `company` varchar(20) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `brand` varchar(10) NOT NULL,
  `item_name` varchar(15) NOT NULL,
  `part_no` varchar(15) NOT NULL,
  `unit_price` int(10) NOT NULL,
  `quantity` int(5) NOT NULL,
  `delevaed_quantity` int(5) NOT NULL DEFAULT '0',
  `last_delivered_quantity` int(5) NOT NULL DEFAULT '0',
  `quantity_price` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

INSERT INTO invoice_surface VALUES("1","2014-08-15","137","werwqe","ashik","01722240864","krate","rust","tnky-45","4234","4","4","4","16936");
INSERT INTO invoice_surface VALUES("2","2014-08-15","138","4234","niko","012434556767","krate","rust","tnky-45","3434","4","3","1","13736");
INSERT INTO invoice_surface VALUES("3","2014-08-16","139","wo123","everfirst","01622445253","krate","rust","tnky-45","123","2","0","0","246");
INSERT INTO invoice_surface VALUES("4","2014-08-16","141","wo00000","binaryfall","868653","krate","rust","tnky-45","2000000","2","0","0","4000000");
INSERT INTO invoice_surface VALUES("5","2014-08-16","142","","binaryfall","868653","krate","rust","tnky-45","23457","6","0","0","140742");
INSERT INTO invoice_surface VALUES("7","2014-08-16","143","445678909","binaryfall","868653","cat","oring","oring 1","1000","6","6","4","6000");
INSERT INTO invoice_surface VALUES("8","2014-08-16","143","445678909","binaryfall","868653","krate","rust","tnky-45","1000","6","6","3","6000");
INSERT INTO invoice_surface VALUES("9","2014-08-16","144","wo","ashik","01722240864","cat","oring","oring 1","120","4","4","1","480");
INSERT INTO invoice_surface VALUES("10","2014-08-16","144","wo","ashik","01722240864","krate","rust","tnky-45","120","6","6","1","720");
INSERT INTO invoice_surface VALUES("11","2014-08-16","145","w00000000","binaryfall","868653","cat","oring","oring 1","20000","2","0","0","40000");
INSERT INTO invoice_surface VALUES("12","2014-08-17","146","","ashik","01722240864","cat","oring","oring 1","1234","5","5","1","6170");
INSERT INTO invoice_surface VALUES("13","2014-08-17","146","","ashik","01722240864","brand","item name","partno","1234","5","4","0","6170");
INSERT INTO invoice_surface VALUES("14","2014-08-17","146","","ashik","01722240864","krate","rust","tnky-45","1234","5","5","1","6170");
INSERT INTO invoice_surface VALUES("16","2014-08-17","147","","ashik","01722240864","brand","item name","partno","1234","5","5","0","6170");
INSERT INTO invoice_surface VALUES("17","2014-08-17","148","8989090","ashik","01722240864","brand","item name","partno","4354","2","2","1","8708");
INSERT INTO invoice_surface VALUES("18","2014-08-17","149","poip","","","brand","item name","partno","8989090","5","5","1","44945450");
INSERT INTO invoice_surface VALUES("19","2014-08-17","149","poip","ashik","01722240864","cat","oring","oring 1","8989090","5","5","0","44945450");
INSERT INTO invoice_surface VALUES("20","2014-08-17","149","poip","ashik","01722240864","krate","rust","tnky-45","8989090","5","5","0","44945450");
INSERT INTO invoice_surface VALUES("21","2014-08-17","150","","ashik","01722240864","brand","item name","partno","123","5","0","0","615");
INSERT INTO invoice_surface VALUES("22","2014-08-17","150","","ashik","01722240864","cat","oring","oring 1","123","5","0","0","615");
INSERT INTO invoice_surface VALUES("23","2014-08-17","150","","ashik","01722240864","krate","rust","tnky-45","123","5","0","0","615");
INSERT INTO invoice_surface VALUES("24","2014-08-17","151","123","binaryfall","868653","brand","item name","partno","344","2","2","0","688");
INSERT INTO invoice_surface VALUES("25","2014-08-17","151","123","binaryfall","868653","cat","oring","oring 1","344","2","2","0","688");
INSERT INTO invoice_surface VALUES("26","2014-08-17","151","123","binaryfall","868653","krate","rust","tnky-45","344","2","2","0","688");
INSERT INTO invoice_surface VALUES("27","2014-08-17","152","67689808-","binaryfall","868653","brand","item name","partno","123","5","5","1","615");
INSERT INTO invoice_surface VALUES("28","2014-08-17","152","67689808-","binaryfall","868653","cat","oring","oring 1","123","5","5","0","615");
INSERT INTO invoice_surface VALUES("29","2014-08-17","152","67689808-","binaryfall","868653","krate","rust","tnky-45","123","5","5","0","615");
INSERT INTO invoice_surface VALUES("30","2014-08-17","153","234567","ashik","01722240864","brand","item name","partno","3456","6","6","0","20736");
INSERT INTO invoice_surface VALUES("31","2014-08-17","153","234567","ashik","01722240864","cat","oring","oring 1","3456","5","5","0","17280");
INSERT INTO invoice_surface VALUES("33","2014-08-17","153","234567","ashik","01722240864","podma","tank","pipe","3456","5","5","0","17280");
INSERT INTO invoice_surface VALUES("34","2014-08-17","153","234567","ashik","01722240864","gagi","tank","pipe","3456","5","5","0","17280");
INSERT INTO invoice_surface VALUES("35","2014-08-18","154","tytruyt","ashik","01722240864","brand","item name","partno","33","5","5","1","165");
INSERT INTO invoice_surface VALUES("36","2014-08-18","154","tytruyt","ashik","01722240864","cat","oring","oring 1","33","5","5","1","165");
INSERT INTO invoice_surface VALUES("37","2014-08-18","154","tytruyt","ashik","01722240864","gagi","tank","pipe","33","5","5","0","165");
INSERT INTO invoice_surface VALUES("38","2014-08-18","154","tytruyt","ashik","01722240864","krate","rust","tnky-45","33","5","5","0","165");
INSERT INTO invoice_surface VALUES("39","2014-08-18","154","tytruyt","ashik","01722240864","podma","tank","pipe","33","5","5","0","165");
INSERT INTO invoice_surface VALUES("40","2014-08-18","155","yhtuy","ashik","01722240864","brand","item name","partno","78","8","0","0","624");
INSERT INTO invoice_surface VALUES("41","2014-08-18","156","","ashik","01722240864","brand","item name","partno","2345","45","0","0","105525");



DROP TABLE supplier;

CREATE TABLE `supplier` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `company` varchar(25) NOT NULL,
  `address` varchar(30) NOT NULL,
  `mobile` varchar(13) NOT NULL,
  `representative` varchar(20) NOT NULL,
  `note` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

INSERT INTO supplier VALUES("20","ashik","address","01984354","noman","note nai");
INSERT INTO supplier VALUES("23","ramij corp","malibug","018948567987","ashik","good supplier");
INSERT INTO supplier VALUES("26","tango","tango road","01622445252","tarik","tango road");
INSERT INTO supplier VALUES("27","company","address","01622445255","roman","good guy");
INSERT INTO supplier VALUES("29","binaryfall","rampura","01722240864","ashik","software");



DROP TABLE users;

CREATE TABLE `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `userName` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `desig` varchar(2) NOT NULL,
  `mobile` int(13) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

INSERT INTO users VALUES("21","md name","21232f297a57a5a743894a0e4a801fc3","md","2147483647");
INSERT INTO users VALUES("22","am name","c04cd38aeb30f3ad1f8ab4e64a0ded7b","am","45345464");
INSERT INTO users VALUES("23","sm name","665f216444d0235a567667bad2c09e11","sm","5436556");
INSERT INTO users VALUES("24","stranger","ebfd7ba6d668b1a1749f9a54a3faa52f","md","1722240864");
INSERT INTO users VALUES("25","admin","21232f297a57a5a743894a0e4a801fc3","md","1722240861");
INSERT INTO users VALUES("26","imran","900150983cd24fb0d6963f7d28e17f72","sm","1766345008");
INSERT INTO users VALUES("27","ashik","665f216444d0235a567667bad2c09e11","md","1677007983");



