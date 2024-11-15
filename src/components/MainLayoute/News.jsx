
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const News = () => {

  const {data} = useLoaderData()


  return (
    <div>
      <p className="text-3xl font-bold mb-4">Dragon News Home</p>
    {
      data.map(newsData => <NewsCard newsData={newsData}></NewsCard>)
    }
    </div>
  );
};

export default News;