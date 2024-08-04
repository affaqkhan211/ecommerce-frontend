import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [cricketers, setCricketers] = useState([]);

    const getAllCricketers = async () => {
        try {
            const {data} = await axios.get("http://localhost:8000/cricketers/api/get-all");
            setCricketers(data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(()=>{
        getAllCricketers()
    },[])
  return (
    <>
        <div className="container">
        <div className="row">
        {
            cricketers.map((cricket)=>(
                <>
                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                <img src={cricket.image} alt="" />
                <h2>{cricket.name}</h2>
                <h4>{cricket.highestScores}</h4>
                <h3>{cricket.average}</h3>
                </div>
                </>
            ))
        }
            </div>
        </div>
    </>
  )
}

export default Home