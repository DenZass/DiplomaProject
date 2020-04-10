
import { storage } from './DataStorage.js';

export const days = {
    0:'вс',
    1:'пн',
    2:'вт',
    3:'ср',
    4:'чт',
    5:'пт',
    6:'сб',
}

export const months = {
    0:'января',
    1:'февраля',
    2:'марта',
    3:'апреля',
    4:'мая',
    5:'июня',
    6:'июля',
    7:'августа',
    8:'сентября',
    9:'октября',
    10:'ноября',
    11:'декабря'
}

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


let cur = 0;
let cur2 = 0;
/// кол-во статей 7 днеё назад
function u(item){
    
        //приводим к мсек
    const msecItem = Date.parse(item)
    //приводим к полуночи 7дней назад
    const byMidnight = sevenDaysAgo.toISOString().slice(0, 11).concat(midnight);
    //полночь в мсек
    const inMSecondc = Date.parse(byMidnight); 
    ///следующая полночь в мсекундах от 7 дней назад
    const dayMore = inMSecondc + mSekondsDay;
    
    if (msecItem>inMSecondc && msecItem<dayMore) {
        cur2++
    } else {
        // console.log('нет'); 
    }
    
}

/// 6 дней назад 
function u2(item){
    
        //приводим к мсек
    const msecItem = Date.parse(item)
    //приводим к полуночи 6ддней назад
    const byMidnight = sixDaysAgo.toISOString().slice(0, 11).concat(midnight);
    //полночь в мсек
    const inMSecondc = Date.parse(byMidnight); 
    ///следующая полночь в мсекундах от 6 ддней назад
    const dayMore = inMSecondc + mSekondsDay;
    // console.log(new Date(dayMore));

    if (msecItem>inMSecondc && msecItem<dayMore) {
        cur++
    } else {
        // console.log('нет');
        
    }

}




