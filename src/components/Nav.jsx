

function Nav() {
    return (
        <nav className="container mx-auto flex flex-row justify-between h-16 text-lg font-barlow text-white "> 
           <div className="text-white flex items-center text-xl font-bold">sunnyside</div>
           <div className="flex flex-row justify-between gap-x-6 items-center">
            <button>About</button>
            <button>Services</button>
            <button>Projects</button>
            <button className="bg-white text-center rounded-3xl p-y-1 text-sm px-4 py-2 text-black">CONTACT</button>
            </div> 
        </nav>
    )
}

export default Nav
