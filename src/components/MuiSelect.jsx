import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  const [countries2, setCountries2] = useState([]);
  console.log(countries2);

  const handleChange = (event) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  const handleChange2 = (event) => {
    const value = event.target.value;
    setCountries2(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="success"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>

      <TextField
        sx={{ marginTop: "2rem" }}
        label="Select Country"
        select
        value={countries2}
        onChange={handleChange2}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="success"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
