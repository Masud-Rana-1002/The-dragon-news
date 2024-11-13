import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <div className="flex items-center bg-gray-200 space-x-1 ">
      <button className="text-white text-xl font-medium bg-[#D72050] py-2 px-4 "> Latest
      </button>
     <div className="text-lg font-semibold py-2">
     <Marquee>
     Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
     </Marquee>
     </div>
    </div>
  );
};

export default Marquees;
