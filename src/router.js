/*
VUE App's MAIN Component.
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
*/
'use strict';

// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
            path:"/",
            name:"Home",
            component: () => import('@/routes/HomeView.vue'),
            props: { name: "DemoApp"}
        },{
            path:"/about",
            name:"About",
            component: () => import('@/routes/AboutView.vue')
        },{
            path:"/info",
            name:"Info",
            component: () => import('@/routes/Vue3InfoView.vue')
        },{
            path:"/test",
            name:"Test",
            //makes it dinamic -> doesn't load until you catually click the tab
            component: () => import('@/routes/TestView.vue')
        },{
            path:"/chart",
            name:"Chart",
            //makes it dinamic -> doesn't load until you catually click the tab
            component: () => import('@/routes/ChartView.vue')
        }
    ]
});

export default router;