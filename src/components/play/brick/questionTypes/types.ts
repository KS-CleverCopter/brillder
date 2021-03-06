import { Question } from "model/question";
import {ComponentAttempt} from '../model/model';


export interface CompQuestionProps {
  question: Question;
  component: any;
  attempt?: ComponentAttempt;
  isPreview?: boolean;
  answers: any;
}
