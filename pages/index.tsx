import * as React from "react";
import type { NextPage } from "next";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Copyright from "../src/copyright";

const layouts = () => {
  return [
    {
      title: "Sign In",
      description: "Sign In Description",
      src: "/images/sign-in.png",
      href: "/sign-in",
    },
    {
      title: "Sign Up",
      description: "Sign Up Description",
      src: "/images/sign-up.png",
      href: "/sign-up",
    },
    {
      title: "Sign In Side",
      description: "Sign In Side Description",
      src: "/images/sign-in-side.png",
      href: "/sign-in-side",
    },
    {
      title: "Sticky Footer",
      description: "Sticky Fotter Description",
      src: "/images/sticky-footer.png",
      href: "/sticky-footer",
    },
  ];
};

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          MUI v5 + Next.js with TypeScript
        </Typography>
        <Grid container spacing={2}>
          {layouts().map((layout) => (
            <Grid item sm={6} md={4} sx={{ flexGrow: 1 }} key={layout.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <CardMedia
                  component="a"
                  href={layout.href}
                  sx={{ height: 0, pt: "65%" }}
                  image={layout.src}
                  title={layout.title}
                  rel="nofollow"
                  target="_blank"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    align="left"
                    component="h2"
                  >
                    {layout.title}
                  </Typography>
                  <Typography component="p">{layout.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </Container>
  );
};

export default Home;
