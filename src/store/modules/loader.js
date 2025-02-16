export default {
    states() {
        loading: false
    }, 
    mutations: {
        setLoading(states, status) {
            states.loading = status;
        }
    },
    actions: {
        setLoading({commit}, status) {
            commit("setLoading", status);
        }        
    },
    getters: {
        
    }
}