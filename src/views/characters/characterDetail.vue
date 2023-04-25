<template>
    <div>
        <h2>character detail page</h2>
        <p>{{ name }} is character {{ id }}</p>
        <img :src=img :alt=name>
    
    </div>
</template>

<script>
export default {
    props: [
        'name',
        'id',
        'img'
],

}
</script>

<style>

</style>