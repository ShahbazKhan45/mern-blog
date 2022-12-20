import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({ articles }) => {
    return (
        <>
            {articles.map((article, index) => (
                <div key={index} className="py-5 px-3 md:w-1/2">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <Link to={`/article/${article.name}`}>
                            <img className='lg:h-40 md:h-30 w-full object-cover object-center' src={article.thumbnail} alt="Blog-Image" />
                        </Link>
                        <div className="p-6">
                            <Link key={index} to={`/article/${article.name}`}>
                                <h3 className='text-medium font-bold text-gray-900'>
                                    {article.title}
                                </h3>
                            </Link>
                            <p className="leading-relaxed font-light text-gray-900 py-4">
                                {article.content[0].substring(0, 113)}...
                            </p>
                            <div className="flex flex-wrap item-center">
                                <Link key={index} to={`/article/${article.name}`}
                                    className='text-indigo-500 flex-inline items-center'>
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Articles;
