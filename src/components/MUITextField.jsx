import { InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { useState } from "react";

export const MUITextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack direction="column" spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="This is label" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" type="input" />
        <TextField label="password" variant="outlined" type="password" />
        <TextField label="email" variant="outlined" type="email" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="default size" variant="outlined" />
        <TextField label="small" variant="outlined" size="small" />
        <TextField label="large" variant="outlined" size="large" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="disabled" variant="outlined" type="input" disabled />
        <TextField label="required" variant="outlined" type="input" required />
        <TextField
          label="Read Only"
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="success color"
          variant="outlined"
          type="input"
          color="success"
        />
        <TextField
          label="error color"
          variant="outlined"
          type="password"
          color="error"
        />
        <TextField
          label="warning color"
          variant="outlined"
          type="email"
          color="warning"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="input"
          variant="outlined"
          type="input"
          color="success"
          helperText="This is info color"
        />
        <TextField
          label="input"
          variant="outlined"
          type="password"
          color="error"
          helperText="Please enter al strong password"
        />
        <TextField
          label="input"
          variant="outlined"
          type="input"
          color="warning"
          helperText="please enter a valid mail"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Weight"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="right">Kg</InputAdornment>
            ),
          }}
        />
        <TextField
          label="Price"
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="left">$</InputAdornment>,
          }}
        />
        <TextField
          label="Price"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="left">
                <VisibilityRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Form input" error required variant="outlined" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form input"
          error={!value}
          required
          variant="outlined"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          helperText={!value? "Required" : "Do not share your password with anyone"}
        />
      </Stack>
    </Stack>
  );
};

export default MUITextField;
