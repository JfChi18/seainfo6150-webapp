import React, { Fragment, useState } from "react";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import {Link} from "react-router-dom";
import styles from './ArticleListItem.module.css';

const ArticleListItem = ({article}) => {
  const [showDetails, setShowDetails] = useState(false);

  let buttonText = 'Show more';

  if (showDetails) {
    buttonText = 'Show less';
  }

  const onClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <article className={styles.item}>
      <Link to={'/articlelist/'+ article.slug}>
        <h3 className={styles.articleListItem}>{article.title}</h3>
      </Link>
      {showDetails && (
        <Fragment>
          <b><time dateTime={article.timeStamp}>{article.displayDate}</time></b>
          <p>{article.shortText}</p>
        </Fragment>
      )}
      <ArticleTextToggleButton buttonText={buttonText} onClick={onClick}/>
    </article>
  );
};

export default ArticleListItem;
