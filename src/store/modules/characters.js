import axios from "axios";

const state = {
    characters: [],
};

const getters = {
    allCharacters: (state) => state.characters,
};

const actions = {
    async fetchCharacters({ commit }) {
        const response = await axios.get(
            "https://rickandmortyapi.com/api/character"
        );
        commit("setCharacters", response.data.results);
    }
};

const mutations = {
    setCharacters: (state, characters) => (state.characters = characters),
};
export default {
    state,
    getters,
    actions,
    mutations,
};
