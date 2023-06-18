console.log("Hello Customers!");

document.querySelector("#surprise").addEventListener("click", function () {
  alert("Surprise! You will live a good life!");
});
document
  .querySelector("#another-surprise")
  .addEventListener("click", function () {
    alert("Surprise! You just won a lottery ticket of 100 million dollars! ");
  });
document
  .querySelector("#third-surprise")
  .addEventListener("click", function () {
    alert(
      "Surprise! You just dropped out from college and don't have enough money to pay rent!"
    );
  });
document
  .querySelector("#fourth-surprise")
  .addEventListener("click", function () {
    alert("Surprise! Nothing happens to you.");
  });
