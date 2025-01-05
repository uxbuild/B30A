//
// imports..
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSearchKey } from "../../store/searchKeySlice";
import { Table } from "react-bootstrap";
import NavTitle from "../Navigation/NavTitle";
import CatalogListViewItem from "../CatalogItem/CatalogListViewItem";
import CatalogGridViewItem from "../CatalogItem/CatalogGridViewItem";

// API and STATE actions
import { useSelector } from "react-redux";
import { useGetCatalogQuery } from "./CatalogSlice";
import CatalogMenu from "./CatalogMenu";

// export default function Books() {
export default function Catalog() {
  const location = useLocation();

  // search key: STORE state to refresh..
  const keyword = useSelector(getSearchKey);

  // search books: search key to filter display of books.
  const [viewModes, setViewModes] = useState({ list: true, grid: false });

  // toggle view modes..
  const switchViewMode = (mode) => {
    setViewModes((prevState) => ({
      list: mode === "list" ? true : false,
      grid: mode === "grid" ? true : false,
    }));
  };

  function setCatalogViewModeToList() {
    switchViewMode("list");
  }
  function setCatalogViewModeToGrid() {
    switchViewMode("grid");
  }

  const {
    data: catalog,
    error,
    isLoading,
    isSuccess,
    refetch,
  } = useGetCatalogQuery();

  // Use useEffect to trigger refetch on route change
  useEffect(() => {
    refetch(); // Trigger refetch every time the route changes
  }, [location, refetch]); // Dependency on location ensures refetch on route change

  // IF LOADING..
  if (isLoading) {
    return (
      <div className="container page-container">
        <div className="col-section">
          <NavTitle />
        </div>
        <div className="col-section">Loading catalog ..</div>
      </div>
    );
  }

  // IF ERROR..
  if (error) {
    // return
    return (
      <div className="container page-container">
        <div className="col-section">
          <NavTitle />
        </div>
        <div className="col-section">Error: {error}</div>
      </div>
    );
  }
  // IF LOADED..
  if (isSuccess) {
    const filteredCatalog = catalog.filter((book) => {
      return (
        // TRUE if search finds something..
        book.title.toLowerCase().search(keyword.toLowerCase()) > -1
      );
    });
    // if list not empty..
    if (filteredCatalog.length > 0) {
      return (
        <div className="container page-container">
          <div className="col-section">
            <NavTitle />
          </div>

          <div className="col-section">
            <CatalogMenu
              setCatalogViewModeToGrid={setCatalogViewModeToGrid}
              setCatalogViewModeToList={setCatalogViewModeToList}
            />
            {viewModes.list && (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCatalog.map((item, index) => {
                    return (
                      <CatalogListViewItem
                        key={index}
                        num={index}
                        book={item}
                      />
                    );
                  })}
                </tbody>
              </Table>
            )}
            {viewModes.grid && (
              <div className="grid-view-container">
                {filteredCatalog.map((item, index) => {
                  return (
                    <CatalogGridViewItem
                      key={index}
                      num={index}
                      id={item.id}
                      title={item.title}
                      author={item.author}
                      available={item.available}
                      book={item}
                      image={item.coverimage}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container page-container">
          <div className="col-section">
            <NavTitle />
          </div>
          <div className="col-section">
            <CatalogMenu />
          </div>
          <div className="col-section">No search results.</div>
        </div>
      );
    }
  } // end success.
}
