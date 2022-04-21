import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const SectionSkills = () => {
  const matchesXS = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  return (
    <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
      <Typography id="skills" variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Skills
      </Typography>
      <Grid
        container
        spacing={3}
      >
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/html5.svg"
            alt="HTML5"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/css3.svg"
            alt="CSS3"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/sass.svg"
            alt="Sass"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/bootstrap-4.svg"
            alt="Bootstrap 4"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/js.svg"
            alt="Javascript"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/jquery-vertical.svg"
            alt="jQuery"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/light-testcafe.svg"
            alt="Testcafe"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/php-icon.svg"
            alt="PHP"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/react-icon.svg"
            alt="ReactJs"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/nextjs.svg"
            alt="NextJs"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/material-ui.svg"
            alt="Material UI"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{display: "flex", justifyContent: "center"}}>
          <Image
            src="/tech/git.svg"
            alt="Git"
            layout="fixed"
            width={100}
            height={100}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionSkills;
