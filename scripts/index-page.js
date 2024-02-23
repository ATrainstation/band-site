document.addEventListener('DOMContentLoaded', function () {

const posts = [
  {
    username: "Victor Pinto",
    date: "11/02/2023",
    pfp: "",
    review: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    
  },
  {
    username: "Christina Cabrera",
    date: "10/28/2023",
    pfp: "",
    review: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",

  },

  {
        username: "Isaac Tadesse",
        date: "10/20/2023",
        pfp: "",
        review: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
       
      },
];

openPosts();

const form = document.getElementById('comments-form')
form.addEventListener("submit", function (post) {
  post.preventDefault();

  const username = post.target.username.value;
  const review = post.target.review.value;
  const date = new Date();

  // Format date and time
  const formattedDate = date.toLocaleDateString( {
    
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
});

// turn variables to objects
  const newPost = {
    username,
    review,
    date: formattedDate,
};


// VALIDATION SECTION


if (username.length > 31) {
    alert("Sorry, your username needs to be shorter than 30 letters, please use a short form or nickname.");
    return;
}

  if (review.length < 5) {
    alert("Your comment is too short, you've gotta have more to say...");
    return;
}




// Add the submitted post to the array


posts.unshift(newPost);

clearPosts();
// Add the submitted post to the previously posted
openPosts();

// Reset placeholders in form fields
post.target.reset();


});

function clearPosts() {
  const posted = document.getElementById('comments__posted');
  while (posted.firstChild) {
      posted.removeChild(posted.firstChild);
  }
}


function openPosts() {
  const posted = document.getElementById('comments__posted');

  posts.forEach(function (comment) {
const article = document.createElement('article');
article.className = 'comments__post';

const pfpDiv = document.createElement('div');
pfpDiv.className = 'comments__post__pfp';

const pfpImg = document.createElement('img');
pfpImg.className = 'comments__pfp';
pfpImg.src = "assets/images/transparent.png"; 

pfpDiv.appendChild(pfpImg);
article.appendChild(pfpDiv);

const textDiv = document.createElement('div');
textDiv.className = 'comments__text';

const topDiv = document.createElement('div');
topDiv.className = 'comments__post__top';

const nameHeading = document.createElement('h3');
nameHeading.className = 'comments__post__name';
nameHeading.textContent = comment.username; 

const datePara = document.createElement('p');
datePara.className = 'comments__post__date';
datePara.textContent = comment.date; 

topDiv.appendChild(nameHeading);
topDiv.appendChild(datePara);

const commentDiv = document.createElement('div');

const commentPara = document.createElement('p');
commentPara.className = 'comments__post__comment';
commentPara.textContent = comment.review;

commentDiv.appendChild(commentPara);

textDiv.appendChild(topDiv);
textDiv.appendChild(commentDiv);

article.appendChild(textDiv);

posted.appendChild(article);

const divider = document.createElement('div');
divider.className = 'divider';
posted.appendChild(divider);

});
}
});