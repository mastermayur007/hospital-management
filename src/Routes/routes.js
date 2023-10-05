import { lazy } from 'react'
const Dashboard = lazy(()=>import('../Pages/AdminPages/Dashboard/Dashboard'))
const NewJoin = lazy(()=>import('../Pages/AdminPages/NewJoin/NewJoin'))
const Notifications = lazy(()=>import('../Pages/AdminPages/Notifications/Notifications'))
const PendingPayments = lazy(()=>import('../Pages/AdminPages/PendingPayments/PendingPayments'))
const Reviews = lazy(()=>import('../Pages/AdminPages/Reviews/Reviews'))
const Suggestions = lazy(()=>import('../Pages/AdminPages/Suggestions/Suggestions'))
const TotalCustomers = lazy(()=>import('../Pages/AdminPages/TotalCustomers/TotalCustomers'))
const AddCustomer = lazy(()=>import('../Pages/AdminPages/AddCustomer/AddCustomer'))
const routes=[
    {
        path : '/',
        component : Dashboard,
    },
    {
        path : '/newjoin',
        component : NewJoin,
    },
    {
        path : '/notifications',
        component : Notifications,
    },
    {
        path : '/pendingpayments',
        component : PendingPayments,
    },
    {
        path : '/reviews',
        component : Reviews,
    },
    {
        path : '/suggestions',
        component : Suggestions,
    },
    {
        path : '/totalcustomers',
        component : TotalCustomers,
    },
    {
        path : '/addcustomer',
        component: AddCustomer,
    }
]
export default routes