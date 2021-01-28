// 管理操作块

import React from 'react';
import "./batchBlock.scss";
import { Checkbox } from 'zarm';
import PropTypes from 'prop-types';

const BatchBlock = (props) => {
  return(<div className="batch-block" style={{marginBottom: props.openState ? "0vw" : "-15vw"}}>
    <Checkbox className="select-but">全选所有记录</Checkbox>
    <div className="delete-but">删除</div>
  </div>)
}

BatchBlock.propTypes = {
  openState: PropTypes.bool
};

// 指定 props 的默认值：
BatchBlock.defaultProps = {
  openState: false
};

export default BatchBlock;