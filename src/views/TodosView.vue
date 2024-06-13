<template>
    <div>
        <ul>
            <li v-for="todo of allTodos" :key="todo.id"> {{ todo.title }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    methods: {
        ...mapActions(["fetchTodos","test"]),
    },
    computed: mapGetters(["allTodos"]),

    created() {
        this.test()
        this.fetchTodos();
    },
};
</script>