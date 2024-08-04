const ServicesCard = ({label,imgURL,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] py-20 px-12 rounded-[20px] shadow-3xl ">
      <div className="bg-coral-red mb-9 flex justify-center rounded-full w-10 h-10">
        <img
          src={imgURL}
          alt="services images"
          width={25}
          height={25}
          className="object-contain"
        />
      </div>
      <div>
        <h2 className="font-palanquin font-bold text-2xl">{label}</h2>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
          {subtext}
        </p>
      </div>
    </div>
  );
}

export default ServicesCard