import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import image1 from "./img/IMG_1.png";
import image2 from "./img/IMG_2.png";
import image3 from "./img/IMG_3.png";
import image4 from "./img/IMG_4.png";
import image5 from "./img/IMG_5.png";
import image6 from "./img/IMG_6.png";

// const IMG_1 = "./img/IMG_1.png";
// const IMG_2 = "./img/IMG_2.png";
// const IMG_3 = "./img/IMG_3.png";
// const IMG_4 = "./img/IMG_4.png";
// const IMG_5 = "./img/IMG_5.png";
// const IMG_6 = "./img/IMG_6.png";

const tileData = [
  {
    img: image1,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image2,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image3,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image4,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image5,
    title: "Image",
    author: "author",
    cols: 2,
  },
  {
    img: image6,
    title: "Image",
    author: "author",
    cols: 2,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={440} className={classes.gridList} cols={3}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
