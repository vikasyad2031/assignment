<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-type: application/json');
	header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
	
	$con = mysqli_connect("localhost", "id3661830_ravichamp59", "Ravi@9416906558", "id3661830_apsara");
	$response = [];

	$query = "SELECT * FROM properties";
	$result = mysqli_query($con, $query);

	while ($row = mysqli_fetch_array($result)) {
	  	$response[] = $row;
	}  

	echo json_encode($response);  
	 
?>