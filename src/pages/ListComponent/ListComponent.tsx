import React from 'react';
import { Spin, Table } from 'antd';
import { connect } from 'dva';

@connect(({ table }) => ({ table }))

class ListComponent extends React.Component {

  componentDidMount () {
    const { dispatch } = this.props
    dispatch({
      type: 'table/queryTableDatas'
    })
  }

  render () {
    const { loading, tableData } = this.props.table
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '描述',
        dataIndex: 'msg',
      },
      {
        title: '日期',
        dataIndex: 'date',
      },
      {
        title: '序号',
        dataIndex: 'number',
      },
      {
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: () => <p> <a> 删除 </a> | <a> 编辑 </a> </p>,
      },
    ]
    return (
      <div>
        <Spin  spinning={loading}>
          <Table columns={columns} dataSource={tableData}/>
        </Spin>
      </div>
    )
  }
}

export default ListComponent
