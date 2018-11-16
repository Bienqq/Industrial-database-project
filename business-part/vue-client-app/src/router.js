import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "./components/Dashboard"
import Charts from "./components/charts/Charts"
import Database from "./components/tables/Database"
import Settings from "./components/Settings"



Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [{
            path: "/",
            name: "Dashboard",
            component: Dashboard,
        },
        {
            path: "/charts",
            name: "Charts",
            component: Charts,
        },
        {
            path: "/database",
            name: "Database",
            component: Database,
        },
        {
            path: "/settings",
            name: "Settings",
            component: Settings,
        },
    ],
});