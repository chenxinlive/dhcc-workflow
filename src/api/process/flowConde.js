import request from '@/utils/request';

// 获取方向条件设置
export function getFlowCond(id) {
  const queryParams={
    id
  }
  return request({
    url: '/flowCond/getFlowCond',
    method: 'get',
    params: queryParams
  });
}
// 设置方向条件
export function setFlowCond(queryParams) {
  return request({
    url: '/flowCond/setFlowCond',
    method: 'post',
    data: queryParams
  });
}
// 删除方向条件
export function deleteFlowCond(queryParams) {
  return request({
    url: '/flowCond/deleteFlowCond',
    method: 'post',
    data: queryParams
  });
}
