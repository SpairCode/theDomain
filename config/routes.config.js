export default [
  { path: '/', component: './index' },
  { path: '/login', component: './login/login' },
  { path: '/logins', component: './logins/logins' },
  { path: '/', component: './../component/UseLayout/UseLayout.tsx', Routes: ['./src/pages/routes/PrivateRoute.js'],
  routes: [
      { path: '/theory/DailyPractice', component: 'List/List' },
      { path: '/information/GradeDistributionStudent', component: 'GradeDistributionStudent/GradeDistributionStudent' },
      { path: '/information/GradeDistribution', component: 'GradeDistribution/GradeDistribution' },
      { path: '/information/TheoryLearningStatistics', component: 'TheoryLearningStatistics/TheoryLearningStatistics' },
      { path: '/theory/VideoComponent', component: 'VideoComponent/VideoComponent' },
      { path: '/theory/ListComponent', component: 'ListComponent/ListComponent' },
      { path: '/theory/TimeComponent', component: 'TimeComponent/TimeComponent' },
      { path: '/theory/RoutePath', component: 'RoutePath/RoutePathAfter' },
      { path: '/theory/RoutePath/Underway', component: 'RoutePath/RoutePathUnderway' },
      { path: '/theory/RoutePath/Before', component: 'RoutePath/RoutePathBefore' },
      { path: '/learn', component: 'learn/learn' },
      { component: './404' }
    ]
   },
  { component: './404' }
]