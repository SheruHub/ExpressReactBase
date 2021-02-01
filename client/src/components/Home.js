import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './Home.css';

const Home = () => {

    const [title, setTitle] = useState([]);


    const testApi = async () => {
        try {
            const res = await axios.get('/api/index');
            console.log("hi");
            setTitle(res.data.title);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // getNodes();
        testApi();
    }, []);


    return (
        <div className="container">
            <h1 className="title">{title}</h1>
        </div>
    )
}

export default Home
