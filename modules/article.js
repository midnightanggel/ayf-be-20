const btnlogin = document.getElementById("btnlogin")

const logout = () => {
  localStorage.removeItem("user");
  window.location.reload();
}

const isLogin = () => {
  if (localStorage.getItem("user") != null){
    btnlogin.innerHTML = `<a id="btnlogout">
    <button class="btn btn-primary text-white" type="submit" >Logout</button>
</a>`;
    const btnlogout = document.getElementById("btnlogout");
    btnlogout.addEventListener("click", logout);
  }
}

isLogin()




