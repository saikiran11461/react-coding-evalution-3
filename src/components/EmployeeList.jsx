import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const EmployeeList = () => {
	const [employeeList, setEmployeeList] = useState([]);

	useEffect(() => {
		fetchEmployeeList();
	}, []);

	const fetchEmployeeList = async () => {
		const { data } = await axios('http://localhost:8080/employee');
		setEmployeeList(data);
	};

	return (
		<div className='list_container'>
			{/* On clicking this card anywhere, user goes to user details */}
			{employeeList.map(employ => (
				<Link key={employ.id} to={`./${employ.id}`}>
					<div className='employee_card'>
						<img
							className='employee_image'
							src={employ.image}
							alt={employ.employee_name}
						/>
						<span className='employee_name'>{employ.employee_name}</span>
						<span className='employee_title'>{employ.title}</span>
					</div>
				</Link>
			))}
		</div>
	);
};
