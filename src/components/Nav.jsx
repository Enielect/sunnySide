import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = window.innerWidth;

  function handleClick() {
    setIsOpen((s) => !s);
    console.log(windowWidth);
  }

  return (
    <nav className="container mx-auto flex flex-row justify-between h-16 text-lg py-12 font-gabarito text-white max-[1125px]:px-10 items-center max-[1125px]:flex-col ">
      <div className="max-[1125px]:flex  max-[1125px]:gap-56 max-[1125px]:items-center ">
        <div className=" flex items-center text-2xl font-bold max-[1125px]:w-full">
          <img src="/images/logo.svg" alt="" />
        </div>
        <button onClick={handleClick} className="min-[1125px]:hidden  w-24">
          <img
            src="/images/icon-hamburger.svg"
            alt=""
            className="min-[1125px]:hidden "
          />
        </button>
      </div>
      {isOpen && windowWidth <= 1125 && (
        <div className={` flex   max-[1125px]:flex-col max-[1125px]:gap-6 max-[1125px]:py-8 max-[1125px]:bg-white  max-[1125px]:my-300 max-[1125px]:w-full max-[1125px]:mt-10 transition-all ${isOpen ? 'max-[1125px]:h-300': '' } duration-300  max-[1125px]:z-10 max-[1125px]:font-bold max-[1125px]:text-slate-500`}>
          <button>About</button>
          <button>Services</button>
          <button>Projects</button>
          <button className={`bg-white text-center rounded-3xl p-y-1 text-sm px-4 py-3 text-black `  }>
            <p className="max-[1125px]:w-28 max-[1125px]:text-center max-[1125px]:bg-yellow-600 mx-auto rounded-3xl max-[1125px]:py-3 px-5 ">
              CONTACT
            </p>
          </button>
        </div>
      )}

      {windowWidth > 1125 && (
        <div className="flex flex-row justify-between gap-x-6 items-center ">
          <button>About</button>
          <button>Services</button>
          <button>Projects</button>
          <button className="bg-white text-center rounded-3xl p-y-1 text-sm px-4 py-3 text-black">
            CONTACT
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
