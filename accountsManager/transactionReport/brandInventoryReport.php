<?php
$brand=$_POST['brand'];

				$query1="SELECT * FROM `inventory_core` WHERE `brand` = '$brand' ";				
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
							<th>Brand</th><th>Item Name</th><th>Part No.</th><th>Quantity</th><th>Provision</th>
						</tr>
						<tr>
							<td>$brand</td><td>$item_name</td><td>$part_no</td><td>$quantity</td><td>$provision</td>
						</tr>

							";
					}


 ?>
