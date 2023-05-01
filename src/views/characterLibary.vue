<template>
        <div v-for='(character, i) in characters' :key='i'>
            <router-link :to="{ name: 'characterDetail', params: {name: character.name, }}">
                <h3>{{ character.name }}</h3>
            </router-link>
        </div>
        <section id="Libary">
        <div class="infoContainer">
            <div>
                <h2>Brandr Svensson</h2>
                <ul>
                    <li>Race: Half Elf</li>
                    <li>Culture: Thorwaler</li>
                    <li>Profession: Mercenary</li>
                    <li>Place of Birth: Waskir</li>
                </ul>
            </div>
            <img src="../assets/characterImg/Brander.png" alt="Brandr">
        </div>
        <div class="infoContainer">
            <div>
                <h2>Gethlire Keller</h2>
                <ul>
                    <li>Race: Half Elf</li>
                    <li>Culture: Garetian</li>
                    <li>former Profession: Mercenary</li>
                    <li>Place of Birth: info pending</li>
                </ul>
            </div>
            <img src="../assets/characterImg/Gethlire_Keller.png" alt="Gethlire Keller">
        </div>
        <div class="infoContainer">
            <div>
                <h2>Scathach summers</h2>
                <ul>
                    <li>Race: Human</li>
                    <li>Culture: Garetian</li>
                    <li>Profession: striker</li>
                    <li>Place of Birth: info pending</li>
                </ul>
            </div>
            <img src="../assets/characterImg/Scathach_summers.png" alt="Brandr">
        </div>
        <div class="infoContainer">
            <div>
                <h2>Name pending</h2>
            <ul>
                <li>Race: tiefling</li>
                <li>Culture: info pending</li>
                <li>Profession: rogue</li>
                <li>Place of Birth: info pending</li>
            </ul>
            </div>
            <img src="../assets/characterImg/character.png" alt="Brandr">
        </div>
    </section>
    <aside>
            side bar
    </aside>
</template>

<script>
export default {
    data() {
        return {
            //
            characters: []
        }
    },
    methods: {
        async getcharacter() {
            //fetch api
            let characters = await fetch('http://localhost:3000/characters');
            //
            let finalist = await characters.json();
            //
            this.characters = finalist.characters;
            console.log(this.characters)
        }
    },

    created: function (){
        //
        this.getcharacter()
    }
}
</script>

<style>
    #Libary img{
        width: 80%;
    }
    #Libary{
        display: grid;
        margin-top: 2vh;
        grid-template-columns: repeat(2, 50%);
        row-gap: 2vh;
        padding-left: 5%;
    }
    .infoContainer{
        display: grid;
        grid-template-columns: repeat(2, 50%);
    }
    li{
        list-style: none;
    }
</style>