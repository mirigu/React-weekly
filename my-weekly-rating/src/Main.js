import React from "react";
import { useHistory } from "react-router-dom";
import Review from "./Review";

const Main = (props) => {
    let history = useHistory();
    const days = ["월", "화", "수", "목", "금", "토","일"]

    const random_circle = days.map((d, index) => {
        return {
            day: d,
            rate: Math.floor(Math.random() * ( 5 - 1 + 1) + 1),
            //랜덤 구하는 식(최대,최소값 포함) = Math.floor(Math.random() * (max - min + 1)) + min
        } 
    })
    console.log(random_circle)

    return (
        <div className="Main">
            <div className="container">
                <h2>나의 일주일 평점은?</h2>
                {random_circle.map((d, index) => {
                    return(
                        <div className="day-list" key = {index}>
                            <div className="day">
                                <p>{d.day}</p>
                            </div>
                            {Array.from({ length: 5 }, (circle, index) => {
                                return (
                                    <div  className="circle_main" key = {index} style = {{backgroundColor: d.rate < index ? "#C3B3B1" : "#918280"}} >
                                    </div>
                                )
                            })}
                            <div className="triangle" onClick={() => {
                                history.push(`/Review/${d.day}`)
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