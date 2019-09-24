const menu = [
  {
    id: 1,
    title: '图片管理',
    enName: 'The theory of learning',
    icon: 'book',
    url: '/learn',
  },
  {
    id: 2,
    title: '组件列表',
    enName: 'The theory of the inspection',
    icon: 'table',
    url: '/theory',
    children: [{
      id: 21,
      title: '图片组件',
      enName: 'Photo Component',
      url: '/theory/DailyPractice',
    }, {
      id: 22,
      title: '视频组件',
      enName: 'Video Component',
      url: '/theory/VideoComponent',
    }, {
      id: 23,
      title: '列表组件',
      enName: 'List Component',
      url: '/theory/ListComponent',
    }, {
      id: 24,
      title: '计时组件',
      enName: 'Time Component',
      url: '/theory/TimeComponent',
    }, {
      id: 25,
      title: '路由组件',
      enName: 'Route Component',
      url: '/theory/RoutePath',
    }],
  },
  {
    id: 3,
    title: '错题库',
    enName: 'WrongQuestion',
    icon: 'database',
    url: '/wrongQuestion',
    children: [{
      id: 31,
      title: '所有错题',
      enName: 'All of the wrong topic',
      url: '/wrongQuestion/allWrong',
    }, {
      id: 32,
      title: '练习错题',
      enName: 'Practice the wrong topic',
      url: '/wrongQuestion/PracticeWrong',
    }, {
      id: 33,
      title: '查看错题',
      enName: 'SeeWrong',
      url: '/wrongQuestion/SeeWrong',
    }]
  }, {
    id: 4,
    title: '成绩查询',
    enName: 'Results the query',
    icon: 'search',
    url: '/results',
    children: [{
      id: 41,
      title: '理论成绩',
      enName: 'TheoreticalResults',
      url: '/results/TheoreticalResults',
    }, {
      id: 42,
      title: 'VR训练成绩',
      enName: 'VR Training Performance',
      url: '/results/VRTrainingPerformance',
    }, {
      id: 43,
      title: 'VR考核成绩',
      enName: 'VR Assessment Results',
      url: '/results/VRAssessmentResults',
    }]
  }, {
    id: 5,
    title: '信息统计',
    enName: 'Statistical Information',
    icon: 'bar-chart',
    url: '/information',
    children: [{
      id: 51,
      title: '学习成绩统计',
      enName: 'Theory Learning Statistics',
      url: '/information/TheoryLearningStatistics',
    }, {
      id: 52,
      title: '成绩分布统计',
      enName: 'GradeDistribution',
      url: '/information/GradeDistribution',
    }, {
      id: 53,
      title: '学生成绩分布',
      enName: 'GradeDistributionStudent',
      url: '/information/GradeDistributionStudent',
    }]
  }
]

export default menu