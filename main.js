let prev = document.getElementById("prev");
let next = document.getElementById("next");
let picture = document.querySelectorAll(".img_slide");
let active = document.querySelector(".active");

let count = 0;
// prev.addEventListener("click", prevSlide);

// const prevSlide = () => {
//   count--;
// };

const nextSlide = () => {
  picture[count].classList.remove("active");
  if (count < picture.length - 1) {
    count++;
  } else {
    count = 0;
  }
  picture[count].classList.add("active");
  //   console.log(picture[count]);
};
next.addEventListener("click", nextSlide);

const prevSlide = () => {
  picture[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = picture.length - 1;
  }
  picture[count].classList.add("active");
  //   console.log(picture[count]);
};
prev.addEventListener("click", prevSlide);

// console.log(btn);
// console.log(next);
// console.log(typeof picture);

if (count < picture.length - 1) {
  count++;
} else {
  count = 0;
}
