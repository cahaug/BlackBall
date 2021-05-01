import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DOMPurify from 'dompurify'

function DisplayCrime(props){
    const [ loading, setLoading ] = useState(true)
    const [ evidence, setEvidence ] = useState([])
    const [ isMinified, setIsMinified ] = useState(true)
    
    const crime = {
        crimeId: props.crime.событиеИД,
        createdAt: props.crime.создано_на,
        criminalId: props.crime.преступникИД,
        isolatedEvent: props.crime.isolatedEvent,
        reportedToLocalPolice: props.crime.reportedToLocalPolice,
        beingInvestigated: props.crime.beingInvestigated,
        caseClosed: props.crime.caseClosed,
        chargesBrought: props.crime.chargesBrought,
        chargesDropped: props.crime.chargesDropped,
        convictionLevied: props.crime.convictionLevied,
        convicted: props.crime.convicted,
        appealedConviction: props.crime.appealedConviction,
        inBlockchain: props.crime.inBlockchain,
        complaintCategory: props.crime.complaintCategory,
        statusCode: props.crime.statusCode,
        eventViews: props.crime.eventViews,
        justiceScore: props.crime.justiceScore,
        depravityScore: props.crime.depravityScore,
        firstOccurrenceDateTime: props.crime.firstOccurrenceDateTime,
        secondOccurrenceDateTime: props.crime.secondOccurrenceDateTime,
        thirdOccurrenceDateTime: props.crime.thirdOccurrenceDateTime,
        lastOccurrenceDateTime: props.crime.lastOccurrenceDateTime,
        venueOfIncident: props.crime.venueOfIncident,
        occurredAtLocation: props.crime.occurredAtLocation,
        occuredInCity: props.crime.occuredInCity,
        occuredInRegion: props.crime.occuredInRegion,
        occurredInCountry: props.crime.occurredInCountry,
        offenderComment: props.crime.offenderComment,
        offenderTestimony: props.crime.offenderTestimony,
        victimSocioeconomicBG: props.crime.victimSocioeconomicBG,
        victimDemographicBG: props.crime.victimDemographicBG,
        victimBiography: props.crime.victimBiography,
        descriptionOfInjury: props.crime.descriptionOfInjury,
        perpetratorBiography: props.crime.perpetratorBiography,
        eventDescriptionNarrative: props.crime.eventDescriptionNarrative,
        victimCapacityAtTime: props.crime.victimCapacityAtTime,
        perpetratorCapacityAtTime: props.crime.perpetratorCapacityAtTime,
        legalResolutionCriminal: props.crime.legalResolutionCriminal,
        legalResolutionCivil: props.crime.legalResolutionCivil
    }

    const expandMinified = () => {
        setIsMinified(false)
    }

    const toMinified = () => {
        setIsMinified(true)
    }

    const toggleComments2 = () => {
        // myös myöhemmin
    }

    const toggleComments3 = () => {
        // myöhemmin
    }

    let isFetching = false

    useEffect(async () => {
        if(isFetching === false && loading === true){
            isFetching = true
            if(crime.criminalId!==0){
                // get evidences4crime
                const evidenceRet = await axios.post('')
                const evidences = evidenceRet.data.forEach((evidence) => {
                    return (
                        <div key={DOMPurify.sanitize(evidence.данныеИД)}>
                            <p>Title: {DOMPurify.sanitize(evidence.title)}</p>
                            <p>EvidenceId: {DOMPurify.sanitize(evidence.данныеИД)}</p>
                            <p>Category: {DOMPurify.sanitize(evidence.category)}</p>
                            <p>Added: {DOMPurify.sanitize(evidence.создано_на)}</p>
                            <p>Evidence Views: {DOMPurify.sanitize(evidence.itemViews)}</p>
                            <p>Relevancy Score: {DOMPurify.sanitize(evidence.relevancyScore)}</p>
                            <button type="button" onClick={toggleComments3}>Comments</button>
                            <button type="button" className="expandTag">▼</button>
                            <div className="expand">
                                <p>Link: <a href={DOMPurify.sanitize(evidence.link)} alt={DOMPurify.sanitize(evidence.link)}>{DOMPurify.sanitize(evidence.link)}</a></p>
                                <p>Description: <textarea value={DOMPurify.sanitize(evidence.shortDescription)}></textarea></p>
                                <p>Narrative: <textarea value={DOMPurify.sanitize(evidence.description)}></textarea></p>
                                <p>CrimeId: {DOMPurify.sanitize(evidence.событиеИД)}</p>
                            </div>
                            {/* ^^ needs css classes for dropdown function still */}
                        </div>
                    )
                })
                setEvidence(evidences)
                setLoading(false)
                // for expanding description
                var i
                const collapsingDescriptionsEvidenceButtons = document.getElementsByClassName('expandTag')
                for(i=0;i<collapsingDescriptionsEvidenceButtons.length;i++){
                    collapsingDescriptionsEvidenceButtons[i].addEventListener("click", () => {
                        this.classList.toggle("active")
                        var hiddenContent = this.nextElementSibling
                        if(hiddenContent.style.maxHeight){
                            hiddenContent.style.maxHeight = null;
                        } else {
                            hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 100 + "px"
                        }
                    })
                }
            }
        }
    })

    if(crime.crimeId===0){
        return (
            <div>
                <p>nothing here</p>
            </div>
        )
    } else if(loading === true && crime.crimeId !== 0){
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    } else if(loading === false && crime.crimeId !== 0){
        return (            
            <div>
                <div>
                    {isMinified === true?
                    <div>
                        <p>Crime Event Id: {DOMPurify.sanitize(crime.crimeId)}</p>
                        <p>Complaint Category: {DOMPurify.sanitize(crime.complaintCategory)}</p>
                        <p>Reported At: {DOMPurify.sanitize(crime.createdAt)}</p>
                        <p>Status Code: {DOMPurify.sanitize(crime.statusCode)}</p>
                        <p>City: {DOMPurify.sanitize(crime.occuredInCity)}</p>
                        <p>Region: {DOMPurify.sanitize(crime.occuredInRegion)}</p>
                        <p>Country: {DOMPurify.sanitize(crime.occurredInCountry)}</p>
                        <p>First Time: {DOMPurify.sanitize(crime.firstOccurrenceDateTime)}</p>
                        <p>Views: {DOMPurify.sanitize(crime.eventViews)}</p>
                        <p>DepravityScore™: {DOMPurify.sanitize(crime.depravityScore)}</p>
                        <p>Justice Score: {DOMPurify.sanitize(crime.justiceScore)}</p>
                        <button type="button" onClick={toggleComments2}>Discuss</button>
                        <button type="button" onClick={expandMinified}>Show Full</button>
                    </div>
                    :
                    <div>
                        <p>Status:
                            <button type="button" className="expandTag">▼</button>
                            <div className="expand">
                                <p>Crime Id: {DOMPurify.sanitize(crime.crimeId)}</p>
                                <p>Repored At: {DOMPurify.sanitize(crime.createdAt)}</p>
                                <p>Isolated Event?: {DOMPurify.sanitize(crime.isolatedEvent)}</p>
                                <p>Reported To Local Police? : {DOMPurify.sanitize(crime.reportedToLocalPolice)}</p>
                                <p>Being Investigated?: {DOMPurify.sanitize(crime.beingInvestigated)}</p>
                                <p>Case Closed?: {DOMPurify.sanitize(crime.caseClosed)}</p>
                                <p>Complaint Category: {DOMPurify.sanitize(crime.complaintCategory)}</p>
                                <p>Status Code: {DOMPurify.sanitize(crime.statusCode)}</p>
                                <p>Charges Brought?: {DOMPurify.sanitize(crime.chargesBrought)}</p>
                                <p>Charges Dropped?: {DOMPurify.sanitize(crime.chargesDropped)}</p>
                                <p>Conviction?: {DOMPurify.sanitize(crime.convictionLevied)}</p>
                                <p>Appealed?: {DOMPurify.sanitize(crime.appealedConviction)}</p>
                                <p>In Blockchain/Verified?: {DOMPurify.sanitize(crime.inBlockchain)}</p>
                                <p>Views: {DOMPurify.sanitize(crime.eventViews)}</p>
                                <p>Justice Score: {DOMPurify.sanitize(crime.justiceScore)}</p>
                                <p>DepravityScore™: {DOMPurify.sanitize(crime.depravityScore)}</p>
                            </div>
                        </p>
                        <p>Event Details:
                            <button type="button" className="expandTag">▼</button>
                            <div className="expand">
                                <p>First Occurrence: {DOMPurify.sanitize(crime.firstOccurrenceDateTime)}</p>
                                <p>Second Occurrence: {DOMPurify.sanitize(crime.secondOccurrenceDateTime)}</p>
                                <p>Third Occurrence: {DOMPurify.sanitize(crime.thirdOccurrenceDateTime)}</p>
                                <p>Last Occurrence: {DOMPurify.sanitize(crime.lastOccurrenceDateTime)}</p>
                                <p>Venue of Incident: {DOMPurify.sanitize(crime.venueOfIncident)}</p>
                                <p>At Location: {DOMPurify.sanitize(crime.occurredAtLocation)}</p>
                                <p>In City: {DOMPurify.sanitize(crime.occuredInCity)}</p>
                                <p>In Region: {DOMPurify.sanitize(crime.occuredInRegion)}</p>
                                <p>In Country: {DOMPurify.sanitize(crime.occurredInCountry)}</p>
                                <br />
                                <p>Description of Injury:</p>
                                <textarea value={DOMPurify.sanitize(crime.descriptionOfInjury)}></textarea>
                            </div>
                        </p>
                        <p>Narrative:
                            <button type="button" className="expandTag">▼</button>
                            <div className="expand">
                                <div>
                                    <p>Event Description:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.eventDescriptionNarrative)}></textarea>
                                </div>
                                <div>
                                    <p>Victim Capacity:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.victimCapacityAtTime)}></textarea>
                                </div>
                                <div>
                                    <p>Perpetrator Capacity:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.perpetratorCapacityAtTime)}></textarea>
                                </div>
                                <div>
                                    <p>Victim Socioeconomic Background:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.victimSocioeconomicBG)}></textarea>
                                </div>
                                <div>
                                    <p>Victim Demographic Background:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.victimDemographicBG)}></textarea>
                                </div>
                                <div>
                                    <p>Victim Biography:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.victimBiography)}></textarea>
                                </div>
                                <div>
                                    <p>Resolution (Criminal):</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.legalResolutionCriminal)}></textarea>
                                </div>
                                <div>
                                    <p>Resolution (Civil):</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.legalResolutionCivil)}></textarea>
                                </div>
                                <div>
                                    <p>Perpetrator Biography:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.perpetratorBiography)}></textarea>
                                </div>
                                <div>
                                    <p>Offender Testimony:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.offenderTestimony)}></textarea>
                                </div>
                                <div>
                                    <p>Offender Comment:</p>
                                    <br />
                                    <textarea value={DOMPurify.sanitize(crime.offenderComment)}></textarea>
                                </div>
                            </div>
                        </p>
                        <button type="button" onClick={toggleComments2}>Discuss</button>
                        <button type="button" onClick={toMinified}>Show Less</button>
                    </div>
                    }
                </div>
                <div>
                    {evidence}
                </div>
            </div>
        )
    }

}

export default DisplayCrime