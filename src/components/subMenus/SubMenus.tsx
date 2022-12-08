import React, { useState } from "react";
import { Chip, Stack, Switch } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "./subMenusStyle.css";
import {useDispatch, useSelector} from "react-redux";
import { setBetBuilder } from "../../store/slice";
import {IBet} from "../../utils/models";
import {toastify} from "../../utils/utils";
const SubMenus = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [switchChecked, setSwitchChecked] = useState(true);
    const allBets = useSelector((state: any) => state.app).bets;

    const dispatch = useDispatch();
  const handleSelected = (i: number) => {
    setSelectedIndex(i);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {

      if (!event.target.checked && checkIfHaveMultipleTypes()){
          toastify('you cant disable because you have multiple bets', true)
          setSwitchChecked(true)
          return


      }
      setSwitchChecked(event.target.checked)
    dispatch(setBetBuilder(event.target.checked));
  };
  const checkIfHaveMultipleTypes = ():boolean=>{
      let data: string[] = []
      allBets.forEach((bet:IBet)=>{
          if (!data.length) data.push(bet.type)
          else if (bet.type !== data[0]) data.push(bet.type)
      })
      return data.length > 1
  }
  return (
    <div>
      <Stack
        sx={{ border: "1px solid black" }}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-around"}
        >
          <h2>BET BUILDER</h2>
          <InfoIcon color={"primary"} />
        </Stack>
        <Switch onChange={handleSwitchChange} checked={switchChecked} />
      </Stack>
      <Stack
        sx={{
          overflowX: "scroll",
          width: "100%",
          borderBottom: "1px solid black",
        }}
        direction={"row"}
        spacing={2}
        pb={1}
        pt={1}
      >
        {Array.from(Array(10), (e, i) => {
          return (
            <Chip
              key={i}
              onClick={() => handleSelected(i)}
              className={selectedIndex === i ? "chip-selected" : ""}
              label={`Proposition${i + 1}`}
              variant={selectedIndex === i ? "filled" : "outlined"}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default SubMenus;
