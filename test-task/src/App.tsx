import React, { useState } from 'react';
import './App.css';
import { Container} from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export interface ISalaryType {
	id: number;
	name: string;
}

const salaryTypes: ISalaryType[] = [
	{id: 1, name: 'Оклад за месяц'},
	{id: 2, name: 'МРОТ'}, 
	{id: 3, name: 'Оплата за день'}, 
	{id: 4, name: 'Оплата за час'},  
];

const App: React.FC = () => {
	
	const [salaryType, setSalaryType]= useState(1);

	return (
		<div className="App">
			<Container>
				<Form>				
					<div className="mb-3">
						<Form.Group controlId="formSelectType">	
							<p> выбран тип {salaryType}</p>
							{salaryTypes.map(type => (
								<Form.Check
									type="radio"
									label={type.name}
									value={type.id}		
									onChange = {() => {setSalaryType(type.id)}}
									checked = {salaryType === type.id}
								/>							
							))}	
						</Form.Group>					
					</div>
				</Form>
			</Container>	
			{/* <div className="container">
				<form>
					<div className="form-group">
						<label>Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input type="password" className="form-control" id="exampleInputPassword1"/>
					</div>
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
						<label className="form-check-label">Check me out</label>
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div> */}
		</div>
	);
}

export default App;
