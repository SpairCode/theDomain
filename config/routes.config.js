export default [
  { path: '/', component: './index' },
  { path: '/login', component: './login/login' },
  { path: '/logins', component: './logins/logins' },
  { path: '/', component: './../component/UseLayout/UseLayout.tsx',
  routes: [
      { path: '/theory/DailyPractice', component: 'login/login' },
      { path: '/theory/RandomPractice', component: 'logins/logins' },
      { component: './404' }
    ]
   },
  { component: './404' }
]