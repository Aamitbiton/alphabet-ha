import React, { useState } from "react";
import { IBet, IBetSlipBox } from "../../utils/models";
import {
  Chip,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import CustomTimeLine from "./CustomTimeLine";
import ClearIcon from "@mui/icons-material/Clear";
import "./betSlipStyles.css";
import {removeBet} from "../../store/slice";
import { useDispatch } from "react-redux";

const SingleBox = ({bet}: IBetSlipBox) => {
  const dispatch = useDispatch();
  const [betValue, setBetValue] = useState('0.00');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value =event.target.value === '' ? '0.00' : parseFloat(event.target.value).toFixed(2)
    setBetValue(value);
  };
  const removeBetFromStore = (id: number) => {
    dispatch(removeBet(id));
  };
  return (
    <div className={"single-box-container"}>
      <div className={"single-box-data"}>
        <Stack direction={"row"} spacing={2} sx={{ placeItems: "center" }}>
          <div onClick={() => removeBetFromStore(bet.id)}>
            <ClearIcon fontSize={"large"} />
          </div>
          <Chip variant="outlined" label={"Single"} />
        </Stack>
        <Typography>Brazil VS France</Typography>
        <CustomTimeLine
          data={[{ title: bet.bet, subTitle: bet.type }]}
        />
      </div>
      <div className={"single-box-input"}>
        <InputLabel htmlFor="component-helper">{bet.value}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          sx={{ width: "125px" }}
          placeholder={'0.00'}
          type="number"
          value={Number(betValue).toFixed(2)}
          onChange={handleInputChange}

          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />

        <FormHelperText id="component-helper-text">
          payout: ${ betValue }
        </FormHelperText>
      </div>
    </div>
  );
};

export default SingleBox;
