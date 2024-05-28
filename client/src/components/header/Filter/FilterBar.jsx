import { useEffect, useRef, useState } from "react";
import FilterItem from "./FilterItem";
import { topics } from "../../CreateNew/suggestion";

const FilterBar = () => {
  const carouselRef = useRef(null);
  const [isLast, setIsLast] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current.scrollLeft === 0) {
        setIsFirst(true);
      } else {
        setIsFirst(false);
      }
      if (
        Math.round(carouselRef.current.scrollLeft) ===
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      ) {
        setIsLast(true);
      } else {
        setIsLast(false);
      }
    };

    carouselRef?.current?.addEventListener("scroll", handleScroll);

    return () => {
      carouselRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex items-center mx-8 overflow-x-hidden">
      <div className="bg-custom-gradient-hz-light w-20 max-sm:w-10 text-left dark:bg-custom-gradient-hz-dark absolute left-0">
        <button
          className={`
      ${isFirst ? "hidden" : ""}
       z-10 p-2 text-xl font-bold text-gray-950 rounded-full focus:outline-none dark:text-gray-100`}
          onClick={scrollLeft}>
          &lt;
        </button>
      </div>
      <div
        className="flex overflow-x-auto scrollbar-hide space-x-4 py-4 max-w-[90%] max-sm:px-12 max-sm:max-w-[100%] mx-auto"
        ref={carouselRef}>
        {topics.slice(0, 30).map((item) => (
          <FilterItem
            key={item.id}
            title={item.text}
          />
        ))}
      </div>

      <div className="bg-custom-gradient-ht-light w-20 max-sm:w-10 text-right dark:bg-custom-gradient-ht-dark absolute right-0">
        <button
          className={`
        ${isLast ? "hidden" : ""}
        z-10 p-2 text-xl font-bold text-gray-950 dark:text-gray-100 rounded-full focus:outline-none`}
          onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
