/* eslint-disable no-unused-vars */
console.log("Running....");

function makeCard(imgSrc, title, subtitle, body) {
  const div = document.createElement("div");
  div.classList.add("card");
  div.classList.add("col-lg-3");
  div.classList.add("col-md-5");

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.height = 256;
  img.src = imgSrc;
  div.appendChild(img);

  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("card-body");
  bodyDiv.innerHTML = `\
    <h5 class="card-title">${title}</h5>\
    <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>\
    <p class="card-text">${body}</p>`;
  div.appendChild(bodyDiv);
  return div;
}

function removeContent() {
  const contents = document.querySelector("#contents");
  while (contents.firstChild) {
    contents.removeChild(contents.firstChild);
  }
}

function renderContent(innerHTML) {
  removeContent();
  const container = document.querySelector("#contents");
  container.innerHTML = innerHTML;
}
