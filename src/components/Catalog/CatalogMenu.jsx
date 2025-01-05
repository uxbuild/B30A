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
  // TO clear search..
  const dispatch = useDispatch();

  function onClearSearch(e) {
    e.preventDefault();
    dispatch(setSearchKey(""));
  }

  return (
    <div className="col-section-catalog-menu">
      <Stack direction="row" spacing={4}>
        <ToggleButtonGroup exclusive aria-label="text alignment">
          <ToggleButton
            value="left"
            aria-label="left aligned"
            onClick={setCatalogViewModeToGrid}
          >
            <GridViewOutlinedIcon />
          </ToggleButton>
          <ToggleButton
            value="center"
            aria-label="centered"
            onClick={setCatalogViewModeToList}
          >
            <ListOutlinedIcon />
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
