import React, {useState} from 'react';
import {ISelection} from "../../utils/models";
import './selectionsStyle.css'
import {Accordion, AccordionDetails, AccordionSummary, Box, Stack} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SelectionBox = (selection:ISelection) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)
   const handleSelected =(i: number)=>{
        if (i === selectedIndex) setSelectedIndex(-1)
        else setSelectedIndex(i)
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
                        <Box className={index === selectedIndex ? 'selected' : 'basic'} onClick={()=>handleSelected(index)}>
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