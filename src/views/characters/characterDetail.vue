<template>
     <section id="Grid">
        <div>
            <h1>{{ character.name }}</h1>
            <p>{{ character.p1 }}</p>
            <p>{{ character.p2 }}</p>
            <p>{{ character.p3 }}</p>
            <p>{{ character.p4 }}</p>
            <p>{{ character.p5 }}</p>
            <p>{{ character.p6 }}</p>
            <p>{{ character.p7 }}</p>
            <p>{{ character.p8 }}</p>
            <p>{{ character.p9 }}</p>
            <p>{{ character.p10 }}</p>
            <p>{{ character.p11 }}</p>
            <p>{{ character.p12 }}</p>
        </div>
        <img :src="character.img" :alt="character.name">
    </section>
    <aside>
            side bar
    </aside>
</template>

<script>
export default {
    //
    props: ['name'],

    data(){
        return {
            //
            character: {}
        }
    },
    methods: {
        async getcharacters() {
            // url
            let url = `http://localhost:3000/characters/${this.name}`;
            //fetch api with url
            let character = await fetch(url);
            // 
            let finalist = await character.json();
            //
            this.character = finalist.character[0];
        }
    },
    created: function (){
        //
        this.getcharacters()
    }

}
</script>

<style>
#Grid{
        display: grid;
        padding-left: 4vw;
        grid-template-columns: repeat(2, 50%);
        place-items: center;
    }
</style>