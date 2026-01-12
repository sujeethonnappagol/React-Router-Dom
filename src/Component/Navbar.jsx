import {Link} from 'react-router-dom';
function Navbar(){
    return (
        <>
           <div className=" p-4 bg-gray-200 border-b border-neutral-300">
                <div className="w-[600px] mx-auto flex items-center justify-between">
                    {/* <a className="text-2xl font-black" href="/">React SPA</a> */}
                    <Link to='/' className="text-2xl font-black">React SPA</Link>
                    <div className="flex gap-4 text-lg items-center">
                        <Link to="/about">AboutUs</Link>
                        <Link to="/Error">Error</Link>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Navbar;