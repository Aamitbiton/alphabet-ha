import React from "react";
import {
  moneyLine,
  anyTimeGoalScorer,
  bothTeamsToScore,
} from "../../utils/data";
import SelectionBox from "./SelectionBox";
import { ISelection } from "../../utils/models";
const Selections = () => {
  const data = [moneyLine, anyTimeGoalScorer, bothTeamsToScore];
  return (
    <div>
      {data.map((selection: ISelection) => (
        <SelectionBox
          title={selection.title}
          bets={selection.bets}
          key={selection.title}
        />
      ))}
    </div>
  );
};

export default Selections;
