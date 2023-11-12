// const add = document.getElementById("add-btn");
//  const removeMovies = document.getElementById("delete");
// console.log(lists);
// document.addEventListener('DOMContentLoaded') = () =>{
const lists = document.querySelector("#movie-list ul");
const addForm = document.getElementById("add-movies");
const value = document.querySelector(".name");
console.log(value);
const addMovieBtn = document.getElementById("add-btn");
//delete movie
lists.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
//add movies
// const addForm = forms["add-movies"];
addMovieBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //create Elements
  const li = document.createElement("li");
  const movieName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  // add text content
  movieName.textContent = value;
  deleteBtn.textContent = "delete";

  // add classes
  movieName.classList.add("movie-name");
  deleteBtn.classList.add("delete");

  // append to list
  li.appendChild(movieName);
  li.appendChild(deleteBtn);
  lists.appendChild(li);
});

// };
