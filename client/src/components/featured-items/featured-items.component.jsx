import { FEATURED_ITEM_DATA } from "../../pages/shop/shop.data";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
const FeaturedItems = () => {
  return (
    <section className="flex flex-row items-center w-full pt-24 mx-auto justify-evenly">
    <div className="flex flex-col items-start w-[40vw]">
		  <h1 className="text-left text-7xl w-full flex-row items-center no-wrap font-[Urbanist]">
        Featured Items <br />
        <small className="flex flex-col items-start text-left w-[40vw] text-xl">
          Browse through some of our featured items, or select a category below
          to find your desired arrangement.{" "}
        </small>
      </h1>
			</div>
      <ArrowLeftIcon height={"32px"} width={"32px"} />
      <div className="relative w-auto h-full mx-40 carousel rounded-box">
        {FEATURED_ITEM_DATA.map((item) => (
          <>
            <div className="carousel-item w-[20vw] min-h-[64vh] overflow-x-hidden mx-0 h-full my-0 p-16">
              <div className="relative block w-full shadow-xl group bg-gradient-to-tr from-rose-50 to-lime-50 via-sky-50">
                <img
                  className="absolute object-contain w-full h-full p-8 overflow-hidden transition-opacity opacity-100 group-hover:opacity-50"
                  src={item.imageUrl}
                  alt="item"
                />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-3xl font-light uppercase tracking-widest text-slate-900 font-[Urbanist] text-right">
                    {item.name}
                  </p>
                  <p className="text-xl font-bold text-rose-500 sm:text-2xl font-[Urbanist] text-right">
                    $ {item.pricingText.toFixed(2)}
                  </p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div className="transition-all transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="max-h-1/3 text-xl w-full text-slate-900 font-[Urbanist] mb-0 flex flex-row items-end leading-none tracking-tight truncate text-ellipsis">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <ArrowRightIcon height={"32px"} width={"32px"} />
    </section>
  );
};

export default FeaturedItems;
