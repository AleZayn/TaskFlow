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

const storeTaskInfo = JSON.parse(localStorage.getItem("info")) || [];

const renderStoredTasks = () => {
  storeTaskInfo.forEach((info) => {
    const liTask = document.createElement("li");
    liTask.classList.add("li-Task");

    const chekBox = document.createElement("input");
    chekBox.setAttribute("type", "checkbox");
    chekBox.checked = info.completed;
    chekBox.id = "chekbox";

    const inputName = document.createElement("h3");
    inputName.textContent = info.task;

    const priorityDisplay = document.createElement("p");
    priorityDisplay.textContent = info.priority;

    const categoryDisplay = document.createElement("p");
    categoryDisplay.textContent = info.category;

    const dateDisplay = document.createElement("p");
    dateDisplay.textContent = info.dueDate;

    const dltBtn = document.createElement("button");
    dltBtn.textContent = "Delete";
    dltBtn.classList = "dltbtn";

    dltBtn.addEventListener("click", () => {
      ulTask.removeChild(liTask);
      const index = storeTaskInfo.findIndex((item) => item.task === info.task);
      if (index !== -1) {
        storeTaskInfo.splice(index, 1);
        localStorage.setItem("info", JSON.stringify(storeTaskInfo));
      }
    });

    chekBox.addEventListener("click", () => {
      info.completed = chekBox.checked;
      localStorage.setItem("info", JSON.stringify(storeTaskInfo));
    });

    liTask.appendChild(chekBox);
    liTask.appendChild(inputName);
    liTask.appendChild(priorityDisplay);
    liTask.appendChild(categoryDisplay);
    liTask.appendChild(dateDisplay);
    liTask.appendChild(dltBtn);
    ulTask.appendChild(liTask);
  });
};

renderStoredTasks();

const clickHandler = (e) => {
  e.preventDefault();

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

  const chekBox = document.createElement("input");
  chekBox.setAttribute("type", "checkbox");
  chekBox.id = "chekbox";

  const inputName = document.createElement("h3");
  inputName.textContent = taskName.value;

  const priorityDisplay = document.createElement("p");
  priorityDisplay.textContent = priority.value;

  const categoryDisplay = document.createElement("p");
  categoryDisplay.textContent = category.value;

  const dateDisplay = document.createElement("p");
  dateDisplay.textContent = dueDate.value;

  const dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  dltBtn.classList = "dltbtn";

  dltBtn.addEventListener("click", () => {
    ulTask.removeChild(liTask);
  });

  const infoadded = {
    task: taskName.value,
    priority: priority.value,
    category: category.value,
    dueDate: dueDate.value,
    completed: false,
  };

  storeTaskInfo.push(infoadded);
  localStorage.setItem("info", JSON.stringify(storeTaskInfo));

  liTask.appendChild(chekBox);
  liTask.appendChild(inputName);
  liTask.appendChild(priorityDisplay);
  liTask.appendChild(categoryDisplay);
  liTask.appendChild(dateDisplay);
  liTask.appendChild(dltBtn);
  ulTask.appendChild(liTask);

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

// -----------------
// Function to filter tasks by category
function categoryWorkFilter(selectedCategory) {
  ulTask.innerHTML = ""; 

  storeTaskInfo.forEach((info) => {
    if (selectedCategory === "All" || info.category === selectedCategory) {
      const liTask = document.createElement("li");
      liTask.classList.add("li-Task");

      const chekBox = document.createElement("input");
      chekBox.setAttribute("type", "checkbox");
      chekBox.checked = info.completed;
      chekBox.id = "chekbox";

      const inputName = document.createElement("h3");
      inputName.textContent = info.task;

      const priorityDisplay = document.createElement("p");
      priorityDisplay.textContent = info.priority;

      const categoryDisplay = document.createElement("p");
      categoryDisplay.textContent = info.category;

      const dateDisplay = document.createElement("p");
      dateDisplay.textContent = info.dueDate;

      const dltBtn = document.createElement("button");
      dltBtn.textContent = "Delete";
      dltBtn.classList = "dltbtn";

      dltBtn.addEventListener("click", () => {
        ulTask.removeChild(liTask);
        const index = storeTaskInfo.findIndex(
          (item) => item.task === info.task
        );
        if (index !== -1) {
          storeTaskInfo.splice(index, 1);
          localStorage.setItem("info", JSON.stringify(storeTaskInfo));
        }
      });

      chekBox.addEventListener("click", () => {
        info.completed = chekBox.checked;
        localStorage.setItem("info", JSON.stringify(storeTaskInfo));
      });

      liTask.appendChild(chekBox);
      liTask.appendChild(inputName);
      liTask.appendChild(priorityDisplay);
      liTask.appendChild(categoryDisplay);
      liTask.appendChild(dateDisplay);
      liTask.appendChild(dltBtn); 
      ulTask.appendChild(liTask);
    }
  });
}

// Event listener for category filtering
const categoryFilter = document.getElementById("category-Filter");
categoryFilter.addEventListener("change", () => {
  const selectedCategory = categoryFilter.value;
  categoryWorkFilter(selectedCategory);
});
