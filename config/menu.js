const menu = [
  {
    icon: 'desktop',
    title: '学员信息',
    index: 'studentInformation'
  },
  {
    icon: 'bold',
    title: '资金管理',
    index: 'boldManagement',
    children: [{
      icon: 'form',
      title: '表单管理',
      index: 'formManagement',
    }, {
      icon: 'form',
      title: '表单',
      index: 'formManagements',
    }]
  },
  {
    icon: 'bold',
    title: '资金',
    index: 'boldManagements',
    children: [{
      icon: 'form',
      title: '表理',
      index: 'formManagemented',
    }, {
      icon: 'form',
      title: '表单',
      index: 'formtText',
    }]
  },
  {
    icon: 'user',
    title: '个人信息',
    index: 'userInfo'
  },
]

export default menu