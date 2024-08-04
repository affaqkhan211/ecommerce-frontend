import React, { useState } from 'react'
import axios from "axios"

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [highestScores, setHighestScores] = useState("");
    const [average, setAverage] = useState("");
    const [image, setImage] = useState("")

    const formData = {name, email,password, highestScores, average, image}
    const submitForm = async () => {
        try {
            await axios.post("http://localhost:8000/cricketers/api/signup",formData);
            alert("User registered successfully")
        } catch (error) {
            alert(error)
        }
    }
    return (
        <div className="container">
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <div class="row g-3">
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" value = {name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="col">
                    <input type="email" class="form-control" placeholder="Email" aria-label="Last name" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div class="row g-3">
                <div class="col">
                    <input type="password" class="form-control" placeholder="Password" aria-label="First name" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="col">
                    <input type="number" class="form-control" placeholder="Highest Scores" aria-label="Last name" value = {highestScores} onChange={(e) => setHighestScores(e.target.value)}/>
                </div>
            </div>
            <div class="row g-3">
                <div class="col">
                    <input type="number" class="form-control" placeholder="Avergae" aria-label="First name" value = {average} onChange={(e) => setAverage(e.target.value)} />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Image url" aria-label="Last name" value = {image} onChange={(e) => setImage(e.target.value)} />
                </div>
            </div>

            <button className='btn btn-success' onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}

export default Signup