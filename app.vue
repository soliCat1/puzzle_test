<template>
  <div class="page-wrapper">
    <ServersList />
    <ServerOptions />
  </div>
</template>

<script>

</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

h2 {
  color: #d3a314;
  text-align: start;
}

.page-wrapper {
  padding: 100px;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-height: 100vh;

  @media (max-width: 769px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>