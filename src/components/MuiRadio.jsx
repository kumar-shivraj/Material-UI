import React from "react";

import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Stack,
  FormHelperText,
} from "@mui/material";

import { useState } from "react";

const MuiRadio = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  console.log(value);
  console.log(value2);
  console.log(value3);
  console.log(value4);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  return (
    <Stack direction="column" spacing={3}>
      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel control={<Radio />} value="0-2" label="0-2" />
            <FormControlLabel control={<Radio />} value="3-5" label="3-5" />
            <FormControlLabel control={<Radio />} value="6-10" label="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label2">
            Years of experience(displayed the radio in row)
          </FormLabel>
          <RadioGroup
            name="job-experience-group2"
            aria-labelledby="job-experience-group-label2"
            value={value2}
            onChange={handleChange2}
            row
          >
            <FormControlLabel control={<Radio />} value="0-2" label="0-2" />
            <FormControlLabel control={<Radio />} value="3-5" label="3-5" />
            <FormControlLabel control={<Radio />} value="6-10" label="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel id="job-experience-group-label3">
            Years of experience(select individual item to see the size and
            color)
          </FormLabel>
          <RadioGroup
            name="job-experience-group3"
            aria-labelledby="job-experience-group-label3"
            value={value3}
            onChange={handleChange3}
          >
            <FormControlLabel
              control={<Radio color="success" size="medium" />}
              value="0-2"
              label="0-2"
            />
            <FormControlLabel
              control={<Radio color="error" size="small" />}
              value="3-5"
              label="3-5"
            />
            <FormControlLabel
              control={<Radio color="warning" />}
              value="6-10"
              label="6-10"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl error>
          <FormLabel id="job-experience-group-label4">
            Years of experience(shown as error)
          </FormLabel>
          <RadioGroup
            name="job-experience-group4"
            aria-labelledby="job-experience-group-label4"
            value={value4}
            onChange={handleChange4}
          >
            <FormControlLabel control={<Radio />} value="0-2" label="0-2" />
            <FormControlLabel control={<Radio />} value="3-5" label="3-5" />
            <FormControlLabel control={<Radio />} value="6-10" label="6-10" />
          </RadioGroup>
          <FormHelperText>Invalid Selection(form helper text)</FormHelperText>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default MuiRadio;
