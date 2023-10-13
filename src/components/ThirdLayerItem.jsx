export default function ThirdLayerItem({ background, header, content, font }) {
  return (
    <div
      className={`${background}  pb-12 w-1/2  h-150 flex justify-end ${font} max-[1125px]:w-full max-[1125px]:bg-center `}
    >
      <div className="flex flex-col items-center justify-end px-36 max-[1125px]:px-16">
        <h3 className={`text-3xl font-black mb-6 font-youngSerif ${font} `}>
          {header}
        </h3>
        <div className="px-16 text-center font-bold opacity-60">{content}</div>
      </div>
    </div>
  );
}
