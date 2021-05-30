import React, { useState } from 'react'
import DOMPurify from 'dompurify'
import ViewCrim from '../crims/viewCrim'


//bigbaby is a explore>leaderboard display component
// pass in props from bigdaddy, props.boardData



function BigBaby(props){
    const [ selectedCrim, setSelectedCrim ] = useState(0)
    const { boardData } = props
    const theBoard = boardData.map((entry) => {
        return (
            <tr>
                <td>{DOMPurify.sanitize(entry.преступникИД)}</td>
                <td>{DOMPurify.sanitize(entry.legalName)}</td>
                <td>{DOMPurify.sanitize(entry.estimatedAge)}</td>
                <td>{DOMPurify.sanitize(entry.probableLocation)}</td>
                <td><img src={DOMPurify.sanitize(entry.pictureURL)} alt={DOMPurify.sanitize(entry.legalName)} /></td>
                <td><button type="button" onClick={activateCrimViewer(entry.преступникИД)}>View</button></td>
            </tr>
        )
    })

    const activateCrimViewer = (crimId) => {
        console.log('activateCI',crimId)
        setSelectedCrim(parseInt(crimId, 10))
        // todo unhide viewCrim component
    }

    return (
        <div>
            <table>
                <tr>
                    <th>KPBHOCID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                    <th>Photo</th>
                    <th>Click to</th>
                </tr>
                {theBoard}
            </table>
            {/* below is crimviewer */}
            <div id="theBox">
                {/* close button */}
                <span className="close cursor" onClick={()=>{document.getElementById("theBox").style.display = "none";}}>{`&#10094;`}</span>
                {/* display compenent */}
                <ViewCrim преступникИД={selectedCrim} />
            </div>
        </div>
    )

}

export default BigBaby