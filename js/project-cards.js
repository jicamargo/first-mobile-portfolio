/* this module You use an array to store all of the information for all projects */
/* each project has: name, ShortDescrip, featured image, technologies,
   link to live version, link to source */

const arrWorks = [
  {
    id: 'project-0',
    name: 'Miami Music Weekend',
    name2: '',
    ShortDescrip: 'Miami Music Weekend (MMW) is an engaging and visually captivating landing page dedicated to showcasing and promoting a vibrant Music Festival experience in Miami.',
    LongDescrip: 'The Miami Music Weekend (MMW) project is a responsive webpage that provides an all-inclusive platform for music enthusiasts. The webpage showcases a comprehensive '
                + 'list of events, including concerts, parties, and workshops, allowing users to explore and plan their itinerary. Additionally, it highlights special speakers invited '
                + 'to the festival, offering unique insights and discussions on the music industry. Users can also delve into sub-events, such as after-parties or exclusive meet-and-greets, '
                + 'to make the most of their MMW experience. With an array of options, the MMW project serves as a one-stop destination, ensuring attendees stay informed and engaged throughout '
                + 'the exciting music-filled weekend.',
    featureImage: './images/card1_img.png',
    featureImage2: './images/snapshoot-project1.png',
    alternateTextImage: 'Miami Music Weekend project image.',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    liveVersion: 'https://jicamargo.github.io/mmw/',
    source: 'https://github.com/jicamargo/mmw',
  },

  {
    id: 'project-1',
    name: 'Journey Cash',
    name2: 'Get Ready to Budget Like a Pro!',
    ShortDescrip: "Effortlessly manage group finances with this powerful web app. Perfect for travel with friends,"+
              " splitting bills, or coordinating group events, JourneyCash simplifies expense tracking and settlements.",
    LongDescrip: 'JOURNEY CASH is a simple yet powerful expense tracking web application designed to help you manage your group finances effortlessly. ' +
                "Whether you're traveling with friends, splitting bills with roommates, or organizing a group event, " +
                "JourneyCash makes it easy to track expenses and settle udp.",
    featureImage: './images/card2_img.png',
    featureImage2: './images/snapshoot-project2.png',
    alternateTextImage: 'To Do list project image.',
    technologies: ['Rails','Ruby','Postgres','CSS', 'HTML', 'JavaScript'],
    liveVersion: 'https://journeycash.onrender.com/',
    source: 'https://github.com/jicamargo/journeycash',
  },
  {
    id: 'project-2',
    name: 'Recipify',
    name2: 'Cooking Made Simple with Recipify!',
    ShortDescrip: "Your go-to app for simplifying cooking. Manage recipes, create shopping lists, and enjoy a better culinary experience, whether you're a pro or just starting out.",
    LongDescrip: "Recipify is a Ruby on Rails web application designed to simplify your cooking experience. Whether you're an experienced chef or a novice in the kitchen, Recipify offers a user-friendly platform to manage your recipes, create shopping lists, and enhance your culinary journey.",
    featureImage: './images/card3_img.png',
    featureImage2: './images/snapshoot-project3.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['Rails','Ruby','Postgres','Bootstrap','CSS', 'HTML', 'JavaScript'],
    liveVersion: 'https://recipify-eak3.onrender.com/',
    source: 'https://github.com/jicamargo/recipify',
  },
  {
    id: 'project-3',
    name: 'That Sound',
    name2: 'Unleash Sound Innovation!',
    ShortDescrip: "Your ultimate sound library app, crafted with React and Redux. It's where innovation meets collaboration, offering dynamic user interfaces powered by React and state-of-the-art management through Redux, delivering an unmatched user experience.",
    LongDescrip: "thatSound – a cutting-edge sound library application built using React and Redux. This repository serves as the central hub for collaborative development and innovation, where the power of React's dynamic user interfaces and Redux's state management combine to create an unparalleled user experience.",
    featureImage: './images/card4_img.png',
    featureImage2: './images/snapshoot-project4.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['React-JS', 'Redux', 'API','CSS', 'HTML', 'JavaScript'],
    liveVersion: 'https://thatsound.netlify.app/',
    source: 'https://github.com/jicamargo/thatSound',
  },
  {
    id: 'project-4',
    name: 'Space Travelers',
    name2: 'Space Exploration at Your Fingertips!',
    ShortDescrip: "Explore the Universe with Space-X-React-Group, a dynamic app created with React, Redux, CSS, and HTML. Discover the latest Space-X launches, rockets, and missions.",
    LongDescrip: "A Space-X-React-Group app built with React, Redux, CSS, and HTML. Users can view information about the latest Space-X launches, rockets, and missions. The app also features a search function, allowing users to search for information about specific launches, rockets, or missions.",
    featureImage: './images/card5_img.png',
    featureImage2: './images/snapshoot-project5.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['React','Redux','CSS', 'HTML'],
    liveVersion: 'https://space-travelers-five.vercel.app/',
    source: 'https://github.com/jicamargo/space-travelers',
  },
  {
    id: 'project-5',
    name: 'BookStore',
    name2: 'Your Books, Your Way!',
    ShortDescrip: "The Bookstore is your go-to React app for effortlessly managing and showcasing your book collection, with features like adding, deleting, and viewing books.",
    LongDescrip: "The Bookstore is a React application that allows users to manage and display a collection of books. It provides features such as adding new books, deleting existing books, and viewing the list of books.",
    featureImage: './images/card6_img.png',
    featureImage2: './images/snapshoot-project6.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['React','Webpack','CSS', 'HTML'],
    liveVersion: 'https://bookstore-brn2h3xgr-jicamargo.vercel.app/',
    source: 'https://github.com/jicamargo/bookstore',
  },
  {
    id: 'project-6',
    name: 'To do list',
    name2: 'Streamline Your Success!',
    ShortDescrip: 'A simple yet powerful tool that helps you stay organized and productive. With this app You can easily create tasks, edit, complete, and track your progress.',
    LongDescrip: 'A simple yet powerful tool that helps you stay organized and productive. With this app You can easily create tasks, edit, complete, and track your progress.'
    + '<br> This app offers several essential options to manage your tasks effectively. You can add new tasks by providing relevant details. The edit option allows you to modify '
    + 'existing tasks easily. Deleting a single task is simple, and if you have completed tasks cluttering your list, you can delete all completed tasks at once. The ability to '
    + "order tasks manually gives you control over their arrangement. Lastly, the project ensures that your data is preserved in local storage, so you won't lose any information even if you close or refresh the application.",
    featureImage: './images/card7_img.png',
    featureImage2: './images/snapshoot-project7.png',
    alternateTextImage: 'To Do list project image.',
    technologies: ['CSS', 'HTML', 'JavaScript', 'Webpack'],
    liveVersion: 'https://jicamargo.github.io/todo/dist/',
    source: 'https://github.com/jicamargo/todo',
  },
];

const gridWorks = document.getElementById('grid_works');
let popupContainer = null;
let div = null;
let bodyDom = null;
let card = null;

for (let i = 0; i < arrWorks.length; i += 1) {
  card = arrWorks[i];

  div = document.createElement('div');

  /*  ******** the first cards its the main ****************** */

  if (i === 0) {
    div.classList = 'header1';
    div.id = card.id;
    div.innerHTML = `
      <div class="cnt_img_main_card">
        <img class="main_card_cnt_img" src="${card.featureImage}" alt="${card.alternateTextImage}">
      </div>
      <div class="cnt_info_main_card ">
        <div class="cnt_card_low_part">
          <h3 class="MainCardTitle Title2_dark">${card.name}</h3>
          <p class="MainCardDescrip">${card.ShortDescrip}</p>
          <ul class="list_feat ">${
              card.technologies.map((tech) => `
              <li class="li_btn_2">${tech}</li>`).join(' ')
            }
          </ul>
          <a id="btn-${card.id}" class="SeeProjectBtn project_btn_2 btnCard" href="#">See Project</a>
        </div>
      </div>
      `;
  } else {
    div.classList = `sec_card_cnt `;
    div.id = card.id;
    // div.style.background = (`url("${card.featureImage}") no-repeat center / cover`);
    div.innerHTML = `
      <div class="info_card">
        <div class="cnt_img_card">
          <img class="card_cnt_img" src="${card.featureImage}" alt="${card.alternateTextImage}">
        </div>
        <div class="cnt_card_low_part">
          <div class="cnt_info_card">
            <h1 class="Title1_card">${card.name}</h1>
            <h2 class="Title2_card">${card.name2}</h2>
            <p class="CardDescrip">${card.ShortDescrip}</p>
            <ul class="list_feat list_card_gral">${
              card.technologies.map((tech) => `
              <li class="li_btn_2">${tech}</li>`).join(' ')
              }
            </ul>
          </div>
          <a id="btn-${card.id}" class="SeeProjectBtn project_btn_2 btnCard" href="#">See Project</a>
        </div> 
    </div>
  `;
}

  gridWorks.appendChild(div);
}

function closeModal() {
  bodyDom.removeChild(popupContainer);
  bodyDom.style.overflow = 'auto'; /* activate again the scrollbar for the body */
}

function visitSite(url) {
  window.open(url);
  closeModal();
}

/* creates a pop-up window with the respective button's card clicked info */

function popupWindow(card) {
  bodyDom = document.getElementById('body');
  bodyDom.style.overflow = 'hidden'; /* Hide scrollbar for the body */

  bodyDom.appendChild(document.createElement('div')).setAttribute('id', 'popupContainer');
  popupContainer = document.getElementById('popupContainer');
  popupContainer.style.width = '100%';
  popupContainer.style.height = '100%';
  popupContainer.style.position = 'fixed';
  popupContainer.style.zIndex = '99';
  popupContainer.style.background = 'rgba(0,0,0,0.4)';
  popupContainer.style.backdropFilter = 'blur(4px)';
  popupContainer.style.top = '0';
  popupContainer.style.left = '0';

  /* *********************************** */
  div = document.createElement('div');

  div.classList = 'cntInfoPopup';
  div.id = card.id;
  div.innerHTML = `<a id="btnClosePopup" class="btnClosePopup">
        <img class="btn-close-icon" src="images/close-icon.png" alt="Close menu icon.">
    </a> 
    <h1 class="PopupTitle1 Title2_dark">${card.name}</h1>
    <h2 class="PopupTitle2 Title2_card">${card.name2}</h2>
    <ul class="list_feat_popup ">${
  card.technologies.map((tech) => `
        <li class="li_btn_popup">${tech}</li>`).join(' ')
}</ul>
      
    <div class="popup-columns">
      <div class="popup-col1 popupImgCnt">
        <img class="PopupImg" src="${card.featureImage2}" alt="${card.alternateTextImage}">
      </div>
      <div class="popup-col2">
        <p class="PopupDescrip">${card.LongDescrip}</p>
        <ul class="cntBtnPopup">
          <li id="btnLive" class="SeeProjectBtn BtnClass btnSeeLive" href="${card.liveVersion}">
            <div>See live</div>
            <img class="icon-btn" src="./images/icon-btn-live.png"></li>
          <li id="btnSrc" class="SeeProjectBtn BtnClass btnSeeSource" href="${card.source}">
            <div>See source</div>
            <img class="icon-btn" src="./images/icon-btn-git.png"></li>
        </ul>
      </div>
    </div>
    `;

  popupContainer.appendChild(div).setAttribute('id', 'modal');

  const btnClose = document.getElementById('btnClosePopup');
  const btnLive = document.getElementById('btnLive');
  const btnSrc = document.getElementById('btnSrc');

  btnClose.addEventListener('click', closeModal);
  btnLive.addEventListener('click', () => { visitSite(card.liveVersion); });
  btnSrc.addEventListener('click', () => { visitSite(card.source); });
}

/* ********************************************** */

function clickBtnMethod(event) {
  const btn = event.srcElement;
  event.preventDefault();
  const indexProj = parseInt(btn.id.slice(-1), 10);
  popupWindow(arrWorks[indexProj]);
}

/* ***** add click evento to each See project button  */
const buttons = document.getElementsByClassName('btnCard');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', clickBtnMethod);
}
