function First() {
  return (
    <section className="flex max-[1125px]:flex  max-[1125px]:flex-col-reverse max-[1125px]:text-center">
      <div className="w-1/2  my-auto flex flex-col gap-7 items-start px-44 max-[1125px]:w-full max-[1125px]:flex  max-[1125px]:px-24 max-[1125px]:py-36 max-[1125px]:items-center">
        <h2 className="text-4xl font-black font-youngSerif">
          Transform your brand
        </h2>
        <p className="opacity-70">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <strong>LEARN MORE</strong>
      </div>
      <img
        className="w-1/2 max-[1125px]:w-full"
        src="./images/desktop/image-transform.jpg"
      />
    </section>
  );
}

export default First;
