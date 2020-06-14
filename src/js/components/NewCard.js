
import { storage } from './DataStorage.js';

export class NewCard{
    constructor(data){
        this.data = data;
        this.create();
    }
    create(){
        const contentCard = document.createElement('div');
        const cardImageBlock = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardText = document.createElement('div');
        const textDate = document.createElement('span');
        const textTitle = document.createElement('h3');
        const textSubtitle = document.createElement('p');
        const textSource = document.createElement('span');

        contentCard.classList.add('content__card');
        cardImage.classList.add('card__image');
        cardImageBlock.classList.add('card__image');
        cardImage.setAttribute('alt', 'Изображение из статьи' )
        cardText.classList.add('card__text');
        textDate.classList.add('text__date');
        textTitle.classList.add('text__title');
        textSubtitle.classList.add('text__subtitle');
        textSource.classList.add('text__source');

        cardImage.src = `${this.data.urlToImage}`;
        textDate.textContent = `${storage.dateInCardNews(this.data.publishedAt)}`;
        textTitle.textContent = `${this.data.title}`;
        textSubtitle.textContent = `${this.data.description}`;
        textSource.textContent = `${this.data.source.name}`;

        cardImageBlock.appendChild(cardImage);
        contentCard.appendChild(cardImageBlock);
        contentCard.appendChild(cardText);
        cardText.appendChild(textDate);
        cardText.appendChild(textTitle);
        cardText.appendChild(textSubtitle);
        cardText.appendChild(textSource);
        cardImage.onerror = function(){
            console.error('Изображение не загруженно');
            cardImage.src= 'https://img.freepik.com/free-vector/404_123447-291.jpg?size=626&ext=jpg';
        
        } 
        contentCard.addEventListener('click', ()=>{
            window.open(`${this.data.url}`, '_blank');
        })
        contentCard.addEventListener('touchstart', ()=>{
            window.open(`${this.data.url}`, '_blank');
        })

        this.element = contentCard;
    }
}

