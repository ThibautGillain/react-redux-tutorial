import React, { useState } from "react"
import "./AddArticle.css"

const AddArticle = ({ saveArticle }) => {
    const [article, setArticle] = useState();

    const handleArticleData = e => {
        setArticle({
            ...article,
            [e.target.id]: e.target.value,
        })
    }

    const addNewArticle = e => {
        e.preventDefault();
        saveArticle(article);
    }

    return (
        <form onSubmit={addNewArticle} className="add-article">
            <input
                type="text"
                id="title"
                placeHolder="Title"
                onChange={handleArticleData}
            />

            <input
                type="text"
                id="body"
                placeHolder="Body"
                onChange={handleArticleData}
            />
        </form>
    )
}

export default AddArticle;