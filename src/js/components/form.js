

import {launchSearch} from './common.js';


export const form = document.forms.form__search;
export const formInput = form.elements.search__input;
export const formButton = form.elements.search__button;
const errorWindow = document.querySelector('.error');
const textLittle = 'Запрос должен быть больше 2-х символов. Сейчас - ';
const textNormal = 'Не меньше 2-х, и не больше 34-х символов. Сейчас - ';
const textMany = 'Запрос должен быть не больше 34-х символов. Сейчас - ';


let qestion = 'автомобиль';


export function buttonActive(){
    formButton.classList.add('string__button_active');
    formButton.removeAttribute('disabled', true);
    formButton.addEventListener('click', launchSearch);
    formButton.addEventListener('touchstart', launchSearch);
}
export function buttonFrozen(){
    formButton.classList.remove('string__button_active');
    formButton.setAttribute('disabled', true);
    formButton.removeEventListener('click', launchSearch);
    formButton.removeEventListener('touchstart', launchSearch);
}
export function formActive(){
    formInput.removeAttribute('disabled', true);
    buttonActive();
}
export function formFrozen(){
    formInput.setAttribute('disabled', true);
    buttonFrozen();
}

function whitespaces(){
    let whitespacesValid = formInput.value.replace(/\s{2,}/g, ' ');
    formInput.value = whitespacesValid;    
}

//скрыть окно ошибки
function winErrClose(){
    errorWindow.classList.remove('error_active');
}
/// показать окно ошибки
function winErr(){
    errorWindow.classList.add('error_active');
    setTimeout(winErrClose, 30000)
}

///мало символов
function symbolLit(){
    errorWindow.textContent = textLittle + formInput.value.length;
}
//нормально символов
function simbolNorm(){
    errorWindow.textContent = textNormal + formInput.value.length;
}

function simbolMany(){
    errorWindow.textContent = textMany + formInput.value.length;
}
//обработчик ввода
function handlerInput(){
    if( formInput.value.length >= 2 &&
        formInput.value.length <= 34){
            buttonActive();
            whitespaces();
            simbolNorm();
        } else {

            buttonFrozen();    
        }
    if (formInput.value.length<=2) {
        winErr();
        symbolLit();
    }
    if (formInput.value.length>=31) {
        simbolMany();
        winErr();
    }
    if (formInput.value == ' ') {
        buttonFrozen();
    }
}

form.addEventListener('input', handlerInput);

