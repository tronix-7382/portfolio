import sabzlearn from "../assets/sabzlearn.jpg";
import dashboard from "../assets/dashboard.jpg";
import monster from "../assets/monsterEnergy.jpg";
import portfolio from "../assets/portfolioImg.jpg";
import reactBootstrap from "../assets/reactbootstrap.jpg";
import greenStore from "../assets/green.jpg";

// Projects Data Here
export const projectsData = [
  {
    id: "1",
    card: {
      title: "React-Bootstrap",
      caption: "Frist React-Bootsrap Project",
      year: "2023",
      url: reactBootstrap,
    },
    content: {
      title: "React-Bootstrap",
      caption: " React-Bootsrap Project",
      desc: "My first bootstrap project in reactjs, we need to learn react-bootstrap in reactjs...",
      client: "Self-Tuaght",
      date: "December 15, 2023",
      service: "FrontEnd Development",
      industry: "No industry",
      problem:
        "We Can't Use Bootstrap in ReactJs because reactjs has no dependency on either bootstrap.js or jQuery. in jQuery we directly change the Dom but it's against the rules of reactjs.",
      solution:
        "We need to use React-Bootstrap insted bootstrap, just need an easy npm installation",
      images: [
        "https://i.postimg.cc/c4rVwkSK/reactbootstrap.jpg",
        "https://i.postimg.cc/hG44mJL4/smartmockups-lt2x24ub.jpg",
      ],
    },
  },
  {
    id: "2",
    card: {
      title: "Sabzlearn",
      caption: "First React Project",
      year: "2023",
      url: sabzlearn,
    },
    content: {
      title: "Sabzlearn",
      caption: "First React Project",
      desc: 'My first ReactJs project, it is the UI design of "Sabzlearn.com"',
      client: "self-tuaght",
      date: "December 15, 2023",
      service: "FrontEnd Development",
      industry: "No industry",
      problem:
        "As the project got bigger and bigger, I got lost in the codes and lost the ability to continue working on the project.",
      solution:
        "I looked for a solution to this problem and the only suggested way was practice and repetition. That's why I started this relatively small project. ",
      images: [
        "https://i.postimg.cc/W35HJgY6/sabzlearn.jpg",
        "https://i.postimg.cc/sx10PxtF/sabzlearn2.jpg",
      ],
    },
  },
  {
    id: "3",
    card: {
      title: "Dashboard Admin",
      caption: "First MaterialUi Project",
      year: "2024",
      url: dashboard,
    },
    content: {
      title: "Dashboard Admin",
      caption: "Material UI Project",
      desc: "My first Material Ui Project , in this project i'm using a fake mySql backend (it's not for me) and i learn how to work with backend files with Xampp (fake local api) .",
      client: "self-tuaght",
      date: "December 15, 2023",
      service: "FrontEnd Development",
      industry: "No industry",
      problem:
        "I wanted to measure my knowledge level of materialUi, and working with the backend file.",
      solution:
        "after search & learn more about materialUi and its components and how to customize them, create a custom component, I Have knowldege as much about how to use this React Component-Base library",
      images: [
        "https://i.postimg.cc/K8fCB6Wy/dashboard.jpg",
        "https://i.postimg.cc/LXcWm2Jj/dashboard3.jpg",
        "https://i.postimg.cc/PxpcGP5t/dashboard2.jpg",
        "https://i.postimg.cc/8cL059v9/dashboard4.jpg",
        "https://i.postimg.cc/rFLHbyXk/dashboard5.jpg",
      ],
    },
  },
  {
    id: "4",
    card: {
      title: "Monster Energy",
      caption: "First Redux@Toolkit Project",
      year: "2024",
      url: monster,
    },
    content: {
      title: "Monster Energy",
      caption: "Redux@Toolkit Project",
      desc: "My first Redux Project, Redux is a application data-flow architecture that used for big and large applications that need states in morethan one/two components like shop projects . ",
      client: "self-tuaght",
      date: "December 15, 2023",
      service: "FrontEnd Development",
      industry: "No industry",
      problem:
        "I had trouble with redux and I found it a bit complicated. After all practicing and coding, I couldn't understand its function well",
      solution:
        "After I got acquainted with redux@toolkit and learned it, I also realized the functionality of Redux behind the scenes . In this project, I used redux@toolkit as the redux creators recommended.",
      images: [
        "https://i.postimg.cc/Jn8LQNQf/monster.jpg",
        "https://i.postimg.cc/cC4Gpd2T/monster-2.jpg",
        "https://i.postimg.cc/ZKnhjKr5/monster-3.jpg",
      ],
    },
  },
  {
    id: "5",
    card: {
      title: "Portfolio",
      caption: "Material Ui",
      year: "2024",
      url: portfolio,
    },
    content: {
      title: "React-Bootstrap",
      caption: "Frist React-Bootsrap Project",
      desc: " I needed this application to be able to show my projects, experiences, and education to companies and interviewers. ",
      client: "self-tuaght",
      date: "December 15, 2023",
      service: "FrontEnd Development",
      industry: "No industry",
      problem:
        "my problem in this project is that I really wanted to design this project to be my own, but ...",
      solution:
        "according to some friends and guidance, design isn't in my field, so I gave up on last project ( last two picture 👇 ) and started coding this project.",
      images: [
        "https://i.postimg.cc/k4t2V3cn/protfoliov2.jpg",
        "https://i.postimg.cc/8cQjMKKL/protfoliov2-2.jpg",
        "https://i.postimg.cc/rsp7hQRP/protfoliov1.jpg",
        "https://i.postimg.cc/BbwkRHxQ/protfoliov1-2.jpg",
      ],
    },
  },
  {
    id: "6",
    card: {
      title: "GreenStore",
      caption: "Ecommerce Flower And Plant Shop",
      year: "2024",
      url: greenStore,
    },
    content: {
      title: "Sabzlearn",
      caption: "First React Project",
      desc: 'An ecommerce project with "HTML" - "CSS" - "REACTJS" - "FORMIK" - "REDUX@TOOLKIT" ',
      client: "self-tuaght",
      date: "December 15, 2024",
      service: "FrontEnd Development",
      industry: "No industry",
      problem:
        "I needed a more comprehensive project to make sure I learned the past topics and use them together",
      solution: " I have'nt problem with this project . i'm using framermotion for animations ",
      images: [greenStore],
    },
  },
];
