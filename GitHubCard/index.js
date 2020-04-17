//Mock Server creation
const express = require('express');
const app = express();
const port = 3000;


const userData = {
  "login": "Dellrodar",
  "id": 3357168,
  "node_id": "MDQ6VXNlcjMzNTcxNjg=",
  "avatar_url": "https://avatars3.githubusercontent.com/u/3357168?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Dellrodar",
  "html_url": "https://github.com/Dellrodar",
  "followers_url": "https://api.github.com/users/Dellrodar/followers",
  "following_url": "https://api.github.com/users/Dellrodar/following{/other_user}",
  "gists_url": "https://api.github.com/users/Dellrodar/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Dellrodar/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Dellrodar/subscriptions",
  "organizations_url": "https://api.github.com/users/Dellrodar/orgs",
  "repos_url": "https://api.github.com/users/Dellrodar/repos",
  "events_url": "https://api.github.com/users/Dellrodar/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Dellrodar/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 21,
  "public_gists": 0,
  "followers": 7,
  "following": 6,
  "created_at": "2013-01-23T17:13:09Z",
  "updated_at": "2020-04-14T22:52:49Z"
};

const followerData =  [
  {
    "login": "3z21",
    "id": 61799152,
    "node_id": "MDQ6VXNlcjYxNzk5MTUy",
    "avatar_url": "https://avatars2.githubusercontent.com/u/61799152?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/3z21",
    "html_url": "https://github.com/3z21",
    "followers_url": "https://api.github.com/users/3z21/followers",
    "following_url": "https://api.github.com/users/3z21/following{/other_user}",
    "gists_url": "https://api.github.com/users/3z21/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/3z21/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/3z21/subscriptions",
    "organizations_url": "https://api.github.com/users/3z21/orgs",
    "repos_url": "https://api.github.com/users/3z21/repos",
    "events_url": "https://api.github.com/users/3z21/events{/privacy}",
    "received_events_url": "https://api.github.com/users/3z21/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Jaylazer-glitch",
    "id": 59575430,
    "node_id": "MDQ6VXNlcjU5NTc1NDMw",
    "avatar_url": "https://avatars1.githubusercontent.com/u/59575430?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Jaylazer-glitch",
    "html_url": "https://github.com/Jaylazer-glitch",
    "followers_url": "https://api.github.com/users/Jaylazer-glitch/followers",
    "following_url": "https://api.github.com/users/Jaylazer-glitch/following{/other_user}",
    "gists_url": "https://api.github.com/users/Jaylazer-glitch/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Jaylazer-glitch/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Jaylazer-glitch/subscriptions",
    "organizations_url": "https://api.github.com/users/Jaylazer-glitch/orgs",
    "repos_url": "https://api.github.com/users/Jaylazer-glitch/repos",
    "events_url": "https://api.github.com/users/Jaylazer-glitch/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Jaylazer-glitch/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Ryan-webdev",
    "id": 25049020,
    "node_id": "MDQ6VXNlcjI1MDQ5MDIw",
    "avatar_url": "https://avatars1.githubusercontent.com/u/25049020?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Ryan-webdev",
    "html_url": "https://github.com/Ryan-webdev",
    "followers_url": "https://api.github.com/users/Ryan-webdev/followers",
    "following_url": "https://api.github.com/users/Ryan-webdev/following{/other_user}",
    "gists_url": "https://api.github.com/users/Ryan-webdev/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Ryan-webdev/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Ryan-webdev/subscriptions",
    "organizations_url": "https://api.github.com/users/Ryan-webdev/orgs",
    "repos_url": "https://api.github.com/users/Ryan-webdev/repos",
    "events_url": "https://api.github.com/users/Ryan-webdev/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Ryan-webdev/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "GreenKnightGoof",
    "id": 60906118,
    "node_id": "MDQ6VXNlcjYwOTA2MTE4",
    "avatar_url": "https://avatars1.githubusercontent.com/u/60906118?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/GreenKnightGoof",
    "html_url": "https://github.com/GreenKnightGoof",
    "followers_url": "https://api.github.com/users/GreenKnightGoof/followers",
    "following_url": "https://api.github.com/users/GreenKnightGoof/following{/other_user}",
    "gists_url": "https://api.github.com/users/GreenKnightGoof/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/GreenKnightGoof/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/GreenKnightGoof/subscriptions",
    "organizations_url": "https://api.github.com/users/GreenKnightGoof/orgs",
    "repos_url": "https://api.github.com/users/GreenKnightGoof/repos",
    "events_url": "https://api.github.com/users/GreenKnightGoof/events{/privacy}",
    "received_events_url": "https://api.github.com/users/GreenKnightGoof/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Spacecase94",
    "id": 45679995,
    "node_id": "MDQ6VXNlcjQ1Njc5OTk1",
    "avatar_url": "https://avatars3.githubusercontent.com/u/45679995?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Spacecase94",
    "html_url": "https://github.com/Spacecase94",
    "followers_url": "https://api.github.com/users/Spacecase94/followers",
    "following_url": "https://api.github.com/users/Spacecase94/following{/other_user}",
    "gists_url": "https://api.github.com/users/Spacecase94/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Spacecase94/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Spacecase94/subscriptions",
    "organizations_url": "https://api.github.com/users/Spacecase94/orgs",
    "repos_url": "https://api.github.com/users/Spacecase94/repos",
    "events_url": "https://api.github.com/users/Spacecase94/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Spacecase94/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "Devin44G",
    "id": 35251347,
    "node_id": "MDQ6VXNlcjM1MjUxMzQ3",
    "avatar_url": "https://avatars1.githubusercontent.com/u/35251347?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Devin44G",
    "html_url": "https://github.com/Devin44G",
    "followers_url": "https://api.github.com/users/Devin44G/followers",
    "following_url": "https://api.github.com/users/Devin44G/following{/other_user}",
    "gists_url": "https://api.github.com/users/Devin44G/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Devin44G/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Devin44G/subscriptions",
    "organizations_url": "https://api.github.com/users/Devin44G/orgs",
    "repos_url": "https://api.github.com/users/Devin44G/repos",
    "events_url": "https://api.github.com/users/Devin44G/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Devin44G/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "YorAlexVargas",
    "id": 48666085,
    "node_id": "MDQ6VXNlcjQ4NjY2MDg1",
    "avatar_url": "https://avatars1.githubusercontent.com/u/48666085?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/YorAlexVargas",
    "html_url": "https://github.com/YorAlexVargas",
    "followers_url": "https://api.github.com/users/YorAlexVargas/followers",
    "following_url": "https://api.github.com/users/YorAlexVargas/following{/other_user}",
    "gists_url": "https://api.github.com/users/YorAlexVargas/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/YorAlexVargas/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/YorAlexVargas/subscriptions",
    "organizations_url": "https://api.github.com/users/YorAlexVargas/orgs",
    "repos_url": "https://api.github.com/users/YorAlexVargas/repos",
    "events_url": "https://api.github.com/users/YorAlexVargas/events{/privacy}",
    "received_events_url": "https://api.github.com/users/YorAlexVargas/received_events",
    "type": "User",
    "site_admin": false
  }
];

app.get('/Dellrodar', (req, res) => res.send(userData));

app.get('/Dellrodar/followers', (req, res) => res.send(followerData));

app.listen(port, () => console.log(`Mock Github API listening at http://localhost:${port}`));



/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/*
response: "{↵  "login": "Dellrodar",↵  "id": 3357168,↵  "node_id": "MDQ6VXNlcjMzNTcxNjg=",↵  "avatar_url": "https://avatars3.githubusercontent.com/u/3357168?v=4",↵
"gravatar_id": "",↵  "url": "https://api.github.com/users/Dellrodar",↵  "html_url": "https://github.com/Dellrodar",↵  "followers_url": "https://api.github.com/users/Dellrodar/followers",
↵  "following_url": "https://api.github.com/users/Dellrodar/following{/other_user}",↵  "gists_url": "https://api.github.com/users/Dellrodar/gists{/gist_id}",↵
"starred_url": "https://api.github.com/users/Dellrodar/starred{/owner}{/repo}",↵  "subscriptions_url": "https://api.github.com/users/Dellrodar/subscriptions",↵
"organizations_url": "https://api.github.com/users/Dellrodar/orgs",↵  "repos_url": "https://api.github.com/users/Dellrodar/repos",↵
"events_url": "https://api.github.com/users/Dellrodar/events{/privacy}",↵  "received_events_url": "https://api.github.com/users/Dellrodar/received_events",↵
"type": "User",↵  "site_admin": false,↵  "name": null,↵  "company": null,↵  "blog": "",↵  "location": null,↵  "email": null,↵  "hireable": null,↵
"bio": null,↵  "public_repos": 21,↵  "public_gists": 0,↵  "followers": 7,↵  "following": 6,↵  "created_at": "2013-01-23T17:13:09Z",↵  "updated_at": "2020-04-14T22:52:49Z"↵}↵"
*/

/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/
/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

//Parent Container
const cards = document.querySelector(".cards");

//Top card div
function cardCreator(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  //image start
  const cardImg = document.createElement("img");
  cardImg.src = user.avatar_url;
  card.appendChild(cardImg);

  //Card info div
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  card.appendChild(cardInfo);

  //Card Info heading
  const userRealName = document.createElement("h3");
  userRealName.textContent = `${user.name}`;
  userRealName.classList.add("name");
  cardInfo.appendChild(userRealName);

  //Card Info User Name
  const userName = document.createElement("p");
  userName.textContent = `UserName: ${user.login}`;
  userName.classList.add("username");
  cardInfo.appendChild(userName);

  //Card Info Location
  const userLocation = document.createElement("p");
  userLocation.textContent = `Location: ${user.location}`;
  cardInfo.appendChild(userLocation);

  //Card info Github Link Container
  const githubLinkContainer = document.createElement("p");
  githubLinkContainer.textContent = `Profile: ${user.location}`;
  cardInfo.appendChild(githubLinkContainer);

  //Card Info Github Link
  const githubLink = document.createElement("a");
  githubLink.textContent = `${user.html_url}`;
  githubLink.href = `${user.html_url}`;
  githubLinkContainer.appendChild(githubLink);

  //Card Info Followers Count
  const followers = document.createElement("p");
  followers.textContent = `Followers: ${user.followers}`;
  cardInfo.appendChild(followers);

  //Card Info Following Count
  const followingUsers = document.createElement("p");
  followingUsers.textContent = `Following: ${user.following}`;
  cardInfo.appendChild(followingUsers);

  //Card Info Bio
  const userBio = document.createElement("p");
  userBio.textContent = `Bio: ${user.bio}`;
  cardInfo.appendChild(userBio);

  return card;
}

//API Data retrieval
//const baseUrl = 'https://api.github.com/users';
//const user = 'Dellrodar';
  axios
    .get("https://api.github.com/users/Dellrodar")
    .then((user) => cards.appendChild(cardCreator(user.data)))
    .then(followersArray.map( follower => {
    axios.get(`https://api.github.com/users/${follower}`)
      .then((user) => {
        cards.appendChild(cardCreator(user.data))
  })
}));

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
