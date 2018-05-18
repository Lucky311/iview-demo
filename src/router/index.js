import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Layout from '@/components/Layout'
import Index from '@/components/Index'
import test from '@/components/test'
import international from '@/components/international'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/international',
      name: 'international',
      title: {i18n: 'international'},
      component: international,
    },
    {
      path: '/test',
      name: 'test',
      component: test,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:"system",
          name:'system',
          component:{template:`<router-view></router-view>`},
          children:[
            {
              path:"new",name:'new',component:()=>import("@/pages/System/New")
            },
            {
              path:"banner",name:'banner',component:()=>import("@/pages/System/Banner")
            }
          ]
        },
        {
         
          path:"activity",
          component:{template:`<router-view></router-view>`},
          children:[
            {
              path:"activitylist",name:'activitylist',component:()=>import("@/pages/Activity/ActivityList")
            }
          ]
         
        },
        {
          path:"user",
          component:{template:`<router-view></router-view>`},
          children:[
            {
              path:"userlist",name:'userlist',component:()=>import("@/pages/User/UserList")
            },
            {
              path:"usermanage",name:'usermanage',component:()=>import("@/pages/User/UserManage")
            }
          ]
         
        },
        
        {
          path:"school",
          component:{template:`<router-view></router-view>`},
          children:[
            {
              path:"schoollist",name:'schoollist',component:()=>import("@/pages/School/SchoolList")
            }
          ]
         
        },
      ]
    },
    {
      path:"/login",component:Home
    },
    {
      // 路由 路径输入错，去默认的页面（路由重定向）
      path:"*",
      redirect:"/home"
    }
  ]
})

