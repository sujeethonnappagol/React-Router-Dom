import { Link } from "react-router-dom";
import users from "../Users.jsx";
import {useParams} from 'react-router-dom';
function UserCard({image ,name , profession, username}) {
    return (
        <>
            <Link to={`/${username}`} className="hover:cursor-pointer">
                <div className="flex items-center gap-4  mt-4">
                <img src={image} className="rounded-full h-14 w-14 object-cover " alt="" />
                <div className="">
                    <p>{name}</p>
                    <p className="text-sm text-neutral-600">{profession}</p>
                </div>
            </div>
            </Link>
        </>
    )
}

export default UserCard;