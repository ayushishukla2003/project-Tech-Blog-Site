

import React from 'react';
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className='p-4 w-full md:w-1/2 lg:w-1/3'>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Link to={`/article/${article.name}`}>
              <img
                className="h-32 md:h-48 w-full object-contain"
                src={article.thumbnail}
                alt={article.title}
              />
            </Link>
            <div className='p-4 md:p-6'>
              <Link to={`/article/${article.name}`}>
                <h3 className='text-sm md:text-lg font-medium text-gray-900 mb-2 md:mb-3'>
                  {article.title}
                </h3>
              </Link>
              <p className='leading-relaxed mb-3 text-xs md:text-base'>
                {article.content[0]?.substring(0, 110)}...
              </p>
              <div className='flex items-center flex-wrap'>
                <Link className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' to={`/article/${article.name}`}>
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Articles;
