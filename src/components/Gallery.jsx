import "../styles/Gallery.css";

import {
  FaBookOpen,
  FaCalendarAlt,
  FaRunning,
  FaPalette,
  FaGift,
  FaSchool,
} from "react-icons/fa";

import hero1 from "../assets/gallery4.webp";
import hero2 from "../assets/gallery5.webp";
import hero3 from "../assets/gallery6.webp";

import img1 from "../assets/gallery7.webp";
import img2 from "../assets/gallery8.webp";
import img3 from "../assets/gallery9.webp";
import img4 from "../assets/gallery10.webp";
import img5 from "../assets/gallery11.webp";
import img6 from "../assets/gallery12.webp";
import img7 from "../assets/gallery13.webp";
import img8 from "../assets/gallery14.webp";

function Gallery() {
  const galleryImages = [
    { id: 1, image: img1, category: "Academics" },
    { id: 2, image: img2, category: "Events" },
    { id: 3, image: img3, category: "Sports" },
    { id: 4, image: img4, category: "Activities" },
    { id: 5, image: img5, category: "Infrastructure" },
    { id: 6, image: img6, category: "Celebrations" },
    { id: 7, image: img7, category: "Academics" },
    { id: 8, image: img8, category: "Sports" },
  ];

  return (
    <div className="galleryPage">

      {/*HERO*/}

      <section className="galleryHero">

        <div className="galleryLeft">

          <span className="galleryTag">
            OUR GALLERY
          </span>

          <h1>
            Glimpses of
            <span> Excellence</span>
          </h1>

          <p>
            Explore unforgettable moments from classroom learning,
            sports, celebrations, cultural activities and student life
            at Excellence International School.
          </p>

        </div>

        <div className="galleryRight">

          <img src={hero1} className="heroImg one" alt="" />

          <img src={hero2} className="heroImg two" alt="" />

          <img src={hero3} className="heroImg three" alt="" />

          <div className="yellowCircle"></div>

          <div className="dots"></div>

        </div>

      </section>

      {/*FILTER*/}

      <section className="galleryFilter">

        <button className="active">
          All
        </button>

        <button>
          <FaBookOpen />
          Academics
        </button>

        <button>
          <FaCalendarAlt />
          Events
        </button>

        <button>
          <FaRunning />
          Sports
        </button>

        <button>
          <FaPalette />
          Activities
        </button>

        <button>
          <FaGift />
          Celebrations
        </button>

        <button>
          <FaSchool />
          Infrastructure
        </button>

      </section>

      {/* GALLERY GRID */}

      <section className="galleryGrid">

        {galleryImages.map((item) => (

          <div className="galleryCard" key={item.id}>

            <img src={item.image} alt="" />

            <div className="overlay">

              <h3>{item.category}</h3>

            </div>

          </div>

        ))}

      </section>

      <div className="loadMore">

        <button>
          Load More Photos
        </button>

      </div>

    </div>
  );
}

export default Gallery;