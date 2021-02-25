<template>
  <section class="editors">
    <ul class="list">
      <li v-for='editor in sortedEditors' class="editor" v-bind:key=editor>
        <p @mouseover="onMouseOver(editor)" @mouseleave="onMouseLeave(editor)">{{editor.name}}</p>
      </li>
      <ul class="slideshow" v-if='hover'>
        <li v-for='image in selectedImages' v-bind:key=image>
          <img class=" slide" :src=image.sourceUrl :src-set=image.srcSet alt="media image">
        </li>
      </ul>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      editorsData: [],
      hover: false, 
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
    },
  },
  methods: {
    onMouseOver: function(editor) {
      this.hover = true;
      this.selectedImages = editor.images;
    },
    onMouseLeave: function(editor) {
      this.hover = false;
      this.selectedImages = undefined;
    }
  },
  async asyncData({$axios}) {
    const editorsData = await $axios.$get('https://raw.githubusercontent.com/nstme/mock-db-images/main/db.json'); 
    return { editorsData }
  }
}
</script>

<style scoped>
.editors {
  position: relative;
  max-width: var(--max-width);
  height: var(--real100vh);
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--gutter);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 500;
  border: 2px solid whitesmoke;
}

.editors .list { 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
}

.editors .list .editor {
  min-width: 340px;
  width: 33%;
  font-size: 2.4rem;
  margin: 16px 0;
}

.editors .slideshow {
  position: absolute;
  top: var(--header-height);
  bottom: 0;
  left: 10%;
  right: 10%;
  margin: auto;
  z-index: -999;
  list-style-type: none;
  border: 2px solid green;
}

.editors .slide {
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%; 
  object-fit: fill;
  border: 2px solid red;
}

.editors .slideshow  > * {
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

.slideshow > *:nth-child(1) {
  animation-delay: 0s;
}
.slideshow > *:nth-child(2) {
  animation-delay: 4s
}
.slideshow > *:nth-child(3) {
  animation-delay: 8s
}
.slideshow > *:nth-child(4) {
  animation-delay: 12s
}
.slideshow > *:nth-child(5) {
  animation-delay: 16s
}
.slideshow > *:nth-child(6) {
  animation-delay: 20s
}
.slideshow > *:nth-child(7) {
  animation-delay: 24s
}
.slideshow > *:nth-child(8) {
  animation-delay: 28s
}
.slideshow > *:nth-child(9) {
  animation-delay: 32s
}
.slideshow > *:nth-child(10) {
  animation-delay: 36s
}
.slideshow > *:nth-child(11) {
  animation-delay: 40s
}

@media screen and (max-width: 1122px) {
  .editors, .editors .list {
    margin-top: var(--header-height);
    transition: transform 0.4s ease-in-out;
  }
}
</style>