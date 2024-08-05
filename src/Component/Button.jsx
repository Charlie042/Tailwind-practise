const Button = ({ label, iconURL, background, borderClr, textClr }) => {
  return (
    <button
      className={`flex justify-center border items-center py-2 px-2 gap-1 rounded-full font-montserrat ${
        background
          ? `${background} ${borderClr} ${textClr}`
          : "bg-coral-red leading-none text-white"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="rounded-full
         w-5 h-5 cursor-pointer "
        />
      )}
    </button>
  );
};

export default Button