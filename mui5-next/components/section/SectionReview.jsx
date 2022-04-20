import ReviewCard from "@components/card/ReviewCard";
import { Container, Grid, Typography } from "@mui/material";

const SectionReview = () => {
  return (
    <Container maxWidth="md" sx={{ my: 15 }}>
      <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
        Customer Review
      </Typography>
      <Grid container spacing={2}>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <ReviewCard
            imgSrc="/public"
            imgAlt="Alex image"
            name="Alex"
            review="I never taste something like this before. Japanese mix Western
          cuisine. Some good, some weird taste to me. Overall the cooking tastes
          good."
          />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <ReviewCard
            imgSrc="/public"
            imgAlt="Mona image"
            name="Mona"
            review="Sushi with gravy mushroom sauce, fried chicken with teriyaki sauce,
            watermelon with green tea ice cream. Cool! New fresh taste to me."
          />
        </Grid>
        <Grid container item justifyContent="center" xs={12} sm={6} md={4}>
          <ReviewCard
            imgSrc="/public"
            imgAlt="Shanen image"
            name="Shanen"
            review="Wasabi with steak, huh? What a fusion! Taste a bit weird but
            acceptable. I reserve my last star until my next visit."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionReview;
