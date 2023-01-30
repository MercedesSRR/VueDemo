<!--
<VFSNavbar />
@copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>
    import { RouterLink, RouterView } from 'vue-router'

    import Controller from '@/plugins/controller'

    import { useInfoStore } from '@/stores/infoStore.js'
    import { useModelStore } from '@/stores/sampleStore.js'

    class NavbarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                navMenu:[
                    { path:"/", section: "HOME" },
                    { path:"/about", section: "ABOUT" },
                    { path:"/info", section: "INFO" },
                    { path:"/test", section: "TEST" },
                    { path:"/chart", section: "CHART"}
                ]
            }

            this.injectStore( useInfoStore )
                .injectStore( useModelStore )
        }
    }

    export default new NavbarController('RollerNavbar');

</script>
<template>

    <nav class="navbar">
        <ul class="menu">
            <li v-for="(item, i) in navMenu" :key="i">
                <router-link :to="item.path" class="menu-item">{{ item.section }}</router-link>
            </li>
        </ul>
    </nav>

</template>
<style scoped>

    nav {
        width: 100%;
    }

    nav a.router-link-exact-active {
        color: white;
        font-weight: 700;
        background-color: black;
    }

    nav a {
        display: inline-block;
    }

    nav a:first-of-type {
        border: 0;
    }

    .menu {
        align-items: center;
        background: rgba(231, 231, 231, 0.897);
    }

    .navbar {
        justify-content: space-between;
    }
</style>