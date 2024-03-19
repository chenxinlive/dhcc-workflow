import request from '@/utils/request';

// 获取流程部署列表
export function processList(queryParams) {
  return request({
    url: '/deployment/getDeployment',
    method: 'post',
    data: queryParams
  });
}

// 获取流程属性
export function processProperties(queryParams) {
  return request({
    url: '/deployment/processProperties',
    method: 'get',
    params: queryParams
  });
}
// 更新流程属性
export function saveProcessProperties(queryParams) {
  return request({
    url: '/deployment/saveProcessProperties',
    method: 'post',
    data: queryParams
  });
}
// 获取节点属性
export function userTaskProperties(queryParams) {
  return request({
    url: '/deployment/userTaskProperties',
    method: 'get',
    params: queryParams
  });
}
// 更新节点属性
export function saveUserTaskProperties(queryParams) {
  return request({
    url: '/deployment/saveUserTaskProperties',
    method: 'post',
    data: queryParams
  });
}
// 删除流程
export function delDefinition(queryParams) {
  return request({
    url: '/deployment/delDefinition',
    method: 'get',
    params: queryParams
  });
}
