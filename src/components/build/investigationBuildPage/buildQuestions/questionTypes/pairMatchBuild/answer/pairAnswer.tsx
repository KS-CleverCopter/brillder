import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";

import {QuestionValueType} from '../../types';
import {Answer} from '../types';
import QuestionImageDropZone from '../../../baseComponents/QuestionImageDropzone';


export interface PairAnswerProps {
  locked: boolean;
  index: number;
  length: number;
  answer: Answer;
  removeFromList(index: number): void;
  update(): void;
}

const PairAnswerComponent: React.FC<PairAnswerProps> = ({
  locked, index, length, answer,
  removeFromList, update
}) => {
  const answerChanged = (answer: Answer, value: string) => {
    if (locked) { return; }
    answer.value = value;
    answer.valueFile = "";
    answer.answerType = QuestionValueType.String;
    update();
  }

  const removeImage = () => {
    if (locked) { return; }
    answer.valueFile = "";
    answer.answerType = QuestionValueType.None;
    update();
  }

  const renderDeleteButton = () => {
    if (locked) { return; }
    if (answer.answerType === QuestionValueType.Image) {
      return (
        <DeleteIcon
          className="right-top-icon"
          style={{ right: "1%", top: "2%" }}
          onClick={() => removeImage()}
        />
      );
    }

    if (length > 3) {
      return (
        <DeleteIcon
          className="right-top-icon"
          style={{ right: "1%", top: '2%' }}
          onClick={() => removeFromList(index)}
        />
      );
    }
    return "";
  }

  let customClass = '';
  if (answer.optionType === QuestionValueType.Image || answer.answerType === QuestionValueType.Image) {
    customClass = 'pair-image';
  }

  const setImage = (fileName: string) => {
    if (locked) {return;}
    answer.value = "";
    answer.valueFile = fileName;
    answer.answerType = 2;
    update();
  }

  return (
    <Grid container item xs={6}>
      <div className={`pair-match-answer ${customClass}`}>
        {renderDeleteButton()}
        <input
          disabled={locked}
          value={answer.value}
          onChange={(event:any) => answerChanged(answer, event.target.value)}
          placeholder={"Enter Answer " + (index + 1) + "..."}
        />
        <QuestionImageDropZone
          answer={answer}
          type={answer.answerType || QuestionValueType.None}
          fileName={answer.valueFile}
          locked={locked}
          update={setImage}
        />
      </div>
    </Grid>
  );
};

export default PairAnswerComponent;
