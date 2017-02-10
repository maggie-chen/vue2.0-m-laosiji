import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from 'views/Login'
import Index from 'views/Index'
import User from 'views/User'
import Search from 'views/Search'
import Choice from 'views/index/Choice'
import Follow from 'views/index/Follow'
import UserHome from 'views/user/UserHome'
import UserSet from 'views/user/UserSet'

const router = new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
		name: 'Index',
		component: Index,
		children: [
        {
          path: '',
          name: 'Choice',
          component: Choice
        },{
          path: 'follow',
          name: 'Follow',
          component: Follow,
          // a meta field
          meta: { requiresAuth: true }
        }
      ]
	},{
		path: '/login',
		name: 'Login',
		component: Login
	},{
		path: '/user',
		name: 'User',
		component: User,
		children: [
		{
          path: '',
          name: 'UserHome',
          component: UserHome
        },
        {
          path: 'set',
          name: 'UserSet',
          component: UserSet
        }
        ]
	},{
    path: '/search',
    name: 'Search',
    component: Search
  }
	]
})

router.beforeEach((to, from, next) => {
  if(to.fullPath=='/login'){  //已有登录用户，访问登录页面则跳转首页
    if (auth.loggedIn()) {
      next({path: '/'})
    }else{
      next()
    }
  }
  if (to.matched.some(record => record.meta.requiresAuth)) { //依赖登录状态
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

let auth = {
	loggedIn(){
		const user = window.localStorage.getItem('laosiji');
		if(user!=null){
			return true
		}else{
			return false
		}
	}
}

export default router