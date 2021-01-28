// 管理操作块

import React from 'react';
import "./batchBlock.scss";
import { Checkbox } from 'zarm';


const BatchBlock = () => {
  return(<div className="batch-block">
    <Checkbox className="select-but">全选</Checkbox>
    <div className="delete-but">删除</div>
  </div>)
}

export default BatchBlock;