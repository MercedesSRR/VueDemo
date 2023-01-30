<!--Copyright (c) 2023. Mercedes Senties. All Rights Reserved.-->

<script>
    import Controller from '@/plugins/controller'

    class TestController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                formData: {
                    numberForm1: 1,
                    numberForm2: 1,
                }
            }

            this.props = {
            }
        }

        //controller method
        Submit() {

        }
    }

    export default new TestController('Test');

</script>

<template>
    <!--name of component-->
    <section class="flexbox columns test">
        <div class="flexitem dialog">
            <form class="sample-form">
                <label for="s1">Respawn time:
                    <input name="s1" v-model="formData.numberForm1">
                </label><br/>
                <label for="s2">Number of lifes:
                    <input name="s2" v-model="formData.numberForm2">
                </label><br/>
                <button @click="Submit()" value="Submit" class="">SAVE</button>
            </form>
        </div>
    </section>
    <section class="charts section test">
        <div class="chart bar">
            
        </div>
        <div class="chart lines">
            
        </div>
        <div class="chart pie">
            
        </div>
        <div class="chart heatmap">
            
        </div>
    </section>
</template>

<style scoped>
    .test {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .sample-form {
        border: 2px solid rgb(0, 0, 0);
        margin: 1em;
        padding: 2em;
    }

    .chart {
        border: 2px solid black;
        margin: 1em;
        padding: 2em;
    }

    label { 
        color: black;
    }

    select, input {
        font-size: 1.2em;
        font-weight: 700;
        height: 1.4em;
        background-color: #a39d9d;
        padding: 5px;
    }

    button {
        padding-right: 30px;
        padding-left: 30px;
        background-color: rgb(238, 75, 102);
        color: #fdfdfd;
    }
</style>