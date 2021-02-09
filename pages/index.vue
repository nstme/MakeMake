<template>
  <div class="page-home">
    <div class="container">
      <article class="editors">
        <h1 v-html='title'/>
        <ul class="list">
          <li v-for='editor in sortedEditors' class="editor" v-bind:key=editor>
            <p @mouseover="hover = true, selectedEditorName = editor.name, selectedImages = editor.images"
            @mouseleave="hover = false, selectedEditorName = undefined, selectedImages = undefined">{{editor.name}}</p>
          </li>
        </ul>
        <ul class="slides" v-if='hover'>
          <li v-for='image in selectedImages' v-bind:key=image>
            <img class="slides" :src=image.sourceUrl :src-set=image.srcSet width=930 alt="img">
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
      editorsData: [],
      hover: false,
      selectedEditorName: undefined,
      selectedImages: undefined,
    }
  },
  computed: {
    images() {
      return [...this.editorsData.images]
    },
    editors() {
      const editors = [];
      this.editorsData.pages.forEach((element) => {
        editors.push({
          name: element.title,
          images: [element.featuredImage, ...this.images],
        })
      })
      return editors
    },
    sortedEditors() {
      return [...this.editors].sort((a, b) => (a.name > b.name) ? 1 : -1)
    },
    title() {
      return this.editorsData.page.title
    }
  },
  async asyncData({$axios}) {
    const editorsData = await $axios.$get('https://raw.githubusercontent.com/nstme/mock-db-images/main/db.json'); 
    return {
      editorsData
    }
  }
}
</script>

<style scoped>
.page-home {
  height: var(--real100vh);
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
  position: relative;
  margin-top: -50px;
  z-index: 500;
}

.editors h1 {
  text-align: center;
  font-size: 1.8rem;
}

.editors ul {
  list-style-type:none
}

.editors .list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 162px;
}

.editors .list li {
  min-width: 340px;
  width: 33%;
}

.editors .list p {
  margin: 16px 0;
  font-size: 2.4rem;
}

.slides {
  position: absolute;
  top: calc(50px + 50%);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -999;
}

.slides > * {
  animation: 12s autoplay infinite linear;
  opacity: 0.0;
}

@keyframes autoplay {
  0% {opacity: 0.0}
  4% {opacity: 1.0}
  33.33% {opacity: 1.0}
  37.33% {opacity: 0.0}
  100% {opacity: 0.0}
}

.slides > *:nth-child(1) {
  animation-delay: 0s
}
.slides > *:nth-child(2) {
  animation-delay: 4s
}
.slides > *:nth-child(3) {
  animation-delay: 8s
}
.slides > *:nth-child(4) {
  animation-delay: 12s
}
.slides > *:nth-child(5) {
  animation-delay: 16s
}
.slides > *:nth-child(6) {
  animation-delay: 20s
}
.slides > *:nth-child(7) {
  animation-delay: 24s
}
.slides > *:nth-child(8) {
  animation-delay: 28s
}
.slides > *:nth-child(9) {
  animation-delay: 32s
}
.slides > *:nth-child(10) {
  animation-delay: 36s
}
.slides > *:nth-child(11) {
  animation-delay: 40s
}

@media screen and (max-width: 800px) {
  .editors, .editors ul {
    margin-top: 30px;
    transition: transform 0.4s ease-in-out;
  }
}
</style>