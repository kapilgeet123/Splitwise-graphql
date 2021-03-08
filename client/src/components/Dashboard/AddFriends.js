import React from 'react';
import "../../styles/Dashboard.css";
import FriendList from './FriendList';
import Grouplist from './Grouplist';
import {NavLink} from 'react-router-dom';
export const AddFriend = (props)=>{
    return(
        <div className = "AddFriend">
         <div>
         <button onClick = {props.friend} className = "Recentactivity">Recent Activity</button>
         </div>


         <div className = "content">
          
         <NavLink to = "/RecentActivity"><button className = "logoutbtn">Recent Activity</button></NavLink>

         <div className = "friendHeader" >
            <label htmlFor="">FRIENDS</label>
            <button onClick = {props.friend} className = "AddFrnd float-right">+Add</button>
          
         </div>
         <div className = "Friend_List">
               <FriendList/>
         </div>

         <div className = "friendHeader" >
            <label htmlFor="">GROUPS</label>
            <NavLink to = "/Groups"><button className = "logoutbtn">+Add</button></NavLink>
          
         </div>
         <div className = "Friend_List">
               <Grouplist/>
         </div>
         

         </div>

        </div>
    )
}