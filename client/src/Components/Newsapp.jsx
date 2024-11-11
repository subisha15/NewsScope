import Card from "./Card";
import { useEffect, useState } from "react";

const Newsapp = () => {
  const API_KEY = "cc8143bb6cff467a937f2b8911627272";
  const [search, setSearch] = useState("India");
  const [newsData, setNewsData] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  });

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSearch(category);
    getData();
  };

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-between bg-[rgb(92,159,192)] p-2.5">
        <div className="inline-block bg-transparent text-black text-2xl font-extrabold py-1 px-3 rounded-md tracking-widest shadow-lg italic">
          <h1>News Scope</h1>
        </div>
        <ul className="hidden md:flex justify-center space-x-6">
          <li>
            <a className="font-medium text-xl">All News</a>
          </li>
          <li>
            <a className="font-medium text-xl">Top Headlines</a>
          </li>
        </ul>
        <div className="flex items-center space-x-2 md:space-x-4 w-full md:w-auto mt-2 md:mt-0">
          <input
            className="w-full md:w-64 no-underline p-2.5 border-none text-lg rounded-md"
            type="text"
            placeholder="Search News"
            onChange={handleInput}
            value={search}
          />
          <button
            className="bg-blue-500 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg"
            onClick={getData}
          >
            Search
          </button>
        </div>
      </nav>
      <div className="mt-2 mb-4">
        <p className="text-center font-medium text-lg md:text-2xl">
          Stay updated with{" "}
          <span className="text-red-600 font-extrabold font-mono">
            News Scope!
          </span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/menu--v6.png"
          alt="menu--v6"
          className="md:hidden cursor-pointer"
        />
        <button
          className="bg-red-400 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg transform hover:translate-y-0.5"
          onClick={() => handleCategoryClick("sports")}
        >
          Sports
        </button>
        <button
          className="bg-red-400 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg transform hover:translate-y-0.5"
          onClick={() => handleCategoryClick("politics")}
        >
          Politics
        </button>
        <button
          className="bg-red-400 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg transform hover:translate-y-0.5"
          onClick={() => handleCategoryClick("entertainment")}
        >
          Entertainment
        </button>
        <button
          className="bg-red-400 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg transform hover:translate-y-0.5"
          onClick={() => handleCategoryClick("health")}
        >
          Health
        </button>
        <button
          className="bg-red-400 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg transform hover:translate-y-0.5"
          onClick={() => handleCategoryClick("fitness")}
        >
          Fitness
        </button>
        <button
          className="bg-red-400 py-1 px-2 rounded-md text-white shadow-md hover:shadow-lg transform hover:translate-y-0.5"
          onClick={() => handleCategoryClick("technology")}
        >
          Technology
        </button>
      </div>
      <div className="m-4">
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newsapp;
