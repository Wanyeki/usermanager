import React, { Component, useEffect, useState } from 'react'
import './users-table.css'
import { Table } from 'react-bootstrap';
import { getAllUsers } from '../../../services/users.service';
import {Button} from 'react-bootstrap'


function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  });

  const getUsers = async () => {
    const users = await getAllUsers()
    setUsers(users)
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fullt Name</th>
          <th>Email</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return <tr key={index}>
            <td>{index}</td>
            <td>{user.fullName}</td>
            <td>{user.email}</td>
            <td><Button>Edit</Button></td>

          </tr>
        })}


      </tbody>
    </Table>
  )
}


export default UsersTable