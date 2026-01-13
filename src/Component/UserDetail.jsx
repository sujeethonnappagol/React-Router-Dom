import users from "../Users.jsx";
import { useParams } from "react-router-dom";
function UserDetail(){
    let {username} = useParams();
    let user = users.find(user=>user.username === username);
    return (
        <>
            <div className="w-[600px] flex gap-7 items-center mx-auto mt-16">
                <img src={user.image} className="rounded-full h-40 w-40 object-cover " alt="" />
                <div className="">
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p>{user.profession}</p>
                    <p>{user.bio}</p>
                    <div className="flex gap-4 mt-4">
                        <p><span className=" px-2 rounded-md py-1 bg-neutral-200">{user.followers} Followers</span></p>
                        <p><span className=" px-2 rounded-md py-1 bg-neutral-200">{user.following} Following</span></p>
                    </div>
                </div>
                
            </div>        
        </>
    )
}

export default UserDetail;