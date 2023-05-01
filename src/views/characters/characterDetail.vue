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
        <img src="https://dub07pap002files.storage.live.com/y4mBg_yORF10exHN4AoGdYQrGkmoEBAgeDO6sfGmuTfA0c0-TP8w2H_Rw2OBBKNFCyAbq7ZYjGn-m7VKkzO3d7j2qdHCdT2srlZci_XD1-zUaWNP4gubhfOkHYCDOf4Aiv6O6qrms2I_Fe0ipXCFGYQj8f0SjQ_Ksh9TM8TdPdbW_X4AokWaOUDRVkuMRFV9xF0?width=596&height=842&cropmode=none"/>
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
            console.log(this.character)
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