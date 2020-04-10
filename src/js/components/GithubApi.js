
//GithubApi

import {CommitCardList} from './CommitCardList.js';



export class GithubApi {
    constructor (){  
        this.url = 'https://api.github.com/repos/denzass/diplomaproject/commits';        
    }
    getCommit(){
        return fetch(this.url)
                    .then((res) => {
                        if (res.ok) {
                          return res.json();
                        }
                    return Promise.reject(res.status)
                    })
                    .catch((err) => {
                        console.log(`Ошибка ${err}`);
                      });
    }
}  

const githubApi = new GithubApi();
githubApi.getCommit()
    .then((res)=>{
        const commitCardList = new CommitCardList(res);
    })

