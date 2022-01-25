import React from "react";
import { useHistory, useParams } from "react-router-dom";

const Review = (props) => {
    let history = useHistory();
    const {day} = useParams();
    console.log(day)

    return (
        <div className="Review">
            <div className="container">
                <h2>
                    <span>{day}요일 </span>
                        평점 남기기
                </h2>

                <div className="circle-box">
                    {Array.from({ length: 5 }, (circle, index) => {
                        // console.log(circle)
                        return (
                            <div  className="circle_review" key = {index}>
                            </div>
                        )
                    })}
                </div>
                
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

