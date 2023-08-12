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
