import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'
import DisplayCrime from './displayCrime'
import CommentMaster9001 from '../comments/commentMaster'


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
    const [ viewingIndividual, setViewingIndividual ] = useState(false)
    const [ showingStatus, setShowingStatus ] = useState(false)
    const [ showingInformation, setShowingInformation ] = useState(false)
    const [ showingVerifiedResponse, setShowingVerifiedResponse ] = useState(false)
    const [ viewingCrime, setViewingCrime ] = useState(false)
    const [ processedCrimes, setProcessedCrimes ] = useState([])
    const [ viewingCommentId, setViewingCommentId ] = useState(0)

    
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
    const crimId = props.преступникИД

    useEffect(async () => {
        if(isFetching === false && loading === true){
            isFetching = true
            // if id not 0
            if(crimId!==0){
                const dsbRet = await axios.post('')
                const dscRet = await axios.post('')
                setDsb(dsbRet.data)
                const dscProcessing = dscRet.data.forEach((crime) => {
                    return (
                        <div key={crime.событиеИД}>
                            <DisplayCrime crime={crime} />
                        </div>
                    )
                })
                setDsc(dscProcessing)
                setProcessedCrimes(dscProcessing)
                // retrieve dsb & dsc, iterate through
                //array of all crimeevents for crimnial
                // each crimeevent gets own rendered component
                // pass in props.crimeEventData obj of ced detail
                setLoading(false)
            }
        }
    }, [props.преступникИД])

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
                        <p>{DOMPurify.sanitize(dsb.legalName)}, {DOMPurify.sanitize(dsb.estimatedAge)}</p>
                        <p>{DOMPurify.sanitize(dsb.firstName)} {DOMPurify.sanitize(dsb.middleName)}</p>
                        <p>{DOMPurify.sanitize(dsb.lastName)}</p>
                        <p>{DOMPurify.sanitize(dsb.probableLocation)}</p>
                        <p>{DOMPurify.sanitize(dsb.dateOfBirth)}</p>
                    </div>
                    {dsb.pictureURL !== null ? <img src={DOMPurify.sanitize(dsb.pictureURL)} alt={DOMPurify.sanitize(dsb.legalName)} />:null}
                </div>
                <div>
                    <p>Views: {DOMPurify.sanitize(dsb.profileViews)}</p>
                    <p>DepravityScore™: {DOMPurify.sanitize(dsb.depravityScore)}</p>
                    <button type="button" onClick={()=>{setViewingCommentId(DOMPurify.sanitize(dsb.преступникИД));document.getElementById('comments1').style.display = "block";}}>Comments</button>
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
                            <p>KPBHOCID: {DOMPurify.sanitize(dsb.преступникИД)}</p>
                            <p>Created: {DOMPurify.sanitize(dsb.создано_на)}</p>
                            <p>Reformed{`?`}: {DOMPurify.sanitize(dsb.reformed)}</p>
                            <p>Has Family{`?`}: {DOMPurify.sanitize(dsb.hasFamily)}</p>
                            <p>Alive{`?`}: {DOMPurify.sanitize(dsb.alive)}</p>
                            <p>At Large{`?`}: {DOMPurify.sanitize(dsb.atLarge)}</p>
                            <p>Incarcerated{`?`}: {DOMPurify.sanitize(dsb.incarcerated)}</p>
                            <p>Charges Filed{`?`}: {DOMPurify.sanitize(dsb.chargesFiled)}</p>
                            <p>On Bail{`?`}: {DOMPurify.sanitize(dsb.onBail)}</p>
                            <p>Acquitted{`?`}: {DOMPurify.sanitize(dsb.acquitted)}</p>
                            <p>Convicted{`?`}: {DOMPurify.sanitize(dsb.convicted)}</p>
                            <p>Sentenced{`?`}: {DOMPurify.sanitize(dsb.sentenced)}</p>
                            <p>Appealed{`?`}: {DOMPurify.sanitize(dsb.appeal)}</p>
                        </div>
                        <br />
                        {/* information */}
                        {showingInformation ? <span onClick={showInfoDrawerToggle}>🔼 information </span>:<span onClick={showInfoDrawerToggle}>🔽 information</span>}
                        <div className="showInformatzie">
                            <p>Highest Level of Education: {DOMPurify.sanitize(dsb.highestLevelOfEdu)}</p>
                            <p>Primary Education: {DOMPurify.sanitize(dsb.primaryEdu)}</p>
                            <p>Secondary Education: {DOMPurify.sanitize(dsb.secondaryEdu)}</p>
                            <p>Primary Employment: {DOMPurify.sanitize(dsb.primaryEmployment)}</p>
                            <p>Secondary Employment: {DOMPurify.sanitize(dsb.secondaryEmployment)}</p>
                            <p>Historic Employment: {DOMPurify.sanitize(dsb.historicEmployment)}</p>
                            <p>Trade: {DOMPurify.sanitize(dsb.trade)}</p>
                            <p>Awards {`&`} Accolades: {DOMPurify.sanitize(dsb.awardsAccolades)}</p>
                            <p>Languages Spoken: {DOMPurify.sanitize(dsb.languagesSpoken)}</p>
                            <p>Nationality: {DOMPurify.sanitize(dsb.nationality)}</p>
                            <p>Biography: <textarea value={DOMPurify.sanitize(dsb.biography)}></textarea></p>
                            <p>Socioeconomic Background: <textarea value={DOMPurify.sanitize(dsb.socioeconomicBG)}></textarea></p>
                            <p>Demographic Background: <textarea value={DOMPurify.sanitize(dsb.demographicBG)}></textarea></p>
                        </div>
                        <br />
                        {/* verified response */}
                        {showingVerifiedResponse ? <span onClick={showVerRespDrawerToggle}>🔼 verified response </span>:<span onClick={showVerRespDrawerToggle}>🔽 verified response</span>}
                        <div className="showVerResp">
                            {dsb.offenderComment !== null? <textarea value={DOMPurify.sanitize(dsb.offenderComment)}></textarea>: <p>How to Respond: Link Coming Soon</p>}
                        </div>
                    </div>
                    <br />
                    {viewingCrime ? <span onClick={viewCrimesDrawerToggle}>▶️ the crimes </span>:<span onClick={viewCrimesDrawerToggle}>◀️ the crimes</span>}
                    <div className="viewCrimes">
                        {/* process crimes in useeffect */}
                        {processedCrimes}
                    </div>
                </div>
                <div id="comments1">
                    <CommentMaster9001 commentType='yy' forId={viewingCommentId} />
                </div>
                {/*🤠 капустаПродукт 🥬 La Lechuga 🥬 yksinmatkustaia 🤠*/}
            </div>
        )
    }
}

export default ViewCrim