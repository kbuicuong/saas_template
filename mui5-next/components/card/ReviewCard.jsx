import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Rating,
  Typography,
} from "@mui/material";

const ReviewCard = ({imgSrc, imgAlt, name, review}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={imgSrc} alt={imgAlt}/>
        }
        title={name}
      />
      <CardContent>
        <Rating value={5} readOnly />

        <Typography variant="body2" color="text.secondary">
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
