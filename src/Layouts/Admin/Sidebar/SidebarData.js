import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ReviewsIcon from '@mui/icons-material/Reviews';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DashboardIcon from '@mui/icons-material/Dashboard';
const SidebarData = [
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/app"
    },
    {
        title:"Total Patients",
        icon:<PersonIcon/>,
        link:"/app/totalcustomers"
    },
    {
        title:"New Patients",
        icon:<PersonAddIcon/>,
        link:"/app/newjoin"
    },
   
    {
        title:"Notifications",
        icon:<NotificationsIcon/>,
        link:"/app/notifications"
    },
    {
        title:"Reviews",
        icon:<ReviewsIcon/>,
        link:"/app/reviews"
    },
    {
        title:"Suggestions",
        icon:<TipsAndUpdatesIcon/>,
        link:"/app/suggestions"
    }


]
export default SidebarData