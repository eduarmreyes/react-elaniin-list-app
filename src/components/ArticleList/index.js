import React from 'react';
import logo from 'loading.svg';

const ArticleList = props =>
  <div>
    { (props.articles.length)
      ? ''
      : <img src={logo} alt="logo" />
    }
    <ul>
      { props.articles.map(a => (
        <li key={ a.id } >
          { a.title } - { a.byline }
        </li>
      )) }
    </ul>
  </div>

export default ArticleList;