import React from 'react';
import {Button, ButtonGroup, Chip, Stack, Switch} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const SubMenus = () => {
    return (
        <div>
            <Stack sx={{border: '1px solid black'}} direction={"row"} alignItems={'center'} justifyContent={'space-around'}>
                <Stack alignItems={'center'} direction={"row"} justifyContent={'space-around'}>
                <h2>BET BUILDER</h2>
                  <InfoIcon  color={'primary'}/>
                </Stack>
                <Switch  defaultChecked />
            </Stack>
            <Stack sx={{overflowX: 'scroll', width: '100%', borderBottom:'1px solid black'}} direction={'row'} spacing={2} pb={1} pt={1}>
                {Array.from(Array(10), (e, i) => {
                    return <Chip label={`Proposition${i}`} variant="outlined" />
                })}
            </Stack>
        </div>
    );
};

export default SubMenus;