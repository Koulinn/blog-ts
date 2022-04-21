import React from "react";
import { Container, Grid } from "@mui/material";
import Post from "../../components/Post/Post";

function Blog() {
  return (
    <Container>
      <Grid>
        <Post
          author="Rafa Lima"
          avatar="https://res.cloudinary.com/koulin/image/upload/v1629203268/sample.jpg"
          title="Cake pls"
          text="kjsadh akjsdhkla hahjd kjashkjash djkahsdkah "
          imageAlt="fdsf"
          imageUrl="https://res.cloudinary.com/koulin/image/upload/v1629203268/sample.jpg"
          createdAt="654 54 654"
          tags={["cake", "sad", "fasddfas"]}
          likes={["asdasd", "asdasdas"]}
        />
      </Grid>
    </Container>
  );
}

export default Blog;
