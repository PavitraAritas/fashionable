import React, { useState } from "react";
import Middle from "../../StyledComponents/feed";
import EditIcon from "@iconscout/react-unicons/icons/uil-ellipsis-h";
import HeartIcon from "@iconscout/react-unicons/icons/uil-heart";
import CommentIcon from "@iconscout/react-unicons/icons/uil-comment-dots";
import BookmarkIcon from "@iconscout/react-unicons/icons/uil-bookmark-full";
import ShareIcon from "@iconscout/react-unicons/icons/uil-share-alt";
import AddImage from "@iconscout/react-unicons/icons/uil-image-plus";
import Modal from "../../Pages/Modal";

function Feed() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Middle>
        <Middle.Stories>
          <Middle.Story>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
              alt=""
            />
            <p>Your Story</p>
          </Middle.Story>
          <Middle.Story>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
              alt=""
            />
            <p>Your Story</p>
          </Middle.Story>
          <Middle.Story>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
              alt=""
            />
            <p>Your Story</p>
          </Middle.Story>
          <Middle.Story>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
              alt=""
            />
            <p>Your Story</p>
          </Middle.Story>
          <Middle.Story>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
              alt=""
            />
            <p>Your Story</p>
          </Middle.Story>
          <Middle.Story>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
              alt=""
            />
            <p>Your Story</p>
          </Middle.Story>
        </Middle.Stories>

        <Middle.PostBar>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
            alt=""
          />
          <input
            type="text"
            placeholder="What's on your mind, pav?"
            id="create-post"
          />
          <AddImage style={{padding:"6px 10px", background:"var(--color-primary)", borderRadius:"50%", marginRight:"0.5rem", color:"white"}}/>
          <button type="submit" value="Post">
            Post
          </button>
        </Middle.PostBar>
        <div className="Posts">
          <Middle.Post>
            <Middle.Head>
              <Middle.User>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
                  alt=""
                />
                <div className="ingo">
                  <h3 style={{ margin: "0", paddingBottom: "0.2rem" }}>
                    Sylvester Stone
                  </h3>
                  <small>Toronto, 25 MINUTES AGO</small>
                </div>
              </Middle.User>
              <span className="edit">
                <i>
                  <EditIcon />
                </i>
              </span>
            </Middle.Head>
            <Middle.Photo>
              <img src="https://media.istockphoto.com/photos/full-length-size-studio-photo-portrait-of-beautiful-charming-good-picture-id1064179162?k=20&m=1064179162&s=612x612&w=0&h=F3Un4FVUwtrJQj5Y8RAcgWhVzEV0ypiG49KQ5a6REmc=" alt="" />
              <button onClick={openModal}>View Products</button>
            </Middle.Photo>

            <Middle.ActionButtons>
              <div className="interaction-button">
                <span className="edit">
                  <i>
                    <HeartIcon />
                  </i>
                </span>
                <span className="edit">
                  <i>
                    <CommentIcon />
                  </i>
                </span>
                <span className="edit">
                  <i>
                    <ShareIcon />
                  </i>
                </span>
              </div>
              <span className="edit">
                <i>
                  <BookmarkIcon />
                </i>
              </span>
            </Middle.ActionButtons>
            <div className="Caption">
              <p>
                <b>Pav Aritas </b>I feel like an astronaut in the ocean yeah!
                <span>#endspace</span>
              </p>
            </div>
            <div className="comments">
              <input type="text" placeholder="Comment..." />
            </div>
          </Middle.Post>
        </div>
        <div className="Posts">
          <Middle.Post>
            <Middle.Head>
              <Middle.User>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F3e5C2_4KVWpSSvmBDVb8iPGyRnDB5DVPA&usqp=CAU"
                  alt=""
                />
                <div className="ingo">
                  <h3 style={{ margin: "0", paddingBottom: "0.2rem" }}>
                    Sylvester Stone
                  </h3>
                  <small>Toronto, 25 MINUTES AGO</small>
                </div>
              </Middle.User>
              <span className="edit">
                <i>
                  <EditIcon />
                </i>
              </span>
            </Middle.Head>
            <Middle.Photo>
              <img src="https://wallpaperaccess.com/full/702096.jpg" alt="" />
              <button onClick={openModal}>View Products</button>
            </Middle.Photo>
            <Middle.ActionButtons>
              <div className="interaction-button">
                <span className="edit">
                  <i>
                    <HeartIcon />
                  </i>
                </span>
                <span className="edit">
                  <i>
                    <CommentIcon />
                  </i>
                </span>
                <span className="edit">
                  <i>
                    <ShareIcon />
                  </i>
                </span>
              </div>
              <span className="edit">
                <i>
                  <BookmarkIcon />
                </i>
              </span>
            </Middle.ActionButtons>
            <div className="Caption">
              <p>
                <b>Pav Aritas </b>I feel like an astronaut in the ocean yeah!
                <span>#endspace</span>
              </p>
            </div>
            <div className="comments">
              <input type="text" placeholder="Comment..." />
            </div>
          </Middle.Post>
        </div>
      </Middle>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default Feed;
