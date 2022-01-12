import React from 'react';
import './App.css';

import UserList from './views/userList';
import getUsers from './services/getUsers';

function App() {
	return (
		<div className="App">
			<UserList getUsers={getUsers} />
		</div>
	);
}

export default App;
