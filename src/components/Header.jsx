import Nav from "./Nav";

function Header() {
  //h-300 height in desktop mode
  return (
    <div className="bg-[url('/images/desktop/image-header.jpg')] text-center bg-contain h-300 bg-no-repeat w-full  max-[1125px]:bg-[url('/images/mobile/image-header.jpg')] max-[1125px]:h-122 max-[1125px]:bg-center max-[1125px]:bg-cover">
      <Nav />
      <Remainder />
    </div>
  );
}

function Remainder() {
  return (
    <div className="my-11 max-[1125px]:flex flex-col">
      <h1 className="font-youngSerif text-4xl tracking-widestt leading-high text-white max-[1125px]:px-16 max-[1125px]:font-bold max-[1125px]:pt-10">
        WE ARE CREATIVES
        <img
          src="images/icon-arrow-down.svg"
          alt="down-arrow"
          className="mx-auto py-56 max-[1125px]:pt-20"
        />
      </h1>
    </div>
  );
}

export default Header;
