import request from '@/utils/request';
// 获取字典列表
export function getDictList(queryParams) {
  return request({
    url: '/dicts/dictDataList',
    method: 'post',
    data: queryParams
  });
}
// 获取字典数据
export async function getDictDatas(dictNo) {
  const queryParams={
    dictTypeNo: dictNo
  };
  return request({
    url: '/dicts/getDictDatas',
    method: 'get',
    params: queryParams
  });
}
// 获取字典列表
export function addDict(queryParams) {
  return request({
    url: '/api/dicts/addDict',
    method: 'post',
    data: queryParams
  });
}
// 获取字典列表
export function updateDict(queryParams) {
  return request({
    url: '/api/dicts/updateDict',
    method: 'post',
    data: queryParams
  });
}
// 获取字典列表
export function deleteDict(queryParams) {
  return request({
    url: '/api/dicts/deleteDict',
    method: 'post',
    data: queryParams
  });
}
