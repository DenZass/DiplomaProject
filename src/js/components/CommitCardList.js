
import {CommitCard} from './CommitCard.js';
import swiper from '../../about/about.js';

const historycommitContent = document.querySelector('.swiper-wrapper'); 

let curr = 0;
const n = 0;

export class CommitCardList {
    constructor(commits) {
      this.commits = commits;
      this.render(commits);
    }
  
    addCommit(data) {
  
      const commit = new CommitCard(data);
      historycommitContent.children[0 + curr].appendChild(commit.element);
    }
    
    render(commits) {
      const self = this;
      commits.reverse().forEach(function (item) {
        self.addCommit(item)
        curr++;
        
      });
    }
  } 
