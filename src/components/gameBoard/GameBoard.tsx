import React, { useState} from 'react';
import './gameBoardStyle.css'
import {Collapse, Stack} from "@mui/material";



const GameBoard = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className={'gb-container'}>
            <div onClick={()=>setOpen(!open)} className={'header'}>
                <Stack  direction={'row'} justifyContent="space-around">
                    <h2>team1</h2> <h3>vs</h3> <h2>team2</h2>
                </Stack>
            </div>

            <Collapse in={open} timeout="auto" unmountOnExit>

                <div className={'content'}>
                    game data
                </div>

            </Collapse>

        </div>
    );
};

export default GameBoard;