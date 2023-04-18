/* this module You use an array to store all of the information for all projects */
/* each project has: name, description, featured image, technologies, link to live version, link to source */

const arrWorks = [
  { 
    id : 'project-0',
    name : 'Multi-Post Stories', 
    name2 : '', 
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
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
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    featureImage : '../images/img-ph1.png',
    alternateTextImage : 'secondary project description image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-2',
    name : 'Profesional Art 2', 
    name2 : 'Printing Data', 
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    featureImage : '../images/img-ph2.png',
    alternateTextImage : 'secondary project description image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-3',
    name : 'Profesional Art 3', 
    name2 : 'Printing Data', 
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    featureImage : '../images/img-ph3.png',
    alternateTextImage : 'secondary project description image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-4',
    name : 'Profesional Art 4', 
    name2 : 'Printing Data', 
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    featureImage : '../images/img-ph3.png',
    alternateTextImage : 'secondary project description image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-5',
    name : 'Profesional Art 5', 
    name2 : 'Printing Data', 
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    featureImage : '../images/img-ph3.png',
    alternateTextImage : 'secondary project description image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
  { 
    id : 'project-6',
    name : 'Profesional Art 6', 
    name2 : 'Printing Data', 
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard.",
    featureImage : '../images/img-ph3.png',
    alternateTextImage : 'secondary project description image.',
    technologies : ['CSS', 'Boostrap', 'Ruby'],
    liveVersion : 'https://jicamargo.github.io/first-mobile-portfolio/',
    source : 'https://github.com/jicamargo/first-mobile-portfolio'
  },
];


const gridWorks = document.getElementById('grid_works');

let div = null;

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
    <p class="MainCardDescrip">${card.description}</p>
    <ul class="list_feat lu_btn_main_card">` +
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
          <p class="CardDescrip">${card.description}</p>
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
  
  btn = event.srcElement;
  event.preventDefault();
  const indexProj  = parseInt(btn.id.slice(-1));
  popupWindow(arrWorks[indexProj]);
}

function popupWindow (cardInfo) {
  console.log("clic en el projecto ");
  console.log(cardInfo);

}