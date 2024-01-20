import React from "react";
import { Typography } from "@mui/material";

const MUITypography = () => {
  return (
    <div>

        {/* there are total of 13 typography variant, here is the top 10 one */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>

      {/* it will look h4 element like h1, meaning it will be having h1 tag but all the styles will be h4 */}
      {/* Meaning it changes the symentic element */}
      <Typography variant="h4" component="h1">
        h4 Heading
      </Typography>

      {/* gutterBottom is used to add some margin to bottom to any Typography */}
      {/* by default, it's value is false, if we write gutterBottom to any component, it becomes true then it will add some margin below the component */}
      {/* larger the component, larger will be the margin */}
      <Typography variant="h4" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* subtitle1 and subtitle2 is h6 elements but having different styles */}
      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>

      {/* body1 is default variant of the Typography Component */}
      {/* body1 and body2 is p element with different styles */}
      {/* body1 is having default 1rem (16px) font size */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat
        cupiditate consequatur quibusdam sed ex corporis assumenda, voluptatibus
        quae mollitia animi. Amet sequi sunt impedit quidem eum perspiciatis
        quasi cumque.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat
        cupiditate consequatur quibusdam sed ex corporis assumenda, voluptatibus
        quae mollitia animi. Amet sequi sunt impedit quidem eum perspiciatis
        quasi cumque.
      </Typography>
    </div>
  );
};

export default MUITypography;
