import React from "react";
import UserHeader from "./UseHeader";
import { Route, Routes } from "react-router-dom";
import FeedComp from "../Feed/Feed";
import UserPost from "./UserPost";
import UserStats from "./UserStat";
import UserCont from "./UserCont";
import NotFound from "../NotFound";

const User = () => {

    return(
        <section className="container">
            <UserHeader/>
            <Routes>
                <Route path="/" element={<FeedComp/>}/>
                <Route path="/conta" element={<UserCont/>}/>
                <Route path="/postar" element={<UserPost/>}/>
                <Route path="/estatistica" element={<UserStats/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </section>
    )
}

export default User