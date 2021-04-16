import React from "react"
import Article from "../components/Article/Article"
import AddArticle from "../components/AddArticle/AddArticle"
import { connect } from 'react-redux';

const Articles = ({ articles }) => {
    const saveArticle = e => {
        e.preventDefault();
    }

    return (
        <div>
            <AddArticle saveArticle={saveArticle} />
            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Articles);