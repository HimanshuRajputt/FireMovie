/* eslint-disable react/prop-types */
// import React from "react";
import { Link } from "react-router-dom";
import "../styles/Slideshow.css";

const Slideshow = ({data}) => {
//   const images = [
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 1",
//       link: "https://www.imdb.com/title/tt0800080/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 2",
//       link: "https://www.imdb.com/title/tt4154796/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 3",
//       link: "https://www.imdb.com/title/tt0848228/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 4",
//       link: "https://www.imdb.com/title/tt1825683/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 5",
//       link: "https://www.imdb.com/title/tt3480822/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 6",
//       link: "https://www.imdb.com/title/tt1228705/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 7",
//       link: "https://www.imdb.com/title/tt1843866/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 8",
//       link: "https://www.imdb.com/title/tt3498820/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 9",
//       link: "https://www.imdb.com/title/tt2015381/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 10",
//       link: "https://www.imdb.com/title/tt1300854/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 11",
//       link: "https://www.imdb.com/title/tt9114286/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 12",
//       link: "https://www.imdb.com/title/tt4154796/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 13",
//       link: "https://www.imdb.com/title/tt6263850/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 14",
//       link: "https://www.imdb.com/title/tt9140560/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 15",
//       link: "https://www.imdb.com/title/tt0478970/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 16",
//       link: "https://www.imdb.com/title/tt9419884/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image1.jpg",
//       alt: "Image 17",
//       link: "https://www.imdb.com/title/tt1211837/?ref_=ext_shr_lnk",
//     },
//     {
//       src: "../../public/slidingimages/image2.jpg",
//       alt: "Image 18",
//       link: "https://www.imdb.com/title/tt0848228/?ref_=ext_shr_lnk",
//     },
//   ];

  return (
    <div className="container">
      {data.map((movie) => (
        <div className="wrapper" key={movie._id}>
          {/* <a href={image.link} target="_blank" rel="noopener noreferrer"> */}
          <Link to={`/Movies/${movie._id}`}>
            <img src={movie.poster} alt={movie.movieName} />
          </Link>
          {/* </a> */}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
