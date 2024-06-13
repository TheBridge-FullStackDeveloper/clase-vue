<script>
import { mapGetters, mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["fetchCharacters"])
    },
    computed: mapGetters(["allCharacters"]),

    created() {
        this.fetchCharacters()
    }
}
</script>

<template>
    <div>
        <h1>Mis personajes</h1>
<ul>
    <li v-for="character of allCharacters" :key="character.id">
        <img :src="character.image" alt="">
        {{ character.name }}
    </li>
</ul>
    </div>
</template>

<style scoped>
h1 {
    color: red;
}
</style>
