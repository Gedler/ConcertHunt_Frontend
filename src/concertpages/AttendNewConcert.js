import { useState } from "react";

function AttendNewConcert({loggedFan_id}) {

    console.log(loggedFan_id)

    const [getConcert_id, setGetConcert_id] = useState("Enter the ID of Concert")



function getUserInput(e) {
    console.log(e.target.value)
    setGetConcert_id(e.target.value)
}


function handleAttendConcert(e) {
        e.preventDefault()

      
        fetch(`http://localhost:3001/attendingconcert/new`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                    fan_id: loggedFan_id, 
                    concert_id: getConcert_id
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
        <form onSubmit= {e=> handleAttendConcert(e)}>
            <label>Add Concert to your List</label>
            <input type="text" placeholder = "Enter the ID of Concert" onChange={e=> getUserInput(e)}/>
            <input type="submit"Attend This Concert/>
            
        </form>

    </div>

)

}


export default AttendNewConcert;