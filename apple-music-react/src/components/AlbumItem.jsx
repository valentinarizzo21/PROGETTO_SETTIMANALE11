const AlbumItem = ({ name, desc, id, image }) => {
  return (
    <div className="min-w-[280px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img
        src={image}
        alt={name}
        className="w-full h-[250px] object-cover rounded-t-lg"
      />
      <div className="p-3 text-white">
        <h3 className="font-semibold text-lg overflow-hidden">{name}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default AlbumItem;
