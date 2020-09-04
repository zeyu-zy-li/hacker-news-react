import React, { useState, useEffect } from "react";
import { getStory } from "../service/hnAPI";

export default function Story(props) {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(props.id).then((resp) => {
            setStory(resp);
        })
    }, [props.id])
    return (
    <li className="list-group-item">
        <a href={story.url} >
            {story.title}
        </a>
    </li>
    );
}