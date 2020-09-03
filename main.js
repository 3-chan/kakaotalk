const toggleBtn = document.querySelectorAll(".moreBtn");
const friendsList = document.querySelectorAll(".friendsList");

// function ToggleFunction (Btn, List) {
//   Btn.classList.toggle("clicked");
//   List.classList.toggle("active");
// };

for (let i = 0; i < toggleBtn.length; i++) {
  toggleBtn[i].addEventListener("click", () => {
    toggleBtn[i].classList.toggle("clicked");
    friendsList[i].classList.toggle("active");
  });
}
