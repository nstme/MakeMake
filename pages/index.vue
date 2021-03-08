<template>
  <section class="editors">
    <ul class="list" v-for="(subList, index) in newList" v-bind:key="index">
      <li class="editor" v-for="editor in subList" v-bind:key="editor.name">
        <p @mouseover="onMouseOver(editor)" @mouseleave="onMouseLeave(editor)">{{ editor.name }}</p>
      </li>
      <ul class="slideshow" v-if="hover">
        <li v-for="image in selectedImages" v-bind:key="image">
          <img class="slide" :src="image.sourceUrl" :src-set="image.srcSet" alt="media image" />
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
      windowWidth: undefined
    };
  },
  //beforeMount has access to window web api
  beforeMount() {
    window.addEventListener("resize", this.handleResize);
    this.windowWidth = window.innerWidth;
  },
  computed: {
    images() {
      return [...this.editorsData.images];
    },
    editors() {
      const editors = [];
      this.editorsData.pages.forEach(element => {
        editors.push({
          name: element.title,
          images: [element.featuredImage, ...this.images]
        });
      });
      return editors;
    },
    sortedEditors() {
      return [...this.editors].sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    // change columnCount based on window width (device)
    columnCount() {
      let columnCount = 1;
      let windowWidth = this.windowWidth;
      if (windowWidth >= 1024) {
        columnCount = 3;
      } else if (windowWidth >= 425) {
        columnCount = 2;
      }
      return columnCount;
    },
    //generate 2d array: editor[][] based on columnCount
    newList() {
      const listLength = this.sortedEditors.length; //14
      const itemsQtyInColumn = Math.ceil(listLength / this.columnCount); // 5 or 7
      const newList = [];
      const sortedEditorsCopy = [...this.sortedEditors];
      //while sortedEditorsCopy has elements
      while (sortedEditorsCopy.length) {
        //remove chunk of sortedEditorsCopy and push it into newList
        newList.push(sortedEditorsCopy.splice(0, itemsQtyInColumn));
      }
      return newList;
    },
    title() {
      return this.editorsData.page.title;
    }
  },
  methods: {
    onMouseOver: function(editor) {
      this.hover = true;
      this.selectedImages = editor.images;
    },
    onMouseLeave: function(editor) {
      this.hover = false;
      this.selectedImages = undefined;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    }
  },
  async asyncData({ $axios }) {
    const editorsData = await $axios.$get(
      "https://raw.githubusercontent.com/nstme/mock-db-images/main/db.json"
    );
    return { editorsData };
  }
};
</script>

<style scoped>
.editors {
  position: relative;
  max-width: var(--max-width);
  height: var(--real100vh);
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--gutter);
  padding-top: var(--header-height);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  box-sizing: border-box;
  z-index: 0;
}

.editors .list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style-type: none;
}

.editors .list .editor {
  display: flex;
  flex-direction: row;
  font-size: 2.4rem;
  margin: 16px 0;
}

.editors .list .editor:hover {
  color: #ffffff;
}

.editors .slideshow {
  position: absolute;
  top: var(--header-height);
  bottom: 20%;
  left: 20%;
  right: 20%;
  margin: auto;
  z-index: -100;
  list-style-type: none;
}

.editors .slide {
  position: absolute;
  top: 10%;
  left: 0%;
  right: 0%;
  bottom: 10%;
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.editors .slideshow > * {
  animation: 12s autoplay infinite linear;
  opacity: 0;
}

@keyframes autoplay {
  0% {
    opacity: 0;
  }
  4% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  37.33% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.slideshow > *:nth-child(1) {
  animation-delay: 0s;
}
.slideshow > *:nth-child(2) {
  animation-delay: 4s;
}
.slideshow > *:nth-child(3) {
  animation-delay: 8s;
}
.slideshow > *:nth-child(4) {
  animation-delay: 12s;
}
.slideshow > *:nth-child(5) {
  animation-delay: 16s;
}
.slideshow > *:nth-child(6) {
  animation-delay: 20s;
}
.slideshow > *:nth-child(7) {
  animation-delay: 24s;
}
.slideshow > *:nth-child(8) {
  animation-delay: 28s;
}
.slideshow > *:nth-child(9) {
  animation-delay: 32s;
}
.slideshow > *:nth-child(10) {
  animation-delay: 36s;
}
.slideshow > *:nth-child(11) {
  animation-delay: 40s;
}
</style>
