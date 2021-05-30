import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BigBaby from '../bigDaddy/bigBaby'

// criminalSearch is the criminal search component

function CriminalSearch(props){
    const [ loading, setLoading ] = useState(false)
    const [ searchingBySelector, setSearchingBySelector ] = useState('_fl')
    const [ searchLegalName, setSearchLegalName ] = useState('')
    const [ searchFirstName, setSearchFirstName ] = useState('')
    const [ searchMiddleName, setSearchMiddleName ] = useState('')
    const [ searchLastName, setSearchLastName ] = useState('')

    const handleChangeSelect = (event) => {
        event.preventDefault()
        setSearchingBySelector(event.target.value)
    }

    const handleChangeLegN = (event) => {
        event.preventDefault()
        setSearchLegalName(event.target.value)
    }

    const handleChangeFN = (event) => {
        event.preventDefault()
        setSearchFirstName(event.target.value)
    }

    const handleChangeMN = (event) => {
        event.preventDefault()
        setSearchMiddleName(event.target.value)
    }

    const handleChangeLN = (event) => {
        event.preventDefault()
        setSearchLastName(event.target.value)
    }

    const buscaChelobek = (event) => {
        event.preventDefault()
        setLoading(true)

    }
    
    if(loading === true){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else {
        return (
            <div>
                <form onSubmit={buscaChelobek}>
                    <p>Currently, this search is not so smart.</p>
                    <p>Please Try common misspellings to make sure your search turns up all possible results.</p>
                    <p>This message will be updated once this changes.</p>
                    <br />
                    <p>Choose How to Search:</p>
                    <select value={searchingBySelector} onChange={handleChangeSelect}>
                        <option value="_fl">Search By First {`&`} Last Name</option>
                        <option value="fml">Search By First, Middle, {`&`} Last Name</option>
                        <option value="eln">Exact Legal Name</option>
                    </select>
                    {searchingBySelector === '_f1' ? <div><label>First Name: <input value={searchFirstName} type="text" placeholder="First Name" onChange={handleChangeFN}/></label><br /><label>Last Name: <input value={searchLastName} type="text" placeholder="Last Name" onChange={handleChangeLN} /></label></div> :null}
                    {searchingBySelector === 'fml' ? <div><label>First Name: <input value={searchFirstName} type="text" placeholder="First Name" onChange={handleChangeFN}/></label><br /><label>Middle Name: <input value={searchMiddleName} type="text" placeholder="Middle Name" onChange={handleChangeMN} /></label><br /><label>Last Name: <input value={searchLastName} type="text" placeholder="Last Name" onChange={handleChangeLN} /></label></div> :null}
                    {searchingBySelector === 'eln' ? <div><label>Legal Name: <input value={searchLegalName} type="text" placeholder="Full Legal Name" onChange={handleChangeLegN}/></label><br /></div> :null}
                    <button type="submit">Run Search</button>
                </form>
            </div>
        )
    }

}

export default CriminalSearch