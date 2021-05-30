import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

function evidenceAdder(props){
    const [ loading, setLoading ] = useState(false)
    const [ eviTitle, setEviTitle ] = useState('')
    const [ titleError, setTitleError ] = useState('')
    const [ eviTitLen, setEviTitLen ] = useState(0)
    const [ eviDescription, setEviDescription ] = useState('')
    const [ descriptionError, setDescriptionError ] = useState('')
    const [ eviDesLen, setEviDesLen ] = useState(0)
    const [ eviLink, setEviLink ] = useState('')
    const [ linkError, setLinkError ] = useState('')
    const [ eviLinkLen, setEviLinkLen ] = useState(0)
    const [ eviShortDesc, setEviShortDesc ] = useState('')
    const [ shortieError, setShortieError ] = useState('')
    const [ eviShortDescLen, setEviShortDescLen ] = useState(0)
    const [ eviCat, setEvicat ] = useState('Story')

    const handleChange = (event) => {
        event.preventDefault()
        if(event.target.name === 'title'){
            setEviTitle(event.target.value)
            setEviTitLen(eviTitle.length)
        } else if(event.target.name === 'descr'){
            setEviDescription(event.target.value)
            setEviDesLen(eviDescription.length)
        } else if(event.target.name === 'link'){
            setEviLink(event.target.value)
            setEviLinkLen(eviLink.length)
        } else if(event.target.name === 'shortie'){
            setEviShortDesc(event.target.value)
            setEviShortDescLen(eviShortDesc.length)
        } else if(event.target.name === 'cat'){
            setEvicat(event.target.value)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            let errors = 0
            if(eviTitle.length < 5){
                errors += 1
                setTitleError('More Descriptive Title Please')
                toast.error('More Descriptive Title Please')
            }
            if(eviTitle.length > 249){
                errors += 1
                setTitleError('Shorter Title Please')
                toast.error('Shorter Title Please')
            }
            if(eviDescription.length < 25){
                errors += 1
                setDescriptionError('Needs More Words')
                toast.error('Needs More Words')
            }
            if(eviDescription.length > 9999){
                errors += 1
                setDescriptionError('Needs Fewer Words')
                toast.error('Needs Fewer Words')
            }
            if(eviLink.length <= 12 && eviLink.indexOf('None') !== 0 ){
                errors += 1
                setLinkError('Not A Valid Link')
                toast.error('Not A Valid Link')
            }
            if(eviShortDesc.length > 399){
                errors += 1
                setShortieError('Please Shorten Summary')
                toast.error('Please Shorten Summary')
            }
            if(eviShortDesc.length < 8){
                errors += 1
                setShortieError('Please Lengthen Summary')
                toast.error('Please Lengthen Summary')
            }
            if(errors === 0){
                setLoading(true)
                const token = localStorage.getItem('token')
                const todisteet = {
                    событиеИД: props.событиеИД,
                    title: eviTitle,
                    description: eviDescription,
                    link: eviLink,
                    shortDescription:eviShortDesc,
                    category:eviCat
                }
                const submittedEvidence = await axios.post('https://api.blackball.co/zzz/addEvidence', {todisteet:todisteet}, {headers:{authorization:token}})
                // go back remove log once sure succ status form
                console.log('submitted res', submittedEvidence)
                if(submittedEvidence.status === 201){
                    setEviTitle('')
                    setEviTitLen(0)
                    setTitleError('')
                    setEviDescription('')
                    setEviDesLen(0)
                    setDescriptionError('')
                    setEviLink('')
                    setEviLinkLen(0)
                    setLinkError('')
                    setEviShortDesc('')
                    setEviShortDescLen(0)
                    setShortieError('')
                    setEvicat('Story')
                    setLoading(false)
                }
            } else {
                setLoading(false)
                return
            }
        } catch(err){
            console.log('caught',err)
            setLoading(false)
            toast.error('Error, Sorry')
        }
    }
    
    if(loading === true){
        return (
            <div>
                <p>Submitting...</p>
            </div>
        )
    } else {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Evidence Title ( {eviTitLen} / 250 ): </span><br />
                        <input value={eviTitle} name="title" type="text" required maxLength="250" placeholder="Type Evidence Title Here"  onChange={handleChange} /><br />
                        {titleError !== ''?<span>❌ {titleError}</span>:null}
                    </label>
                    <br/>
                    <label>
                        <span>Full Description ( {eviDesLen} / 9999 ): </span><br />
                        <textarea value={eviDescription} name="descr" placeholder="Type Description Here" onChange={handleChange} ></textarea><br />
                        {descriptionError !== ''?<span>❌ {descriptionError}</span>:null}
                    </label>
                    <br />
                    <label>
                        <span>Evidence Link ( {eviLinkLen} / 399 ): </span><br />
                        <input value={eviLink} name="title" type="text" maxLength="399" placeholder="Type Evidence Link Here" onChange={handleChange} /><br />
                        {linkError !== ''?<span>❌ {linkError}</span>:null}
                    </label>
                    <br />
                    <label>
                        <span>Summary Description ( {eviShortDescLen} / 399 ): </span><br />
                        <textarea value={eviShortDesc} name="shortie" placeholder="Type Summary Description Here" onChange={handleChange} ></textarea><br />
                        {shortieError !== ''?<span>❌ {shortieError}</span>:null}
                    </label>
                    <br />
                    <label>
                        <span>Category: </span><br />
                        <select name="cat" value={eviCat} onChange={handleChange} >
                            <option value="Story">Story</option>
                            <option value="Suspicion">Suspicion</option>
                            <option value="Rumor">Rumor</option>
                            <option value="Photo">Photo</option>
                            <option value="Video">Video</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Add Evidence</button>
                </form>
            </div>
        )
    }
}

export default evidenceAdder