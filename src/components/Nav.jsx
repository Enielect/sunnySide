function Nav() {
  return (
    <nav className="container mx-auto flex flex-row justify-between h-16 text-lg py-12 font-gabarito text-white">
      <div className=" flex items-center text-2xl font-bold">sunnyside</div>
      <div className="flex flex-row justify-between gap-x-6 items-center">
        <button>About</button>
        <button>Services</button>
        <button>Projects</button>
        <button className="bg-white text-center rounded-3xl p-y-1 text-sm px-4 py-3 text-black">
          CONTACT
        </button>
      </div>
    </nav>
  );
}

export default Nav;
