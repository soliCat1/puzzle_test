<template>
  <li
    :class="{ active : server.customer_id === $store.state.servers[$store.state.activeServerIndex].customer_id }"
  >
    <span>{{ server.customer_id }}</span>
    <span>{{ server.server_name }}</span>
    <span>{{ server.server_type }}</span>
  </li>
</template>

<script>
export default {
  props: {
    server: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  background-color: #313534;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: #265757;
  }
}

span {
  display: block;
  color: #d3a314;
}

.active {
  background-color: #265757;
}
</style>
