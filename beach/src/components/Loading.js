import React from "react";
import LoadingGif from "../images/gif/loadingGif";
const Loading = () => {
    return(
        <div className="loading">
         <h4>rooms data loading...</h4>
         <img src="{loadingGif}" alt="" />
         </div>
    );
};

export default Loading;