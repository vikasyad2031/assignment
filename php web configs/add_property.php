<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-type: application/json');
	header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
	
	$con = mysqli_connect("localhost", "id3661830_ravichamp59", "Ravi@9416906558", "id3661830_apsara");
	$response = [];
	$data = json_decode(file_get_contents("php://input"));

	if(!empty($data)) {
		$owner_id = mysqli_real_escape_string($con, $data->owner_id);
		$property_name = mysqli_real_escape_string($con, $data->property_name);
		$property_desc = mysqli_real_escape_string($con, $data->property_desc);
		$property_location = mysqli_real_escape_string($con, $data->property_location);
		$property_price = mysqli_real_escape_string($con, $data->property_price);

		$query = "INSERT INTO properties (owner_id, property_name, property_desc, property_location, property_price) VALUES ('$owner_id', '$property_name', '$property_desc', '$property_location', '$property_price')";
		$result = mysqli_query($con, $query);

		if ($result) {
			$response["status"] = true;
		}
		
	}

	echo json_encode($response);  
	 
?>