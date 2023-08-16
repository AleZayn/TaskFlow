// <!-- NavItems -->
const navItems = document.querySelector(".nav-Items");

const navLinks = [
  {
    label: "Dashboard",
    href: "",
    icon: "./images/home.png",
  },
  {
    label: "Analytics",
    href: "",
    icon: "./images/analytics.png",
  },
  {
    label: "Overview",
    href: "",
    icon: "./images/overview.png",
  },
  {
    label: "Settings",
    href: "",
    icon: "./images/setting.png",
  },
  {
    label: "User",
    href: "",
    icon: "./images/user.png",
  },
];

navLinks.forEach((link) => {
  const navUl = document.createElement("ul");
  const navLi = document.createElement("li");
  const navAnchor = document.createElement("a");
  const navIcon = document.createElement("img");

  navIcon.src = link.icon;
  navIcon.classList.add("icon");
  navAnchor.textContent = link.label;
  navAnchor.href = link.href;

  navLi.appendChild(navIcon);
  navLi.appendChild(navAnchor);

  navLi.classList.add("navLi");

  navUl.appendChild(navLi);

  navItems.appendChild(navUl);
});

// <!-- Task-List -->

const ulTask = document.querySelector(".ul-Task");
const taskName = document.querySelector("#task-name");
const priority = document.querySelector("#priority");
const category = document.querySelector("#category");
const dueDate = document.querySelector("#due-date");
const btn = document.querySelector("#submit-btn");
let counter = 1;

const clickHandler = (e) => {
  e.preventDefault();
  // -----------------------------------------
  if (
    taskName.value === "" ||
    priority.value === "" ||
    category.value === "" ||
    dueDate.value === ""
  ) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  const liTask = document.createElement("li");
  liTask.classList.add("li-Task");

  // ChekBox
  const chekBox = document.createElement("input");
  chekBox.setAttribute("type", "checkbox");
  chekBox.id = "chekbox";

  // Name
  const inputName = document.createElement("h3");
  inputName.textContent = taskName.value;

  // Priority
  const priorityDisplay = document.createElement("p");
  priorityDisplay.textContent = priority.value;

  // Category
  const categoryDisplay = document.createElement("p");
  categoryDisplay.textContent = category.value;

  // Due-date
  const dateDisplay = document.createElement("p");
  dateDisplay.textContent = dueDate.value;

  // ------------------------------------
  // Delete-Btn
  const dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  dltBtn.classList = "dltbtn";

  dltBtn.addEventListener("click", () => {
    ulTask.removeChild(liTask);
  });

  // chekBox
  chekBox.addEventListener("click", () => {
    if (liTask.style.textDecoration === "line-through") {
      liTask.style.textDecoration = "none";
    } else {
      liTask.style.textDecoration = "line-through";
    }
  });

  // --------------------------------------
  if (counter == 6) {
    ulTask.removeChild(liTask);
    return;
  }
  counter++;

  // ---------------------------------------
  liTask.appendChild(chekBox);
  liTask.appendChild(inputName);
  liTask.appendChild(priorityDisplay);
  liTask.appendChild(categoryDisplay);
  liTask.appendChild(dateDisplay);
  liTask.appendChild(dltBtn);
  ulTask.appendChild(liTask);
  // -----------------------------------------
  taskName.value = "";
  priority.value = "";
  category.value = "";
  dueDate.value = "";
};

btn.addEventListener("click", clickHandler);

// Date Handler

const repDate = new Date();
const setDate = repDate.toISOString().slice(0, 10);
dueDate.setAttribute("min", setDate);
