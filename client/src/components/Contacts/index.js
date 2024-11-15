
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const Contacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3002")
        .then(result => setContacts(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3002/deleteUser/' + id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success">Add +</Link>
                <table className="table">
                      <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Company</th>
                            <th>Job Title</th>
                        </tr>
                      </thead>
                      <tbody>
                         {
                            contacts.map((contact) => {
                             return   <tr>
                                    <td>{contact.FirstName}</td>
                                    <td>{contact.LastName}</td>
                                    <td>{contact.Email}</td>
                                    <td>{contact.PhoneNumber}</td>
                                    <td>{contact.Company}</td>
                                    <td>{contact.JobTitle}</td>

                                    <td>
                                    <Link to={`/update/${contact._id}`} className="btn btn-success">Update</Link>
                                    <button className="btn btn-danger" onClick={(e) => handleDelete(contact._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                         }
                      </tbody>
                </table>
               
            </div>
        
        </div>
    )
}

export default Contacts