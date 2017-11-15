import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from 'components/ArticleList';

class ArticleListContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    const url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/1.json";
    axios.get(url, {
      params: {
        'api-key': "1b876237e234424cb886e74802fb508e",
      }
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({
          articles: response.data.results
        })
      }
    })
    .catch((response) =>{
      console.error(response);
    });
  }

  render() {
    return <ArticleList articles={ this.state.articles } />;
  }
}

export default ArticleListContainer;