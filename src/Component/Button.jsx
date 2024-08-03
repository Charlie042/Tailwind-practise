const Button = ({label,iconURL}) => {
  return (
    <button className="flex 
    justify-center items-center
     py-3 font-montserrat gap-2 text-white
     bg-coral-red px-7 p mx-7
      rounded-full leading-none
      border-coral-red
      ">
      {label}
      {iconURL &&
      <img
        src={iconURL}
        alt="arrow right icon"
        className="rounded-full
         w-5 h-5 cursor-pointer "
      />
}
    </button>
  );
}

export default Button