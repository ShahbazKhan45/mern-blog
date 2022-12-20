import React from 'react';
import articleContent from './ArticleContent';

// Components
import Articles from '../components/Articles';

const ArticlesList = () => {
    return (
        <div className="">
            <h1 className='font-bold sm:text-4xl text-2xl mb-4'>ArticleList</h1>
            <div className="flex flex-wrap -m-4">
                <Articles articles={articleContent}/>
            </div>
        </div>
    )
}
export default ArticlesList;