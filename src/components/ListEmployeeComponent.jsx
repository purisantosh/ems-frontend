import React from 'react'

const ListEmployeeComponent = () => {

  const dummyData= [
    {"id": 1, "firstname": 'John Doe', "lastname": 'Smith', "email": 'john.smith@example.com'},
    {"id": 2, "firstname": 'Jane Smith', "lastname": 'Johnson', "email": 'jane.johnson@example.com'},
    {"id": 3, "firstname": 'Bob Johnson', "lastname": 'Williams', "email": 'bob.williams@example.com'}
  ]

  return (
    <div className="container">
      <h2>List of Employees</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
