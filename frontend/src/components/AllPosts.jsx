import { Accordion } from "react-bootstrap";

const AllPosts = (props) => {
  return <Accordion.Body>{props.post.content}</Accordion.Body>;
};

export default AllPosts;
