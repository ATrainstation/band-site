let apiKey = "577cc8f6-2716-45b4-86a4-74684f999ada";
let api = new BandSiteApi(apiKey);

openPosts();

function clearPosts() {
  const posted = document.getElementById("comments__posted");
  while (posted.firstChild) {
    posted.removeChild(posted.firstChild);
  }
  // Clear form fields
  userNameField.value = ("");
  reviewField.value = ("");
}

async function openPosts() {
  const submissions = await api.getComments();

  const posted = document.getElementById("comments__posted");

  // Sort posts so newest are on top
  const sortedSubmissions = submissions.sort((a, b) => b.timestamp - a.timestamp);

  sortedSubmissions.forEach(function (comment) {
    // Creating and appending Html elements 
    const article = document.createElement("article");
    article.className = "comments__post";

    const pfpDiv = document.createElement("div");
    pfpDiv.className = "comments__post__pfp";

    const pfpImg = document.createElement("img");
    pfpImg.className = "comments__pfp";
    pfpImg.src = "assets/images/transparent.png";

    const contentDiv = document.createElement("div");
    contentDiv.className = "comments__container";

    article.appendChild(contentDiv);
    contentDiv.appendChild(pfpDiv);
    pfpDiv.appendChild(pfpImg);

    const textDiv = document.createElement("div");
    textDiv.className = "comments__text";

    const topDiv = document.createElement("div");
    topDiv.className = "comments__post__top";

    const nameHeading = document.createElement("h3");
    nameHeading.className = "comments__post__name";
    nameHeading.textContent = comment.name;

    // // OLD Date conversion
    // const unixEpochTimeMS = comment.timestamp;
    // const newDate = new Date(unixEpochTimeMS);

    // // Remove commas with method chain (.splt and .join)
    // const formattedDate = newDate.toLocaleString("en-US").split(", ").join(" ");
    // console.log(formattedDate);

    // Dynamic timestamp Conversion
    function formatTimestamp(timestamp) {
      const currentDate = new Date();
      const commentDate = new Date(comment.timestamp);
    
      const timeDifference = currentDate - commentDate;
      const seconds = Math.floor(timeDifference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);
      
      if (months > 12) {
        return `${years} year${years === 1 ? '' : 's'} ago`;
      } else if (months >= 1) {
        return `${months} month${months === 1 ? '' : 's'} ago`;
      }  else if (days > 0) {
        return `${days} day${days === 1 ? '' : 's'} ago`;
      } else if (hours > 0) {
        return `${hours} hour${hours === 1 ? '' : 's'} ago`;
      } else if (minutes > 0) {
        return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
      } else {
        return 'Just now';
      }
    }
    
    const formattedDate = formatTimestamp(comment.timestamp);


    const datePara = document.createElement("p");
    datePara.className = "comments__post__date";
    datePara.textContent = formattedDate;

    topDiv.appendChild(nameHeading);
    topDiv.appendChild(datePara);

    const commentDiv = document.createElement("div");

    const commentPara = document.createElement("p");
    commentPara.className = "comments__post__comment";
    commentPara.textContent = comment.comment;

    commentDiv.appendChild(commentPara);

    textDiv.appendChild(topDiv);
    textDiv.appendChild(commentDiv);
    contentDiv.appendChild(textDiv);

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.className = "comments__delete";
    deleteButton.textContent = "DELETE";

    deleteButton.dataset.commentId = comment.id;

    // Like Button
    const likeButton = document.createElement("button");
    likeButton.className = "comments__like";
    likeButton.textContent = "LIKE";

    likeButton.dataset.commentId = comment.id;

    // Delete Api interaction
    deleteButton.addEventListener("click", async function (deletePost) {
      const commentIdToDelete = deletePost.target.dataset.commentId;
      const delPostResponse = await api.deleteComment(commentIdToDelete);

      clearPosts();
      openPosts();
    });

    article.appendChild(deleteButton);

    // Like api Interaction
    likeButton.addEventListener("click", async function (likePost) {
      const commentIdToLike = likePost.target.dataset.commentId;
      const likePostResponse = await api.likeComment(commentIdToLike);

      clearPosts();
      openPosts();
    });

    article.appendChild(likeButton);
    posted.appendChild(article);

    const divider = document.createElement("div");
    divider.className = "divider";
    posted.appendChild(divider);
  });
}


const form = document.getElementById("comments-form");
const userNameField = document.getElementById("username");
const reviewField = document.getElementById("review");



form.addEventListener("submit", async function (post) {
  post.preventDefault();

  const name = userNameField.value;
  const comment = reviewField.value;

  // Validation Section
  userNameField.addEventListener("input", function () {
    if (this.value.length > 0) {
      this.classList.remove('form__field--error');
    }
  });
  
  reviewField.addEventListener("input", function () {
    if (this.value.length > 0) {
      this.classList.remove('form__field--error');
    }
  });

  let isValid = true;

  if (name.length === 0) {
    userNameField.classList.add('form__field--error');
    isValid = false;
  } else {
    userNameField.classList.remove('form__field--error');
  }

  if (comment.length === 0) {
    reviewField.classList.add('form__field--error');
    isValid = false;
  } else {
    reviewField.classList.remove('form__field--error');
  }

  if (!isValid) {
    return;
  }
  // End Validation Section


  const postCommentResponse = await api.postComment(name, comment);
  clearPosts();
  openPosts();
});

// // Add the submitted post to the array
// posts.unshift(newPost);

// clearPosts();
// // Reset placeholders in form fields
// post.target.reset();
