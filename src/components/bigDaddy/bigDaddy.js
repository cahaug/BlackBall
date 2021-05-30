import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'
import BigBaby from './bigBaby'

//bigdaddy is the explore component

function bigDaddy(props){
    const [ loading, setLoading ] = useState(true)
    const [ top10, setTop10 ] = useState([])
    const [ bottom10, setBottom10 ] = useState([])
    const [ hot10, setHot10 ] = useState([])
    const [ worst10, setWorst10 ] = useState([])
    let isFetching = false

    useEffect(async () => {
        if(isFetching === false && loading === true){
            isFetching = true
            // get top ten, bottom ten, uncommented, most commented in past 24hrs, ten from unconstructed endpoint
            const top10s = axios.post('https://api.blackball.co/zzz/mushine')
            //depending on how data returns, split into 3
            setTop10(top10s.data.top10)
            setBottom10(top10s.data.bottom10)
            setHot10(top10s.data.hot10)
            setWorst10(top10s.data.worst10)
        } else {
            return
        }
    })


    if(loading === true){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div>
                <div>
                    <h1>Trending Leaderboard:</h1><br />
                    <BigBaby boardData={hot10} />
                </div>
                <div>
                    <h1>Least Known Leaderboard:</h1><br />
                    <BigBaby boardData={bottom10} />
                </div>
                <div>
                    <h1>Most Depraved Leaderboard:</h1><br />
                    <BigBaby boardData={worst10} />
                </div>
                <div>
                    <h1>Most Viewed Leaderboard:</h1><br />
                    <BigBaby boardData={top10} />
                </div>
            </div>
        )
    }
}

export default bigDaddy