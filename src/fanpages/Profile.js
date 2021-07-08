import AttendNewConcert from "../concertpages/AttendNewConcert";
import Header from "../Header";
import DeleteConcert from "./DeleteConcert";

function Profile({loggedFan_id, attending_concerts}) {








return (
    <div>
        <Header></Header>
        <AttendNewConcert loggedFan_id = {loggedFan_id}></AttendNewConcert>
        <DeleteConcert loggedFan_id = {loggedFan_id} attending_concerts={attending_concerts}></DeleteConcert>
        <p>Test</p>
    </div>
)

}



export default Profile;