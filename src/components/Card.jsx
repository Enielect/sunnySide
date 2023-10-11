function Card({image, content, name, role}) {
  return (
    <div className="flex flex-col gap-2 text-center items-center">
      <img
        src={image}
        alt="emily image"
        className="w-16 rounded-full mb-10"
        
      />
      <div className="pb-14">
        {content}
      </div>
      <div>
        <strong>{name}</strong>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default Card;
