import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('@/views/GreetingView.vue')
const AuthPage = () => import('@/views/AuthView.vue')
const HomepagePage = () => import('@/views/HomepageView.vue')
const LoginPage = () => import('@/views/LoginView.vue')
const RegistrationPage = () => import('@/views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/map', component: HomepagePage },
  {
    path: '/auth',
    component: AuthPage,
    children: [
      { path: 'login', component: LoginPage },
      { path: 'registration', component: RegistrationPage }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory('/it-traveler/'),
  routes
})