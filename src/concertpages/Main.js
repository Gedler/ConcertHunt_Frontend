import Header from "../Header";
import ConcertCard from "./ConcertCard";

function Main ({concerts}){


    console.log(concerts)



const displayAllConcerts = concerts.map(concert => {
        return <ConcertCard concerts = {concert}/>
})




console.log(displayAllConcerts)
























    return (
        <div>
            <Header></Header>
         {displayAllConcerts}

        </div>
    )
}


export default Main;