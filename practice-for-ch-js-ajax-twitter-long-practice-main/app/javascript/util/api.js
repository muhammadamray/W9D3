import { custom } from "babel-loader";

const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers,
  };

  return await fetch(url, options);
}

function followUser(followUserId) {
  customFetch(`users/${followUserId}`, { method: create });
}

function unfollowUser(followUserId) {
  customFetch(`users/${followUserId}`, { method: destroy });
}
