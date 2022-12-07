import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "./betSlipStyles.css";
import { Button, Chip, Drawer, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import SingleBox from "./SingleBox";
import { IBet } from "../../utils/models";

const BetSlip = () => {
  const [open, setOpen] = useState(false);
  const allBets = useSelector((state: any) => state.app).bets;
  useEffect(() => {
    if (!allBets.length) setOpen(false);
  }, [allBets]);
  const drawerBleeding = 65;

  const Root = styled("div")({
    height: "100%",
    backgroundColor: "silver",
    overflowY: 'scroll',
    marginBottom: 70

});
  const BleedingBox = styled(Box)({
    backgroundColor: "silver",
    height: "65px",
    position: "absolute",
    top: -drawerBleeding,
    cursor: "pointer",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    visibility: allBets.length ? "visible" : "hidden",
    right: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-between",
  });
  const InfoBox = styled(Box)({
    backgroundColor: "silver",
    height: 65,
    width: "80%",
    position: "absolute",
    bottom: 5,
    left: "10%",
    maxWidth: 400,
    color: "white",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  });
  const Puller = styled(Box)({
    width: 30,
    height: 6,
    backgroundColor: "white",
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  });

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(75% - ${drawerBleeding}px)`,
            overflow: "visible",
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
        <BleedingBox onClick={toggleDrawer()}>
          <Puller />
          <Stack spacing={1} direction={"row"} sx={{ alignItems: "center" }}>
            <Chip color={"warning"} label={allBets.length} />
            <h3>BetSlip</h3>
          </Stack>
          <Stack spacing={1} direction={"row"} sx={{ alignItems: "center" }}>
            <Chip color={"warning"} label={"BB"} />
            <h3>{allBets.length < 2 ? "Add another selection" : "232"}</h3>
          </Stack>
        </BleedingBox>
        {allBets.length &&
          allBets.map((bet: IBet) => <SingleBox key={bet.bet} bet={bet} />)}

        {allBets.length === 1 && (
          <Stack spacing={2} alignItems={"center"}>
            <Typography color={"red"}>
              Add 1 more pick to build a valid BET BUILDER
            </Typography>
            <Button
              variant={"contained"}
              color={"info"}
              onClick={() => setOpen(false)}
            >
              ADD PICK
            </Button>
          </Stack>
        )}
        <InfoBox>
          <Typography fontSize={20} fontWeight={"bold"} p={0}>
            Enter wager amount
          </Typography>
          <Typography p={0}>minimum wager is 1.00$</Typography>
        </InfoBox>
      </Drawer>
    </Root>
  );
};

export default BetSlip;
