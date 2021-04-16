import React, { useState } from "react"
import Article from "../components/Article/Article"
import AddArticle from "../components/AddArticle/AddArticle"

const initArticles = [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ];

const Articles = () => {
    const [articles, setArticles] = useState(initArticles);

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

export default Articles;