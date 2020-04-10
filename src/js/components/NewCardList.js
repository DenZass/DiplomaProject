
import {NewCard} from './NewCard.js';
import { storage } from './DataStorage.js';

const resultsearchСontent = document.querySelector('.resultsearch__content');
const buttonShowmore = document.querySelector('.button__showmore');
let count = 0;
let countShowCards = 0;

export class NewCardList {
    constructor(cards) {
      this.cards = cards;
    }
    //////отключение кнопки "показать еще"
    disabledButton(){
      buttonShowmore.classList.add('resultsearch__button_dn');
      count = 0;
      countShowCards = 0;
    }
    //////включение кнопки "показать еще"
    turnOnButton(){
      buttonShowmore.classList.remove('resultsearch__button_dn');
    }

    addCard(data) {
      const card = new NewCard(data);
      resultsearchСontent.appendChild(card.element)
    }
    
    out(arr){
      const self = this;
      for (let i = count; i < arr.length; i++) {
          arr[i].forEach((el)=>{
              countShowCards++;
              self.addCard(el);

          });
          break
      }

      
      count++;
      // if (count >= 7) {
      //     count = 0;
      // }
      //////сверяем счетчик для отключения кнопки
      if (countShowCards == storage.pullOutStorsge().length) {
        this.disabledButton();
      } else {
        this.turnOnButton();
      }
    }
} 





//   console.log(NewCard);
// function addCardAll(params) {
//   params.forEach(element => {
//        console.log(element);
       
//        const card = new NewCard(element);
//        console.log(card.element);

//        resultsearchСontent.appendChild(card.element)
//    });
// }
// addCardAll(arr2);