import React, {useEffect, useState} from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import './betSlipStyles.css'
import {Drawer} from "@mui/material";

const BetSlip = () => {
    const [open, setOpen] = useState(false)
useEffect(()=>{
    console.log('open state:', open)
},[open])
    const drawerBleeding = 55;

    const Root = styled('div')(() => ({
        height: '100%',
        backgroundColor: 'silver',
    }));

    const StyledBox = styled(Box)(() => ({
        backgroundColor: 'silver',
        height: '55px',
        position: 'absolute',
        top: -drawerBleeding,
        cursor: 'pointer',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        visibility: 'visible',
        right: 0,
        left: 0,
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
                    </StyledBox>


            </Drawer>
        </Root>
    );
};

export default BetSlip;