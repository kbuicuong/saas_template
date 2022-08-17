import { Fragment } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import Hero from "../components/section/Hero";
import SectionAbout from "../components/section/SectionAbout";
import SectionImage from "../components/section/SectionImage";
import SectionReview from "../components/section/SectionReview";
import NavigationCard from "../components/card/NavigationCard";
import SectionJobs from "../components/section/SectionJobs";
import SectionSkills from "../components/section/SectionSkills";

const Homepage = () => {
  return (
    <Fragment>
      <Hero
        imgSrc="/laptop-hero.jpg"
        imgAlt="mac computer on a desk"
        title="Hi, I'm Kevin"
        subtitle="Frontend Developer"
      />
      <SectionAbout />

      <SectionSkills />

      <SectionJobs />

      {/* <SectionImage imgSrc="/fusion-food.jpg" imgAlt="fusion food" /> */}

      {/* <SectionReview /> */}

      {/* <SectionImage imgSrc="/sushi.jpg" imgAlt="sushi" /> */}

      <Container maxWidth="md" sx={{ my: 15 }}>
        <Typography id="projects" variant="h2" textAlign="center" sx={{ mb: 10 }}>
          Projects
        </Typography>
        <Grid container spacing={2}>
          <Grid container item justifyContent="center" xs={12} md={12}>
            <NavigationCard
              imgSrc="/portfolio-site.png"
              imgAlt="Portfolio Site"
              title="This site!"
              desc="This site was built using NextJs and MUI. This is just a simple personal website where I can practice with those technologies. "
              pagePath="https://github.com/kbuicuong/react/tree/main/mui5-next"
              ctaText="Github Link"
            />
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Homepage;
