import { useParams, useNavigate } from "react-router-dom";
import blogAPI from "../api/blogAPI";
import { Alert, Button } from "react-bootstrap";

const DeletePost = () => {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate("/");
  };
  const deletePost = async () => {
    const data = await blogAPI.deletePost(params.postId);
    if (data) {
      navigate("/");
    }
  };

  return (
    <Alert variant="danger">
      Are you sure you want to delete this post?{" "}
      <Button variant="danger" type="submit" onClick={deletePost}>
        Yes
      </Button>{" "}
      <Button variant="secondary" type="submit" onClick={cancelDelete}>
        No
      </Button>
    </Alert>
  );
};

export default DeletePost;
