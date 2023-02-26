import { Router } from 'vue-router';
export const handleDevRoutes = (router: Router) => {
  const rtm = import.meta.glob('@/pages/**/route.ts');
  // get the Path Of the current Url(由于是异步 addRoute, 所以需要在 addRoute 之后再进行 replace)
  const currentRoute = router.currentRoute;

  // console.log(rtm, 'rtm');
  Object.keys(rtm).forEach((key) => {
    rtm[key]().then((res: any) => {
      // TODO: 这里仅生成一层结构的路由对象, 未来需要考虑多层结构的路由对象(addRoute 有提供生成多层结构的路由对象的方法)
      router.addRoute(res.default);
      if (res.default.path === currentRoute.value.path) {
        router.replace(currentRoute.value.path);
      }
    });
  });
};
