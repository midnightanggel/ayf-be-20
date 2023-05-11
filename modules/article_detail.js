const content = document.getElementById("content");
const title = document.getElementById("title");
const image = document.getElementById("image");
const date = document.getElementById("date");
const comments = document.getElementById("comments");
const commentForm = document.getElementById("commentForm");
const btnComment = document.getElementById("btn-comment");
const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id") || 1;
const btnlogin = document.getElementById("btnlogin");
const commentLayout = document.getElementById("comment-layout");

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

const isLogin = () => {
  if (localStorage.getItem("user") != null) {
    btnlogin.innerHTML = `<a id="btnlogout">
    <button class="btn btn-primary text-white" type="submit" >Logout</button>
</a>`;
    const btnlogout = document.getElementById("btnlogout");
    btnlogout.addEventListener("click", logout);
  } else {
    commentLayout.innerHTML = `<h5>Please log in to your account so you can participate</h5> <a href="./Login.html">Login</a>`;
  }
};

isLogin();

const getArticleDetail = async () => {
  try {
    const res = await fetch(
      `https://6450c07fa32219691150eb05.mockapi.io/ayo-api/articles?id=${id}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.length > 0) {
      title.textContent = data[0].title;
      date.textContent = data[0].publishedAt;
      image.src = data[0].image;
      content.innerHTML = data[0].content
        .split(". ")
        .map(
          (el) => `
    ${el}.<br>
    `
        )
        .join("");
    }
  } catch (error) {
    console.log(error);
  }
};

getArticleDetail();

const getComments = async () => {
  try {
    const res = await fetch(
      `https://6450c07fa32219691150eb05.mockapi.io/ayo-api/comments?articleId=${id}`,
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await res.json();
    if (data.length > 0) {
      comments.innerHTML = "";
      data.forEach((el) => {
        comments.innerHTML += `
        <div class="container">
        <div class="d-flex align-items-start">
            <img src="${el.image}" width="30px" height="30px">
            <h6 class="p-1"><strong>${el.fullName}</strong></h6>
        </div>
        <div>
            <p class="ps-5 mt-1" >${el.comment}</p>
        </div>
    </div>`;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

getComments();

const postComment = async (e) => {
  const user = JSON.parse(localStorage.getItem("user"));

  e.preventDefault();
  try {
    if (commentForm.value != "") {
      await fetch(
        "https://6450c07fa32219691150eb05.mockapi.io/ayo-api/comments",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            createdAt: date,
            fullName: user.fullname,
            comment: commentForm.value,
            articleId: id,
          }),
        }
      );
      commentForm.value = "";
      getComments();
    }
  } catch (error) {
    console.log(error);
  }
  getComments();
};

btnComment.addEventListener("click", postComment);
