import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'
// dompurify.sanitize

function evidenceExaminer(props){
    const [ evidence, setEvidence ] = useState([])
    const [ loading, setLoading ] = useState(true)
    
    let isFetching = false

    useEffect(async () => {
        if(isFetching === false && loading === true){
            isFetching = true
            const evidenceData = await axios.post('https://api.blackball.co/zzz/evidenceForCrimeEvent', {crimeEventId:props.crimeEventId})
            console.log('evidenceres', evidenceData)
            //  depending on how data returns, write a const x =  evidenceData.map((evidence) => {return <div>dompurify.sanitize(Evidence display)</div>}) 
            const theEvidence = res.data //.map((evidata) => {0})
            setEvidence(theEvidence)
            isFetching = false
            setLoading(false)
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
                {evidence}
            </div>
        )
    }

}

export default evidenceExaminer