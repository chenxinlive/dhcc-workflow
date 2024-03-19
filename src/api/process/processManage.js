import request from '@/utils/request';

//获取所有启动的流程实例补充参数
export function getManageParams(business_key,proce_inst_id) {
  const queryParams={
    business_key_:business_key,
    proc_inst_id_:proce_inst_id
  }
  return request({
    url: '/processManage/getManageParams',
    method: 'post',
    data: queryParams
  });
}
//获取我发起的流程列表
export function getMyStartListPage(queryParams) {
  return request({
    url: '/processManage/getMyStartListPage',
    method: 'post',
    data: queryParams
  });
}
//获取我审核的流程列表
export function getMyProcessPage(queryParams) {
  return request({
    url: '/processManage/getMyProcessPage',
    method: 'post',
    data: queryParams
  });
}
