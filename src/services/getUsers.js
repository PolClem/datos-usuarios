import axios from 'axios';
import React from 'react';

// get users and return them as an array

const getUsers = async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	);
	return response.data;
};

export default getUsers;
