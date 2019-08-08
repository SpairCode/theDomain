const menu = [
  {
    id: 1,
    name: '理论学习',
    enName: 'Table',
    icon: 'book',
    url: '/content',
    children: [],
  },
  {
    id: 2,
    name: '理论考核',
    enName: 'Table',
    icon: 'table',
    url: '/table',
    children: [{
      id: 21,
      name: '日常练习',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 22,
      name: '随机练习',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 23,
      name: '专题练习',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 24,
      name: '题目收藏',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 25,
      name: '模拟考试',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 26,
      name: '在线考试',
      enName: 'Basic Table',
      url: '/student',
    }],
  },
  {
    id: 3,
    name: '错题库',
    enName: 'chart',
    icon: 'database',
    url: '/chart',
    children: [{
      id: 31,
      name: '所有错题',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 32,
      name: '练习错题',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 33,
      name: '查看错题',
      enName: 'Basic Table',
      url: '/student',
    }]
  }, {
    id: 4,
    name: '成绩查询',
    enName: 'chart',
    icon: 'search',
    url: '/chart',
    children: [{
      id: 41,
      name: '理论成绩',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 42,
      name: 'VR训练成绩',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 43,
      name: 'VR考核成绩',
      enName: 'Basic Table',
      url: '/student',
    }]
  }, {
    id: 5,
    name: '信息统计',
    enName: 'chart',
    icon: 'bar-chart',
    url: '/chart',
    children: [{
      id: 51,
      name: '理论学习统计',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 52,
      name: 'VR训练统计',
      enName: 'Basic Table',
      url: '/student',
    }, {
      id: 53,
      name: 'VR考核统计',
      enName: 'VR assessment statistics',
      url: '/student',
    }]
  }
]

export default menu