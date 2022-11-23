import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export const Cricket = () => {
    const [cricket, setCricket] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
            headers: {
                'X-RapidAPI-Key': '491448f1dfmshc9209e883e447efp141058jsn2450d40c67f2',
                'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
            }
        };

        let URL = "https://cricket-live-data.p.rapidapi.com/fixtures";
        axios.request(options).then(({ data }) => {
            console.log(data)
            setCricket(data.results)
        })

    }, [])

    const getSeres = () => {
        const options = {
            method: 'GET',
            url: 'https://cricket-live-data.p.rapidapi.com/series',
            headers: {
                'X-RapidAPI-Key': '491448f1dfmshc9209e883e447efp141058jsn2450d40c67f2',
                'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
            }
        };
        axios.request(options).then(({ data }) => {
            console.log(data)
            setCricket(data.results)
        })
    }

    return <div>
        <h2>Hello From Cricket API Component</h2>
        <button onClick={() => { getSeres() }}>GET Series</button>
        <button>GET Fixtures</button>
        <button>GET Fixtures By Series</button>
        <button>GET Fixtures By Date</button>
        <button>GET Results</button>
        <button>GET Results By Date</button>
        <button>GET Match Scorecard</button>
        <ul>
            {cricket.map((cric) => {
                return <li key={cric}>{cric.match_title}</li>
                // return <li key={cric}>{cric.series_name}</li>
            })}
        </ul>
    </div>
}
export default Cricket
