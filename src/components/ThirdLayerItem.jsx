export default function ThirdLayerItem({ background, header, content }) {
    return (
      <div
        className={`bg-[url('${background}')] pb-16 w-1/2  h-128 flex justify-end `}
      >
        <div className="flex flex-col items-center justify-end">
          <h3 className="text-3xl font-black">{header}</h3>
          <div className="px-16 text-center">{content}</div>
        </div>
      </div>
    );
  }