export default [
  { path: '/', component: './index' },
  { path: '/login', component: './login/login' },
  { path: '/logins', component: './logins/logins' },
  { path: '/', component: './../component/UseLayout/UseLayout.tsx', Routes: ['./src/pages/routes/PrivateRoute.js'],
  routes: [
      { path: '/theory/DailyPractice', component: 'login/login' },
      { path: '/theory/RandomPractice', component: 'logins/logins' },
      { path: '/information/VRAssessmentStatistics', component: 'VRAssessmentStatistics/VRAssessmentStatistics' },
      { path: '/information/GradeDistribution', component: 'GradeDistribution/GradeDistribution' },
      { path: '/information/TheoryLearningStatistics', component: 'TheoryLearningStatistics/TheoryLearningStatistics' },
      { component: './404' }
    ]
   },
  { component: './404' }
]