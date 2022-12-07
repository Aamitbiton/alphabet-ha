import React, {useState} from 'react';
import {IBetSlipBox} from "../../utils/models";
import {Chip, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Typography} from "@mui/material";
import CustomTimeLine from "./CustomTimeLine";
import './betSlipStyles.css'


const SingleBox = (bet:IBetSlipBox) => {
    const [betValue, setBetValue] = useState(0.0)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{

    }
    return (
        <div className={'single-box-container'}>

            <div className={'single-box-data'}>
                <Chip variant="outlined" label={'Single'}/>
                <Typography>Brazil VS France</Typography>
                <CustomTimeLine data={[{title:bet.bet.bet, subTitle: bet.bet.type}]}/>
            </div>

            <div className={'single-box-input'}>
                <InputLabel htmlFor="component-helper">{bet.bet.value}</InputLabel>
                <OutlinedInput
                    inputProps={{
                        maxLength: 13,
                        step: "1"
                    }}
                    id="outlined-adornment-amount"
                    sx={{width:'125px'}}
                    defaultValue={betValue}
                    type='number'
                    onChange={handleInputChange}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                />
                <FormHelperText id="component-helper-text">
                   payout:
                </FormHelperText>
            </div>
        </div>
    );
};

export default SingleBox;