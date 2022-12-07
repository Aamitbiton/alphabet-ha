import React, {useState} from 'react';
import {IBet, ISelection, IUpdateToStore} from "../../utils/models";
import './selectionsStyle.css'
import {Accordion, AccordionDetails, AccordionSummary, Box, Stack} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useDispatch, useSelector} from "react-redux";
import {addBet, removeBet, updateBet} from "../../store/slice";
import {toastify} from "../../utils/utils";

const SelectionBox = (selection:ISelection) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const dispatch = useDispatch()
    const allBets = useSelector((state: any) => state.app).bets;
    const betBuilder = useSelector((state: any) => state.app).betBuilder;

    const handleSelected =(i: number, bet: {bet:string,value:number})=>{
        let newBet:IBet = {
            type:selection.title,
            bet:bet.bet,
            value:bet.value,
            id: allBets.length + 1
        }
        if (i === selectedIndex) {
            let betToRemove = allBets.filter((b:IBet)=>b.bet === bet.bet)
            removeBetFromStore(betToRemove[0])
            setSelectedIndex(-1)
        }
        else if(typeAlreadySelected(newBet.type)){
            const index = allBets.findIndex((b:IBet)=>b.bet === typeAlreadySelected(newBet.type).bet);
            updateBetToStore({index, bet:newBet})
            setSelectedIndex(i)
        }
        else if(!betBuilder && allBets.length){
            toastify('bet builder need to be enable for multiple bets',true)
        }else {
            addBetToStore(newBet)
            setSelectedIndex(i)
        }
    }

    const typeAlreadySelected = (type: string) =>{
       return  allBets.filter((b: IBet)=>b.type === type)[0]

    }
    const addBetToStore = (bet: IBet)=>{
        dispatch(addBet(bet))
    }
    const removeBetFromStore = (bet: IBet)=>{
        dispatch(removeBet(bet.id))
    }
    const updateBetToStore = ({index,bet}:IUpdateToStore)=>{
        const payload = {index,bet}
        dispatch(updateBet(payload))
    }

    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h2>{selection.title}</h2>
                </AccordionSummary>
                <AccordionDetails>
                <div className={'box-container'}>
                    {selection.bets.map((bet,index)=>
                        <Box
                            key={bet.bet}
                            className={index === selectedIndex ? 'selected' : 'basic'}
                            onClick={()=>handleSelected(index,bet)}>
                            <p>{bet.bet}</p>
                            <p>{bet.value}</p>
                        </Box>
                    )}
                </div>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default SelectionBox;