// view for the user list

import React, { useEffect, useState } from 'react';
import Posts from './posts';

// list of users into a combo box

const UserList = (props) => {
	// States
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState('1');

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
		<div className="userList">
			<h2>Users</h2>
			<select
				onChange={(e) => {
					changeUser(e);
				}}
			>
				{users.map((user) => (
					<option key={user.id} value={user.id}>
						{user.name}
					</option>
				))}
			</select>
			<hr />
			<Posts userId={selectedUser}></Posts>
		</div>
	);
};

export default UserList;
