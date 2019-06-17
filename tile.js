export default class Tile extends HTMLElement {
  constructor(title, photo, description) {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.innerHTML = this.html();
    this.title = this.getAttribute("title") || title || "Title";
    this.picture = this.getAttribute("picture") || photo || "default.jpg";
  }

  set title(val) {
    this.root.querySelector(".title").innerText = val;
  }

  set picture(val) {
    this.root.querySelector("img").src = `./assets/${val}`;
  }

  get title() {
    return this.root.querySelector(".title").innerText;
  }

  html() {
    return `
      <div class="tile">
        <h1 class="title"> Title </h1>
        <img src="" alt="photo">
        <slot class="description" name="description">  </slot>
       </div>
       <style>
       ${this.css()}
        </style>

    `;
  }

  css() {
    return `
    .tile {
      display:grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 0.5fr;
      grid-template-areas: "title image"
      "body body";
      background-color: white;
      border: 3px solid whitesmoke;
      transition: box-shadow 1s, transform 1s;
      font-size: 30px;
      padding: 20px;
      height: 300px;
      cursor: pointer;

    }

    .tile:hover {
      box-shadow: 0px -5px 35px 0px rgba(37, 37, 37, 0.2);
      transform: translateY(20px) scale(1.05);
    }

    .title {
      grid-area: title;
       font-size: 40px;
       font-weight: 100;
    }

    

    .description {
      grid-area: body;
      width: 100%;
      font-size: 0.79em;
    }

    img {
      grid-area: image;
      border-radius: 50%;
      width: 80px;
    }

    
    `;
  }

  _createEvents() {
    this.root.addEventListener("click", e => {});
  }
}
//Add the custom element to the project
customElements.define("dev-tile", Tile);
