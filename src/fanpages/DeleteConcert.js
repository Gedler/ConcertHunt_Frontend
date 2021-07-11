import { useState } from "react";

function DeleteConcert({loggedFan_id, displayLoggedUserConcerts, attending_concerts}) {

    console.log(loggedFan_id)


    const [getConcert_id, setGetConcert_id] = useState("Enter the ID of Concert")
    const [getAttend_id, setGetAttend_id] = useState("Enter the ID of Concert")



    console.log(displayLoggedUserConcerts)

    let concert1 = ""
    concert1 = displayLoggedUserConcerts[0]
    console.log(concert1)




const getAttendingConcert_id = attending_concerts.filter(concert=> 
    concert.concert_id === getConcert_id && concert.fan_id === loggedFan_id
)

console.log(getConcert_id)
console.log(attending_concerts)


let value1 = ""

let value2 = ""
let value3 = ""
let value4 = ""
let value5 = ""

value1 = attending_concerts[0]
value2 = attending_concerts[1]
value3 = attending_concerts[2]
value4 = attending_concerts[3] 
value5 = attending_concerts[4]

console.log(value1)

function handleDeleteConcert(e) {
        e.preventDefault()

        let concert_id = e.target[0].value
        let attend_id = e.target[1].value

        setGetConcert_id(concert_id)
        console.log(getConcert_id)
        setGetAttend_id(attend_id)
        console.log(getAttend_id)
       console.log("Attending Concert ID:", e.target[1].value)
       console.log("Concert ID:", e.target[0].value)


      
        fetch(`http://localhost:3001/attendingconcert/${attend_id}`, {
            method: "DELETE", 
            headers: {"Content-Type": "application/json"},
            //body: JSON.stringify({
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
            <input type="text" placeholder = "Enter the ID of Concert" />
            <input type="text" placeholder = "Enter  Delete Code" />
            
            <input type="submit"Delete This Concert/>
            
        </form>

    </div>

)

}



export default DeleteConcert;