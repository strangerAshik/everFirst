<?php
class connectDB {
	public function __construct($host_name,$user_name,$user_pass,$db)
		{
			if(!$this->connect($host_name,$user_name,$user_pass)) 
				{
					//echo"Server Connection failed!!<br/>";
				}
			else
				{
					//echo"Server Connection Established!!<br/>";
					if(@mysql_select_db($db))
						{
							//echo "Now it is connected to db: ".$db."<br/>";
						}
					else echo $db." database connection failed!!<br/>";
				}
		}
	private function connect($host_name,$user_name,$user_pass){
		if(!@mysql_connect($host_name,$user_name,$user_pass)){
			return false;
		}
		else return true;
	}

};
$conntDB=new connectDB("localhost","root","","everFirst_db");
?>