import React from "react";
import "./style.css";
import commentImg from "./images/comment.svg";
import retweetImg from "./images/retweet.svg";
import likesImg from "./images/heart.svg";
import downloadImg from "./images/download.svg";
import correctImg from "./images/correct.svg";

const Post = ({
  name,
  photo,
  nickname,
  contentDate,
  contentUser,
  content,
  image,
  date,
  comment,
  retweet,
  likes,
}) => {
  return (
    <div className="inner">
      <section className="section">
        <img src={photo} alt={photo} className="logo" />
        <div className="inner__box">
          <div className="inner__box-title">
            <a
              href="https://twitter.com/NASA"
              className="inner__box-title-link"
            >
              {name}
            </a>
            <img src={correctImg} alt={image} className="verified-image" />
            {nickname} {date}
          </div>
          <p className="inner__box-content">
            {contentDate}
            <a a href={contentUser} className="inner__box-content--user">
              {contentUser}
            </a>
            {content}
          </p>
          <img src={image} alt={image} className="inner__box-image" />
          <div className="inner__box-footer">
            <button className="inner__box-footer-button">
              <img src={commentImg} alt="comment" />
              <span className="inner__box-footer-count">{comment}</span>
            </button>
            <button className="inner__box-footer-button">
              <img src={retweetImg} alt="retweet" />
              <span className="inner__box-footer-count">{retweet}</span>
            </button>
            <button className="inner__box-footer-button">
              <img src={likesImg} alt="likes" />
              <span className="inner__box-footer-count">{likes}</span>
            </button>
            <button className="inner__box-footer-button">
              <img src={downloadImg} alt="download" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
