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

export function getStoryIds(filter) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                resolve(JSON.parse(this.responseText));
            }
        };
        xhr.open("GET", `${baseUrl}${filter}stories.json`);
        xhr.send();
    });
}

export function getStory(id) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(this.responseText));
            }
        };
        xhr.open("GET", `${storyUrl}${id}.json`);
        xhr.send();
    });
}
