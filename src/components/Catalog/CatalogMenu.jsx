import { useState } from "react";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NavSearchField from "../Navigation/NavSearchField";
import { useDispatch } from "react-redux";
import { setSearchKey } from "../../store/searchKeySlice";

// DISPLAY GRID AND LIST VIEW TOGGLE BUTTON + SEARCH FIELD + CLEAR SEARCH LINK.

export default function CatalogMenu({
  setCatalogViewModeToList,
  setCatalogViewModeToGrid,
}) {

  // to clear search..
  const dispatch = useDispatch();

  const [view, setView] = useState("list");
  // function handleAlignment() {}

  function onClearSearch(e) {
    e.preventDefault();
    console.log("CATALOG MENU clear search click");
    dispatch(setSearchKey(""));
  }

  return (
    <div className="col-section-catalog-menu">
      <Stack direction="row" spacing={4}>
        <ToggleButtonGroup
          value={view}
          exclusive
          // onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <GridViewOutlinedIcon onClick={setCatalogViewModeToGrid} />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <ListOutlinedIcon onClick={setCatalogViewModeToList} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <div className="ui-search">
        <NavSearchField />
      </div>
      <div className="nav-item">
        <a href="#" onClick={onClearSearch}>
          Clear search
        </a>
      </div>
    </div>
  );
}
