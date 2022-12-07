import React, {useEffect, useState} from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './betSlipStyles.css'
import {Chip, Drawer, Stack} from "@mui/material";
import {useSelector} from "react-redux";

const BetSlip = () => {
    const [open, setOpen] = useState(false)
    const allBets = useSelector((state: any) => state.app).bets;

    const drawerBleeding = 55;

    const Root = styled('div')(() => ({
        height: '100%',
        backgroundColor: 'silver',
    }));

    const StyledBox = styled(Box)(() => ({
        backgroundColor: 'silver',
        height: '65px',
        position: 'absolute',
        top: -drawerBleeding,
        cursor: 'pointer',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        visibility: allBets.length ? 'visible' : 'hidden',
        right: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'space-between'
    }));

    const Puller = styled(Box)(() => ({
        width: 30,
        height: 6,
        backgroundColor: 'white',
        borderRadius: 3,
        position: 'absolute',
        top: 8,
        left: 'calc(50% - 15px)',
    }));

    const toggleDrawer = () => () => {
            setOpen(!open);
        };


    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Drawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer()}

                ModalProps={{
                    keepMounted: true,
                }}
            >

                <StyledBox onClick={toggleDrawer()}>
                        <Puller/>
                    <Stack direction={'row'} sx={{alignItems:'center'}}>
                        <Chip color={'warning'} label={allBets.length}/>
                        <h3>BetSlip</h3>
                    </Stack>
                    <Stack direction={'row'} sx={{alignItems:'center'}}>
                       <Chip color={'warning'} label={'BB'}/>
                       <h3>{allBets.length < 2 ? 'Add another selection' : '232'}</h3>
                   </Stack>
                    </StyledBox>


            </Drawer>
        </Root>
    );
};

export default BetSlip;