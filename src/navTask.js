
export default function listTask(value) {
  const li = document.querySelectorAll("li");
  const p1 = document.querySelectorAll("p");

  for (let i = 0; i < li.length; i++) {
    if (li[i].classList.contains(value)) {
      if (p1[i].classList.contains(value)) p1[i].innerText++;
    }
  }
}

function projectClick() {
  const li = document.querySelectorAll("li");
  const div1 = document.querySelectorAll(".addTask");

  li.forEach((item) => {
    item.addEventListener("click", (e) => {
      for (let i = 0; i < div1.length; i++) {
        console.log(e.currentTarget.textContent);
        if (!div1[i].textContent.includes(item.textContent)) {
          div1[i].classList.add("hide");
        } else {
          div1[i].classList.remove("hide");
        }
      }
    });
  });
}

export { projectClick };
