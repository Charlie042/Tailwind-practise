const ShoeCards = ({ imageURL, changeShoe, bigShoeImg }) => {
  function handleClick() {
    if (bigShoeImg !== imageURL) {
      changeShoe(imageURL.bigShoe);
    }
  }
  return (
    <div
      className={`border-2 rounded-xl
   ${
     bigShoeImg === imageURL.bigShoe ? "border-coral-red" : "border-transparent"
   } ' cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center 
      items-center bg-card rounded-lg 
      bg-center sm:h-30 sm:w-40 max-sm:p-4"
      >
        <img
          src={imageURL.thumbnail}
          alt="Shoe collection"
          width={127}
          height={103.34}
          className="object-fit"
        />
      </div>
    </div>
  );
};
export default ShoeCards;
