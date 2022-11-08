import React, {useState, useEffect, useContext} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import moment from "moment";

import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from "../components/Menu";
import {AuthContext} from "../context/authContext";

const Single = () => {
  const navigate = useNavigate();
  
  const {id: postId} = useParams();
  const {currentUser} = useContext(AuthContext);
  
  const [post, setPost] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [postId]);
  
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className="single">
      <div className="content">
        <img
          src={post?.img || "https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          alt=""
        />
        <div className="user">
          <img
            src={post.userImg || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"}
            alt=""
          />
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt="Edit"/>
              </Link>
              <img src={Delete} alt="Delete" onClick={handleDelete}/>
            </div>
          )}
        </div>
        <h1>
          {post.title} ads
        </h1>
        {post.desc}
      </div>
      <Menu/>
    </div>
  );
};

export default Single;