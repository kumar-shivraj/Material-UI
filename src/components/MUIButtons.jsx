import { Button, IconButton, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MUIButtons = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <Button variant="text" href="#">
          TEXT
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="text">TEXT</Button>
        <Button variant="contained">CONTAINED</Button>
        <Button variant="outlined">OUTLINED</Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          PRIMARY
        </Button>
        <Button variant="contained" color="secondary">
          SECONDARY
        </Button>
        <Button variant="contained" color="error">
          ERROR
        </Button>
        <Button variant="contained" color="success">
          SUCCESS
        </Button>
        <Button variant="contained" color="info">
          INFO
        </Button>
        <Button variant="contained" color="warning">
          WRNING
        </Button>
      </Stack>
      <Stack spacing={2} display="block" direction="row">
        <Button variant="contained" size="small">
          CONTAINED
        </Button>
        <Button variant="contained" size="medium">
          CONTAINED
        </Button>
        <Button variant="contained" size="large">
          CONTAINED
        </Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<SendIcon />}>
          SEND
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          SEND
        </Button>
        <IconButton aria-label="send" color="success">
          <SendIcon />
        </IconButton>

        <IconButton aria-label="send" color="error" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack spacing={2} direction="row">
      <Button variant="contained" color="success">
          NORMAL
        </Button>
        <Button variant="contained" color="success" disableElevation>
          DISABLED ELEVATION
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
      <Button variant="contained" color="success">
          NORMAL
        </Button>
        <Button variant="contained" color="success" disableRipple>
          DISABLED Ripple
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="warning" onClick={() => alert('OK')} >Click Handler Added</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="success" disabled>DISABLED</Button>
      </Stack>
    </Stack>
  );
};

export default MUIButtons;
