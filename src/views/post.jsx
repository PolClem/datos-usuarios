// post

import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const Post = (props) => {
	return (
		<Grid className="post">
			<Card variant="outlined">
				<CardContent>
					<Typography>{props.id}</Typography>
					<Typography>{props.title}</Typography>
					<Typography>{props.body}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Post;
