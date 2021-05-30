import React, { useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'
import toast from 'react-hot-toast'

function singularEvidence(props){
    let statsRecStart = false
    let statsRecFin = false

    useEffect(async () => {
        try{
            if(statsRecStart === false && statsRecFin === false){
                statsRecStart = true
                const recordedView = await axios.post('https://api.blackball.co/zzz/guestbook', {ряд:'dany',ид:props.данныеИД})
                statsRecFin = true
                console.log('evidence view logged successfully')
            }
        } catch(err){
            console.log('logging err',err)
            toast.error('Problem Tracking')
        }
    })

    return (
        <div>
            <h1>D{`#`}{DOMPurify.sanitize(props.данныеИД)} - {DOMPurify.sanitize(props.category)} - {DOMPurify.sanitize(props.title)}</h1>
            <h3>Related to: C{`#`}{DOMPurify.sanitize(props.событиеИД)}</h3>
            <h3>Evidence Views: <span>{DOMPurify.sanitize(props.itemViews)}</span></h3>
            <h3>Relevancy Score: <span>{DOMPurify.sanitize(props.relevancyScore)}</span></h3>
            <textarea value={DOMPurify.sanitize(props.description)}></textarea>
            <h2>Link: <a href={DOMPurify.sanitize(props.link)} alt="User Supplied Evidence Link">{DOMPurify.sanitize(props.link)}</a></h2>
            <textarea value={DOMPurify.sanitize(props.shortDescription)}></textarea>
        </div>
    )
}

export default singularEvidence