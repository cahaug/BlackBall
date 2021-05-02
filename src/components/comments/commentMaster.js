import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'
import toast from 'react-hot-toast'

function CommentMaster9001(props){
    const commentType = props.commentType
    const forId = props.forId
    const [ loading, setLoading ] = useState(true)
    const [ renderedComments, setRenderedComments ] = useState([])
    let isFetching = false
    
    // not the most efficient way to do this but w/e its simpler
    const upRelevancy = async (commentId) => {
        try {
            let sendingData
            const consumerToken = localStorage.getItem('token')
            if(consumerToken.length<10){
                toast.error('Create account to vote')
                return
            }
            if(commentType === 'un'){
                toast.error('Nothing Happened')
            } else if (commentType === 'yy'){
                sendingData = {
                    ряд: 'a',
                    фю: 'я',
                    ää: 'å',
                    ид: commentId
                }
            } else if (commentType === 'ka'){
                sendingData = {
                    ряд: 'b',
                    фю: 'я',
                    ää: 'å',
                    ид: commentId
                }
            } else if (commentType === 'ko'){
                sendingData = {
                    ряд: 'c',
                    фю: 'я',
                    ää: 'å',
                    ид: commentId
                }
            }
            const sentData = await axios.post('https://api.blackball.co/zzz/referee', sendingData, {headers:{authorization:consumerToken}})
            // for debugging, remove:
            console.log('sentData', sentData)
            toast.success('Vote Recorded')
        } catch(err){
            console.log('error adding',err)
            toast.error(err)
        }
    }

    const upDepravity = async (commentId) => {
        try {
            let sendingData
            const consumerToken = localStorage.getItem('token')
            if(consumerToken.length<10){
                toast.error('Create account to vote')
                return
            }
            if(commentType === 'un'){
                toast.error('Nothing Happened')
            } else if (commentType === 'yy'){
                sendingData = {
                    ряд: 'a',
                    фю: 'я',
                    ää: 'ö',
                    ид: commentId
                }
            } else if (commentType === 'ka'){
                sendingData = {
                    ряд: 'b',
                    фю: 'я',
                    ää: 'ö',
                    ид: commentId
                }
            } else if (commentType === 'ko'){
                sendingData = {
                    ряд: 'c',
                    фю: 'я',
                    ää: 'ö',
                    ид: commentId
                }
            }
            const sentData = await axios.post('https://api.blackball.co/zzz/referee', sendingData, {headers:{authorization:consumerToken}})
            // for debugging, remove:
            console.log('sentData', sentData)
            toast.success('Vote Recorded')
        } catch(err){
            console.log('error adding',err)
            toast.error(err)
        }
    }

    const downRelevancy = async (commentId) => {
        try {
            let sendingData
            const consumerToken = localStorage.getItem('token')
            if(consumerToken.length<10){
                toast.error('Create account to vote')
                return
            }
            if(commentType === 'un'){
                toast.error('Nothing Happened')
            } else if (commentType === 'yy'){
                sendingData = {
                    ряд: 'a',
                    фю: 'д',
                    ää: 'å',
                    ид: commentId
                }
            } else if (commentType === 'ka'){
                sendingData = {
                    ряд: 'b',
                    фю: 'д',
                    ää: 'å',
                    ид: commentId
                }
            } else if (commentType === 'ko'){
                sendingData = {
                    ряд: 'c',
                    фю: 'д',
                    ää: 'å',
                    ид: commentId
                }
            }
            const sentData = await axios.post('https://api.blackball.co/zzz/referee', sendingData, {headers:{authorization:consumerToken}})
            // for debugging, remove:
            console.log('sentData', sentData)
            toast.success('Vote Recorded')
        } catch(err){
            console.log('error adding',err)
            toast.error(err)
        }
    }

    const downDepravity = async (commentId) => {
        try {
            let sendingData
            const consumerToken = localStorage.getItem('token')
            if(consumerToken.length<10){
                toast.error('Create account to vote')
                return
            }
            if(commentType === 'un'){
                toast.error('Nothing Happened')
            } else if (commentType === 'yy'){
                sendingData = {
                    ряд: 'a',
                    фю: 'д',
                    ää: 'ö',
                    ид: commentId
                }
            } else if (commentType === 'ka'){
                sendingData = {
                    ряд: 'b',
                    фю: 'д',
                    ää: 'ö',
                    ид: commentId
                }
            } else if (commentType === 'ko'){
                sendingData = {
                    ряд: 'c',
                    фю: 'д',
                    ää: 'ö',
                    ид: commentId
                }
            }
            const sentData = await axios.post('https://api.blackball.co/zzz/referee', sendingData, {headers:{authorization:consumerToken}})
            // for debugging, remove:
            console.log('sentData', sentData)
            toast.success('Vote Recorded')
        } catch(err){
            console.log('error adding',err)
            toast.error(err)
        }
    }

    useEffect(async () => {
        isFetching = true
        if(forId !== 0){
            let commentsRet
            if(commentType === 'yy'){
                // hit endpoint for com1
                commentsRet = await axios.post('https://api.blackball.co/zzz/commentaryForCriminal', {criminalId:forId})
            } else if (commentType === 'ka'){
                // hit endpoint for com2
                commentsRet = await axios.post('https://api.blackball.co/zzz/commentaryForCrimeEvent', {crimeEventId:forId})
            } else if (commentType === 'ko'){
                // hit endpoint for com3
                commentsRet = await axios.post('https://api.blackball.co/zzz/commentaryForEvidence', {evidenceId:forId})
            }
            //  renderprocess comments
            const processedComments = commentsRet.data.forEach((comment) => {
                return (
                    <div key={comment.суждения1ИД||comment.суждения2ИД||comment.суждения3ИД}>
                        <p>Speaking: {DOMPurify.sanitize(comment.потребительИД)}</p>
                        <p>Added: {DOMPurify.sanitize(comment.создано_на)}</p>
                        <div>
                            {/* tbd upvote/downvote */}
                            <p>RelevancyScore™: {DOMPurify.sanitize(comment.relevancyScore)} <button type="button" onClick={() => {upRelevancy(comment.суждения1ИД||comment.суждения2ИД||comment.суждения3ИД)}}>{`+`}</button> <button type="button" onClick={()=>{downRelevancy(comment.суждения1ИД||comment.суждения2ИД||comment.суждения3ИД)}}>{`-`}</button></p> 
                            <p>DepravityScore™: {DOMPurify.sanitize(comment.depravityScore)} <button type="button" onClick={() => {upDepravity(comment.суждения1ИД||comment.суждения2ИД||comment.суждения3ИД)}}>{`+`}</button> <button type="button" onClick={()=>{downDepravity(comment.суждения1ИД||comment.суждения2ИД||comment.суждения3ИД)}}>{`-`}</button></p>
                        </div>
                        <p>: <textarea value={DOMPurify.sanitize(comment.contentText)}></textarea></p>
                    </div>
                )
            })
            setRenderedComments(processedComments)
            setLoading(false)
        }
        // axios post for respective comment depending
        // on which commentType 'yy','ka', vai 'ko'
        
    }, [props.forId])

    if(forId===0){
        return(
            <div>
                <p>nothing here</p>
            </div>
        )
    } else if (loading === true && crimId !== 0){
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    } else if (loading === false && crimId !== 0){
        if(commentType === 'un'){
            return(<div><p>Nothing here</p></div>)
        } else {
            return (
                <div>
                    {renderedComments}
                </div>
            )
        }
    }

}

export default CommentMaster9001