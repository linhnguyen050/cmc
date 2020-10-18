import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import Users from '@/components/Users'
import Comments from '@/components/Comments'
import Posts from '@/components/Posts'
import DangNhap  from '@/components/DangNhap'
import Admin from '@/layout/Admin'
import FormPost from '@/components/FormPost'
import FormComment from '@/components/FormComment'
import CommentEdit from '@/components/CommentEdit'
import PostEdit from '@/components/PostEdit'
import UserEdit from '@/components/UserEdit'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [ // bao gồm danh sách route
    {
      path: '/users', ///path của route
      name: 'users', // tên route
      component: Users // component route sử dụng
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
        path: '/comments',
        name: 'comments',
        component: Comments
    },
    {
        path:'/',
        name:'dangnhap',
        component: DangNhap
    },
    {
      path:'/admin',
      name:'/admin',
      component: Admin
    },
    {
      path: '/formpost',
      name: 'formpost',
      component: FormPost
    },
    {
      path: '/formcomment',
      name: 'formcomment',
      component: FormComment
    },
    {
      path: '/comments/:id',
      name: 'commentEdit',
      component: CommentEdit
    },
    {
      path: '/posts/:id',
      name: 'postEdit',
      component: PostEdit
    },
    {
      path: '/users/:id',
      name: 'userEdit',
      component: UserEdit
    },
    
  ]
})