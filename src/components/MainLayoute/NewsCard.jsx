import { AiFillStar, AiOutlineEye } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

const NewsCard = ({ newsData }) => {
  console.log(newsData);
  const { author, title,  thumbnail_url, details, rating, total_view
  } = newsData;
  const { img, name, published_date,} = author;
  return (
    <div className="border mb-4  rounded-t-lg">
      <div className="flex items-center justify-between bg-[#F3F3F3]  p-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 ">
            <img className="rounded-full" src={img} alt="" />
          </div>
          <div>
            <h4 className="font-semibold  text-[#403F3F]">{name}</h4>
            <p className="text-[#706F6F] text-sm">{published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-2xl ">
          <CiBookmark />
          <CiShare2 />
        </div>
      </div>
      <div className="px-4">
        <h2 className="text-xl   my-4 font-bold text-[#403F3F] ">{title}</h2>
        <div className="h-[362px] w-[618px] mx-auto "  >
          <img className="w-full h-full object-fill" src={thumbnail_url} alt="" />
        </div>
        <div className="my-4 border-b-2 pb-4"><p>{details
        }</p></div>
         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {/* Star Ratings */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        {[...Array(5)].map((_, index) => (
          <AiFillStar key={index} color="#f28b02" size={20} />
        ))}
        <span style={{ fontSize: '1rem', color: '#333' }}>{rating.number}</span>
      </div>

      {/* Divider Line */}
      <div style={{ height: '1px', width: '100%', backgroundColor: '#ddd', margin: '0 8px' }}></div>

      {/* View Count */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <AiOutlineEye color="#333" size={20} />
        <span style={{ fontSize: '1rem', color: '#333' }}>{total_view
        }</span>
      </div>
    </div>
      </div>
    </div>
  );
};

export default NewsCard;
