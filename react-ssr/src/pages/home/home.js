import "./home.css";

function Home() {
	return (
		<>
			<div className="btn-container">
				<button className="btn-user-add">Add Users</button>
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
                    <td>
                        <td>John</td>
                        <td>John@doe.com</td>
                        <td>25</td>
                        <td>Male</td>
                        <td>John Doe</td>
                    </td>
				</table>
			</div>
		</>
	);
}

export default Home;
