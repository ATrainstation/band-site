let apiKey = '577cc8f6-2716-45b4-86a4-74684f999ada';
let api = new BandSiteApi(apiKey);



openPosts();

function clearPosts() {
  const posted = document.getElementById('comments__posted');
  while (posted.firstChild) {
    posted.removeChild(posted.firstChild);

  }
};

async function openPosts() {

  const submissions = await api.getComments()
  console.log(submissions);

  const posted = document.getElementById('comments__posted');

  submissions.forEach(function (comment) {
    const article = document.createElement('article');
    article.className = 'comments__post';

    const pfpDiv = document.createElement('div');
    pfpDiv.className = 'comments__post__pfp';

    const pfpImg = document.createElement('img');
    pfpImg.className = 'comments__pfp';
    pfpImg.src = "assets/images/transparent.png";
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'comments__container';

    article.appendChild(contentDiv);
    contentDiv.appendChild(pfpDiv);
    pfpDiv.appendChild(pfpImg);
    

    const textDiv = document.createElement('div');
    textDiv.className = 'comments__text';


    const topDiv = document.createElement('div');
    topDiv.className = 'comments__post__top';

    const nameHeading = document.createElement('h3');
    nameHeading.className = 'comments__post__name';
    nameHeading.textContent = comment.name;

    const datePara = document.createElement('p');
    datePara.className = 'comments__post__date';
    datePara.textContent = comment.timestamp;

    

    topDiv.appendChild(nameHeading);
    topDiv.appendChild(datePara);

    const commentDiv = document.createElement('div');

    const commentPara = document.createElement('p');
    commentPara.className = 'comments__post__comment';
    commentPara.textContent = comment.comment;

    commentDiv.appendChild(commentPara);

   

    textDiv.appendChild(topDiv);
    textDiv.appendChild(commentDiv);
    contentDiv.appendChild(textDiv);

    // Delete Button
    const deleteButton = document.createElement('button')
    deleteButton.className = 'comments__delete';
    deleteButton.textContent = 'DELETE';

    deleteButton.dataset.commentId = comment.id;

    // Like Button
    const likeButton = document.createElement('button')
    likeButton.className = 'comments__delete';
    likeButton.textContent = 'LIKE';

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

    const divider = document.createElement('div');
    divider.className = 'divider';
    posted.appendChild(divider);


     
    

  })
};

const form = document.getElementById('comments-form')

form.addEventListener("submit", async function (post) {
  post.preventDefault();

  const username = post.target.username.value;
  const review = post.target.review.value;

  const postData = {
    name: username,
    comment: review,
  }

    const postCommentResponse = await api.postComment(JSON.stringify(postData));
    clearPosts()
    openPosts();
});


 
  // VALIDATION SECTION

  const userNameField = document.getElementById('username');
  const reviewField = document.getElementById('review');

  // if (username.length === 0 || review.length === 0) {

  //   if (username.length === 0 && review.length === 0) {
  //     userNameField.classList.add('form__field--error');
  //     userNameField.removeAttribute('placeholder');
  //     reviewField.classList.add('form__field--error');
  //     reviewField.removeAttribute('placeholder');
  //     return;

  //   } else if (username.length === 0) {
  //     userNameField.classList.add('form__field--error');
  //     userNameField.removeAttribute('placeholder');
  //     return;
  //   }
  //   else if (review.length === 0) {
  //     reviewField.classList.add('form__field--error');
  //     reviewField.removeAttribute('placeholder');
  //     return;
  //   }
  //   else {
  //     userNameField.classList.remove('form__field--error');
  //     reviewField.classList.remove('form__field--error');
  //   }
  // };



// // Add the submitted post to the array
// posts.unshift(newPost);


// clearPosts();
// // Reset placeholders in form fields
// post.target.reset();