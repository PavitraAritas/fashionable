import React from "react";
import Middle from "../../Components/feed";
import EditIcon from "@iconscout/react-unicons/icons/uil-ellipsis-h"
import HeartIcon from "@iconscout/react-unicons/icons/uil-heart"
import CommentIcon from "@iconscout/react-unicons/icons/uil-comment-dots"
import BookmarkIcon from "@iconscout/react-unicons/icons/uil-bookmark-full"
import ShareIcon from "@iconscout/react-unicons/icons/uil-share-alt"

function Feed() {
  return (
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
                <h3 style={{margin: "0", paddingBottom: "0.2rem"}}>Sylvester Stone</h3>
                <small>Toronto, 25 MINUTES AGO</small>
              </div>
            </Middle.User>
            <span className="edit">
                <i><EditIcon/></i>
              </span>
          </Middle.Head>
          <Middle.Photo>
            <img src="https://wallpaperaccess.com/full/702096.jpg" alt=""/>
            <button>View Products</button>
          </Middle.Photo>

          <div className="action-button">
            <div className="interaction-button">
            <span className="edit">
                <i><HeartIcon/></i>
              </span>
              <span className="edit">
                <i><CommentIcon/></i>
              </span>
              <span className="edit">
                <i><ShareIcon/></i>
              </span>
            </div>
            <span className="edit">
                <i><BookmarkIcon/></i>
              </span>
          </div>
          <div className="Caption">
            <p><b>Pav Aritas</b>I feel like an astronaut in the ocean yeah!<span>#endspace</span></p>
          </div>
          <div className="comments">
            <input type="text" placeholder="Comment..."/>
          </div>
        </Middle.Post>
      </div>
    </Middle>
  );
}

export default Feed;
