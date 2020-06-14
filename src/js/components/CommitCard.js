
import { storage } from './DataStorage.js';

export class CommitCard{
    constructor(data){
        this.data = data;
        this.create();
    }
    create(){
        const contentCardHistorycommit = document.createElement('div');
        const cardtextHistorycommit = document.createElement('div');
        const textDateHistorycommit = document.createElement('div');
        const textBoxHistorycommit = document.createElement('div');
        const boxImageHistorycommit = document.createElement('img');
        const boxTitleHistorycommit = document.createElement('div');
        const titleHeaderHistorycommit = document.createElement('h3');
        const titleEmailHistorycommit = document.createElement('span');
        const textSubtitleHistorycommit = document.createElement('p');


        contentCardHistorycommit.classList.add('content__card'); 
        contentCardHistorycommit.classList.add('content__card_historycommit');
        contentCardHistorycommit.classList.add('swiper-slide');  
        cardtextHistorycommit.classList.add('card__text');
        textDateHistorycommit.classList.add('text__date');
        textBoxHistorycommit.classList.add('text__box');
        boxImageHistorycommit.classList.add('box__image');
        boxTitleHistorycommit.classList.add('box__title');
        titleHeaderHistorycommit.classList.add('text__title');
        titleHeaderHistorycommit.classList.add('title__header');
        titleEmailHistorycommit.classList.add('title__email');
        textSubtitleHistorycommit.classList.add('text__subtitle');
        textSubtitleHistorycommit.classList.add('text__subtitle_historycommit');

        
        titleHeaderHistorycommit.textContent = `${this.data.commit.committer.name}`;
        titleEmailHistorycommit.textContent = `${this.data.commit.committer.email}`;
        textDateHistorycommit.textContent = `${storage.dateInCardNews(this.data.commit.committer.date)}`; 

        textSubtitleHistorycommit.textContent = `${this.data.commit.message}`;
        boxImageHistorycommit.textContent = `${this.data.author.avatar_url}`;
 

        contentCardHistorycommit.appendChild(cardtextHistorycommit);
        cardtextHistorycommit.appendChild(textDateHistorycommit);
        cardtextHistorycommit.appendChild(textBoxHistorycommit);
        cardtextHistorycommit.appendChild(textSubtitleHistorycommit);
        textBoxHistorycommit.appendChild(boxImageHistorycommit);
        textBoxHistorycommit.appendChild(boxTitleHistorycommit);
        boxTitleHistorycommit.appendChild(titleHeaderHistorycommit);
        boxTitleHistorycommit.appendChild(titleEmailHistorycommit);

        this.element = contentCardHistorycommit;
    }
}


const historycommitContent = document.querySelector('.historycommit__content');

