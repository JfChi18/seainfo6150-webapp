import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import {Link} from "react-router-dom";


const DynamicArticle = ({article}) => {
  return (
    <article>
      <header>
        <Link to="/articlelist">Back</Link>
        <h1>{article.title}</h1>
        <address>{article.author} (
          <a href={"mailto:" + article.authorEmail}>{article.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={article.timeStamp}>{article.displayDate}</time>
        <br />
      
      </header> 
    
      <HTMLText text={article.text} />
    </article>
  );
};

export default DynamicArticle;
