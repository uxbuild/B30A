import { useState } from "react";
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

  //track active view mode button.
  const [activeButton, setActiveButton] = useState(null);

  function onClickViewMode(e, doViewMode) {
    if (activeButton === e.target) {
      // setActiveButton(null);
      // e.target.classList.remove("active");
    } else {
      // const btnId = e.target.id;
      activeButton && activeButton.classList.remove("active");
      setActiveButton(e.target);
      e.target.classList.add("active");
    }
    doViewMode();
  }

  function onClearSearch(e) {
    e.preventDefault();
    dispatch(setSearchKey(""));
  }

  return (
    <div className="col-section-catalog-menu">
      {/* <Stack direction="row" spacing={4}>
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
      </Stack> */}
      <div>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            id="btn-view-grid"
            type="button"
            className="btn btn-outline-primary"
            onClick={(e) => {
              onClickViewMode(e, setCatalogViewModeToGrid);
            }}
          >
            Grid
          </button>
          <button
            id="btn-view-list"
            type="button"
            className="btn btn-outline-primary"
            // onClick={setCatalogViewModeToList}
            onClick={(e) => {
              onClickViewMode(e, setCatalogViewModeToList);
            }}
          >
            List
          </button>
        </div>
      </div>
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
