export default function (router) {
  // Set title
  router.beforeEach(((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);

    if (nearestWithTitle) {
      document.title = nearestWithTitle.meta.title;
    }

    next();
  }));
}
