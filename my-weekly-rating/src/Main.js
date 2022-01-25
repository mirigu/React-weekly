import React from "react";
import { useHistory } from "react-router-dom";
import Review from "./Review";

const Main = (props) => {
    let history = useHistory();
    const days = ["월", "화", "수", "목", "금", "토","일"]

    return (
        <div className="Main">
            <div className="container">
                <h2>나의 일주일 평점은?</h2>

                {days.map((day, index) => {
                    // console.log(day)
                    return(
                        <div className="day-list" key = {index}>
                            <div className="day">
                                <p>{day}</p>
                            </div>
                            {Array.from({ length: 5 }, (circle, index) => {
                                // console.log(circle)
                                return (
                                    <div  className="circle" key = {index}>
                                    </div>
                                )
                            })}
                            <div className="triangle"onClick={() => {
                                history.push(`/Review/${day}`)
                            }}>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Main;