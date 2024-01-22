import {
  FormControlLabel,
  Stack,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import BookMarkIcon from "@mui/icons-material/Bookmark";
import BookMarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [acceptTnC2, setAcceptTnC2] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log(acceptTnC);
  console.log(acceptTnC2);
  console.log(skills);

  const handleChange = (event) => {
    setAcceptTnC(event.target.checked);
  };

  const handleChange2 = (event) => {
    setAcceptTnC2(event.target.checked);
  };

  const handleSkillChange = (event) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Stack direction="column" spacing="2">
      <Box>
        <FormControlLabel
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
          label="I accept terms and conditions."
        />
      </Box>

      <Box>
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTnC}
              onChange={handleChange}
            />
          }
          label="I accept terms and conditions."
        />
      </Box>
      <Checkbox
        icon={<BookMarkBorderIcon />}
        checkedIcon={<BookMarkIcon />}
        checked={acceptTnC2}
        onChange={handleChange2}
      />

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
              value="html"
              label="HTML"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
              value="css"
              label="CSS"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
              value="javascript"
              label="Javascript"
            />
          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
              value="html"
              label="HTML"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
              value="css"
              label="CSS"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
              value="javascript"
              label="Javascript"
            />
          </FormGroup>
        </FormControl>
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
              value="html"
              label="HTML"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
              value="css"
              label="CSS"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
              value="javascript"
              label="Javascript"
            />
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Stack>
  );
};

export default MuiCheckBox;
