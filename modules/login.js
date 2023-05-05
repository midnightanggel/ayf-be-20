// window.location.href = "../index.html";
const email = document.getElementById("email");
const password = document.getElementById("password");
const warning = document.getElementById("warning");
const form = document.getElementsByTagName("form")[0];
const navbar = document.getElementById("change");

const validate = () => {
  return email.value != "" && password.value != "";
};

const handleLogin = async (e) => {
  e.preventDefault();
  if (validate()) {
    warning.classList.add("hidden");
    try {    
      const res = await fetch(
        "https://6453cc52e9ac46cedf301137.mockapi.io/users?" +
          new URLSearchParams({ email: email.value }),
        {
          method: "GET",
          headers: { "content-type": "application/json" },
        }
      );console.log(res.json)
      const data = await res.json();
      if (data.length > 0) {
        warning.textContent = "Data cannot be empty";
        warning.classList.add("hidden");
        if (data[0].password == password.value) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              fullname: data[0].fullname,
              email: data[0].email,
              country: data[0].country,
              id: data[0].id,
            })
          );
          form.reset();
          window.location.href = "../index.html";
        } else {
          warning.textContent = "The password you entered is incorrect";
          warning.classList.remove("hidden");
        }
      } else {
        warning.textContent = "Account not found";
        warning.classList.remove("hidden");
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    warning.textContent = "Data cannot be empty";
    warning.classList.remove("hidden");
  }
};

form.addEventListener("submit", handleLogin);