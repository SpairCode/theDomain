const menu = [
  {
    id: 1,
    name: '理论学习',
    enName: 'The theory of learning',
    icon: 'book',
    url: '/content',
    children: [],
  },
  {
    id: 2,
    name: '理论考核',
    enName: 'The theory of the inspection',
    icon: 'table',
    url: '/table',
    children: [{
      id: 21,
      name: '日常练习',
      enName: 'Daily Practice',
      url: '/content/login',
    }, {
      id: 22,
      name: '随机练习',
      enName: 'Random Practice',
      url: '/content/RandomPractice',
    }, {
      id: 23,
      name: '专题练习',
      enName: 'Project Practice',
      url: '/content/ProjectPractice',
    }, {
      id: 24,
      name: '题目收藏',
      enName: 'Topic Collection',
      url: '/content/TopicCollection',
    }, {
      id: 25,
      name: '模拟考试',
      enName: 'MockExam',
      url: '/content/MockExam',
    }, {
      id: 26,
      name: '在线考试',
      enName: 'OnlineExam',
      url: '/content/OnlineExam',
    }],
  },
  {
    id: 3,
    name: '错题库',
    enName: 'WrongQuestion',
    icon: 'database',
    url: '/WrongQuestion',
    children: [{
      id: 31,
      name: '所有错题',
      enName: 'All of the wrong topic',
      url: '/content/allWrong',
    }, {
      id: 32,
      name: '练习错题',
      enName: 'Practice the wrong topic',
      url: '/content/PracticeWrong',
    }, {
      id: 33,
      name: '查看错题',
      enName: 'SeeWrong',
      url: '/content/SeeWrong',
    }]
  }, {
    id: 4,
    name: '成绩查询',
    enName: 'Results the query',
    icon: 'search',
    url: '/chart',
    children: [{
      id: 41,
      name: '理论成绩',
      enName: 'TheoreticalResults',
      url: '/content/TheoreticalResults',
    }, {
      id: 42,
      name: 'VR训练成绩',
      enName: 'VR Training Performance',
      url: '/content/VRTrainingPerformance',
    }, {
      id: 43,
      name: 'VR考核成绩',
      enName: 'VR Assessment Results',
      url: '/content/VRAssessmentResults',
    }]
  }, {
    id: 5,
    name: '信息统计',
    enName: 'Statistical Information',
    icon: 'bar-chart',
    url: '/StatisticalInformation',
    children: [{
      id: 51,
      name: '理论学习统计',
      enName: 'Theory Learning Statistics',
      url: '/content/TheoryLearningStatistics',
    }, {
      id: 52,
      name: 'VR训练统计',
      enName: 'VR Training Statistics',
      url: '/content/VRTrainingStatistics',
    }, {
      id: 53,
      name: 'VR考核统计',
      enName: 'VR Assessment Statistics',
      url: '/content/VRAssessmentStatistics',
    }]
  }
]

export default menu