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
  "Dellrodar",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
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
axios
  .get("https://api.github.com/users/Dellrodar")
  .then((obj) => cardCreator(obj.data));
for (let i = 0; i < followersArray.length; i++) {
  axios
    .get(`https://api.github.com/users/${followersArray[i]}`)
    .then((res) => {
      cards.appendChild(cardCreator(res.data));
    })
    .catch((err) => console.error(err));
}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/