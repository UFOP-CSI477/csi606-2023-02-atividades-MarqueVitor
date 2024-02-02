import React from "react";
import UserHeader from "./UseHeader";
import { Route, Routes } from "react-router-dom";
import FeedComp from "../Feed/Feed";
import UserPost from "./UserPost";
import UserStats from "./UserStat";

const User = () => {

    return(
        <section className="container">
            <UserHeader/>
            <Routes>
                <Route path="/" element={<FeedComp/>}/>
                <Route path="/postar" element={<UserPost/>}/>
                <Route path="/estatistica" element={<UserStats/>}/>

            </Routes>
        </section>
    )
}

export default User