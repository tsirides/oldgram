const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const post = document.getElementById("posts");
let isLiked = false;

//Read each post from the posts lists

for (let i = 0; i < posts.length; i++) {
  //Add like functionality
  function addLike(post) {
    if (!isLiked) {
      posts[post].likes += 1;
      console.log(posts[post].likes);
      // isLiked = true;
    }
    return posts[post].likes;
  }

  //Render each post

  post.innerHTML += `
    <div id="post">
        <div class="user-data">
            <img class="avatar" src="${posts[i].avatar}">
            <div class="user-info">
                <div class="name">${posts[i].name}</div>
                <div class="location">${posts[i].location}</div>
            </div>
        </div>
        <img class="post-image" src="${posts[i].post}">
        <div class="post-data">
            <ul class="post-actions">
                <li onclick="addLike(${i})" id="like"><img src="images/icon-heart.png"></li>
                <li id="comment"><img src="images/icon-comment.png"></li>
                <li id="dm"><img src="images/icon-dm.png"></li>
            </ul>
                <div class="like-count">${addLike(i)} likes</div>
        
            <div class="comments"><span class="username">${
              posts[i].username
            }</span> ${posts[i].comment}</div>
    </div>`;
}
