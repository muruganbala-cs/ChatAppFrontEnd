import React from "react";
import "./mainstyle.css";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { IconButton } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SearchIcon from '@mui/icons-material/Search';
import Conversationitems from "./Conversationitems";
const Sidebar = () => {
  return (
    <div className="sidebarcontainer">
      <div className="sb-header">
        <div>
        <IconButton>
        <AccountCircleSharpIcon />
        </IconButton>
        </div>
        <div>
        <IconButton>
        <PersonAddIcon />
        </IconButton>
        <IconButton>
        <GroupAddIcon />
        </IconButton>
        <IconButton>
        <AddCircleIcon />
        </IconButton>
        <IconButton>
        <BedtimeIcon />
        </IconButton>
        </div>
      </div>
      <div className="sb-search">
      <IconButton>
      <SearchIcon />
     </IconButton>
        <input className="searchbox" type="text" placeholder="Search..." />
      </div>
      <div className="sb-conversations">
        <Conversationitems />
      </div>
    </div>
  );
};

export default Sidebar;
