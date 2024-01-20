import { Button, ButtonGroup, Stack } from "@mui/material";
import React from "react";

const MUIButtonGroups = () => {
  return (
    <Stack spacing={2}>
      <Stack direction="row">
        <ButtonGroup variant="contained">
          <Button>LEFT</Button>
          <Button>CENTER</Button>
          <Button>RIGHT</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="outlined">
          <Button>LEFT</Button>
          <Button>CENTER</Button>
          <Button>RIGHT</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="text">
          <Button>LEFT</Button>
          <Button>CENTER</Button>
          <Button>RIGHT</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>LEFT</Button>
          <Button>CENTER</Button>
          <Button>RIGHT</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="success"
        >
          <Button>LEFT</Button>
          <Button>CENTER</Button>
          <Button>RIGHT</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("left clicked")}>
            Click me to see the alert
          </Button>
          <Button>CENTER</Button>
          <Button>RIGHT</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MUIButtonGroups;
