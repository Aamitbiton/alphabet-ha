import React, {useState} from 'react';
import { Chip, Stack, Switch} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import './subMenusStyle.css'
const SubMenus = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const handleSelected =(i: number)=>{
        console.log(i)
         setSelectedIndex(i)
    }
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
                    return <Chip
                        onClick={()=>handleSelected(i)}
                        className={selectedIndex === i ? 'chip-selected' : ''}
                        label={`Proposition${i + 1}`}
                        variant={selectedIndex === i ? "filled" : "outlined"} />
                })}
            </Stack>
        </div>
    );
};

export default SubMenus;