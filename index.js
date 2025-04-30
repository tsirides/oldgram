const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    liked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    liked: false,
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
    liked: false,
  },
];

const post = document.getElementById("posts");

for (let i = 0; i < posts.length; i++) {
  //Add like functionality

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
        <img ondblclick="addLike(${i})" class="post-image" src="${posts[i].post}">
        <div class="post-data">
            <ul class="post-actions">
                <li onclick="addLike(${i})" id="like-${i}"><img src="images/icon-heart.png"></li>
                <li id="comment"><img src="images/icon-comment.png"></li>
                <li id="dm"><img src="images/icon-dm.png"></li>
            </ul>
                <div class="likes like-count-${i}">${posts[i].likes} likes</div>                
            <div class="comments"><span class="username">${posts[i].username}</span> ${posts[i].comment}</div>
            
    </div>`;

  function addLike(post) {
    if (posts[post].liked === false) {
      let likeCount = document.querySelector(`.like-count-${post}`);
      //let postLikes = posts[post].likes;
      posts[post].likes += 1;
      likeCount.textContent = `${posts[post].likes} likes`;
      posts[post].liked = true;
    }
  }
}
