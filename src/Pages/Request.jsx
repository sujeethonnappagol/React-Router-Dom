import users from '../Users.jsx';
import UserCard from '../Component/UserCard.jsx';
function Request(){
    return (
        <>
             <div className="w-[600px] mx-auto mt-6">
                <h1 className="text-center font-bold">This is the Request Page</h1>
                <p className="text-center mt-4">Here you can make various requests and view the results.</p>
                {
                    users.map(user=>
                    <UserCard image={user.image} name={user.name} profession={user.profession} username={user.username} />)
                }
             </div>
        </>
    )
}

export default Request;