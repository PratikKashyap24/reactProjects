import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import MoviesList from "./components/MoviesList";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "title",
      text: "Title Name",
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: "openingText",
      text: "Opening Text",
      filter: textFilter(),
      // sort: true,
    },
    {
      dataField: "releaseDate",
      text: "Date",
      sort: true,
    },
  ];

  async function fetchMoviehandler() {
    setisLoading(true);
    setError(null);

    try {
      console.log("start");
      const response = await fetch("http://localhost:8787/channels");
      console.log(response.status);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      // let resp = JSON.stringify(response);
      // const data = JSON.parse(resp);
      console.log(response);
      const data = await response.json();

      console.log(data);
      const transformedMovies = data.map((movieData) => {
        return {
          id: movieData.channel_id,
          title: movieData.name,
          openingText: movieData.language,
          releaseDate: Date.now(),
        };
      });

      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  }
  let content = <p>No Movies Found!!</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviehandler}>Fetch Movies</button>
      </section>
      <section>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={movies}
          columns={columns}
          striped
          hover
          condensed
          pagination={paginationFactory({
            pageStartIndex: 1,
            sizePerPage: 7,
            hideSizePerPage: true,
          })}
          noDataIndication="No data Found"
          filter={filterFactory()}
        />
      </section>
    </React.Fragment>
    // <div>
    //   <button onClick={fetchMoviehandler}>Fetch Movies</button>
    //   <div>
    //     <BootstrapTable
    //       striped
    //       hover
    //       keyField="id"
    //       data={movies}
    //       columns={columns}
    //       pagination={paginationFactory()}
    //     />
    //   </div>
    // </div>
  );
}

export default App;
