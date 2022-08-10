import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

function CardDetails({ url, name }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 12,
        height: "18rem",
        // width: "15rem",
        background: "linear-gradient(to right, #c9ffbf, #ffafbd)",
        borderRadius: "5%",
        alignItems: "center",
      }}
    >
      <Link to={`/pokemon/${name}`} style={{ textDecoration: "none" }}>
        <CardContent>
          <Avatar
            alt={name}
            //  src ={url}
            src="https://media.istockphoto.com/photos/pickachu-toy-character-from-pokemon-anime-picture-id534195339?k=20&m=534195339&s=612x612&w=0&h=s7dCb7PtVTVi12dyc1Pn--1UDkZ236O0fIItzAk-RyM="
            sx={{
              width: "134px",
              height: "143px",
              margin: "0px 43px",
              fontSize: "76px",
            }}
          />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              color: "#666633",
              marginTop: "10px",
              marginTop: "25px",
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default CardDetails;
