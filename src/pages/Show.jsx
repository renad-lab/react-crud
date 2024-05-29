import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Show = () => {
    const { id } = useParams()
    const API = import.meta.env.VITE_BASE_URL
    const [bookmark, setBookmark] = useState({
        name: "",
        url: "",
        category: "",
        is_favorite: false
    })

    useEffect(() => {
        //                      API                               ID
        // https://bookmarks-api-720.onrender.com/bookmarks + / + 5
        fetch(`${API}/${id}`)
            .then(res => res.json())
            .then(res => {
                setBookmark((prevState) => res)
            })
        }, [id])

    return (
        <div>
            <h3>{bookmark.name}</h3>
            <a href={bookmark.url} target="_blank">{bookmark.url}</a>
            <p>Category: {bookmark.category}</p>
        </div>
    );
};

export default Show;