import Nav from "./Nav";

function Header() {
  return (
    <div className="bg-[url('/images/desktop/image-header.jpg')] text-center bg-contain bg-no-repeat w-full h-300">
      <Nav />
      <Remainder />
    
    </div>
  );
}

function Remainder() {
  return (
    <div className="my-11 ">
      <h1 className="font-barlow text-3xl tracking-widest text-white">
        WE ARE CREATIVES
      </h1>
    </div>
  );
}

export default Header;
