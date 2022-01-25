import React from "react";
import { useHistory } from "react-router-dom";

const Review = (props) => {
    let history = useHistory();
    return (
        <div className="Review">
            <div className="container">
                <h2>
                    <span></span>
                        평점 남기기
                </h2>
                <button onClick={() => {
                    history.goBack();
                }}>
                    평점 남기기
                </button>
            </div>
        </div>
    )
}

export default Review;

