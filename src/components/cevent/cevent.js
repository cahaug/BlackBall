import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'

// gets passed in its data in viewCrim component
// onload/useeffect it grabs the evidence for the crime
// minimized/expanded mode for 
// send view when expanded

function CEvent(props){
    const [ miniature, setMiniature ] = useState(true)
    const [ theData, setTheData ] = useState({
        событиеИД:'',
        создано_на:'',
        преступникИД:0,
        isolatedEvent:true,
        reportedToLocalPolice:false,
        beingInvestigated:false,
        caseClosed:false,
        chargesBrought:false,
        chargesDropped:false,
        convictionLevied:false,
        convicted:false,
        appealedConviction:false,
        inBlockchain:false,
        complaintCategory:'',
        statusCode:'',
        eventViews:0,
        justiceScore:0,
        depravityScore:0,
        firstOccurrenceDateTime:'',
        secondOccurrenceDateTime:'',
        thirdOccurrenceDateTime:'',
        lastOccurrenceDateTime:'',
        venueOfIncident:'',
        occurredAtLocation:'',
        occuredInCity:'',
        occuredInRegion:'',
        occurredInCountry:'',
        descriptionOfInjury:'',
        eventDescriptionNarrative:'',
        victimCapacityAtTime:'',
        perpetratorCapacityAtTime:'',
        victimSocioeconomicBG:'',
        victimDemographicBG:'',
        victimBiography:'',
        legalResolutionCriminal:'',
        legalResolutionCivil:'',
        perpetratorBiography:'',
        offenderComment:'',
        offenderTestimony:'',
    })


    useEffect(async () => {
        const crimeEventData = props.crimeEventData
        setTheData(crimeEventData)
    })


}

export default CEvent