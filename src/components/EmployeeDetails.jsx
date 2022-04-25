import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/employy.css';

 const EmployeeDetails = () => {
	const [empolyeedetails, setEmployeedetails] = useState({});

	useEffect(() => {
		fetchEmployeedetails();
	}, []);

	const fetchEmployeedetails = async () => {
		const { data } = await axios(`http://localhost:8080/employee/${id}`);
		setEmployeedetails(data);
	};
	const { id } = useParams();
	return (
		<div className='user_details'>
			<img className='user_image' src={empolyeedetails.image} />
			<h4 className='user_name'>{empolyeedetails.username}</h4>
			<span className='user_salary'>$ {empolyeedetails.salary}</span>
			<span className='tasks'>
				{empolyeedetails?.tasks?.map((t, i) => (
					<li className='task' key={i}>
						{t}
					</li>
				))}
			</span>
			Status: <b className='status'>{empolyeedetails.status}</b>
			Title: <b className='title'>{empolyeedetails.title}</b>
			{/* Show this button only if user is not already terminated (users status is working) */}
			<button className='fire'>Fire Employee</button>
			{/* Show this button only if user is not already team lead or terminated */}
			<button className='promote'>promote</button>
		</div>
	);
};

export default EmployeeDetails