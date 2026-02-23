import React, {  useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    
    const navigate = useNavigate();

    function saveEmployee(e){
        e.preventDefault();

        const employee = {firstName, lastName, email};

        console.log(employee);  
        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigate('/employees');
        }).catch((error) => {
            console.log(error);
        });

    }

  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                className='form-control'
                                name='firstName'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                className='form-control'
                                name='lastName' 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Enter Employee Email</label>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                className='form-control'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>  
                        <button className='btn btn-success' type='submit' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default EmployeeComponent
