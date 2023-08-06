// Page show after auth success
// Welcome page

import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

export default function Welcome() {
  return (
    <Container fixed>
      <Box>
        <Typography>Happy Coding</Typography>
        <img
          src="https://media.licdn.com/dms/image/D4E22AQFxztiG7AomAw/feedshare-shrink_800/0/1687295157005?e=1694044800&v=beta&t=-YPb12Tult9Wx2uKEol1LwR4o1NMl6iaRh-UKwIz5rQ"
          alt={"Old tech version stack"}
          sizes="20px"
        />
      </Box>
    </Container>
  );
}
