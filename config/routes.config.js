export default [
  { path: '/', component: './index' },
  { path: '/login', component: './login/login' },
  { path: '/logins', component: './logins/logins' },
  { path: '/content', component: './../component/UseLayout/UseLayout.tsx',
  routes: [
      { path: '/content/login', component: 'login/login' },
    ]
   },
  { component: './404' }
]