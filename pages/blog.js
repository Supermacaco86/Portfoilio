import Link from "next/link";
import Layout from "../component/Layout";
import { posts } from "../profile";

const PostCard = ({ post }) => (
 
  <div className="col-md-4 p-2">
    <div className="card h-100">
        <div className="overflow">
        <img src={post.imageURL} alt="" className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <a href={post.docu} target="_blank" className="btn btn-outline-secondary">Documentacion</a>
       </div>
    </div>
  </div>
 
);
const blog = () => {
    return (
      <Layout title="My Blog" footer={false} dark>
        <div className="row">
          {posts.map((post, i) => (
            <PostCard  post={post} key={i} />
          ))}
        </div>
      </Layout>
    );
  };
  
  export default blog;