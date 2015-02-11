<?php
 header('Content-Type: text/css');
?> 
<?php 
include'db_connect.php';
$key=htmlentities(addslashes(strtolower(trim($_POST['key']))));
$displayId=$_POST['displayId'];
$inputBoxId=$_POST['inputBoxId'];
$fieldName=$_POST['fieldName'];
$tableName=$_POST['tableName'];
$query="SELECT DISTINCT * FROM $tableName WHERE $fieldName LIKE '$key%' ";
if($query_run=mysql_query($query)){
		if(mysql_num_rows($query_run)!=NULL){
				while($query_row=mysql_fetch_assoc($query_run))
				{	
					
						$rasult=$query_row[$fieldName];
														
				?>
				<option class="autoCompOption" onclick="set('<?php echo "$rasult"; ?>','<?php echo "$displayId"; ?>','<?php echo "$inputBoxId"; ?>')"><?php echo $rasult?></option>
				<?php
					
				}
				}
		
}
else {echo"Failed";mysql_error();}
?>