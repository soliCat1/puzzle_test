import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      servers: [
        {
          customer_id: 'user1',
          server_name: 'server7',
          server_type: 'vds'
        },
        {
          customer_id: 'user5',
          server_name: 'server2',
          server_type: 'dedicated'
        },
        {
          customer_id: 'user3',
          server_name: 'server4',
          server_type: 'hosting'
        }
      ],
      activeServerIndex: 0
    };
  },
  mutations: {
    setActiveServerIndexState(state, id) {
      state.activeServerIndex = state.servers.findIndex(server => server.customer_id === id);
    },
    setServersState(state, object) {
      state.servers[state.activeServerIndex].server_name = object.get('server_name')
      state.servers[state.activeServerIndex].server_type = object.get('server_type')
    }
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});