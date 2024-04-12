"use client"
import React, { useState } from 'react';
import ArticleCard from './ArticleCard/ArticleCard';
import { BsDashLg } from 'react-icons/bs';
import { MdArrowRight } from 'react-icons/md';

const PythonArticles = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className='pt-20 pb-14'>
            <div className="flex items-center justify-between mb-3">
                <h1 className="flex items-center gap-x-4">Python <span className=""><BsDashLg /></span></h1>
                {!showAll &&
                    <button className="flex items-center" onClick={() => setShowAll(true)}>See all Category <span className="text-3xl mt-1"><MdArrowRight /></span></button>
                }
            </div>

            <div className="grid grid-cols-4 gap-x-8 gap-y-4">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                {showAll &&
                    <>
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        
                    </>
                }
            </div>

            {showAll &&
                <div className="flex justify-end">
                    <button className="flex items-center" onClick={() => setShowAll(false)}>See less Category <span className="text-3xl mt-1"><MdArrowRight /></span></button>
                </div>
            }
        </div>
    );
};

export default PythonArticles;
