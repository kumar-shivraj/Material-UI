import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

const MUIToggleButtons = () => {
  const [formats, setFormats] = useState([]);
  const [formats2, setFormats2] = useState(null);

  console.log("Format 1 : ", formats);
  console.log("Format 2 : ", formats2);

  const handleFormatChange = (event, updatedFormats) => {
    setFormats(updatedFormats);
  };

  const handleFormatChange2 = (event, updatedFormats) => {
    setFormats2(updatedFormats);
  };

  return (
    <Stack direction="row">
      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats}
        onChange={handleFormatChange}
        size="small"
        color="success"
        orientation="vertical"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats2}
        onChange={handleFormatChange2}
        size="small"
        color="success"
        orientation="vertical"
        exclusive
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MUIToggleButtons;
