import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

const UpdateContact = () => {
    const {id} = useParams()
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [Email, setEmail] = useState()
    const [PhoneNumber, setPhoneNumber] = useState()
    const [Company, setCompany] = useState()
    const [JobTitle, setJobTitle] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://contact-backend-ju7z.onrender.com/getUser/' + id )
        .then(result => {
            setFirstName(result.data.FirstName)
            setLastName(result.data.LastName)
            setEmail(result.data.Email)
            setPhoneNumber(result.data.PhoneNumber)
            setCompany(result.data.Company)
            setJobTitle(result.data.JobTitle)
        })
        .catch(err => console.log(err))
    }, [id])

    const Update = (e) => {
        e.preventDefault();
        axios.put("https://contact-backend-ju7z.onrender.com/updateUser/" + id, {FirstName, LastName, Email, PhoneNumber, Company, JobTitle})
        .then(result => {
          console.log(result)
          navigate('/')
      })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update Contact</h2>


                    <div className="mb-2">
                       <label htmlFor="">First Name</label>
                       <input type="text" placeholder="Enter First Name" className="form-control"
                            value={FirstName}  onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Last Name</label>
                       <input type="text" placeholder="Enter Last Name" className="form-control"
                            value={LastName}  onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Email</label>
                       <input type="text" placeholder="Enter Email" className="form-control"
                            value={Email}  onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Phone Number</label>
                       <input type="text" placeholder="Enter Phone Number" className="form-control"
                            value={PhoneNumber}  onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Company</label>
                       <input type="text" placeholder="Enter Company" className="form-control"
                            value={Company}  onChange={(e) => setCompany(e.target.value)} />
                    </div>

                    <div className="mb-2">
                       <label htmlFor="">Job Title</label>
                       <input type="text" placeholder="Enter Job Title" className="form-control"
                            value={JobTitle}   onChange={(e) => setJobTitle(e.target.value)} />
                    </div>



                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateContact
