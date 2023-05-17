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
    featureImage2: './images/snapshoot-mmw.png',
    alternateTextImage: 'Miami Music Weekend project image.',
    technologies: ['CSS', 'HTML', 'JavaScript'],
    liveVersion: 'https://jicamargo.github.io/mmw/',
    source: 'https://github.com/jicamargo/mmw',
  },

  {
    id: 'project-1',
    name: 'To do list',
    name2: 'Minimalist To Do List',
    ShortDescrip: 'A simple yet powerful tool that helps you stay organized and productive. With this app You can easily create tasks, edit, complete, and track your progress.',
    LongDescrip: 'A simple yet powerful tool that helps you stay organized and productive. With this app You can easily create tasks, edit, complete, and track your progress.'
    + '<br> This app offers several essential options to manage your tasks effectively. You can add new tasks by providing relevant details. The edit option allows you to modify '
    + 'existing tasks easily. Deleting a single task is simple, and if you have completed tasks cluttering your list, you can delete all completed tasks at once. The ability to '
    + "order tasks manually gives you control over their arrangement. Lastly, the project ensures that your data is preserved in local storage, so you won't lose any information even if you close or refresh the application.",
    featureImage: './images/card2_img.png',
    featureImage2: './images/snapshoot-todo.png',
    alternateTextImage: 'To Do list project image.',
    technologies: ['CSS', 'HTML', 'JavaScript', 'Webpack'],
    liveVersion: 'https://jicamargo.github.io/todo/dist/',
    source: 'https://github.com/jicamargo/todo',
  },
  {
    id: 'project-2',
    name: 'Profesional Art 2',
    name2: 'Printing Data',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: '../images/img-ph1.png',
    featureImage2: '../images/snapshoot-project1.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['CSS', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },
  {
    id: 'project-3',
    name: 'Profesional Art 3',
    name2: 'Printing Data',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: '../images/snapshoot-project1.png',
    featureImage2: '../images/snapshoot-project1.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['CSS', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },
  {
    id: 'project-4',
    name: 'Profesional Art 4',
    name2: 'Printing Data',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: '../images/img-ph1.png',
    featureImage2: '../images/snapshoot-project1.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['CSS', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },
  {
    id: 'project-5',
    name: 'Profesional Art 5',
    name2: 'Printing Data',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: '../images/img-ph1.png',
    featureImage2: '../images/snapshoot-project1.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['CSS', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
  },
  {
    id: 'project-6',
    name: 'Profesional Art 6',
    name2: 'Printing Data',
    ShortDescrip: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage: '../images/img-ph1.png',
    featureImage2: '../images/snapshoot-project1.png',
    alternateTextImage: 'secondary project ShortDescrip image.',
    technologies: ['CSS', 'Boostrap', 'Ruby'],
    liveVersion: 'https://jicamargo.github.io/first-mobile-portfolio/',
    source: 'https://github.com/jicamargo/first-mobile-portfolio',
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
    div.innerHTML = `<div class="cnt_img_main_card">
       <img class="main_card_cnt_img" src="${card.featureImage}" alt="${card.alternateTextImage}">
    </div>
    <div class="cnt_info_main_card ">
    <h3 class="MainCardTitle Title2_dark">${card.name}</h3>
    <p class="MainCardDescrip">${card.ShortDescrip}</p>
    <ul class="list_feat ">${
  card.technologies.map((tech) => `
      <li class="li_btn">${tech}</li>`).join(' ')
}</ul>
      <a id="btn-${card.id}" class="SeeProjectBtn BtnClass btnCard" href="#">See Project</a>
      </div>
      `;
  } else {
    div.classList = `sec_card_cnt work-${i}`;
    div.id = card.id;
    div.style.background = (`linear-gradient(180deg, rgba(38, 38, 38, 5%) 0%, rgba(38, 38, 38, 0.9) 61.94%), url("${card.featureImage}") no-repeat center`);
    div.innerHTML = `<span class="background-image" role="img" aria-label="${card.alternateTextImage}"></span>
        <div class="info_card">
        <div class="cnt_info_card">
          <h1 class="Title1_card">${card.name}</h1>
          <h2 class="Title2_card">${card.name2}</h2>
          <p class="CardDescrip">${card.ShortDescrip}</p>
          <ul class="list_feat list_card_gral">${
  card.technologies.map((tech) => `
            <li class="li_btn_2">${tech}</li>`).join(' ')
}</ul>
        </div> 
        <a id="btn-${card.id}" class="SeeProjectBtn project_btn_2 btnCard" href="#">See Project</a>
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
