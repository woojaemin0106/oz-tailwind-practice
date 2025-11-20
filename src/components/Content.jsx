export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <img
        src={content.img}
        alt=""
        className="w-[300px] rounded-[10px] mb-[3px] min-h-[225px]"
      />

      <span className="text-[12px] text-[#d7fa00] [border:1pxsolid#d7fa00] p-[4px_5px] rounded-[3px]">
        모집중
      </span>

      <div className="text-[18px] font-semibold">{content.title}</div>

      <p className="text-[12px] text-gray-400">{content.subtitle}</p>
    </div>
  );
}
