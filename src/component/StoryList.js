import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../service/hnAPI';
import Story from "./Story";

function StoryList(props) {
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds(props.filter).then((resp) => {
      setStoryIds(resp.data);
    })
  }, [props.filter])

  const items = storyIds.slice(0, 10).map(storyId => (
    <Story key={storyId} id={storyId} />
  ));
  return (
    <div className="">
      <ul className="list-group">
        {items}
      </ul>
    </div>
  );
}

export default StoryList;
