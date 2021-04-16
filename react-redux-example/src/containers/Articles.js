import React from "react"
import Article from "../components/Article/Article"
import AddArticle from "../components/AddArticle/AddArticle"
import { addArticle } from "../store/actionCreators"
import * as actionTypes from "../store/actionTypes"
import { connect } from 'react-redux';

const Articles = ({ articles, saveArticle }) => (
    <div>
        <AddArticle saveArticle={saveArticle} />
        {articles.map(article => (
            <Article key={article.id} article={article} />
        ))}
    </div>
);

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveArticle: article => dispatch(addArticle(article)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);