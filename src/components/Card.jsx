function Card({ image, content, name, role }) {
  return (
    <div className="flex flex-col gap-2 text-center items-center max-[1125px]:pb-10 ">
      <img src={image} alt="emily image" className="w-16 rounded-full mb-10" />
      <div className="pb-14 max-[1125px]:pb-5 max-[1125px]:w-full">
        {content}
      </div>
      <div>
        <strong>{name}</strong>
        <p className="opacity-40">{role}</p>
      </div>
    </div>
  );
}

export default Card;
