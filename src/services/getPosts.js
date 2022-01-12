import axios from 'axios';
import React from 'react';

// get posts and return them as an array

const getPosts = async (userId) => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/posts/' + userId
	);
	return response.data;
};

export default getPosts;
