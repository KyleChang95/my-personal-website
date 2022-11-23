import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  menuList: string[];
}

const capitalizeFirstWord = (menuName: string) => {
  return menuName[0].toUpperCase() + menuName.slice(1).toLowerCase();
};

export default function Navbar(props: Props) {
  const menuButtonList = props.menuList.map((v) => (
    <Button key={v} component={Link} to={"/" + v.toLowerCase()}>
      {capitalizeFirstWord(v)}
    </Button>
  ));

  return (
    <AppBar color="transparent" component="nav">
      <Toolbar sx={{ justifyContent: "center" }}>{menuButtonList}</Toolbar>
    </AppBar>
  );
}
