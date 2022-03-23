import { Button } from "@mui/material";
import React from "react";
import image from "./logo192.png";

const MainPage = () => {
  return (
    <>
      <h1>my heading</h1>
      <div>Blog</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum delectus
        quod fugit in dolores aliquid error vero quas, ipsam placeat repudiandae
        voluptatem cupiditate doloribus ipsa nesciunt deserunt reiciendis omnis
        asperiores!
      </p>
      <img src={image} alt=""></img>
      <a href="/contact">
        <Button>Contact Page</Button>
      </a>
      <a href="/career">
        <Button>Career Page</Button>
      </a>
    </>
  );
};

export default MainPage;
