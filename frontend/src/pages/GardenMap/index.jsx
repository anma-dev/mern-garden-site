import { ArrowDropDown } from "@mui/icons-material";
import Layout from "../../layouts";

import "./index.css";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
const data = [
  {
    id: "plant1",
    title: "Plant",
    img: "/src/assets/img/twemoji_potted-plant.png",
    items: [
      {
        title: "GreenApple",
        img: "/src/assets/img/redapple.png",
      },
      {
        title: "RedApple",
        img: "/src/assets/img/greenapple.png",
      },
      {
        title: "PineApple",
        img: "/src/assets/img/pineapple.png",
      },
      {
        title: "Potato",
        img: "/src/assets/img/potato.png",
      },
      {
        title: "Flower",
        img: "/src/assets/img/Flower Growing.png",
      },
      {
        title: "Flower1",
        img: "/src/assets/img/flower2.png",
      },
      {
        title: "Flower2",
        img: "/src/assets/img/flower1.png",
      },
    ],
  },
  {
    id: "plant2",
    title: "House",
    img: "/src/assets/img/home.png",
    items: [
      {
        title: "House1",
        img: "/src/assets/img/home.png",
      },
      {
        title: "House2",
        img: "/src/assets/img/home.png",
      },
      {
        title: "House3",
        img: "/src/assets/img/home.png",
      },
      {
        title: "House4",
        img: "/src/assets/img/home.png",
      },
    ],
  },
  {
    id: "plant3",
    title: "Pools",
    img: "/src/assets/img/fluent-emoji-flat_water-wave.png",
    items: [
      {
        title: "Pool1",
        img: "/src/assets/img/fluent-emoji-flat_water-wave.png",
      },
      {
        title: "Pool2",
        img: "/src/assets/img/fluent-emoji-flat_water-wave.png",
      },
      {
        title: "Pool3",
        img: "/src/assets/img/fluent-emoji-flat_water-wave.png",
      },
      {
        title: "Pool4",
        img: "/src/assets/img/fluent-emoji-flat_water-wave.png",
      },
      {
        title: "Pool5",
        img: "/src/assets/img/fluent-emoji-flat_water-wave.png",
      },
    ],
  },
  {
    id: "plant4",
    title: "Plot",
    img: "/src/assets/img/road.png",
    items: [
      {
        title: "Plot1",
        img: "/src/assets/img/road.png",
      },
      {
        title: "Plot2",
        img: "/src/assets/img/road.png",
      },
      {
        title: "Plot3",
        img: "/src/assets/img/road.png",
      },
    ],
  },
  {
    id: "plant5",
    title: "Notes",
    img: "/src/assets/img/note.png",
    items: [
      {
        title: "Note1",
        img: "/src/assets/img/note.png",
      },
      {
        title: "Note2",
        img: "/src/assets/img/note.png",
      },
      {
        title: "Note3",
        img: "/src/assets/img/note.png",
      },
    ],
  },
];

const control = [
  "/src/assets/img/Item.png",
  "/src/assets/img/Item (1).png",
  "/src/assets/img/Item (2).png",
  "/src/assets/img/Item (3).png",
  "/src/assets/img/Item (4).png",
  "/src/assets/img/Item (5).png",
  "/src/assets/img/Item (6).png",
  "/src/assets/img/Item (7).png",
];

const GardenMap = () => {
  const [itemFlag, setItemFlag] = useState(false);
  const [categorySel, setCategorySel] = useState(-1);
  const [count, setCount] = useState(0);

  const handleCategoryClicked = (e, index) => {
    setItemFlag(true);
    setCategorySel(index);
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("src", ev.target.src);
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("isgarden", false);
  };

  const drop = (ev) => {
    console.log(ev.target);
    ev.preventDefault();
    var id = ev.dataTransfer.getData("id");
    var src = ev.dataTransfer.getData("src");
    var isGarden = ev.dataTransfer.getData("isgarden");
    if (!id || !src || ev.target.getAttribute("isgarden") == "true") {
      return;
    }
    if (isGarden === "false") {
      setCount((prev) => prev + 1);
      ev.target.innerHTML = `<img
      id='${count + 1}'
      isgarden=true
      draggable=true
      ondragStart='drag1(event)'
      src='${src}'
      width='50px'
      height='50px'
    />`;
    } else if (isGarden === "true") {
      if (ev.target.id === id) return;
      ev.target.appendChild(document.getElementById(id));
    }
  };

  return (
    <Layout>
      <div
        className="grid-bg"
        style={{ position: "relative", display: "flex" }}
      >
        <div style={{ margin: "auto" }}>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
          ].map((row) => (
            <>
              <div style={{ display: "flex" }}>
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                ].map((col) => (
                  <>
                    <div
                      id={"div" + "(" + row + "," + col + ")"}
                      onDrop={drop}
                      onDragOver={allowDrop}
                      style={{
                        width: "50px",
                        height: "50px",
                        border: "1px solid rgb(220,220,220)",
                      }}
                    ></div>
                  </>
                ))}
              </div>
            </>
          ))}
        </div>
        <Grid
          container
          sx={{
            backgroundColor: "white",
            width: "fit-content",
            position: "absolute",
            left: "calc(50% - 160px)",
            top: "20px",
            alignItems: "center",
          }}
        >
          {control.map((one, index) => (
            <>
              <Grid item textAlign={"center"} style={{ cursor: "pointer" }}>
                <img src={one} />
              </Grid>
            </>
          ))}
        </Grid>
        <Grid
          container
          sx={{
            width: "fit-content",
            position: "absolute",
            left: "calc(50% + 200px)",
            top: "20px",
            alignItems: "center",
          }}
          gap={"15px"}
        >
          <Grid item>
            <Button
              style={{
                color: "black",
                textTransform: "none",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "8px 30px 8px 30px",
                fontWeight: "bold",
              }}
            >
              New drawing
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                color: "black",
                textTransform: "none",
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "8px 30px 8px 30px",
                fontWeight: "bold",
              }}
            >
              Templates
              <ArrowDropDown
                sx={{ ".css-xc3xpq-MuiSvgIcon-root": { padding: 0 } }}
              />
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                textTransform: "none",
                backgroundColor: "rgba(255,255,255,0.5)",
                color: "rgba(0,0,0,0.5)",
                borderRadius: "20px",
                padding: "8px 30px 8px 30px",
                fontWeight: "bold",
              }}
            >
              My gardens
              <ArrowDropDown />
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          sx={{
            backgroundColor: "white",
            width: "100px",
            padding: "20px 0px 20px 0px",
            borderRadius: "15px",
            position: "absolute",
            top: "80px",
            left: "30px",
          }}
        >
          {data.map((one, index) => (
            <>
              <Grid
                item
                xs={12}
                textAlign={"center"}
                style={{ cursor: "pointer", padding: "10px" }}
                sx={{
                  backgroundColor:
                    categorySel === index ? "rgba(0,0,0,0.1)" : "",
                }}
                onClick={(e) => handleCategoryClicked(e, index)}
                draggable={false}
              >
                <img src={one.img} width={"50px"} height={"50px"} />
                <h5 style={{ margin: "20px 0px 0px 0px" }}>{one.title}</h5>
              </Grid>
            </>
          ))}
          {itemFlag === true ? (
            <Grid
              container
              className="items-grid"
              width={Math.ceil(data[categorySel].items.length / 5) * 100 + "px"}
            >
              {data[categorySel].items.map((one, i) => (
                <>
                  <Grid
                    item
                    xs={12 / Math.ceil(data[categorySel].items.length / 5)}
                    textAlign={"center"}
                    style={{ cursor: "pointer" }}
                  >
                    {/* <img src={one.img} width={"50px"} height={"50px"} /> */}
                    <img
                      id={categorySel + "drag" + i}
                      draggable={true}
                      onDragStart={drag}
                      src={one.img}
                      // style={{ position: "absolute", left: "23px" }}
                      width={"50px"}
                      height={"50px"}
                    />
                    <h5>{one.title}</h5>
                  </Grid>
                </>
              ))}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </div>
    </Layout>
  );
};

export default GardenMap;
