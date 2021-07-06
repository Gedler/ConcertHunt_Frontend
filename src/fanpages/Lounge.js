import Header from "../Header";
import FanCard from "./FanCard";

function Lounge({all_fans}){

let displayAllFans = all_fans.map(each_fan => {
    return <FanCard all_fans={each_fan}/>

})





















    return(
        <div>
            <Header></Header>
            {displayAllFans}
        </div>
    )
}

export default Lounge;