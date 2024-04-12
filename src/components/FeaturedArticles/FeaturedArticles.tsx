"use client"
import React, { useEffect } from 'react';
import PythonArticles from './PythonArticles';
import HtmlArticles from './HtmlArticles';
import CssArticles from './CssArticles';
import JavascriptArticles from './JavascriptArticles';
import DjangoArticles from './DjangoArticles';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const FeaturedArticles = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <div className='pt-20 pb-14'>
      <h1>
        <span className="text-3xl text-slate-300 rounded font-bold">Featured Articles</span>
      </h1>

      <div data-aos="fade-up-right">
        <PythonArticles />
      </div>
      <div data-aos="fade-up-left">
        <HtmlArticles />
      </div>
      <div data-aos="fade-up-right">
        <CssArticles />
      </div>
      <div data-aos="fade-up-left">
        <JavascriptArticles />
      </div>
      <div data-aos="flip-right">
        <DjangoArticles />
      </div>
    </div>
  );
};

export default FeaturedArticles;
