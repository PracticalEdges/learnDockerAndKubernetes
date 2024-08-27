import "./home.css";

function Home() {
	return (
		<>
			<div className="btn-container">
				<button className="btn-user-add">Add User</button>
			</div>
			<div className="table-holder">
				<table className="table">
					<tr>
						<th>First Name</th>
						<th>Email</th>
						<th>Age</th>
						<th>Gender</th>
						<th>Bio</th>
					</tr>
				</table>
			</div>
		</>
	);
}

export default Home;
