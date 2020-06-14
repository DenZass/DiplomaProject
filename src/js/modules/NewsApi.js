
import {dateNowForQuery, sevenDaysAgoForQuery} from '.././components/constants.js';
// let qestion = 'коронавирус'; 


export class NewsApi {
    constructor (qestion){  

        this.url = 'http://newsapi.org/v2/everything?' +
                    `q=${qestion}&` +
                    `from=${sevenDaysAgoForQuery}&` + 
                    `to=${dateNowForQuery}&` +
                    // 'language=ru'+
                    'pageSize=100&'+
                    'apiKey=3f4f98ba70eb4285ae1d6db8738223f7';
        
    }
    getCard(){
        const req = new Request(this.url);
        return fetch(req)
                    .then((res) => {
                        if (res.ok) {
                          return res.json();
                        }
                    return Promise.reject(res.status)
                    })
                    // .catch((err) => {
                    //     console.log(`Ошибка ${err}`);
                    //   });
    }
}     




