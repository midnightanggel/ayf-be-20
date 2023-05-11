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

const getArticles = async () => {
  try {
    const res = await fetch(
      "https://6450c07fa32219691150eb05.mockapi.io/ayo-api/articles",
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    );
    const data = await res.json();

    if (data.length > 0) {
      data.forEach((el) => {
        articles.innerHTML += ` <div class="col-lg-3 col-md-6 mb-3">
        <a href="./article_detail.html?id=${el.id}">
          <div class="card card-article" style="width: 16rem">
            <img
              src="${el.image}"
              class="card-img-top p-2"
              alt="foto.jpg"
              style="height: 200px"
            />
            <div class="card-body">
              <p class="card-text text-dark">
                ${el.title}
              </p>
            </div>
          </div>
        </a>
      </div>`;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

getArticles();
