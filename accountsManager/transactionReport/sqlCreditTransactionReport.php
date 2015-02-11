<div class="inventoryReport">
				<h2>Debit Transaction Report</h2><hr>
<!--Calendar files -->
		<?php
		require_once('../../calendar/calendar/classes/tc_calendar.php');
		include'../../php/db_connect.php';
		?>
		<link href="../../calendar/calendar/calendar.css" rel="stylesheet" type="text/css" />
		<script language="javascript" src="../../calendar/calendar/calendar.js"></script>
<!--Calendar files End -->
					<form name="form1" method="post" action="">
						<table width="" height="500px" style="padding-bottom: 400px;">
						<tr>
							<th class="noBorder">From :</th>
							<th class="noBorder">							
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
						  $myCalendar->setIcon("iconCalendar.gif");
						  $myCalendar->setDate(date('d', strtotime($date1)), date('m', strtotime($date1)), date('Y', strtotime($date1)));
						  $myCalendar->setPath("../calendar/calendar/");
						  $myCalendar->setYearInterval(2014, 2020);
						  $myCalendar->setAlignment('left', 'bottom');
						  $myCalendar->setDatePair('date1', 'date2', $date2);
						  $myCalendar->setTimezone("Asia/Dhaka");
						  $myCalendar->writeScript();
						  ?></th>
						<th class="noBorder">To:</th>
						<th class="noBorder">								
							<?php
						  $myCalendar = new tc_calendar("date2", true, false);
						  $myCalendar->setIcon("iconCalendar.gif");
						  $myCalendar->setDate(date('d', strtotime($date2)), date('m', strtotime($date2)), date('Y', strtotime($date2)));
						  $myCalendar->setPath("../calendar/calendar/");
						  $myCalendar->setYearInterval(2014, 2020);
						  $myCalendar->setAlignment('left', 'bottom');
						  $myCalendar->setDatePair('date1', 'date2', $date1);
						  $myCalendar->setTimezone("Asia/Dhaka");
						  $myCalendar->writeScript();
			//$theDate1 = isset($_REQUEST["date1"]) ? $_REQUEST["date1"] : "";
			//$theDate2 = isset($_REQUEST["date2"]) ? $_REQUEST["date2"] : "";

						  ?></th>
						<td><input id="" type="button" value="Generate Report" onclick="javascript:value('inventoryReport');"/></td>
						</tr>
						</table>
					</form>
					
					<?php 
function inventoryReport($date1,$date2){
$query="SELECT * FROM inventory_surface WHERE date BETWEEN 'date1' AND 'date2' ";;
if($query_run=mysql_query($query)){
$i=0;
	while($query_row=mysql_fetch_assoc($query_run)){					
						++$i;
						$id=$query_row['id'];
						$purchase_invoice=$query_row['purchase_invoice'];
						$item_name=strtoupper($query_row['item_name']);				
						$part_no=strtoupper($query_row['part_no']);				
						$brand=strtoupper($query_row['brand']);				
						$quantity=$query_row['quantity'];
				
						echo "
								<tr>
								<td>$i</td><td>$purchase_invoice</td><td>$item_name</td><td>$part_no</td><td>$brand</td><td>$quantity</td>
								<td class='inventoryDelete' ><a href = 'javascript:void(0)' onclick = 'deletePopUp(\"DeleteConformation\",$id)'>Delete</a></td>
								</tr>
							";
					}
}
else{echo"Query Run Failed";}
}
					?>
					<?php 
					inventoryReport($date1,$date2);
					?>

</div>
