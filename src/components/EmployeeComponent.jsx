import React, {  useEffect, useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const {id} =useParams();
    
    const [errors, setErrors] = useState( {
        firstName: '',
        lastName: '',
        email: ''
    });


    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch((error) => {
                console.log(error);
            });
            // fetch employee by id and set form values
        }   
    }, [id]);

    function saveOrUpdateEmployee(e){
        e.preventDefault();
        if(validateForm()) {
            const employee = {firstName, lastName, email};

            if(id) {
                updateEmployee(id, {firstName, lastName, email}).then((response) => {
                    console.log(response.data);
                    navigate('/employees');
                }).catch((error) => {
                    console.log(error);
                }
                );
            }
            else{
                 createEmployee(employee).then((response) => {
            console.log(response.data);
            navigate('/employees');
        }).catch((error) => {
            console.log(error);
        });}

            }
        

       
       


    }

    function validateForm() {
        let valid = true;
        let errorsCopy = {...errors};    
        if (firstName.trim()) {
           errorsCopy.firstName = '';
        } else {
            
            errorsCopy.firstName = 'First Name is required';
            valid = false;
        }        
        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            valid = false;
            errorsCopy.lastName = 'Last Name is required';
        }
        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            valid = false;
            errorsCopy.email = 'Email is required';
        }       
        setErrors(errorsCopy);
        return valid;
    }   

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }   
    }

  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee First Name'
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                name='firstName'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Last Name'
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                name='lastName' 
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}  
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Enter Employee Email</label>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}    
                        </div>  
                        <button className='btn btn-success' type='submit' onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default EmployeeComponent
