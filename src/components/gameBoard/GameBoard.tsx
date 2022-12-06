import React, { useState} from 'react';
import './gameBoardStyle.css'
import {Chip, Collapse, Stack} from "@mui/material";



const GameBoard = () => {
    const [open, setOpen] = useState(true)

    return (
        <div className={'gb-container'}>
            <div onClick={()=>setOpen(!open)} className={'header'}>
                <Stack  direction={'row'} justifyContent="space-around">
                    <h2>Brazil</h2> <h3>vs</h3> <h2>France</h2>
                </Stack>
            </div>

            <Collapse in={open} timeout="auto" unmountOnExit>

                <div className={'content'}>
                    <div className={'blur-background'}>
                        Brazil <Chip color={'info'} label={'VS'} variant={"filled"}/> France
                    </div>
                </div>

            </Collapse>

        </div>
    );
};

export default GameBoard;