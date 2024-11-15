import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const FindUsOn = () => {
  return (
    <div>
      <p className="text-3xl font-bold mb-4">Find Us On</p>
      <div className="*:w-full">
        <button className="flex items-center gap-2 px-6 py-3  border rounded-t-lg  text-secondary text-[1rem]  active:scale-[0.9] transition-all duration-300">
          <span className="text-[#3B599C] bg-[#F3F3F3] text-4xl p-2 rounded-full">
            {" "}
            <BsFacebook />{" "}
          </span>{" "}
          <span className="text-[#706F6F] font-medium text-xl">Facebook</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-3  border-x  text-secondary text-[1rem]  active:scale-[0.9] transition-all duration-300">
          <span className="text-[#d82d7e] bg-[#F3F3F3] text-4xl p-2 rounded-full">
            {" "}
            <BsInstagram />{" "}
          </span>{" "}
          <span className="text-[#706F6F] font-medium text-xl">Instagram</span>
        </button>
        <button className="flex items-center gap-2 px-6 py-3  border rounded-b-lg  text-secondary text-[1rem] active:scale-[0.9] transition-all duration-300">
          <span className="text-[#58A7DE] bg-[#F3F3F3] text-4xl p-2 rounded-full">
            {" "}
            <BsTwitter />{" "}
          </span>{" "}
          <span className="text-[#706F6F] font-medium text-xl">Twitter</span>
        </button>
      </div>
    </div>
  );
};

export default FindUsOn;
