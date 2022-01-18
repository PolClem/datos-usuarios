// post

import React from 'react';
import { useEffect, useState } from 'react';

import '../App.css';

const Post = (props) => {
	return (
		<div className="post">
			<ul className="styles">
				<li>{props.id}</li>
				<li>{props.title}</li>
				<li>{props.body}</li>
			</ul>
		</div>
	);
};

export default Post;
