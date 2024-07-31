import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/confiq";

function AllPost() {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPost([]).then((post) => {
    if (post) {
      setPost(post.document);
    }
  });
  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
