<?php
define('DB_NAME', 'everfirst_db');    // The name of the database
define('DB_USER', 'root');     // Your MySQL user name
define('DB_PASSWORD', ''); // ...and password
define('DB_HOST', 'localhost');    // 99% chance you won't need to change this value
define('SAVE_PATH', '../php/BackUp');    // 99% chance you won't need to change this value

backup_tables(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME);

/* backup the dB OR just a table */
function backup_tables($host,$user,$pass,$name,$tables = '*')
{
	$link = @mysql_connect($host, $user,$pass);
	mysql_select_db($name,$link);
	//$link = mysqli_connect($host, $user,$pass,$name);

	//get all of the tables
	if($tables == '*')
	{
		$tables = array();
		$result = mysql_query('SHOW TABLES');
		while($row = mysql_fetch_row($result))
		{
			$tables[] = $row[0];
		}
	}
	else
	{
		$tables = is_array($tables) ? $tables : explode(',',$tables);
	}

	$filename = 'db-backup-'.date('j F Y').'-'.time().'.sql';
	$handle = fopen("BackUp/$filename",'w');

	//cycle through
	foreach($tables as $table)
	{
		$result = mysql_query('SELECT * FROM '.$table);
		$num_fields = mysql_num_fields($result);

		fwrite( $handle, 'DROP TABLE '.$table.';' );
		$row2 = mysql_fetch_row(mysql_query('SHOW CREATE TABLE '.$table));
		fwrite( $handle, "\n\n".$row2[1].";\n\n" );

		for ($i = 0; $i < $num_fields; $i++)
		{
			while($row = mysql_fetch_row($result))
			{
				fwrite( $handle, 'INSERT INTO '.$table.' VALUES(' );
				for($j=0; $j<$num_fields; $j++)
				{
					$row[$j] = addslashes($row[$j]);
					$row[$j] = @ereg_replace("\n","\\n",$row[$j]);
					if (isset($row[$j])) { fwrite( $handle, '"'.$row[$j].'"' ) ; } else { fwrite( $handle, '""' ); }
					if ($j<($num_fields-1)) { fwrite( $handle, ',' ); }
				}
				fwrite( $handle, ");\n" );
			}
		}
		fwrite( $handle, "\n\n\n" );
	}

	//save file

	fclose($handle);
	//End of saving file
	//$Vdata = file_get_contents('http://YOUR_HOST/YOUR/FILE.php');
	
//php mailer
require_once('class.phpmailer.php');
$email = new PHPMailer();
$email->From      = 'you@example.com';
$email->FromName  = 'Your Name';
$email->Subject   = 'Message Subject';
$email->Body      = 'dsgfyjklhgfdsa';
$email->AddAddress( 'destinationaddress@example.com' );

$file_to_attach = 'backUp/';

$email->AddAttachment( $file_to_attach ,$filename );

echo $email->Send();
}
?>