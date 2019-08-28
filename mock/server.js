import Mock from 'mockjs';
import { delay } from 'roadhog-api-doc' // 模拟网络延迟
import request from './request';

// tableList port data
const tableData = (req, res) => {
  res.send(Mock.mock({
    'list|10': [{
       'key|+1': 1,
       'name':  '@cname',
       'score': '@natural(10, 100)',
    }]
  }))
}

const scoreDistribute = (req, res) => {
  res.send(Mock.mock({
    'data': [{
      'title':  '60分以下',
      'value': '@natural(1, 10)',
    }, {
      'title':  '60 ~ 70分之间',
      'value': '@natural(10, 30)',
    }, {
      'title':  '70 ~ 80分之间',
      'value': '@natural(10, 30)',
    }, {
      'title':  '80 ~ 90分之间',
      'value': '@natural(10, 20)',
    }, {
      'title':  '90 ~ 100分之间',
      'value': '@natural(3, 15)',
    }, {
      'title':  '100分',
      'value': '@natural(1, 5)',
    }]
  }))
}

const studentDistribute = (req, res) => {
  res.send(Mock.mock({
    'data|1000': [{
      "number|80-99.1-2": 1,
      "value|80-99.1-2": 1
    }]
  }))
}

const nameData = (req, res) => {
  res.send(Mock.mock({
    'list|30': [{
       'key|+1': 1,
       'name':  '@cname',
    }]
  }))
}

const proxy = {
  'GET /api/information/theoryLearningStatistics' : tableData,
  'GET /api/information/vrtrainingStatistics' : scoreDistribute,
  'GET /api/information/studentdistribute' : studentDistribute,
  'GET /api/information/studentname' : nameData,
}

export default delay(proxy, 1000)

export async function queryTheoryLearning () {
  return request('/api/information/theoryLearningStatistics')
}

export async function queryScoreDistribute () {
  return request('/api/information/vrtrainingStatistics')
}

export async function queryStudentDistribute () {
  return request('/api/information/studentdistribute')
}

export async function queryStudentName () {
  return request('/api/information/studentname')
}