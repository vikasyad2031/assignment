<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-type: application/json');
	header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
	
	$con = mysqli_connect("localhost", "id3661830_ravichamp59", "Ravi@9416906558", "id3661830_apsara");
	$response = [];
	$data = json_decode(file_get_contents("php://input"));

	if(!empty($data)) {
		$id = mysqli_real_escape_string($con, $data->id);

		$query = "DELETE FROM properties WHERE id = '$id'";
		$result = mysqli_query($con, $query);

		if ($result) {
			$query2 = "SELECT * FROM properties";
			$result2 = mysqli_query($con, $query2);

			while ($row = mysqli_fetch_array($result2)) {
			  	$response[] = $row;
			} 
		}

	}

	echo json_encode($response);  
	 
?>