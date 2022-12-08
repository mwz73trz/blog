import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const AllPosts = (props) => {
  return (
    <Accordion.Body>
      {props.post.content}
      <br />
      <p>{props.post.created_date}</p>
      <AiFillEdit />
      {"  "}
      <Link to={`/posts/${props.post.id}/delete`}>
        <BsFillTrashFill />
      </Link>
    </Accordion.Body>
  );
};

export default AllPosts;
