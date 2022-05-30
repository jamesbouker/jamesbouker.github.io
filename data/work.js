/* eslint-disable no-unused-vars */
var jobs = [
  {
    title: "Facebook",
    imgSrc: "./images/meta.jpg",
    subtitle: "Web, PHP, iOS, Android",
    body: "Increasing developer output and work life balance, decreasing burnout. All through the lens of internal tools. Calendar, Tasks, WorkChat, and several bots.",
  },
  {
    title: "Amazon Music",
    imgSrc: "./images/amp.jpeg",
    subtitle: "iOS",
    body: "One of the initial engineers working on Amazons AMP. Lead SwiftUI engineer on creator studio. Music selection, show planning, show call-ins and chat.",
  },
  {
    title: "Pandora Music",
    imgSrc: "./images/pandora.jpg",
    subtitle: "iOS, Apple Watch, Apple TV",
    body: 'Lead on DarkMode & several other "Day 1" iOS launches. Streaming on Apple Watch. Created libraries (Playback & Sequencing, GraphQL Integration, etc...)',
  },
  {
    title: "Nickelodeon",
    imgSrc: "./images/nick.jpg",
    subtitle: "iOS, AppleTV, Apple Watch",
    body: "Lead Nick, NickJR, and Noggin iOS. Re-writes, Re-designs, and international launches. Noggin AppleTV, solo project (code & design), built in 4 weeks, won Apples Best of AppleTV award.",
  },
  {
    title: "Charmtech",
    imgSrc: "./images/capti.jpg",
    subtitle: "iOS",
    body: "Lead iOS engineer. Web browser and voice reader for the blind.",
  },
];

function renderWork() {
  // eslint-disable-next-line no-undef
  removeContent();
  const container = document.querySelector("#contents");
  // eslint-disable-next-line no-undef
  jobs.forEach((job) => {
    // eslint-disable-next-line no-undef
    const card = makeCard(job.imgSrc, job.title, job.subtitle, job.body);
    container.appendChild(card);
  });
}
