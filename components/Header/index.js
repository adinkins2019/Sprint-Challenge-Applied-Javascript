// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header(pDate, title, pTemp) {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const currDate = document.createElement('span');
    currDate.classList.add('date');
    currDate.textContent = pDate;

    const pubName = document.createElement('h1');
    pubName.textContent = title;

    const currTemp = document.createElement('span');
    currTemp.classList.add('temp');
    currTemp.textContent = pTemp;

    headerDiv.appendChild(currDate);
    headerDiv.appendChild(pubName);
    headerDiv.appendChild(currTemp);

    return headerDiv
    
}

const headerCont = document.querySelector('.header-container');
const headerComp = Header("March 28, 2019", "Lambda Times", "98°");
headerCont.appendChild(headerComp);
