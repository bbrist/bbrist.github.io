export default {
  methods: {
    scrollToRef(ref) {
      const element = this.$refs[ref];
      const top = element.$el.offsetTop;

      console.debug(`Scrolling to ${ref}`, top, element);
      window.scrollTo(0, top);
    },
  },
};
