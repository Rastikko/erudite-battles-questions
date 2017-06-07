import Component, { tracked } from "@glimmer/component";
import getEnglishQuestion from './get-english-question';

export default class EruditeBattlesQuestions extends Component {

   @tracked selectingQuestion = true;
   @tracked question;

  selectEnglish() {
    this.selectingQuestion = false;
    this.question = getEnglishQuestion();
  }

  selectMath() {
    this.selectingQuestion = false;
  }
}
