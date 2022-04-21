import { Container, Grid } from "@mui/material";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MuiNextLink from "../MuiNextLink";


const SectionAbout = () => {
  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Typography id="about" variant="h2" textAlign="center" sx={{ mb: 10 }}>
        About Me
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Image
            src="/programming.svg"
            alt="A Programmer"
            layout="responsive"
            width={800}
            height={600}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            A Frontend Developer with an appetite to learn
          </Typography>
          <Typography textAlign="center" sx={{mb:5}}>
            {`Logical and results-driven Frontend Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor.`}
          </Typography>
          <MuiNextLink href="/about-us" underline="none">
            <Button variant="outlined" size="large">
              About Us
            </Button>
          </MuiNextLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionAbout;
