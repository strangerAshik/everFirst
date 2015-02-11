<div>
<!--Calendar files -->
		<?php
		require_once('calendar/classes/tc_calendar.php');
		?>
		<link href="calendar/calendar.css" rel="stylesheet" type="text/css" />
		<script language="javascript" src="calendar/calendar.js"></script>
<!--Calendar files End -->

					 <form name="form1" method="post" action="">
						<table width="60%">
						<tr>
							<th>From :</th>
							<td>							
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
						  $myCalendar->setIcon("calendar/images/iconCalendar.gif");
						  $myCalendar->setDate(date('d', strtotime($date1)), date('m', strtotime($date1)), date('Y', strtotime($date1)));
						  $myCalendar->setPath("calendar/");
						  $myCalendar->setYearInterval(2014, 2020);
						  $myCalendar->setAlignment('left', 'bottom');
						  $myCalendar->setDatePair('date1', 'date2', $date2);
						  $myCalendar->setTimezone("Asia/Dhaka");
						  $myCalendar->writeScript();
						  ?></td>
						  <td class="noBorder"></td>
						  <th>To:</th>
							<td>								
							<?php
						  $myCalendar = new tc_calendar("date2", true, false);
						  $myCalendar->setIcon("calendar/images/iconCalendar.gif");
						  $myCalendar->setDate(date('d', strtotime($date2)), date('m', strtotime($date2)), date('Y', strtotime($date2)));
						  $myCalendar->setPath("calendar/");
						  $myCalendar->setYearInterval(2014, 2020);
						  $myCalendar->setAlignment('left', 'bottom');
						  $myCalendar->setDatePair('date1', 'date2', $date1);
						  $myCalendar->setTimezone("Asia/Dhaka");
						  $myCalendar->writeScript();
						  ?></td>
						<td class="noBorder"><input type="button" value="Time Period" onClick="javascript:alert('Date select from '+this.form.date1.value+' to '+this.form.date2.value);"></td>

						</tr>
						</table>
					 </form>
</div>