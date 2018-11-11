<?php
	header("Access-Control-Allow-Origin: *");
	header('Content-type: application/json');
	header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
	
	$con = mysqli_connect("localhost", "id3661830_ravichamp59", "Ravi@9416906558", "id3661830_apsara");
	$response = [];
	$data = json_decode(file_get_contents("php://input"));

	if(!empty($data)) {
		$user_id = mysqli_real_escape_string($con, $data->user_id);
		$prop_id = mysqli_real_escape_string($con, $data->prop_id);

		$query = "DELETE FROM interests WHERE user_id = '$user_id' AND property_id = '$prop_id'";
		$result = mysqli_query($con, $query);

		if ($result) {
			$response["status"] = true;	
		}
	}

	echo json_encode($response);  
	 
?>