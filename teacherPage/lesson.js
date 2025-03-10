// const lessons = [
//   {
//     id: 1,
//     title: "Lesson 1",
//     description: "Description of lesson 1.",
//     begin: "2025-02-03T10:15:00",
//     end: "2025-02-03T12:15:00"
//   },
//   {
//     id: 2,
//     title: "Lesson 2",
//     description: "Description of lesson 2.",
//     begin: "2025-02-04T09:00:00",
//     end: "2025-02-04T11:00:00"
//   },
//   {
//     id: 3,
//     title: "Lesson 3",
//     description: "Description of lesson 3.",
//     begin: "2025-02-07T14:30:00",
//     end: "2025-02-07T16:30:00"
//   },
//   {
//     id: 4,
//     title: "Lesson 4",
//     description: "Description of lesson 4.",
//     begin: "2025-02-10T13:00:00",
//     end: "2025-02-10T15:00:00"
//   },
//   {
//     id: 5,
//     title: "Lesson 5",
//     description: "Description of lesson 5.",
//     begin: "2025-02-12T11:45:00",
//     end: "2025-02-12T13:45:00"
//   },
//   {
//     id: 6,
//     title: "Lesson 6",
//     description: "Description of lesson 6.",
//     begin: "2025-02-14T08:00:00",
//     end: "2025-02-14T10:00:00"
//   },
//   {
//     id: 7,
//     title: "Lesson 7",
//     description: "Description of lesson 7.",
//     begin: "2025-02-17T15:30:00",
//     end: "2025-02-17T17:30:00"
//   },
//   {
//     id: 8,
//     title: "Lesson 8",
//     description: "Description of lesson 8.",
//     begin: "2025-02-19T16:00:00",
//     end: "2025-02-19T18:00:00"
//   },
//   {
//     id: 9,
//     title: "Lesson 9",
//     description: "Description of lesson 9.",
//     begin: "2025-02-21T09:15:00",
//     end: "2025-02-21T11:15:00"
//   },
//   {
//     id: 10,
//     title: "Lesson 10",
//     description: "Description of lesson 10.",
//     begin: "2025-02-23T10:00:00",
//     end: "2025-02-23T12:00:00"
//   },
// ];


// //funzione per generare la list 

// window.onload = generateList

// function generateList() {
//   var ul = document.getElementById("lista");
//   for (i = 0; i < lessons.length - 1; i++) {
//     const lesson = lessons[i];
//     let li = document.createElement("li"); //crei ogni punto della lsita
//     let title = document.createTextNode(lesson.title);
//     li.appendChild(title);
//     ul.appendChild(li);
//   }
// }



document.addEventListener("DOMContentLoaded", function () {
  // Cambio sezione
  const navButtons = document.querySelectorAll(".nav button");
  navButtons.forEach((button) => {
    button.onclick = function () {
      const activeSection = button.getAttribute("data-section");
      document.querySelectorAll(".section").forEach((section) => section.classList.remove("active"));
      document.querySelector(`.${activeSection}-section`).classList.add("active");
      navButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    };
  });

  // Aggiungi elementi
  function addItem(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    const button = input.nextElementSibling;
    button.onclick = function () {
      const value = input.value.trim();
      if (value) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${value} <button onclick="this.parentElement.remove()">Delete</button>`;
        list.appendChild(listItem);
        input.value = "";
      } else {
        alert("Inserisci un valore valido!");
      }
    };
  }

  addItem("class-name", "class-list");
  addItem("student-name", "student-list");
  addItem("lesson-name", "lesson-list");
  addItem("attendance-date", "attendance-list");
});




