const list = document.querySelector("#movie-list li");
const add = document.getElementById("add-btn");
const removeMovie = document.getElementById("delete");
console.log(list);

//delete movie
removeMovie.addEventListener("click", (e) => {
  list.remove();
});
