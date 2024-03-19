import request from '@/utils/request';
// 获取全部分组信息
export function getGroupList(data) {
  return request({
    url: '/orgm/getGroupList',
    method: 'post',
    data:data
  });
}
// 获取分组中的人员
export function getUserByGorupId(data) {
  return request({
    url: '/orgm/getUserByGorupId',
    method: 'post',
    data: data
  });
}
// 增加分组
export function addGroup(data) {
  return request({
    url: '/orgm/addGroup',
    method: 'post',
    data: data
  });
}
// 更新分组
export function updataGroup(data) {
  return request({
    url: '/orgm/updataGroup',
    method: 'post',
    data: data
  });
}
// 删除分组
export function deleteGroup(data) {
  return request({
    url: '/orgm/deleteGroup',
    method: 'post',
    data: data
  });
}
// 增加分组人员
export function addUserGroup(data) {
  return request({
    url: '/orgm/addUserGroup',
    method: 'post',
    data: data
  });
}
// 删除分组人员
export function deleteUserGroup(username,groupid) {
  var data={
    username:username,
    groupid:groupid
  };
  return request({
    url: '/orgm/deleteUserGroup',
    method: 'get',
    params: data
  });
}
