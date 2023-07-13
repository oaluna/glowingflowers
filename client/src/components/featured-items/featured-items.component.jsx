import SHOP_DATA from "../../pages/shop/shop.data";
const FeaturedItems = () => {
	return (
		<>
		<h3 className="text-center font-bold text-3xl w-full flex-row items-center no-wrap">Browse our different categories for our broad selection of arrangements.</h3>
		<div className="carousel rounded-box max-w-[65vw] mx-auto relative">
      {SHOP_DATA.map((category) => (
        <>
          <div className="carousel-item w-full  overflow-x-hidden mx-auto h-full my-0 p-16">
            <img
              className="rounded-t-lg bg-gradient-to-tr h-full w-full object-fill  from-rose-50 to-lime-50"
              src={category.image}
              alt="item"
            />
          </div>
        </>
      ))}
    </div>
		</>
  );
};

export default FeaturedItems;
