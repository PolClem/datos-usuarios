import React, { useEffect, useState } from 'react';
import Post from './post';
import getPosts from '../services/getPosts';
import { Button, Grid, Modal, TextField } from '@material-ui/core';

const Posts = (props) => {
	const [posts, setPosts] = useState([]);

	const getPost = async (userId) => {
		const data = await getPosts(userId);
		setPosts([data]);
	};

	useEffect(() => {
		const data = getPost(props.userId);
	}, [props.userId]);

	// add post
	const addPost = () => {
		const newPost = {
			userId: props.userId,
			id: posts.length + 1,
			title: 'title',
			body: 'body',
		};
		setPosts([...posts, newPost]);
		{
			console.log(posts);
		}
		openCloseModal();
	};

	//modal
	const [modal, setModal] = useState(false);
	const [postModal, setPostModal] = useState([]);

	const openCloseModal = () => {
		setModal(!modal);
	};

	const body = (
		<div align="center" style={{ background: 'white' }}>
			<div TextAlign="center">
				<h2>Nuevo Post</h2>
			</div>
			<TextField label="Title" />
			<br />
			<TextField label="Body" />
			<br />
			<br />
			<div align="right">
				<Button color="green" onClick={addPost}>
					Send
				</Button>
				<Button onClick={() => openCloseModal()}>Cancel</Button>
			</div>
		</div>
	);

	return (
		<Grid className="posts">
			<Button variant="outlined" onClick={() => openCloseModal()}>
				Add Post
			</Button>
			<Modal open={modal} onClose={openCloseModal}>
				{body}
			</Modal>
			<h2>Posts</h2>
			{posts.map((post) => (
				<Post key={post.id} body={post.body} title={post.title}></Post>
			))}
		</Grid>
	);
};

export default Posts;
