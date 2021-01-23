import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";
import MainBar from "../MainBar/MainBar";

const uri = "http://127.0.0.1:5000/";

const Table = () => {
  const [data, setData] = useState();
  const fetchData = () => {
    axios
      .get(uri)
      .then((response) => {
        const result = response.data.results;
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <MainBar data_prop={data} />;
};

export default Table;
