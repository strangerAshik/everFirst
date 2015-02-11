<html lang="en">
	<head>
		<title>Transaction Report</title>
		<meta charset="utf-8"/>		
		<link rel="stylesheet" href="../css/main.css"/>
		<script type="text/javascript" src="../js/main.js"></script>
		<script type="text/javascript" src="../js/jquery-1.10.2.js"></script>
	</head>

	<body>
	<!--Login Sequacity-->
	 <?php
		session_start(); if(@$_SESSION['logStatus']!='login'){header('Location:../index.php') ;} 
	 ?>		
	 <!--End Login Sequacity-->
<!--Calendar files -->
		<?php
		require_once('../calendar/calendar/classes/tc_calendar.php');
		include '../php/php_output.php';
		//
		?>
		<link href="../calendar/calendar/calendar.css" rel="stylesheet" type="text/css" />
		<script language="javascript" src="../calendar/calendar/calendar.js"></script>
<!--Calendar files End -->
		<div class="wrapper fix">
			<header class="header fix"></header>
			<script>	
			$( ".header" ).load( "managingDirectorHeader.php" );
			</script>
			<section class="section"   >
					<select id="optionContainer">
						<option id="reportName" onclick="hideDiv('datePicker','item','part','brand');">--Select Report Type--</option>
						<option onclick="reportPdf();">Stored Product with provision</option>
						<option onclick="showHide('datePicker','customerSelect');"  >Credit Transaction</option>
						<option onclick="showHide('datePicker','customerSelect');";  >Debit Transaction</option>
						<option onclick="showHide('datePicker','customerSelect');"  >Invoice</option>
						<option onclick="showDiv('datePicker','customerSelect');"  >Customer Wise Report</option>
						<!--<option onclick="showHide('item','part','brand','Set_Date_Generate_Report');" id="itemInventoryReport">Item Wise Current Inventory </option>
						<option onclick="showHide('part','item','brand','Set_Date_Generate_Report');" id="partInventoryReport">Part Wise Current Inventory </option>
						<option onclick="showHide('brand','part','item','Set_Date_Generate_Report');" id="brandInventoryReport">Brand Wise Current Inventory </option>-->				
					</select>
			</section>

<!-- #################################################################################################################################### -->
	<section class="section fix">
				
<!-- #################################################################################################################################### -->

	
		<div id='customerSelect' style='width:180px;margin:1 auto;display:none;'>
			<select id="existingCustomerName" onchange="">
							<option>--Select Customer--</option>
								<?php existingCustomer();?>
			</select>
		</div>
		<div id="datePicker" style="display:none;">
		
		<table width="" height="500px" style="padding-bottom: 400px;">
						<tr>
							<th class="noBorder">From :</th>
							<th class="noBorder" id='test'>							
						<?php
						$thisweek = date('W');
						$thisyear = date('Y');

						$dayTimes = getDaysInWeek($thisweek, $thisyear);
						//----------------------------------------

						$date1 = date('Y-m-d', $dayTimes[0]);
						$date2 = date('Y-m-d', $dayTimes[(sizeof($dayTimes)-1)]);

						function getDaysInWeek ($weekNumber, $year, $dayStart = 1) {
						  // Count from '0104' because January 4th is always in week 1
						  // (according to ISO 8601).
						  $time = strtotime($year . '0104 +' . ($weekNumber - 1).' weeks');
						  // Get the time of the first day of the week
						  $dayTime = strtotime('-' . (date('w', $time) - $dayStart) . ' days', $time);
						  // Get the times of days 0 -> 6
						  $dayTimes = array ();
						  for ($i = 0; $i < 7; ++$i) {
							$dayTimes[] = strtotime('+' . $i . ' days', $dayTime);
						  }
						  // Return timestamps for mon-sun.
						  return $dayTimes;
						}
						  $myCalendar = new tc_calendar("date1", true, false);
						  $myCalendar->setIcon("../calendar/calendar/images/iconCalendar.gif");
						 // $myCalendar->setDate(date('d', strtotime($date1)), date('m', strtotime($date1)), date('Y', strtotime($date1)));
						  $myCalendar->setPath("../calendar/calendar/");
						  $myCalendar->setYearInterval(2014, 2020);
						  $myCalendar->setDateFormat('j F ,Y');
						  // $myCalendar->showInput(false);
						  $myCalendar->setAlignment('left', 'bottom');
						  $myCalendar->setDatePair('date1', 'date2', $date2);
						  $myCalendar->setTimezone("Asia/Dhaka");
						  $myCalendar->writeScript();
						  ?></th>
						<th class="noBorder">To:</th>
						<th class="noBorder">								
							<?php
						
						  $myCalendar = new tc_calendar("date2", true, false);
						  $myCalendar->setIcon("../calendar/calendar/images/iconCalendar.gif");
						  //$myCalendar->setDate(date('d', strtotime($date2)), date('m', strtotime($date2)), date('Y', strtotime($date2)));
						  $myCalendar->setPath("../calendar/calendar/");
						  $myCalendar->setYearInterval(2014, 2020);
						  $myCalendar->setDateFormat('j F ,Y');
						  $myCalendar->setAlignment('left', 'bottom');
						  $myCalendar->setDatePair('date1', 'date2', $date1);
						  $myCalendar->setTimezone("Asia/Dhaka");
						  $myCalendar->writeScript();
			

						  ?></th>
						<td class='noBorder'><input id="" type="button" value="Generate Report" onclick="reportPdf()"/></td>
						</tr>
						</table>
					
				</div>
<!-- #################################################################################################################################### -->

<!-- #################################################################################################################################### -->
		
<!-- #################################################################################################################################### -->

<!-- #################################################################################################################################### -->


<!-- #################################################################################################################################### -->
	</section>				
	</div>

		<div id="result"></div>
	</body>
</html>