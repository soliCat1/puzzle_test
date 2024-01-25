<template>
  <ul>
    <h2>Servers</h2>
    <ServerItem
      v-for="server in $store.state.servers"
      :key="server.customer_id"
      :server="server"
      @click="changeServer(server.customer_id)"
    />
  </ul>
</template>

<script>
export default {
  methods: {
    changeServer(id) {
      this.$store.commit("setActiveServerIndexState", id);
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 20px;
  list-style: none;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
