/* this module You use an array to store all of the information for all projects */
/* each project has: name, ShortDescrip, featured image, technologies, link to live version, link to source */

const arrWorks = [
  { 
    id : 'project-0',
    name : 'Multi-Post Stories', 
    name2 : '', 
    ShortDescrip : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    LongDescrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage : './images/card1_img.png',
    alternateTextImage : 'header-main-project image.',
    technologies : ['CSS','HTML', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  
  { 
    id : 'project-1',
    name : 'Profesional Art 1', 
    name2 : 'Printing Data', 
    ShortDescrip : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage : '../images/snapshoot-project1.png',
    alternateTextImage : 'secondary project ShortDescrip image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-2',
    name : 'Profesional Art 2', 
    name2 : 'Printing Data', 
    ShortDescrip : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage : '../images/snapshoot-project1.png',
    alternateTextImage : 'secondary project ShortDescrip image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-3',
    name : 'Profesional Art 3', 
    name2 : 'Printing Data', 
    ShortDescrip : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage : '../images/snapshoot-project1.png',
    alternateTextImage : 'secondary project ShortDescrip image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-4',
    name : 'Profesional Art 4', 
    name2 : 'Printing Data', 
    ShortDescrip : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage : '../images/snapshoot-project1.png',
    alternateTextImage : 'secondary project ShortDescrip image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-5',
    name : 'Profesional Art 5', 
    name2 : 'Printing Data', 
    ShortDescrip : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage : '../images/snapshoot-project1.png',
    alternateTextImage : 'secondary project ShortDescrip image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-6',
    name : 'Profesional Art 6', 
    name2 : 'Printing Data', 
    ShortDescrip : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    LongDescrip : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    featureImage : '../images/snapshoot-project1.png',
    alternateTextImage : 'secondary project ShortDescrip image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
];


const gridWorks = document.getElementById('grid_works');
let popup_container = null;
let div = null;
let cuerpoDom = null;

for (let i = 0; i < arrWorks.length; i += 1) {
  card = arrWorks[i];
  
  div = document.createElement('div');

  /*  ******** the first cards its the main ****************** */

  if (i === 0 ) {

    div.classList = 'header1';
    div.id = card.id;
    div.innerHTML = 
    `<div class="cnt_img_main_card">
       <img class="main_card_cnt_img" src="${card.featureImage}" alt="${card.alternateTextImage}">
    </div>
    <div class="cnt_info_main_card ">
    <h3 class="MainCardTitle Title2_dark">${card.name}</h3>
    <p class="MainCardDescrip">${card.ShortDescrip}</p>
    <ul class="list_feat ">` +
    card.technologies.map(tech => `
      <li class="li_btn">${tech}</li>`).join(' ') + 
      `</ul>
      <a id="btn-${card.id}" class="SeeProjectBtn BtnClass btnCard" href="#">See Project</a>
      </div>
      `;
    } else {
      div.classList = 'sec_card_cnt work-'+i;
      div.id = card.id;
      div.style.background = ('linear-gradient(180deg, rgba(38, 38, 38, 5%) 0%, rgba(38, 38, 38, 0.9) 61.94%), url("./images/img-ph1.png") no-repeat center');
      div.innerHTML = 
       `<span class="background-image" role="img" aria-label="${card.alternateTextImage}"></span>
        <div class="info_card">
        <div class="cnt_info_card">
          <h1 class="Title1_card">${card.name}</h1>
          <h2 class="Title2_card">${card.name2}</h2>
          <p class="CardDescrip">${card.ShortDescrip}</p>
          <ul class="list_feat list_card_gral">` +
          card.technologies.map(tech => `
            <li class="li_btn_2">${tech}</li>`).join(' ') + 
            `</ul>
        </div> 
        <a id="btn-${card.id}" class="SeeProjectBtn project_btn_2 btnCard" href="#">See Project</a>
      </div>
        `;
    }
  
  gridWorks.appendChild(div);
};


/* ***** add click evento to each See project button  */

const buttons = document.getElementsByClassName('btnCard');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', clickBtnMethod);
}

/* this module creates a pop-up window with the information of the respective button's card clicked */

function clickBtnMethod(event) {
  let btn = event.srcElement;
  event.preventDefault();
  const indexProj  = parseInt(btn.id.slice(-1));
  popupWindow(arrWorks[indexProj]);
}

function popupWindow (card) {
  console.log("clic en el projecto ");

  cuerpoDom = document.getElementsByTagName('body')[0];

  cuerpoDom.appendChild(document.createElement('div')).setAttribute('id','popup_container');

  popup_container = document.getElementById('popup_container') ;

  popup_container.style.width = '100%';
  popup_container.style.height = '100%';
  popup_container.style.position = 'fixed';
  popup_container.style.zIndex  = '99';
  popup_container.style.background = 'rgba(0,0,0,0.4)';
  popup_container.style.backdropFilter = 'blur(4px)';
  popup_container.style.top = '0';
  popup_container.style.left = '0';
  
  /* *********************************** */
  div = document.createElement('div');

  div.classList = 'cntInfoPopup';
  div.id = card.id;
  div.innerHTML = 
    `<a id="btnClosePopup" class="btnClosePopup">
        <img class="btn-close-icon" src="images/close-icon.png" alt="Close menu icon.">
    </a> 
    <h1 class="PopupTitle1 Title2_dark">${card.name}</h1>
    <h2 class="PopupTitle2 Title2_card">${card.name2}</h2>
    <ul class="list_feat_popup ">` +
        card.technologies.map(tech => `
        <li class="li_btn_popup">${tech}</li>`).join(' ') + 
    `</ul>
      
    <div class="popup-columns">
      <div class="popup-col1 popupImgCnt">
        <img class="PopupImg" src="${card.featureImage}" alt="${card.alternateTextImage}">
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

  /* ********************************************** */
  
  popup_container.appendChild(div).setAttribute('id','modal');

  let BtnClose = document.getElementById('btnClosePopup');
  let BtnLive = document.getElementById('btnLive');
  let BtnSrc = document.getElementById('btnSrc');

  BtnClose.addEventListener('click', cerrarModal);
  BtnLive.addEventListener('click', function() { visitSite(card.liveVersion)});
  BtnSrc.addEventListener('click',  function() { visitSite(card.source)});
}

function cerrarModal () {
  cuerpoDom.removeChild(popup_container);
}

function visitSite(url) {
  window.open(url);
  cerrarModal();
}