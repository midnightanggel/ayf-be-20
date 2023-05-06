const content = document.getElementById("content");
const description =
  "Jakarta, Dedolarisasi atau fenomena pengurangan penggunaan mata uang dolar AS dalam transaksi keuangan dan perdagangan tengah terjadi di dunia. Bahkan, banyak negara secara terang-terangan mengungkapkan tak akan lagi menggunakan mata uang Negeri Paman Sam tersebut dan akan beralih menggunakan mata uang China, yuan. Dedolarisasi pertama kali dimulai oleh China dan Brasil. Negara ini menjalin kerja sama dan sepakat untuk tidak lagi menggunakan dolar AS dalam transaksi perdagangan dan investasi keduanya. Lalu diikuti oleh negara lain seperti Rusia yang memang sedang ada konflik dengan AS. Tak terkecuali Indonesia yang memang saat ini tengah berupaya meninggalkan mata uang AS. Di Indonesia, langkah dedolarisasi dimulai dengan kerja sama yang ditempuh oleh Bank Indonesia dengan berbagai negara melalui Local Currency Settlement (LCS) atau penyelesaian transaksi dengan mata uang lokal.";
content.innerHTML = description

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

