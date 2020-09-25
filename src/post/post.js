import React from "react";
import comment from "./img/comment.svg";
import retweet from "./img/retweet.svg";
import likes from "./img/heart.svg";
import download from "./img/download.svg";
import correct from "./img/correct.svg";

const Post = (props) => {
  return (
    <div className="inner">
      <section className="section">
        <img src={props.photo} alt={props.photo} className="logo" />
        <div className="inner__box">
          <div className="inner__box-title">
            <a
              href="https://twitter.com/NASA"
              className="inner__box-title-link"
            >
              {props.name}
            </a>
            <img src={correct} alt={props.image} className="verified-image" />
            {props.nickname} {props.date}
          </div>
          <p className="inner__box-content">
            {props.contentDate}
            <a a href={props.contentUser} className="inner__box-content--user">
              {props.contentUser}
            </a>
            {props.content}
          </p>
          <img
            src={props.image}
            alt={props.image}
            className="inner__box-image"
          />
          <div className="inner__box-footer">
            <button className="inner__box-footer-button">
              <img src={comment} alt="comment" />
              <span className="inner__box-footer-count">{props.comment}</span>
            </button>
            <button className="inner__box-footer-button">
              <img src={retweet} alt="retweet" />
              <span className="inner__box-footer-count">{props.retweet}</span>
            </button>
            <button className="inner__box-footer-button">
              <img src={likes} alt="likes" />
              <span className="inner__box-footer-count">{props.likes}</span>
            </button>
            <button className="inner__box-footer-button">
              <img src={download} alt="download" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
