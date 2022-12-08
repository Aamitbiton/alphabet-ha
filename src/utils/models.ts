import {SetStateAction, Dispatch} from "react";

export interface ISelection {
  title: string;
  bets: { bet: string; value: number }[];
}
export interface IAppInitialState {
  bets: IBet[];
  betBuilder: boolean;
}

export interface IBet {
  type: string;
  bet: string;
  value: number;
  id: number;
}
export interface IUpdateToStore {
  index: number;
  bet: IBet;
}

export interface IBetSlipBox {
  bet: IBet;
  submit: Dispatch<SetStateAction<boolean>>
}

export interface ICustomTimeLine {
  data: { title: string; subTitle: string }[];
}
