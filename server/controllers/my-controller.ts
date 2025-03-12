import {Core as StrapiCore} from "@strapi/strapi";

export default ({ strapi }: { strapi: StrapiCore.Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('location-plugin')
      .service('myService')
      .getWelcomeMessage();
  },
});
