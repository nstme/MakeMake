<template>
  <div class="page-home">
    <div class="container">
      <article class="editors">
        <h1 v-html='title'/>
        <ul class="list">
          <li v-for='editor in sortedEditors' class="editor">
            <p>{{editor.name}}</p>
            <img :src="editor.images[0]" alt="img">
          </li>
        </ul>
      </article>
    </div>
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
    const editors = [];
    const imagesUrl = [];

    for (const [, value] of Object.entries(data.images)) {
      imagesUrl.push(value.sourceUrl);
    };

    for (const [, value] of Object.entries(data.pages)) {
      editors.push({
        name: value.title,
        images: [value.featuredImage.sourceUrl, ...imagesUrl],
      });
    };

    const sortedEditors = [...editors].sort((a, b) => (a.name > b.name) ? 1 : -1);
    return {
      title: data.page.title,
      sortedEditors,
    }
  }
}
</script>

<style scoped>
.page-home {
  height: 100vh;
}

.container {
  width: 1180px;
  max-width: 80%;
}

.page-home .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.editors {
  margin-top: -50px;
}

.editors h1 {
  text-align: center;
  font-size: 1.8rem;
}

.editors ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 162px;
}

.editors li {
  list-style: none;
  min-width: 340px;
  width: 33%;
}

.editors p {
  margin: 16px 0;
  font-size: 2.4rem;
}
</style>