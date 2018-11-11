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
		$user_name = mysqli_real_escape_string($con, $data->user_name);
		$user_phone = mysqli_real_escape_string($con, $data->user_phone);

		$query = "SELECT * FROM interests WHERE user_id = '$user_id' AND property_id = '$prop_id'";
		$result = mysqli_query($con, $query);

		if (mysqli_num_rows($result) > 0) {
			$query2 = "DELETE FROM interests WHERE user_id = '$user_id' AND property_id = '$prop_id'";
			$result2 = mysqli_query($con, $query2);

			if ($result2) {
				$response["status"] = "Interest deleted successfully";
			}
		} else {
			$query3 = "INSERT INTO interests (user_name, user_id, user_phone, property_id) VALUES ('$user_name', '$user_id', '$user_phone', '$prop_id')";
			$result3 = mysqli_query($con, $query3);

			if ($result3) {
				$response["status"] = "Interest sent successfully to the owner";
			} else {
				$response["status"] = false;
			}
		}
	}

	echo json_encode($response);  
	 
?>