import Project from "../components/UI/Project";

const projects = [
  {
    id: 1,
    name: "PWA Text Editor",
    url: "https://extra-progressive-text-editor-9dd627b180ce.herokuapp.com/",
    image: "./images/textEditor.png",
    alt: "Text editor application deployed on heroku",
    gitHub: "https://github.com/JakeHowdeshell/pwa-text-editor.git",
  },
  {
    id: 2,
    name: "Express.js Note Taker",
    url: "https://great-note-taker-f60a4a0b9185.herokuapp.com/",
    image: "./images/noteTaker.png",
    alt: "Note taker application deployed on heroku",
    gitHub: "https://github.com/JakeHowdeshell/express.js-note-taker.git",
  },
  {
    id: 3,
    name: "MVC Tech Blog",
    url: "https://original-tech-blog-ecc03b1e97dd.herokuapp.com/",
    image: "./images/techBlog.png",
    alt: "Tech blog application deployed on heroku",
    gitHub: "https://github.com/JakeHowdeshell/mvc-tech-blog.git",
  },
  {
    id: 4,
    name: "Apparel Database",
    url: "https://ut-bros-apparel-0bcd7da3cb4b.herokuapp.com/login",
    image: "./images/apperalDatabase.png",
    alt: "Apparel database application deployed on heroku",
    gitHub: "https://github.com/cprademacher/apparel-database.git",
  },
  {
    id: 5,
    name: "Quote Generator",
    url: "https://r-warden.github.io/Quote-Generator/",
    image: "./images/quoteGenerator.png",
    alt: "Quote generator application deployed on heroku",
    gitHub: "https://github.com/r-warden/Quote-Generator.git",
  },
  {
    id: 6,
    name: "another App",
    url: "this test",
    image: "",
    alt: "",
    gitHub: "",
  }
];
export default function Portfolio() {
  return (
    <div>
      <h4>Portfolio</h4>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
