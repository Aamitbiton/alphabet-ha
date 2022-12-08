import CustomTimeLine from "../components/betSlip/CustomTimeLine";

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
  wager?: number
}
export interface IUpdateToStore {
  index: number;
  bet: IBet;
}

export interface IBetSlipBox {
  bet: IBet;
}

export interface ICustomTimeLine {
  data: { title: string; subTitle: string }[];
}
