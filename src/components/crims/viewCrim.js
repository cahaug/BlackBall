import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'

// pulled up by clicking on a searched crim or top10 entry
// pass in props.преступникИД

//build a condition for no request when 0 passed in

function ViewCrim(props){
    const [ loading, setLoading ] = useState(true)
    const [ dsb, setDsb ] = useState({
        преступникИД:0,
        создано_на:0,
        legalName:'',
        firstName:'',
        middleName:'',
        lastName:'',
        probableLocation:'',
        estimatedAge:0,
        dateOfBirth:'',
        pictureURL:'',
        hasFamily:false,
        alive:false,
        atLarge:false,
        chargesFiled:false,
        onBail:false,
        acquitted:false,
        convicted:false,
        sentenced:false,
        appeal:false,
        incarcerated:false,
        reformed:false,
        highestLevelOfEdu:'',
        primaryEdu:'',
        secondaryEdu:'',
        primaryEmployment:'',
        secondaryEmployment:'',
        historicEmployment:'',
        trade:'',
        awardsAccolades:'',
        languagesSpoken:'',
        nationality:'',
        socioeconomicBG:'',
        demographicBG:'',
        biography:'',
        profileViews:0,
        depravityScore:0,
        offenderComment:''
    })
    let isFetching = false

    useEffect(async () => {
        if(isFetching === false && loading === true){
            isFetching = true

        }
    })


    const crimId = props.преступникИД

    if(crimId===0){
        return (
            <div>
                <p>nothing here</p>
            </div>
        )
    } else if(loading === true && crimId !== 0){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else if(loading === false && crimId !== 0){
        return(
            <div>

            </div>
        )
    }
}

export default ViewCrim