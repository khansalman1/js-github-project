// Tasks:
// -Grab search element
const searchUser = document.querySelector('#github-form');
// -Grab div that will display the data
const userList = document.querySelector('#user-list');
// console.log(userList);

const getData = async (url) => {
    const response = await fetch(url, { headers: {'Accept': 'application/vnd.github.v3+json'} });
    const data = await response.json();
    return data;
  }
  
  const createHtml = (imagesrc, username, profile) => {
    return `<li>${username}</li>
    <img src="${imagesrc}" alt="" width="400" height="400" />
    <a href="${username}" >
    <li>${profile}</li>
    `};
    
    
// -When we click search we want:
searchUser.addEventListener('submit', async (e) => {
    e.preventDefault();

    const usernameInputValue = document.querySelector('#search').value;
    console.log(usernameInputValue);
    const serverResponse = await getData(`https://api.github.com/search/users?q=${usernameInputValue}`);
    
    
    console.log(serverResponse);
    console.log(serverResponse.items[0].avatar_url);
    // -Grab data from the text input field

    userList.innerHTML = createHtml(serverResponse.items[0].avatar_url, serverResponse.items[0].login, serverResponse.items[0].url);
    

    // -Use that data to grab user info from the Github API


   // -Display the response data from the Github API
});


