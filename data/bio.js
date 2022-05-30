// eslint-disable-next-line no-unused-vars
function renderBio() {
  // eslint-disable-next-line no-undef
  removeContent();
  const container = document.querySelector("#contents");
  container.innerHTML = `\
  <p class="lead col-md-3 text-center"> \
      Jimmy Bouker (He/Him)<br>App & Game Maker \
  </p> \
  <p class="lead col-md-3 text-center"> \
      <a href="https://www.linkedin.com/in/jimmybouker/">Linkedin</a><br><a \
          href="https://github.com/jamesbouker">Github</a> \
  </p> \
  <p class="lead col-12 text-center"> \
      <a href="mailto:james.bouker@gmail.com">james.bouker@gmail.com</a> \
  </p> \
  <p class="lead text-center col-md-8"> \
Started out making JApplet games for myself & some friends, ported to Android, and eventually to iOS. \
After that I started coding professionally. \
This page lists most of the companies and projects I've worked on.\
</p> \
  `;
}
