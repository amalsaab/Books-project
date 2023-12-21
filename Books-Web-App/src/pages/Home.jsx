import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    axios
      .get("https://656e1da0bcc5618d3c248cea.mockapi.io/Books")
      .then((res) => {
        setBooks(res.data);
        // console.log(res.data);
      });
  }, []);
  useEffect(() => {
    const filtered = books.filter((book) => {
      return book.author.toLowerCase().includes(search);
    });
    setFilteredBooks(filtered);
  }, [search]);

  return (
    <div className="flex flex-wrap mt-10 px-16 justify-center gap-4">
      {/* <input type="text" placeholder="Searsh here" className="input input-bordered w-full max-w-xs" /> */}

      <div className="relative text-gray-600">
        <input
          value={search}
          type="search"
          name="serch"
          placeholder="Search"
          className="bg-white h-10 px-5 pr-32 rounded-full text-sm focus:outline-none"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            xmlSpace="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      <div>
        <h1 className="text-2xl ps-3 mb-2 text-accent">All books</h1>
        <div className="carousel rounded-box h-80">
          {filteredBooks.map((book, index) => (
            // <div className="h-48 lg:h-72 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${book.book_image})`}} title="Woman holding a mug"></div>
            <div key={index} className="carousel-item ">
              <Link to={`/bookdetails/${book.id}`}>
                <img
                  className="drop-shadow-md h-80"
                  src={book.book_image}
                  alt="Burger"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
