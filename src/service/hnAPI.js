import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
// const baseUrl = "http://localhost:8000/";
const storyUrl = `${baseUrl}item/`;

export function getStoryIds(filter) {
    return axios.get(`${baseUrl}${filter}stories.json`);
}

export function getStory(id) {
    return axios.get(`${storyUrl}${id}.json`);
}

