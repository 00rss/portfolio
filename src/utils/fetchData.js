export const getRepositories = () => {
  fetch("https://api.github.com/users/00rss/repos")
    .then((res) => (res.status == 200 ? res.json() : null))
    .then((data) => data && console.log(data));
};
