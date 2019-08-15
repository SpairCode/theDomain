import Mock from 'mockjs';
import { delay } from 'roadhog-api-doc' // 模拟网络延迟
import request from './request';

// tableList port data
const tableData = (req, res) => {
  res.send(Mock.mock({
    'list|100': [{
       'key|+1': 1,
       'name':  '@cname',
       'age': '@natural(10, 40)',
       'address': '@county(true)'
    }]
  }))
}

const proxy = {
  'GET /api/information/theoryLearningStatistics' : tableData,
}

export default delay(proxy, 1000)

export async function queryTableData () {
  return request('/api/information/theoryLearningStatistics')
}