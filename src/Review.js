import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const Review = (props) => {
    let history = useHistory();
    const { day } = useParams();
    //console.log(day)
    const [rate, setRate] = useState(0);
    console.log(rate)

    return (
        <div className="Review">
            <div className="container">
                {/* 선택한 요일 보여주기 */}
                <h2> 
                    <span>{day}요일 </span>
                    평점 남기기
                </h2>

                <div className="circle-box">
                    {Array.from({ length: 5 }, (circle, index) => { // 동그라미 눌러서 평점 입력하기
                        return (
                            <div className="circle_review" key={index} onClick={() => {setRate(index + 1)}} style={{ backgroundColor: rate < index + 1 ? "#C3B3B1" : "#918280" }}>
                            </div>
                        )
                    })}
                </div>

                <button onClick={() => { //메인페이지로 돌아가기
                    history.goBack();
                }}>
                    평점 남기기
                </button>
            </div>
        </div>
    )
}

export default Review;

