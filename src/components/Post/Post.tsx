import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Container } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface PostProps {
  author: string;
  avatar: string;
  createdAt: string;
  imageUrl: string;
  imageAlt: string;
  text: string;
  title: string;
  tags: string[];
  likes: string[];
}

const containerFlex = {
  display: "flex",
  padding: "0px !important",
};

export default function Post({
  author,
  avatar,
  createdAt,
  imageUrl,
  imageAlt,
  text,
  title,
  likes,
  tags,
}: PostProps) {
  return (
    <Card sx={{ maxWidth: 640, margin: "16px auto" }}>
      <CardHeader
        avatar={
          <Avatar src={avatar} sx={{ bgcolor: red[500] }} aria-label="recipe" />
        }
        title={author}
        subheader={createdAt}
      />
      {imageUrl && (
        <CardMedia
          component="img"
          height="194"
          image={imageUrl}
          alt={imageAlt}
        />
      )}
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Container sx={containerFlex}>
          <Container
            sx={{
              padding: "0px !important",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Container
              sx={{
                padding: "0px !important",
                display: "contents",
                // alignItems: "center",
              }}
            >
              <IconButton aria-label="like">
                <FavoriteIcon />
              </IconButton>
              <Typography>{likes.length}</Typography>
            </Container>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Container>
          <Stack
            direction="row"
            spacing={1}
            sx={{ paddingRight: "8px", alignItems: "center" }}
          >
            {tags.map((tag) => (
              <Chip label={tag} variant="outlined" />
            ))}
          </Stack>
        </Container>
      </CardActions>
    </Card>
  );
}
