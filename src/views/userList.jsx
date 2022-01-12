// view for the user list
import React, { useEffect, useState } from 'react';
import { Grid, Box, FormControl, Select, InputLabel } from '@material-ui/core';
import Posts from './posts';
import '../App.css';

// list of users into a combo box

const UserList = (props) => {
	// States
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState();

	//Effects

	useEffect(() => {
		getUsers();
	}, []);

	// handlers
	const changeUser = (e) => {
		setSelectedUser(e.target.value);
	};

	const getUsers = async () => {
		const data = await props.getUsers();
		setUsers(data);
	};

	return (
		<Grid spacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
			<FormControl style={{ minWidth: 200 }}>
				<InputLabel id="users">Nombre Usuario</InputLabel>
				<Select
					name="users"
					value={users.name}
					onChange={(e) => {
						changeUser(e);
					}}
				>
					{users.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}

					<hr />
				</Select>
			</FormControl>
			<Posts userId={selectedUser}></Posts>
		</Grid>
	);
};

export default UserList;
