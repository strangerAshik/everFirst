<?php
$item=$_POST['item'];

				$query1="SELECT * FROM `inventory_core` WHERE `item_name` = '$item' ";				
				if($query_run=mysql_query($query1)){
					if(mysql_num_rows($query_run)==NULL){
						echo"No Result Is Found!!";
					}
					else{
						$sl=0;
						
						while($query_row=mysql_fetch_assoc($query_run)){
						++$sl;
						$id=$query_row['id'];
						$item_name=ucwords($query_row['item_name']);
						$part_no=$query_row['part_no'];				
						$brand=$query_row['brand'];				
						$quantity=$query_row['quantity'];				
						$provision=$query_row['provision'];

						echo "
						<tr>
							<th>Item Name</th><th>Part No.</th><th>Brand</th><th>Quantity</th><th>Provision</th>
						</tr>
						<tr>
							<td>$item_name</td><td>$part_no</td><td>$brand</td><td>$quantity</td><td>$provision</td>
						</tr>

							";
					}


 ?>
