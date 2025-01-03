import React, { useState } from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import LaptopIcon from "@mui/icons-material/Laptop";
import TvIcon from "@mui/icons-material/Tv";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NavSearchField from "../Navigation/NavSearchField";

export default function CatalogMenu() {
  const [view, setView] = useState("list");
  function handleAlignment() {}
  return (
    <div className="col-section-catalog-menu">
      <Stack direction="row" spacing={4}>
        <ToggleButtonGroup
          value={view}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            {/* <FormatAlignLeftIcon /> */}
            <GridViewOutlinedIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            {/* <FormatAlignCenterIcon /> */}
            <ListOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <div className="ui-search">
        <NavSearchField />
      </div>
    </div>
  );
}
