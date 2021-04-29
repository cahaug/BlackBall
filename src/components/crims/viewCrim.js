import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'

// pulled up by clicking on a searched crim or top10 entry
// pass in props.преступникИД

//build a condition for no request when 0 passed in
// dont forget comments get pulled up from here


function ViewCrim(props){
    const [ loading, setLoading ] = useState(true)
    //crim info goes here
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
    // crimeEventsGoHere in dsc
    const [ dsc, setDsc ] = useState([])
    const [ viewingIndividual, setViewingIndividual ] = useState(false)
    const [ showingStatus, setShowingStatus ] = useState(false)
    const [ showingInformation, setShowingInformation ] = useState(false)
    const [ showingVerifiedResponse, setShowingVerifiedResponse ] = useState(false)
    const [ viewingCrime, setViewingCrime ] = useState(false)
    const [ processedCrimes, setProcessedCrimes ] = useState([])


    
    const viewIndividualDrawerToggle = () => {
        const viewIndividualDrawer = document.getElementsByClassName('viewIndividual')
        if (viewIndividualDrawer[0].style.maxHeight){
            viewIndividualDrawer[0].style.maxHeight = null;
            setViewingIndividual(false)
        } else {
            viewIndividualDrawer[0].style.maxHeight = viewIndividualDrawer[0].scrollHeight + "px";
            setViewingIndividual(true)
        }
    }

    const showStatusDrawerToggle = () => {
        const showStatusDrawer = document.getElementsByClassName('showStatus')
        if (showStatusDrawer[0].style.maxHeight){
            showStatusDrawer[0].style.maxHeight = null;
            setShowingStatus(false)
        } else {
            showStatusDrawer[0].style.maxHeight = showStatusDrawer[0].scrollHeight + "px";
            setShowingStatus(true)
        }
    }

    const showInfoDrawerToggle = () => {
        const showInfoDrawer = document.getElementsByClassName('showInformatzie')
        if (showInfoDrawer[0].style.maxHeight){
            showInfoDrawer[0].style.maxHeight = null;
            setShowingInformation(false)
        } else {
            showInfoDrawer[0].style.maxHeight = showInfoDrawer[0].scrollHeight + "px";
            setShowingInformation(true)
        }
    }

    const showVerRespDrawerToggle = () => {
        const showVerRespDrawer = document.getElementsByClassName('showVerResp')
        if (showVerRespDrawer[0].style.maxHeight){
            showVerRespDrawer[0].style.maxHeight = null;
            setShowingVerifiedResponse(false)
        } else {
            showVerRespDrawer[0].style.maxHeight = showVerRespDrawer[0].scrollHeight + "px";
            setShowingVerifiedResponse(true)
        }
    }

    const viewCrimesDrawerToggle = () => {
        const viewTheCrimesDrawer = document.getElementsByClassName('viewCrimes')
        if (viewTheCrimesDrawer[0].style.maxHeight){
            viewTheCrimesDrawer[0].style.maxHeight = null;
            setViewingCrime(false)
        } else {
            viewTheCrimesDrawer[0].style.maxHeight = viewTheCrimesDrawer[0].scrollHeight + "px";
            setViewingCrime(true)
        }
    }

    let isFetching = false

    useEffect(async () => {
        if(isFetching === false && loading === true){
            isFetching = true
            // if id not 0
            // retrieve dsb & dsc, iterate through
            //array of all crimeevents for crimnial
            // each crimeevent gets own rendered component
            // pass in props.crimeEventData obj of ced detail
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
                {/*🤠 капустаПродукт 🥬 La Lechuga 🥬 yksinmatkustaia 🤠*/}
                <div> 
                    <div>
                        <p>{dsb.legalName}, {dsb.estimatedAge}</p>
                        <p>{dsb.firstName} {dsb.middleName}</p>
                        <p>{dsb.lastName}</p>
                        <p>{dsb.probableLocation}</p>
                        <p>{dsb.dateOfBirth}</p>
                    </div>
                    {dsb.pictureURL !== null ? <img src={dsb.pictureURL} alt={dsb.legalName} />:null}
                </div>
                <div>
                    <p>Views: {dsb.profileViews}</p>
                    <p>DepravityScore™: {dsb.depravityScore}</p>
                    {/* <button onClick="take to comments1">Comments for Crim</button> */}
                </div>
                {/* deployable tab here for individual, crime */}
                <div>
                    {viewingIndividual ? <span onClick={viewIndividualDrawerToggle}>▶️ the individual </span>:<span onClick={viewIndividualDrawerToggle}>◀️ the individual</span>}
                    <div className="viewIndividual">
                        {/* still dsb info */}
                        <br /><hr /><br />
                        {/* status */}
                        {showingStatus ? <span onClick={showStatusDrawerToggle}>🔼 status </span>:<span onClick={showStatusDrawerToggle}>🔽 status</span>}
                        <div className="showStatus">
                            <p>KPBHOCID: {dsb.преступникИД}</p>
                            <p>Created: {dsb.создано_на}</p>
                            <p>Reformed{`?`}: {dsb.reformed}</p>
                            <p>Has Family{`?`}: {dsb.hasFamily}</p>
                            <p>Alive{`?`}: {dsb.alive}</p>
                            <p>At Large{`?`}: {dsb.atLarge}</p>
                            <p>Incarcerated{`?`}: {dsb.incarcerated}</p>
                            <p>Charges Filed{`?`}: {dsb.chargesFiled}</p>
                            <p>On Bail{`?`}: {dsb.onBail}</p>
                            <p>Acquitted{`?`}: {dsb.acquitted}</p>
                            <p>Convicted{`?`}: {dsb.convicted}</p>
                            <p>Sentenced{`?`}: {dsb.sentenced}</p>
                            <p>Appealed{`?`}: {dsb.appeal}</p>
                        </div>
                        <br />
                        {/* information */}
                        {showingInformation ? <span onClick={showInfoDrawerToggle}>🔼 information </span>:<span onClick={showInfoDrawerToggle}>🔽 information</span>}
                        <div className="showInformatzie">
                            <p>Highest Level of Education: {dsb.highestLevelOfEdu}</p>
                            <p>Primary Education: {dsb.primaryEdu}</p>
                            <p>Secondary Education: {dsb.secondaryEdu}</p>
                            <p>Primary Employment: {dsb.primaryEmployment}</p>
                            <p>Secondary Employment: {dsb.secondaryEmployment}</p>
                            <p>Historic Employment: {dsb.historicEmployment}</p>
                            <p>Trade: {dsb.trade}</p>
                            <p>Awards {`&`} Accolades: {dsb.awardsAccolades}</p>
                            <p>Languages Spoken: {dsb.languagesSpoken}</p>
                            <p>Nationality: {dsb.nationality}</p>
                            <p>Biography: <textarea value={dsb.biography}></textarea></p>
                            <p>Socioeconomic Background: <textarea value={dsb.socioeconomicBG}></textarea></p>
                            <p>Demographic Background: <textarea value={dsb.demographicBG}></textarea></p>
                        </div>
                        <br />
                        {/* verified response */}
                        {showingStatus ? <span onClick={showVerRespDrawerToggle}>🔼 verified response </span>:<span onClick={showVerRespDrawerToggle}>🔽 verified response</span>}
                        <div className="showVerResp">
                            {dsb.offenderComment !== null? <textarea value={dsb.offenderComment}></textarea>: <p>How to Respond: Link Coming Soon</p>}
                        </div>
                    </div>
                    <br />
                    {viewingCrime ? <span onClick={viewCrimesDrawerToggle}>▶️ the crimes </span>:<span onClick={viewCrimesDrawerToggle}>◀️ the crimes</span>}
                    <div className="viewCrimes">
                        {/* process crimes in useeffect */}
                        {processedCrimes}
                    </div>
                </div>
                {/*🤠 капустаПродукт 🥬 La Lechuga 🥬 yksinmatkustaia 🤠*/}
                {/* very interesting move, cia joe biden. real 4d chess. impressed. */}
                {/* working hard to preempt deadline as you can see. hmu @ safeway or on IG lol, if u want me to lead one of those new teams you're building :) */}
            </div>
        )
    }
}

export default ViewCrim