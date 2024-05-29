import React, { useState } from 'react';

// Two Things make a component distinctly a CONTROLLED COMPONENT:
// 1 - "value" prop on inputs
// 2 - "onChange" handler on inputs

// A controlled component gets its value from the state. The state is what controls what the value for each input will be. Inputs get their value from state.

const New = () => {
    const [newBookmark, setNewBookmark] = useState({
        name: "",
        url: "",
        category: "",
        is_favorite: false
    })

    const handleChange = (e) => {
        // console.log(e.target.name)
        setNewBookmark((prevState) => {
            return {...prevState, [e.target.name]: e.target.value }
        })
    }


    return (
        <form>
            <fieldset>
                <legend>New Bookmark</legend>
                <input 
                    type="text"
                    placeholder="Bookmark Name"
                    name="name"
                    value={newBookmark.name}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='URL'
                    name="url"
                    value={newBookmark.url}
                    onChange={handleChange}
                />
                <br/>
                <input 
                    type="text" 
                    placeholder='Category'
                    name="category"
                    value={newBookmark.category}
                    onChange={handleChange}
                />
                <br/>
                <input type="submit" value="Submit"/>
            </fieldset>
        </form>
    );
};

export default New;