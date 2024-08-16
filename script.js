const projects = [
  {
    title: "Super Cool Skibidi Sigma",
    description:
      "This is a project description that's made to showcase this project and make a sigma look how much sigma a human is tbh this doesn't make any sense tho.",
  },
  {
    title: "Super Cool Skibidi Sigma",
    description:
      "This is a project description that's made to showcase this project and make a sigma look how much sigma a human is tbh this doesn't make any sense tho.",
  },
  {
    title: "Gyatt Toad",
    description:
      "The Ohio Skibidi Gyat Toad (A.k.a Evil Toad) is a Toad that got skibidied by the gyat of Bowser and got the rizzler from the fanum taxed Ohio. These Toads are capable of rizzing the gyat out of mario and his skibidies.",
  },
];

const container = document.querySelector("#project-container");
console.log(typeof projects);
projects.forEach((element) => {
  let pr = document.createElement("div");
  pr.innerHTML = `<h3>${element.title}</h3>
          <p>${element.description}</p>
          <div>
            <button>
              <img src="assets/imgs/star.svg" alt="">
              <hr>
            </button>
            <button>
              <img src="assets/imgs/eye.svg" alt="">
              <hr>
            </button>
            <button>
              <img src="assets/imgs/share.svg" alt="">
              <hr>
            </button>
          </div>`;
  pr.classList.add("project");
  container.append(pr);
});
