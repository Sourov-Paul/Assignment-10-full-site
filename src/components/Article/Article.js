import React, { useState,useEffect } from 'react';
import DetailsArticle from '../detailsArticle/DetailsArticle';
const Article = () => {
const [articles,setArticles]=useState([]);

useEffect(()=>{
    const url="article.json";
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data))
},[ ])

   
    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5 tips">Health Tips</h1>
                <div className="row">
                    {
                        articles.map((article)=><DetailsArticle key={article.id} article={article}></DetailsArticle>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Article;