/*
 * :file description: 
 * :name: /antd/config/routes.ts
 * :author: 张德志
 * :date created: 2021-06-13 19:13:11
 * :last editor: 张德志
 * :date last edited: 2021-06-14 10:00:13
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    name:'按钮',
    icon: 'table',
    path: '/button',
    component: './ButtonPage',
  },
  {
    name:'图标',
    icon: 'table',
    path: '/icon',
    component: './IconPage',
  },
  {
    name:'图标',
    icon: '排版',
    path: '/typography',
    component: './TypographyPage',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
