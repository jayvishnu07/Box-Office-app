import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
      });
  };
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      ></input>
      <input type="button" value="Search" onClick={onSearch} />
    </MainPageLayout>
  );
};

export default Home;
