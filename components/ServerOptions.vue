<template>
  <form @submit="changeServer">
    <h2>{{ $store.state.servers[$store.state.activeServerIndex].customer_id }}</h2>
    <input name="server_name" type="text" :value="$store.state.servers[$store.state.activeServerIndex].server_name">
    <select name="server_type" :value="$store.state.servers[$store.state.activeServerIndex].server_type">
      <option value="vds">vds</option>
      <option value="dedicated">dedicated</option>
      <option value="hosting">hosting</option>
    </select>
    <button type="submit">save options</button>
  </form>
</template>

<script>
export default {
  methods: {
    changeServer(event) {
      event.preventDefault()
      const formData = new FormData(event.target)
      this.$store.commit('setServersState', formData)
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  padding: 20px;
  list-style: none;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input,
select {
  background-color: #313534;
  padding: 15px;
  color: #d3a314;
  border: none;

  &:hover {
    background-color: #262928;
  }

  &:focus-visible {
    background-color: #262928;
    outline: none;
  }
}

button {
  background-color: #265757;
  padding: 15px;
  font-size: 18px;
  color: #d3a314;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #244137;
  }
}
</style>