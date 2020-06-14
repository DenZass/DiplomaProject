
import {NewCardList} from './NewCardList.js'; 
import {NewsApi} from '.././modules/NewsApi.js'; 
import {arr} from './components.js';
import {arr2} from './components.js';
import { NewCard, countShowCards } from './NewCard.js';
import { storage, sliced_array } from './DataStorage.js';
import {
    formInput, 
    formButton, 
    form, 
    formActive,
    formFrozen,
    buttonFrozen  
        } from './form.js';

const buttonShowmore = document.querySelector('.button__showmore');
const cardList = new NewCardList;
const resultsearchСontent = document.querySelector('.resultsearch__content');
const contentCard = document.querySelectorAll('.content__card');
////////// прелоудер/блок поиска
const preloader = document.querySelector('.preloader');
const root = document.querySelector('.root');
const body = document.body
const resultsearchBlock = document.querySelector('.resultsearch__dn');
const nothingFound = document.querySelector('.nothing__found');
////блок ошибки
const errorBlockAnswerApi = document.querySelector('.error-api');
const errorCodeValue =  document.querySelector('.error_code');

const buttonSearch = document.querySelector('.string__button');
let qestion = 'автомобиль';
let qestion1 = ' ';
// let qestion2 = 'фф ';
// let qestion3 = '. ';


function deliteCards() {
    /////////////// обнуление sliced_array
    storage.slicedNull();
    ///////////////удаление карточек
    while (resultsearchСontent.firstChild) {
        resultsearchСontent.removeChild(resultsearchСontent.firstChild);
    }
}

////////прелоадер вкл
function runPreloader(){
    preloader.classList.add('circle-preloader');
    root.classList.add('root__for-preloader');
    body.classList.add('body__for-preloader');
}
////////прелоадер выкл
function stopPreloader(){
    preloader.classList.remove('circle-preloader');
    root.classList.remove('root__for-preloader');
    body.classList.remove('body__for-preloader');
}
////////закрыть результат поиска
function resultsearchBlockClose(){
    resultsearchBlock.classList.remove('resultsearch');
    nothingFound.classList.add('nothing__found_active');
}
////////открыть результат поиска 
function resultsearchBlockOn(){
    resultsearchBlock.classList.add('resultsearch');
    nothingFound.classList.remove('nothing__found_active');
}
///закрыть блок ошибки
function errorBlockClose() { 
    errorBlockAnswerApi.classList.remove('error__active');
}
///открыть блок ошибки
function errorBlockActive(data) {
    console.log(errorBlockAnswerApi);
    errorBlockAnswerApi.classList.add('error__active');
    resultsearchBlock.classList.remove('resultsearch');
    errorCodeValue.textContent = `${data}`;
    setTimeout(errorBlockClose, 15000);
    ///// снимаем прелоадер
    stopPreloader(); 
}


export function launchSearch(){
    event.preventDefault();
    ///отключить форму
    formFrozen();
    ///запуск прелоадер
    runPreloader();
    //чистим сторадж
    localStorage.clear();
    /////чистим рабочий массив 
    storage.slicedArrayNull();
    //////////удаление карточек
    deliteCards();
    //////////// делаем запрос к апи
    // const newsApi = new NewsApi(qestion1);
    const newsApi = new NewsApi(formInput.value);
    newsApi.getCard()
        .then((res)=>{
            ///////мобила дальше не показывает
            if (res.articles.length == 0) {
                ////закрывае результаты поиска
                resultsearchBlockClose();
                console.log('пустой');
                formActive();
                buttonFrozen();
                ///// снимаем прелоадер
                stopPreloader();
                return
            }
            //////открываем результаты поиска
            resultsearchBlockOn();
            /////закидываем массив в сторадж
            storage.insertStorage(res.articles);
                ////////кидаем инпут в сторадж
            storage.insertStorageInput(formInput.value);
            ///// подключаем отображение карточек
            const cardList = new NewCardList(storage.pullOutStorsge()); 
            //////пилим полученный массив 
            storage.sliced(storage.pullOutStorsge());
            ////// вставляем карточки
            cardList.out(sliced_array);
            ///// снимаем прелоадер
            stopPreloader();   
            ////включаем форму
            formActive();
            buttonFrozen();                     
        })
        .catch((err) => {
            errorBlockActive(err);
            console.log(`Ошибка ${err}`);
            formActive();
            buttonFrozen();
          });
}

//// отображение карточек 
if(storage.pullOutStorsge() == null){
    console.log(' null ');
    buttonFrozen();
    
} else {
    formInput.value = storage.pullOutStorsgeInput();
    resultsearchBlockOn();
    storage.sliced(storage.pullOutStorsge());
    cardList.out(sliced_array);
    buttonFrozen();
}

//////кнопка показать еще для компа
buttonShowmore.addEventListener('click',()=>{
    cardList.out(sliced_array);
})
//////для мобилы
buttonShowmore.addEventListener('touchstart',()=>{
    cardList.out(sliced_array);
})


