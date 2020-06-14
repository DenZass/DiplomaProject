
import {days, months} from './constants.js';

export let sliced_array = [];

class DataStorage{
    constructor(date){
    }
    ////закидываем
    insertStorage(date){
        localStorage.setItem('d', JSON.stringify(date));
    }
    ////вытаскиваем
    pullOutStorsge(){
        return JSON.parse(localStorage.getItem('d'));
    }
    insertStorageInput(date){
        localStorage.setItem('inputValue', JSON.stringify(date));
    }
    pullOutStorsgeInput(){
        return JSON.parse(localStorage.getItem('inputValue'));
    }
    slicedArrayNull(){
        sliced_array = [];
    }

    weekDay(date){
        let result = null;
        const d = new Date(date);
       
        Object.keys(days).forEach(element => {
            if(element == d.getDay()){
            
                result = days[element];
            } 
            else{
                // console.log('нет дня недели');
            }
        });
        return d.getDate() + ',' + result;
    }
    
    dateInCardNews(date){
        let result = null;
        const d = new Date(date);
        Object.keys(months).forEach((element)=>{
                    if(element == d.getMonth()){
                        result = months[element];

                    } else{
                        // console.log('нет');
                    }
                })
         return d.getDate() + ' ' + result + ', ' + d.getFullYear();
         
    }

    sliced(array){
        const array_size = 3;

        for (let i = 0; i <array.length; i += array_size) {
            sliced_array.push(array.slice(i, i + array_size));
        }
    }

    slicedNull(){
        sliced_array = [];
    }
}

export const storage = new DataStorage();