import Spotify from "../../public/spotify.jpg";
// const obj_projects = {
//   spotify: {
//     name: "Spotify Playlist Creator",
//     description:
//       "An app to search for music, make playlists, and save them to spotify. The Spotify API is used. This project implements a search function with a section to display results and another section that shows the playlist.",
//     picture: "../../public/spotify.jpg",
//   },
//   appointments: {
//     name: "Appointment Planner",
//     description:
//       "An appointment tracking app in which you can create a list of appointments with existing contacts. This project implements forms.",
//     picture: "../",
//   },
//   videogame: {
//     name: "Video Game Discovery",
//     description:
//       "A video game search app that displays the artwork, name, platforms, and ratings for each game. The Rawg.io database API is used. This project implements a search bar, sorting filters, and a dark mode switch.",
//     picture: "../",
//   },
// };

const obj_projects = [
  {
    name: "Spotify Playlist Creator",
    description:
      "An app to search for music, make playlists, and save them to spotify. The Spotify API is used. This project implements a search function with a section to display results and another section that shows the playlist.",
    picture: Spotify,
    skills: "javascript, react",
    link: "..",
  },
  {
    name: "Appointment Planner",
    description:
      "An appointment tracking app in which you can create a list of appointments with existing contacts. This project implements forms.",
    picture: "../../public/appointments.jpg",
    skills: "html, css, forms",
    link: "..",
  },
  {
    name: "Video Game Discovery",
    description:
      "A video game search app that displays the artwork, name, platforms, and ratings for each game. The Rawg.io database API is used. This project implements a search bar, sorting filters, and a dark mode switch.",
    picture: "../../public/games.jpg",
    skills: "typescript, react",
    link: "https://game-hub-tan-ten.vercel.app/",
  },
  {
    name: "Kaila Creating",
    description:
      "A website that showcases my recent sewing projects from my creative Instagram account. Built with HTML and CSS, this was my first independent project in my coding journey.",
    picture: "../../public/kailacreating.jpg",
    skills: "html, css",
    link: "..",
  },
];

export default obj_projects;
