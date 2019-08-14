import { delay } from 'roadhog-api-doc' // 模拟网络延迟
import request from './request'

const systemSetting = (req, res) => {
  res.send(
    {
      children: [{
        id: 11,
        name: '武器使用规范',
        enName: 'Basic Table',
        url: '/content',
      }, {
        id: 12,
        name: '警械使用',
        enName: 'Basic Table',
        url: '/student',
      }],
    }
  )
}



const proxy = {
  'GET /api/systemSetting/systemSetting': systemSetting
}

export default delay(proxy, 100)

export async function queryRoute () {
  return request('/api/systemSetting/systemSetting') 
}
