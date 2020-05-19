import React from "react";

import './LastSave.scss'
import { Grid } from "@material-ui/core";


interface LastSaveProps {
  updated: string;
}

const LastSave:React.FC<LastSaveProps> = (props) => {
  const updated = new Date(props.updated);

  const formatTwoDigits = (number: Number) => {
    let str = number.toString();
    if (str.length < 2) {
      return '0' + str;
    }
    return str;
  }

  const getTime = (updated: Date) => {
    let hours = formatTwoDigits(updated.getHours());
    let minutes = formatTwoDigits(updated.getMinutes());
    return hours + ":" + minutes;
  }

  return (
    <div className="saved-info">
      <Grid container alignContent="center" justify="center">
        <img alt="" src="/feathericons/save-white.png" />
        <div>
          Last Saved at {getTime(updated)}
        </div>
      </Grid>
    </div>
  );
}

export default LastSave;