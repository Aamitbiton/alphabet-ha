import React, {useState} from 'react';
import {Chip, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Stack, Typography} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CustomTimeLine from "./CustomTimeLine";
import {useDispatch, useSelector} from "react-redux";
import {removeBet} from "../../store/slice";
import {IBet} from "../../utils/models";

const BetBuilderBox = () => {
    const dispatch = useDispatch();
    const [betValue, setBetValue] = useState((0.0).toFixed(2));
    const allBets = useSelector((state: any) => state.app).bets;
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBetValue(event.target.value);
    };
    const removeBetFromStore = (id: number) => {
        dispatch(removeBet(id));
    };
    const removeAllBetsFromStore = () => {
        allBets.forEach((bet:IBet)=>{
            removeBetFromStore(bet.id)
        })
    };
    const createTimeLineData = ():{ title: string; subTitle: string }[]=>{
        let data:{title: string, subTitle: string}[] = [];
        allBets.forEach((bet: IBet)=>{
            const timeLineData = {title: bet.bet, subTitle: bet.type}
            data.push(timeLineData)
        })
        return data
    }
    return (
            <div className={"betbuilder-box-container"}>
                <div className={"single-box-data"}>
                    <Stack direction={"row"} spacing={2} sx={{ placeItems: "center" }}>
                        <div onClick={() => removeAllBetsFromStore()}>
                            <ClearIcon fontSize={"large"} />
                        </div>
                        <Chip variant="outlined" label={"BetBuilder"} />
                        <h2>{allBets.length}picks</h2>
                    </Stack>
                    <Typography>Brazil VS France</Typography>
                    <CustomTimeLine data={createTimeLineData()}/>
                </div>
                <div className={"single-box-input"}>
                    <InputLabel htmlFor="component-helper">{354}</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        sx={{ width: "125px" }}
                        defaultValue={betValue}
                        type="number"
                        onChange={handleInputChange}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                    />

                    <FormHelperText id="component-helper-text">
                        payout: ${betValue}
                    </FormHelperText>
                </div>
            </div>
    );
};

export default BetBuilderBox;