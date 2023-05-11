const content = document.getElementById("content");
const title = document.getElementById("title");
const image = document.getElementById("image");
const date = document.getElementById("date");

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id") || 1;
const btnlogin = document.getElementById("btnlogin");

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
    console.log(data);
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
