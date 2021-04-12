import React from "react";
import HTMLText from "../HTMLText/HTMLText";
import {Link} from "react-router-dom";
import styles from './DynamicArticle.module.css';
import ArticleImage from "../ArticleImage/ArticleImage.jsx";


const DynamicArticle = ({article}) => {
  return (
    <div>
        <Link to="/articlelist"><span className={styles.linkButton}>Back</span></Link>
        <article className={styles.articleContainer}>
        <ArticleImage url={article.image._url} title={article.title}/>
        <h1>{article.title}</h1>
        <address>{article.author} (
          <a href={"mailto:" + article.authorEmail}>{article.authorEmail}</a>)
          <br />
        </address>
        <time dateTime={article.timeStamp}>{article.displayDate}</time>
        <br />
        <div className={styles.content}>
      <HTMLText text={article.text} />
      </div> 
      </article>
    </div>
  );
};

export default DynamicArticle;