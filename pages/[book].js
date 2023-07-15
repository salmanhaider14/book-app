import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const DetailsPage = () => {
  const { query } = useRouter();
  const [book, setBook] = useState({});

  const getBooks = async (query) => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${query.book}`
    );
    const data = await res.json();
    if (data) setBook(data);
  };

  useEffect(() => {
    getBooks(query);
  }, []);

  return (
    <div className="details">
      <Head>
        <title>{book.volumeInfo && book.volumeInfo.title}</title>
      </Head>
      <div className="basic-data">
        <div>
          <img
            src={
              // (book.volumeInfo && book.volumeInfo.imageLinks.large) ||
              book.volumeInfo && book.volumeInfo.imageLinks.thumbnail
            }
            width={200}
            alt=""
          />
        </div>

        <div className="book-info">
          <p style={{ fontWeight: "bold" }}>
            {book.volumeInfo && book.volumeInfo.title}
          </p>
          <p className="publisher">
            <span style={{ fontWeight: "bold" }}>Published By:</span>{" "}
            {book.volumeInfo && book.volumeInfo.publisher}
          </p>
          <p className="publisherdate">
            <span style={{ fontWeight: "bold" }}>Released On:</span>{" "}
            {book.volumeInfo && book.volumeInfo.publishedDate}
          </p>
          <p className="author">
            <span style={{ fontWeight: "bold" }}>Author:</span>{" "}
            {book.volumeInfo && book.volumeInfo.authors[0]}
          </p>
          <p className="pages">
            <span style={{ fontWeight: "bold" }}>Pages:</span>{" "}
            {book.volumeInfo && book.volumeInfo.pageCount}
          </p>
          <button>
            <Link href="/" className="link">
              <a style={{ textDecoration: "none", color: "white" }}>Go Back</a>
            </Link>
          </button>
        </div>
      </div>

      <div className="desc">
        <h1>Description</h1>
        <p>
          {(book.volumeInfo &&
            book.volumeInfo.description
              .toString()
              .replace(/(<([^>]+)>)/gi, "")) ||
            ""}
        </p>
      </div>

      <div className="footer-container">
        <div className="social">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
        </div>

        <h1>Copyright @ 2022 Salman Haider</h1>
      </div>
    </div>
  );
};

export default DetailsPage;
