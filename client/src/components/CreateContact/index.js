import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const CreateContact = () => {
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [Email, setEmail] = useState()
    const [PhoneNumber, setPhoneNumber] = useState()
    const [Company, setCompany] = useState()
    const [JobTitle, setJobTitle] = useState()

    const navigate = useNavigate()

    const Submit = (e) => {
          e.preventDefault();
          axios.post("https://contact-backend-ju7z.onrender.com/createUser", {FirstName, LastName, Email, PhoneNumber, Company, JobTitle})
          .then(result => {
            console.log(result)
            navigate('/')
        })
          .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add Contact</h2>

                    <div className="mb-2">
                       <label htmlFor="">First Name</label>
                       <input type="text" placeholder="Enter First Name" className="form-control"
                              onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Last Name</label>
                       <input type="text" placeholder="Enter Last Name" className="form-control"
                              onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Email</label>
                       <input type="text" placeholder="Enter Email" className="form-control"
                              onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Phone Number</label>
                       <input type="text" placeholder="Enter Phone Number" className="form-control"
                              onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Company</label>
                       <input type="text" placeholder="Enter Company" className="form-control"
                              onChange={(e) => setCompany(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Job Title</label>
                       <input type="text" placeholder="Enter Job Title" className="form-control"
                              onChange={(e) => setJobTitle(e.target.value)} />
                    </div>


                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateContact
