<!--
<VFSHeader />
Copyright (c) 2022-2023. Kibble Game Studios Inc. All Rights Reserved.
-->
<script>
    import Controller from '@/plugins/controller'

    import { useInfoStore } from '@/stores/infoStore.js'

    class HeaderController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.props = {
                title: String,
                subtitle: String,
            }

            this.injectStore( useInfoStore );
        }
    }

    export default new HeaderController('RollerHeader');

</script>
<template>

    <section class="container left">
        <img alt="Backflipping Nuns Logo" class="logo" src="@/assets/Images/LogoBackflippingNuns.jfif" width="125" height="125" @click="$router.push('/')"/>
        <div class="title item">
            <h1>{{title}}</h1>
            <h4>{{ subtitle }} {{ infoStore.version }}</h4>
            <button @click="infoStore.increment()">ADD VERSION</button>
        </div>
        <slot class="item"></slot>
    </section>

</template>
<style scoped>

    .container .left {
        margin-left: 33%;
        color: black;
    }

    button {
        margin-top: 10px;
        margin-left: 25%;
        background-color: rgb(238, 75, 102);
        color: #fdfdfd;
    }
    .title h1, .title h4 {
        margin-right: 2vw;
        margin-left: 2vw;
        text-align:center;
        width: 100%;
    }

    @media (min-width: 1024px) {
        .logo {
            margin: 0 0 0 20px;
        }
    }
</style>