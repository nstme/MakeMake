<template>
  <div class="page page-home">
    <p v-html='name'/>
    <ul>
      <li v-for='item in items'>
        {{item.id}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'firstName',
      lastName: 'lastName',
    }
  },
  computed: {
    name() {
      return `hello ${this.firstName} ${this.lastName}`;
    }
  },
  async asyncData({$axios}) {
    const data = await $axios.$get('https://raw.githubusercontent.com/funkhaus/technical-assessment-round-1/master/db.json');
    return {
      items: data.images
    }
  }
}
</script>

<style scoped>
/* .page-home {
  background: red;
} */
</style>