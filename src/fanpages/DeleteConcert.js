import { useState } from "react";

function DeleteConcert({loggedFan_id, attending_concerts}) {

    console.log(loggedFan_id)

    const [getConcert_id, setGetConcert_id] = useState("Enter the ID of Concert")



function getUserInput(e) {
    console.log(e.target.value)
    setGetConcert_id(e.target.value)
}

const getAttendingConcert_id = attending_concerts.filter(concert=> 
    concert.concert_id === getConcert_id && concert.fan_id === loggedFan_id
)

console.log(getAttendingConcert_id)


function handleDeleteConcert(e) {
        e.preventDefault()

      
        fetch(`http://localhost:3001/attendingconcert/${getConcert_id}`, {
            method: "DELETE", 
            headers: {"Content-Type": "application/json"},
           // body: JSON.stringify({
                   // fan_id: loggedFan_id, 
                    // concert_id: getConcert_id
            //})
        })
    
        .then(res => res.json())
        .then(info => {
            console.log(info)
            console.log("You've deleted this concert from your list!")
        })

    }
            




return (
    <div>
        <form onSubmit= {e=> handleDeleteConcert(e)}>
            <label>Delete Concert From Your List</label>
            <input type="text" placeholder = "Enter the ID of Concert" onChange={e=> getUserInput(e)}/>
            <input type="submit"Delete This Concert/>
            
        </form>

    </div>

)

}


export default DeleteConcert;