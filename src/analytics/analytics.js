

import { storage } from '../js/components/DataStorage.js';

export const sevenDeysSeconds = 604800000;
const  mSekondsDay=  86400000;
const midnight = '00:00:00';


const dateNowSeconds = Date.now();
export const sevenDaysAgoSeconds = dateNowSeconds - sevenDeysSeconds;
export const sevenDaysAgo = new Date(sevenDaysAgoSeconds);
const dateNow = new Date();
export const dateNowForQuery = dateNow.toISOString().slice(0, 19);
export const sevenDaysAgoForQuery = sevenDaysAgo.toISOString().slice(0, 19);

///дни назад
const sixDaysAgoSeconds = sevenDaysAgoSeconds + mSekondsDay;
const sixDaysAgo = new Date(sixDaysAgoSeconds);

const fiveDaysAgoSeconds = sixDaysAgoSeconds + mSekondsDay;
const fiveDaysAgo = new Date(fiveDaysAgoSeconds);

const fourDaysAgoSeconds = fiveDaysAgoSeconds + mSekondsDay;
const fourDaysAgo = new Date(fourDaysAgoSeconds); 

const threeDaysAgoSeconds = fourDaysAgoSeconds + mSekondsDay;
const threeDaysAgo = new Date(threeDaysAgoSeconds); 

const twoDaysAgoSeconds = threeDaysAgoSeconds + mSekondsDay;
const twoDaysAgo  = new Date(twoDaysAgoSeconds); 

const oneDaysAgoSeconds = twoDaysAgoSeconds + mSekondsDay;
const oneDaysAgo  = new Date(oneDaysAgoSeconds);


class Analitic{
    constructor(item){

        this.currentOne=0;
        this.currentTwo=0;
        this.currentThree=0;
        this.currentFour=0;
        this.currentFive=0;
        this.currentSix=0;
        this.currentSeven=0;
        this.main(item);
    }
    seven(item){
        const str = sevenDaysAgo.toISOString().slice(0, 10);
        if (item.includes(str)) {
            this.currentSeven++;
        } else{
            // console.log('нет');
        }
    }

    six(item){
        const str = sixDaysAgo.toISOString().slice(0, 10);
        if (item.includes(str)) {
            this.currentSix++;
        } else{
            // console.log('нет');
        }
    }

    five(item){
        const str = fiveDaysAgo.toISOString().slice(0, 10);
        if (item.includes(str)) {
            this.currentFive++;
        } else{
            // console.log('нет');
        }
    }
    four(item){
        const str = fourDaysAgo.toISOString().slice(0, 10);
        if (item.includes(str)) {
            this.currentFour++;
        } else{
            // console.log('нет');
        }
    }
    three(item){
        const str = threeDaysAgo.toISOString().slice(0, 10);
        if (item.includes(str)) {
            this.currentThree++;
        } else{
            // console.log('нет');
        }
    }
    two(item){
        const str = twoDaysAgo.toISOString().slice(0, 10);
        if (item.includes(str)) {
            this.currentTwo++;
        } else{
            // console.log('нет');
        }
    }
    one(item){
        const str = oneDaysAgo.toISOString().slice(0, 10);
        if (item.includes(str)) {
            this.currentOne++;
        } else{
            // console.log('нет');
        }    
    }

    main(item){
        item.forEach(el => {
            this.one(el.publishedAt);
            this.two(el.publishedAt);
            this.three(el.publishedAt);
            this.four(el.publishedAt);
            this.five(el.publishedAt);
            this.six(el.publishedAt);
            this.seven(el.publishedAt);
        });
    }
    
    scoreReference(item){
        let cur = 0;
        item.forEach(el=>{
            if (el.title.toLowerCase().includes(`${storage.pullOutStorsgeInput()}`.toLowerCase())) {
                cur++;
            }  
        })
        return cur;        
    }
}

const analitic = new Analitic(storage.pullOutStorsge());

/////вопрос
const questionTitleIndicator = document.querySelector('.question__title_indicator');

const indicatorNumSeven = document.querySelector('.indicator__num_seven');
const indicatorNumSix = document.querySelector('.indicator__num_six');
const indicatorNumFive = document.querySelector('.indicator__num_five');
const indicatorNumFour = document.querySelector('.indicator__num_four');
const indicatorNumThree = document.querySelector('.indicator__num_three');
const indicatorNumTwo = document.querySelector('.indicator__num_two');
const indicatorNumOne = document.querySelector('.indicator__num_one');

const blockIndicatorSeven = document.querySelector('.block__indicator_seven');
const blockIndicatorSix = document.querySelector('.block__indicator_six');
const blockIndicatorFive = document.querySelector('.block__indicator_five');
const blockIndicatorFour = document.querySelector('.block__indicator_four');
const blockIndicatorThree = document.querySelector('.block__indicator_three');
const blockIndicatorTwo = document.querySelector('.block__indicator_two');
const blockIndicatorOne = document.querySelector('.block__indicator_one');

const itemDateSeven = document.querySelector('.item__date_seven');
const itemDateSix = document.querySelector('.item__date_six');
const itemDateFive = document.querySelector('.item__date_five');
const itemDateFour = document.querySelector('.item__date_four');
const itemDateThree = document.querySelector('.item__date_three');
const itemDateTwo = document.querySelector('.item__date_two');
const itemDateOne = document.querySelector('.item__date_one');

const scoreNewsforweekIndicator = document.querySelector('.score__newsforweek_indicator');
const scoreReferencesIndicator = document.querySelector('.score__references_indicator');


questionTitleIndicator.textContent = JSON.parse(localStorage.getItem('inputValue'));

indicatorNumSeven.textContent = analitic.currentSeven;
indicatorNumSix.textContent = analitic.currentSix;
indicatorNumFive.textContent = analitic.currentFive;
indicatorNumFour.textContent = analitic.currentFour;
indicatorNumThree.textContent = analitic.currentThree;
indicatorNumTwo.textContent = analitic.currentTwo;
indicatorNumOne.textContent = analitic.currentOne;


blockIndicatorSeven.style.width = `calc(${analitic.currentSeven}% * 2)`;
blockIndicatorSix.style.width = `calc(${analitic.currentSix}% * 2)`;
blockIndicatorFive.style.width = `calc(${analitic.currentFive}% * 2)`;
blockIndicatorFour.style.width = `calc(${analitic.currentFour}% * 2)`;
blockIndicatorThree.style.width = `calc(${analitic.currentThree}% * 2)`;
blockIndicatorTwo.style.width = `calc(${analitic.currentTwo}% * 2)`;
blockIndicatorOne.style.width = `calc(${analitic.currentOne}% * 2)`;

itemDateSeven.textContent = storage.weekDay(sevenDaysAgo.toISOString());
itemDateSix.textContent = storage.weekDay(sixDaysAgo.toISOString());
itemDateFive.textContent = storage.weekDay(fiveDaysAgo.toISOString());
itemDateFour.textContent = storage.weekDay(fourDaysAgo.toISOString());
itemDateThree.textContent = storage.weekDay(threeDaysAgo.toISOString());
itemDateTwo.textContent = storage.weekDay(twoDaysAgo.toISOString());
itemDateOne.textContent = storage.weekDay(oneDaysAgo.toISOString());


scoreNewsforweekIndicator.textContent = storage.pullOutStorsge().length;
///////////////////количество упоменаний в заголовках 
scoreReferencesIndicator.textContent = analitic.scoreReference(storage.pullOutStorsge());
// 