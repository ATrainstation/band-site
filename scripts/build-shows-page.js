const posts = [
    {
        username: "Isaac Tadesse",
        date: "10/20/2023",
        comment: "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
        pfp: "",
      },
      
      {
        username: "Christina Cabrera",
        date: "10/28/2023",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        pfp: "",
      },

      {
        username: "Victor Pinto",
        date: "11/02/2023",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        pfp: "",
      },
];

renderSubmissions(posts);

const form = document.getElementById("comments-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(post) {
  post.preventDefault();

  const username = post.target.username.value;
  const date = post.target.date.value;
  const comment = post.target.comment.value;
  const pfp = post.target.pfp.value;


  const newPost = {
    username,
    date,
    comment,
    pfp,
};

if (username.length < 31) {
    alert("Sorry, your username needs to be shorter than 30 letters, please use a short form or nickname.");
    return;
}

if (comment.length < 5) {
    alert("Your comment is too short, you've gotta have more to say...");
    return;
}

submissions.push(newPost);

renderSubmissions(posts);

post.target.reset();
}

function renderSubmissions(posts) {

    posts.forEach(() => {
const article = document.createElement('article');
article.className = 'comments__post';

const pfpDiv = document.createElement('div');
pfpDiv.className = 'comments__post__pfp';

const pfpImg = document.createElement('img');
pfpImg.className = 'comments__pfp';
pfpImg.src = posts.pfp; // Set the source to the actual value from the form

pfpDiv.appendChild(pfpImg);
article.appendChild(pfpDiv);

const textDiv = document.createElement('div');
textDiv.className = 'comments__text';

const topDiv = document.createElement('div');
topDiv.className = 'comments__post__top';

const nameHeading = document.createElement('h3');
nameHeading.className = 'comments__post__name';
nameHeading.textContent = posts.username; // Set the text content to the actual value from the form

const datePara = document.createElement('p');
datePara.className = 'comments__post__date';
datePara.textContent = posts.date; // Set the text content to the actual value from the form

topDiv.appendChild(nameHeading);
topDiv.appendChild(datePara);

const commentDiv = document.createElement('div');

const commentPara = document.createElement('p');
commentPara.className = 'comments__post__comment';
commentPara.textContent = posts.comment; // Set the text content to the actual value from the form

commentDiv.appendChild(commentPara);

textDiv.appendChild(topDiv);
textDiv.appendChild(commentDiv);

article.appendChild(textDiv);

commentsContainer.appendChild(article);
})};
