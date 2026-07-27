import "../styles/Blog.css";


import {
  FaCalendarAlt,
  FaArrowRight,
  FaSearch,
  FaBookOpen,
} from "react-icons/fa";


import blog1 from "../assets/blog.image1.webp";
import blog2 from "../assets/blog.image2.webp";
import blog3 from "../assets/blog.image3.webp";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "How to Choose the Best School in Aligarh for Your Child",
    date: "March 13, 2026",
    author: "Excellence",
    category: "Blog",
    desc: "Choosing the right school is one of the most important decisions parents make for their child's future. A good school not only provides quality education but also builds confidence, creativity, and strong values.",
  },

  {
    id: 2,
    image: blog2,
    title: "The Importance of Strong Primary Education for Student Success",
    date: "March 13, 2026",
    author: "Excellence",
    category: "Blog",
    desc: "Primary education plays a crucial role in shaping a child's academic journey and overall personality. It develops curiosity, communication skills, confidence, and lifelong learning habits.",
  },

  {
    id: 3,
    image: blog3,
    title: "What Makes a School the Best Choice for Quality Education in Aligarh",
    date: "March 13, 2026",
    author: "Excellence",
    category: "Blog",
    desc: "Choosing the best school means finding the right balance of academics, sports, modern facilities, safety, and experienced teachers who inspire every student to achieve success.",
  },
];
function Blog() {
  return (
    <div className="blogPage">


      {/* BLOG CONTENT */}

     <section className="blogContainer firstSection">

        <div className="blogLeft">

          <h2 className="sectionTitle">
            Latest Articles
          </h2>

          <div className="titleLine"></div>

          <div className="blogGrid">

 {blogs.map((blog) => (
  <div className="blogCard" key={blog.id}>
    <img src={blog.image} alt={blog.title} />

    <div className="blogContent">

      <span className="blogTag">
        {blog.category}
      </span>

      <h3>{blog.title}</h3>

      <div className="blogMeta">
        <span>{blog.author}</span>
        <span>/</span>
        <span>{blog.date}</span>
      </div>

      <p>{blog.desc}</p>

      <button>
        Read More <FaArrowRight />
      </button>

    </div>
  </div>
))}

          </div>
        </div>

                <aside className="blogSidebar">

          <div className="searchBox">
            <input
              type="text"
              placeholder="Search blogs..."
            />
            <button>
              <FaSearch />
            </button>
          </div>
<div className="sideCard">
  <h3>Categories</h3>

  <ul>
    <li>Academics <span>08</span></li>
    <li>School News <span>06</span></li>
    <li>Activities <span>05</span></li>
    <li>Events <span>04</span></li>
    <li>Student Life <span>07</span></li>
  </ul>
</div>

<div className="sideCard">
  <h3>Recent Posts</h3>

  {blogs.slice(0, 2).map((blog) => (
    <div className="recentPost" key={blog.id}>
      <img src={blog.image} alt={blog.title} />

      <div>
        <h4>{blog.title}</h4>
        <span>{blog.date}</span>
      </div>
    </div>
  ))}
</div>

        </aside>

      </section>

<section className="blogCTA">

  <div className="ctaLeft">

    <FaBookOpen className="ctaIcon"/>

    <div>
      <h2>Stay Connected with Excellence</h2>

      <p>
        Explore more stories, achievements and updates from our school community.
      </p>
    </div>

  </div>

  <button>
    View All Blogs <FaArrowRight />
  </button>

</section>

    </div>
  );
}

export default Blog;