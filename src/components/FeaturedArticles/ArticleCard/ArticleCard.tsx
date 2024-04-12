import React from 'react';

const ArticleCard = () => {
    return (
        <div className='flex flex-col  p-3 text-black bg-white rounded'>
           <div>
            <img src="https://img.freepik.com/free-photo/php-programming-html-coding-cyberspace-concept_53876-124097.jpg?w=740" alt="" />
            <h1>Fundamental of Javascript</h1>
           </div>
           <div className='flex  items-center gap-x-10 pt-5'>
            <img className='w-20 h-20 rounded-full' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740" alt="" />
            <div>
                <h1>Sazid</h1>
                <p>Jan 10, 2022</p>
            </div>
           </div>
        </div>
    );
};

export default ArticleCard;