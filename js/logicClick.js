import { ancientLogic } from "./algorithm.js";
import { diffLogic } from "./algorithm.js";
import { fullStackArr } from "./algorithm.js";
import { greenArrCon } from "./algorithm.js";
import { brownArrCon } from "./algorithm.js";
import { blueArrCon } from "./algorithm.js";
import { activeAncientRu } from "./algorithm.js";



const ancientChange = document.querySelector('.ancients-choice-flex');
const ancientList = ancientChange.querySelectorAll('.ancient');
const buttonChange = document.querySelector('.button-change');

const ancientsClose = document.querySelector('.ancients-close');

const wrapper = document.querySelector('.wrapper');

const cardCount = document.querySelector('.card-count');



const hText = document.querySelector('.h-text');
const ancCont = document.querySelector('.ancients-container');

const diffCont = document.querySelector('.diff-container');
const cardCont = document.querySelector('.card-container');

const diff0 = document.querySelector('.diff-0');
const diff1 = document.querySelector('.diff-1');
const diff2 = document.querySelector('.diff-2');
const diff3 = document.querySelector('.diff-3');
const diff4 = document.querySelector('.diff-4');

const green1 = document.querySelector('.green-1');
const green2 = document.querySelector('.green-2');
const green3 = document.querySelector('.green-3');
const blue1 = document.querySelector('.blue-1');
const blue2 = document.querySelector('.blue-2');
const blue3 = document.querySelector('.blue-3');
const brown1 = document.querySelector('.red-1');
const brown2 = document.querySelector('.red-2');
const brown3 = document.querySelector('.red-3');

const cardFull = document.querySelector('.card-full');

const cardH1 = document.querySelector('.card-h-1').style;
const cardH2 = document.querySelector('.card-h-2').style;
const cardH3 = document.querySelector('.card-h-3').style;


let nowCard = null;


export function changeButton(nameCard) {

    ancientList.forEach((value) => {
        value.classList.remove('active');
        value.style.display = 'none';
    })
    ancientsClose.style.display = 'block';
    nameCard.style.display = 'block';
    nameCard.classList.add('active');
    buttonChange.classList.add('button-change-active');
    hText.style.display = 'none';

    function popupDiff() {
        ancientChange.style.width = '475px';
        ancientsClose.style.display = 'none';
        hText.style.display = 'block';
        ancientChange.style.pointerEvents = 'none';
        hText.textContent = "Выберите уровень сложности карт";
        nameCard.classList.remove('active');
        nameCard.classList.add('active-post');
        diffCont.style.display = 'flex';
        buttonChange.style.visibility = 'hidden'; 
        ancCont.justifyContent = '';
        ancientLogic(nameCard);
    }

    buttonChange.addEventListener('click', popupDiff);
}


ancientList.forEach((value) => {
    value.addEventListener('click', () => {
        changeButton(value);
    });
})

ancientsClose.addEventListener('click', () => {
    ancientList.forEach((value) => {
        value.classList.remove('active');
        value.style.display = 'block';
        ancientsClose.style.display = 'none';
        buttonChange.classList.remove('button-change-active');
        hText.style.display = 'block';
    })});


function changeDiff(difficult) {
    diff0.classList.remove('diff-active');
    diff1.classList.remove('diff-active');
    diff2.classList.remove('diff-active');
    diff3.classList.remove('diff-active');
    diff4.classList.remove('diff-active');
    difficult.classList.add('diff-active');
    buttonChange.style.visibility = 'visible';
    buttonChange.style.height = '110px';
    buttonChange.style.fontSize = '40px';
    buttonChange.textContent = 'Замешать колоду';

    function popupCard() {
        diffLogic(difficult);
        diffCont.style.display = 'none';
        buttonChange.style.visibility = 'hidden';
        buttonChange.style.height = '100px';
        cardCont.style.display = 'flex';
        cardFull.style.display = 'block';
        hText.textContent = "Чтобы вытащить карту Мифов, нажмите на колоду!";
    }
    buttonChange.addEventListener('click', popupCard);
}


diff0.addEventListener('click', () => {
    changeDiff(diff0);
});
diff1.addEventListener('click', () => {
    changeDiff(diff1);
});
diff2.addEventListener('click', () => {
    changeDiff(diff2);
});
diff3.addEventListener('click', () => {
    changeDiff(diff3);
});
diff4.addEventListener('click', () => {
    changeDiff(diff4);
});

if (cardFull.classList.contains('card-reverse') === true) {
    cardFull.classList.remove('card-reverse');
}


function reload() {
    buttonChange.style.visibility = 'hidden';
    hText.style.display = 'none';
    ancCont.style.display = 'none';
    cardCont.style.display = 'none';
    setTimeout(function () {
        location.reload();
    }, 10);

}

function winAncient() {
    hText.style.height = '140px';
    hText.textContent = `Древний ${activeAncientRu} захватил этот мир! Игра окончена!`;
    cardFull.style.display = 'none';
    cardCont.style.display = 'none';
    wrapper.style.backgroundImage = 'url(./assets/gameOver.jpg)';
}

function newCard() {

    buttonChange.style.visibility = 'visible';
    buttonChange.style.height = '80px';
    buttonChange.textContent = 'Играть ещё раз';
    buttonChange.addEventListener('click', () => {
        reload();
    });

    if (fullStackArr.length === 0) {
        winAncient();
    }

    cardFull.style.backgroundImage = fullStackArr[0];
    nowCard = cardFull.style.backgroundImage;

    if ((Number(green1.textContent) > 0) && (greenArrCon.includes(fullStackArr[0]) === true)) {
        green1.textContent -= 1;
    } else if ((Number(brown1.textContent) > 0) && (brownArrCon.includes(fullStackArr[0]) === true)) {
        brown1.textContent -= 1;
    } else if ((Number(blue1.textContent) > 0) && (blueArrCon.includes(fullStackArr[0]) === true)) {
        blue1.textContent -= 1;
    } else if ((Number(green2.textContent) > 0) && (greenArrCon.includes(fullStackArr[0]) === true)) {
        cardH1.opacity = "0.6";
        cardH1.color = "red";
        green2.textContent -= 1;
    } else if ((Number(brown2.textContent) > 0) && (brownArrCon.includes(fullStackArr[0]) === true)) {
        cardH1.opacity = "0.6";
        cardH1.color = "red";
        brown2.textContent -= 1;
    } else if ((Number(blue2.textContent) > 0) && (blueArrCon.includes(fullStackArr[0]) === true)) {
        cardH1.opacity = "0.6";
        cardH1.color = "red";
        blue2.textContent -= 1;
    } else if ((Number(green3.textContent) > 0) && (greenArrCon.includes(fullStackArr[0]) === true)) {
        cardH2.opacity = "0.6";
        cardH2.color = "red";
        green3.textContent -= 1;
    } else if ((Number(brown3.textContent) > 0) && (brownArrCon.includes(fullStackArr[0]) === true)) {
        cardH2.opacity = "0.6";
        cardH2.color = "red";
        brown3.textContent -= 1;
    } else if ((Number(blue3.textContent) > 0) && (blueArrCon.includes(fullStackArr[0]) === true)) {
        cardH2.opacity = "0.6";
        cardH2.color = "red";
        blue3.textContent -= 1;
    }

    let sumCard = Number(brown1.textContent) + Number(blue1.textContent) + Number(green1.textContent) 
    + Number(brown2.textContent) + Number(blue2.textContent) + Number(green2.textContent) 
    + Number(brown3.textContent) + Number(blue3.textContent) + Number(green3.textContent); 

    fullStackArr.shift();
    cardCount.textContent = `Осталось карт в колоде: ${sumCard}`;
    if (sumCard === 0) {
        cardCount.style.opacity = "0.6";
        cardCount.style.color = 'red';
    }

    if ((Number(brown3.textContent) === 0) && (Number(blue3.textContent) === 0)) {
        cardH3.opacity = "0.6";
        cardH3.color = "red";
    }
}


cardFull.addEventListener('click', newCard);


window.addEventListener('mouseover', function (event) {
    if ((event.target !== cardFull)) {
        cardFull.style.backgroundImage = 'url(./assets/mythicCardBackground.png)';
    } else if (event.target === cardFull) {
        cardFull.style.backgroundImage = nowCard;
    }
});

