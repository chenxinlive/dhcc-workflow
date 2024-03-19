import request from '@/utils/request';

// 获取流程发起列表的方法
export function getStartList() {
  return request({
    url: '/deployment/getSatrtPageData',
    method: 'get'
  });
}

// 获取流程待办列表
export function getTodoList(queryParams) {
  return request({
    url: '/task/getTodoList',
    method: 'get',
    params: queryParams
  });
}

// 获取流程已审列表
export function taskDoneQuery(queryParams) {
  return request({
    url: '/task/getHistoricTaskInstance',
    method: 'get',
    params: queryParams
  });
}

// 获取流程表单JSON的方法
export function getHisFormJson(procKey, taskid) {
  const data = {
    processkey:procKey,
    taskid:taskid
  };
  return request({
    url: '/task/getHisFormJson',
    method: 'post',
    data: data
  });
}

/**
 * 获取流程图
 * @param processInstanceId
 * @param porcessKey
 * @returns {*}
 */
export function getTrackPic(processInstanceId, porcessKey) {
  //不想修改ruoyi的tansParams参数方法，直接拼接，避免空参数无法传递
  return request({
    url: '/task/getTrack?processInstanceId='+processInstanceId+'&porcessKey='+porcessKey,
    method: 'get',
    responseType: 'blob'
  });
}
// 启动/发起/提交流程
export function startProcess(procKey, procName, businessKey) {
  const data={
    processKey:procKey,
    processName:procName,
    businessKey:businessKey
  }
  return request({
    url: '/task/startProcess',
    method: 'post',
    data: data
  });
}

// 发送方法
export function sendWork(approval) {
  return request({
    url: '/task/sendWork',
    method: 'post',
    data: approval
  });
}
// 驳回
export function returnWork(processInstanceId, taskid, returnToTaskKey, returnWay, returnMsg) {
  const data = {
    proc_inst_id:processInstanceId,
    taskid:taskid,
    returnTo_act_id:returnToTaskKey,
    return_msg:returnMsg
  };
  return request({
    url: '/task/returnWork',
    method: 'post',
    data: data
  });
}
// 移交
export function transfer(processInstanceId, taskid, msg, toUser) {
  const data = {
    proc_inst_id:processInstanceId,
    taskid:taskid,
    msg:msg,
    toUser:toUser
  };
  return request({
    url: '/task/transfer',
    method: 'post',
    data: data
  });
}
//批量移交
export function transferBatch(msg, toUser,selectData) {
  const data = {
    toUser:toUser,
    taskParams:selectData,
    msg:msg
  };
  return request({
    url: '/task/transferBatch',
    method: 'post',
    data: data
  });
}
// 加签
export function countersign(processInstanceId, taskid, msg, toUser) {
  const data = {
    proc_inst_id:processInstanceId,
    taskid:taskid,
    msg:msg,
    toUser:toUser
  };
  return request({
    url: '/task/countersign',
    method: 'post',
    data: data
  });
}
// 拒绝
export function refuse(processInstanceId, taskid, msg) {
  const data = {
    proc_inst_id:processInstanceId,
    taskid:taskid,
    msg:msg
  };
  return request({
    url: '/task/refuse',
    method: 'post',
    data: data
  });
}
// 手动结束
export function setEndTask(processInstanceId, taskid, msg) {
  const data = {
    proc_inst_id:processInstanceId,
    taskid:taskid,
    msg:msg
  };
  return request({
    url: '/task/setEndTask',
    method: 'post',
    data: data
  });
}
//批量结束
export function setEndTaskBatch(selectData, msg) {
  const data = {
    taskParams:selectData,
    msg:msg
  };
  return request({
    url: '/task/setEndTaskBatch',
    method: 'post',
    data: data
  });
}
// 删除流程实例
export function deleteProcInst(processInstanceId, taskid, msg) {
  const data = {
    proc_inst_id:processInstanceId,
    taskid:taskid,
    msg:msg
  };
  return request({
    url: '/api/task/deleteProcInst',
    method: 'post',
    data: data
  });
}
