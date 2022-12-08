import { useEffect, useState } from "react";
import blogAPI from "../api/blogAPI";
import AllPosts from "../components/AllPosts";
import { Accordion } from "react-bootstrap";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const data = await blogAPI.getAllPosts();
    setPosts(data ? data : []);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const renderPosts = () => {
    return posts.map((post, index) => {
      return (
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{post.title}</Accordion.Header>
          <AllPosts post={post} />
        </Accordion.Item>
      );
    });
  };
  return (
    <div>
      <h1>All Posts</h1>
      <Accordion style={{ width: "50%", marginLeft: "25%" }}>
        {renderPosts()}
      </Accordion>
    </div>
  );
};

export default Home;
