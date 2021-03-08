export const state = () => ({
  counter: 0,
  isActive: false
});

export const mutations = {
  increment(state) {
    state.counter++;
    console.log("times clicked -", state.counter);
  },
  clicked(state) {
    state.isActive = !state.isActive;
    console.log("hamburger menu isActive -", state.isActive);
  }
};
