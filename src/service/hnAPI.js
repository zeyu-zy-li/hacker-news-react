//import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
// const baseUrl = "http://localhost:8000/";
const storyUrl = `${baseUrl}item/`;

// export function getStoryIds(filter) {
//     return axios.get(`${baseUrl}${filter}stories.json`);
// }

// export function getStory(id) {
//     return axios.get(`${storyUrl}${id}.json`);
// }

export async function getStoryIds(filter) {
    let data = await fetch(`${baseUrl}${filter}stories.json`);
    return await data.json()        
}

export async function getStory(id) {
    let data = await fetch(`${storyUrl}${id}.json`);
    return await data.json()
}
