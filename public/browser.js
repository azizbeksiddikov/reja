console.log("FrontEnd JS is working");

function itemTemplate(data) {
  return ` <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text"> ${data.reja} </span>
          <div>
            <button
              data-id=${data.id}
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Ozgartirish
            </button>
            <button
              data-id=${data.id}
              class="delete-me btn btn-danger btn-sm"
            >
              Ochirish
            </button>
          </div>
        </li>`;
}
let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Try again");
    });
});

document.addEventListener("click", function (e) {
  // delete oper
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq ochirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((error) => {
          console.log("Try again. Mistake in deletion");
        });
    }
  }
  // edit oper
  else if (e.target.classList.contains("edit-me")) {
    let beforeText =
      e.target.parentElement.parentElement.querySelector(
        ".item-text"
      ).innerHTML;
    let userInput = prompt("O'zgartirish kiriting", beforeText);
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((res) => {
          console.log(res);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Error in updating. Try again!");
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", function (e) {
  axios
    .post("/delete-all", { delete_all: true })
    .then((res) => {
      alert(res.data.state);
      document.location.reload();
    })
    .catch();
});
