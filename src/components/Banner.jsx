export const Banner = ({ imageUrl, description }) => {
  return (
    <div className="flex flex-col justify-center gap-2 ">
       { imageUrl&& <div className=" overflow-hidden flex justify-center mb-2">
       <img
          src={imageUrl}
          alt="Banner"
          className="object-contain md:h-80 h-64 rounded-lg overflow-hidden"
        />
      </div>}
     { description&& <div className="text-justify ">{description}</div>} 
    </div>
  );
};
