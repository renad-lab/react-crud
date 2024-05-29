import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Index = () => {
    const [bookmarks, setBookmarks] = useState([])
    const API = import.meta.env.VITE_BASE_URL
    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => {
                setBookmarks(res)
            })
    }, [])


    return (
        <div>
            {bookmarks.map((bookmark) => {
                return(
                    <Link to={`/bookmarks/${bookmark.id}`} key={bookmark.id}>{bookmark.name}</Link>
                )
            })}
        </div>
    );
};

export default Index;