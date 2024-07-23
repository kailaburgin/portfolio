import Spotify from "../assets/spotify.jpg";
import Game from "../assets/games.jpg";
import Appointments from "../assets/appointments.jpg";
import KailaCreating from "../assets/kailacreating.jpg";

const obj_projects = [
  {
    name: "Spotify Playlist Creator",
    description:
      "An app to search for music, make playlists, and save them to spotify. The Spotify API is used. This project implements a search function with a section to display results and another section that shows the playlist.",
    picture: Spotify,
    skills: "javascript, react",
    link: "https://jammming-beta.vercel.app/",
  },
  {
    name: "Appointment Planner",
    description:
      "An appointment tracking app in which you can create a list of appointments with existing contacts. This project implements forms.",
    picture: Appointments,
    skills: "html, css, forms",
    link: "https://appointmentplanner-8ggq0eeri-kailas-projects-05bb5e18.vercel.app/contacts",
  },
  {
    name: "Video Game Discovery",
    description:
      "A video game search app that displays the artwork, name, platforms, and ratings for each game. The Rawg.io database API is used. This project implements a search bar, sorting filters, and a dark mode switch.",
    picture: Game,
    skills: "typescript, react",
    link: "https://game-hub-tan-ten.vercel.app/",
  },
  {
    name: "Kaila Creating",
    description:
      "A website that showcases my recent sewing projects from my creative Instagram account. Built with HTML and CSS, this was my first independent project in my coding journey.",
    picture: KailaCreating,
    skills: "html, css",
    link: "https://kailaburgin.github.io/kaila-creating/",
  },
];

export default obj_projects;
