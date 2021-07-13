import { useState } from "react";

function AttendNewConcert({loggedFan_id, renderUserFollowing, selectConcertCard}) {

    console.log(loggedFan_id)

    const [getConcert_id, setGetConcert_id] = useState("Enter the ID of Concert")
    const [isClicked, setIsClicked] = useState(false)



function getUserInput(e) {
    console.log(e.target.value)
    setGetConcert_id(e.target.value)
}


function handleAttendConcert(e) {
        e.preventDefault()

        setIsClicked(!isClicked)

      
        fetch(`http://localhost:3001/attendingconcert/new`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                    fan_id: loggedFan_id, 
                    concert_id: selectConcertCard
            })
        })
    
        .then(res => res.json())
        .then(info => {
            console.log(info)
            console.log("You've added this concert to your list!")
        })

    }
            




return (
    <div>

        <button  onClick = {handleAttendConcert} >Yes</button>

            {isClicked ? <p>This Concert has been added to your list!</p>: null   }

        

    </div>

)

}


export default AttendNewConcert;