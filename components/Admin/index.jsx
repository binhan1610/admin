import React from 'react'
import './style.css'
function Admin({users}) {

  return (
    <table className='table'>
      <thead>
        <tr>
          <td>Id</td>
          <td>Username</td>
          <td>Password</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user,  index)=>(
          <tr key={index}>
            <td>{index}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Admin