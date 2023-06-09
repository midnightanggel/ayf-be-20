const fullName = document.getElementById("fullname");
const age = document.getElementById("age");
const country = document.getElementById("country");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const term = document.getElementById("term");
const form = document.getElementsByTagName("form")[0];

const validate = () => {
  return (
    fullName.value != "" &&
    age.value != "" &&
    country.value != "" &&
    email.value != "" &&
    password.value != "" &&
    password.value == confirmPassword.value &&
    term.checked
  );
};

const handleRegister = async (e) => {
  e.preventDefault();
  if (validate()) {
    document.getElementById("warning").classList.add("hidden");
    try {
      await fetch("https://6453cc52e9ac46cedf301137.mockapi.io/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          fullname: fullName.value,
          age: age.value,
          country: country.value,
          email: email.value,
          password: password.value,
        }),
      });
      form.reset();
      window.location.href = "../pages/Login.html";
    } catch (error) {
      console.log(error);
    }
  } else {
    document.getElementById("warning").classList.remove("hidden");
  }
};

form.addEventListener("submit", handleRegister);
