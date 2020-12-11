// 搜索按钮块

import React, { Fragment } from 'react';
import "./searchIconBlock.scss";
import { Link } from 'react-router-dom';

class SearchBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typesOpen: true,
      menuOpen: false,
      searchTypes: true,
      inputRef: React.createRef()
    }
    // this.inputRef = React.createRef();
    this.typesOpenChange = this.typesOpenChange.bind(this);
    this.menuOpenChange = this.menuOpenChange.bind(this);
    this.menuSwitch = this.menuSwitch.bind(this);
  }

  typesOpenChange = () => {
    this.setState({
      typesOpen: !this.state.typesOpen
    });
    if (this.state.typesOpen) {
      setTimeout(() => {this.state.inputRef.current.focus();}, 500);
    }
  }

  menuOpenChange = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  menuSwitch = () => {
    this.setState({
      searchTypes: !this.state.searchTypes,
      menuOpen: false,
    });
  }

  render() {
    return <Fragment>
      {
        this.state.typesOpen ?
        /* 默认-显示状态 */
        <div className={this.props.className === undefined ? "search-icon-block-01" : this.props.className + " search-icon-block-01"}>
          <svg className="icon-search" onClick={this.typesOpenChange} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7139"><path d="M510.501463 110.891707c220.706466 0 399.609756 178.919274 399.609757 399.609756 0 97.397885-34.845971 186.659715-92.751423 255.996004L952.721608 901.859278a7.992195 7.992195 0 0 1 0 11.302962l-39.559368 39.559368a7.992195 7.992195 0 0 1-11.302962 0L766.497467 817.359797C697.163177 875.26425 607.902345 910.11122 510.501463 910.11122c-220.706466 0-399.609756-178.919274-399.609756-399.609757s178.90329-399.609756 399.609756-399.609756z m0 71.929756c-180.974267 0-327.68 146.709729-327.68 327.68s146.705733 327.68 327.68 327.68 327.68-146.709729 327.68-327.68-146.705733-327.68-327.68-327.68z" p-id="7140"></path></svg>
        </div>
        :
        /* 搜索-显示状态 */
        <div className={this.props.className === undefined ? "search-icon-block-02" : this.props.className + " search-icon-block-02"}>
          <div className="search-types-02">
            <div className="return-but" onClick={this.typesOpenChange}><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5827"><path d="M290.89 483.13c8.41-0.05 16.49 3.25 22.47 9.18L756.31 935.26c12.41 12.41 12.41 32.52 0 44.93-12.41 12.4-32.52 12.4-44.93 0l-442.96-442.96a31.64 31.64 0 0 1-9.36-22.46c0-8.44 3.38-16.53 9.36-22.46a31.636 31.636 0 0 1 22.47-9.18z m0 0" p-id="5828"></path><path d="M733.85000001 40.18c8.41-0.05 16.49 3.25 22.45999999 9.17a31.657 31.657 0 0 1 9.35999999 22.46c0 8.44-3.37 16.53-9.35999999 22.46L313.36 537.24c-12.41 12.4-32.52 12.4-44.93 0-12.41-12.4-12.41-32.52 0-44.93l442.96-442.96000001a31.594 31.594 0 0 1 22.46000001-9.16999999z m0 0" p-id="5829"></path></svg></div>
            <div className="search-input-box">
              <div className="menu-box">
                <div className="title" onClick={this.menuOpenChange}>
                  {this.state.searchTypes ? "商品" : "店铺"}<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6049"><path d="M153.269 351.452l362.024 362.02400001 360.927-360.92700001Z" p-id="6050"></path></svg>
                </div>
                {
                  this.state.menuOpen ?
                  <div className="menu">
                    <span onClick={this.menuSwitch}>商品</span>
                    <span onClick={this.menuSwitch}>店铺</span>
                  </div>
                  :
                  ""
                }
              </div>
              <input ref={this.state.inputRef} className="input-box" type="text" placeholder="高音质蓝牙耳机"  />
              <svg className="icon-scan-code" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="50627"><path d="M521.537 272.061c-143.483 0-259.913 116.37-259.913 259.913s116.43 259.913 259.913 259.913c143.603 0 259.973-116.37 259.973-259.913S665.14 272.061 521.537 272.061z m0 439.928c-106.412 0-179.954-73.6-179.954-179.954 0-106.473 73.54-179.954 179.954-179.954 106.473 0 179.954 73.482 179.954 179.954 0 106.352-73.421 179.954-179.954 179.954zM783.191 194.561c0-6.417-41.69-102.454-166.878-102.454H407.687c-122.608 0-166.936 96.455-166.936 102.454-61.245 0-208.627 62.684-208.627 204.788v348.21c0 45.408 20.874 184.333 187.753 184.333h584.189c166.936 0 187.811-138.684 187.811-184.333v-348.21c0-144.683-144.744-204.788-208.686-204.788z m128.727 540.462c0 70.001-26.753 113.731-97.295 116.851-1.98 0.061-603.324 0.061-605.244 0-70.661-3.059-97.236-46.728-97.236-116.851V416.385c0-84.999 67.544-138.085 151.28-138.085 26.993 0 32.452-21.234 32.452-21.234s28.372-84.999 151.28-84.999h129.686c140.544 0 151.28 84.999 151.28 84.999s6.778 21.234 32.392 21.234c85.179 0 151.341 53.087 151.341 138.085v318.638zM791.887 392.031c0 22.097 17.912 40.009 40.009 40.009s40.009-17.912 40.009-40.009-17.912-40.009-40.009-40.009-40.009 17.912-40.009 40.009z" p-id="50628"></path></svg>
            </div>
            <div className="search-but">搜索</div>
          </div>
          {/* 最近搜索 */}
          <div className="search-keyword">
            <div className="title-box">
              <div className="title"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6943"><path d="M511.2153125 62.065625c-247.84125 0-448.7596875 200.919375-448.7596875 448.76625 0 247.84125 200.919375 448.7596875 448.7596875 448.7596875 247.846875 0 448.76625-200.919375 448.76625-448.7596875 0-247.846875-200.919375-448.76625-448.76625-448.76625z m222.80625 671.5659375a26.2640625 26.2640625 0 0 1-18.6253125 7.7184375 26.2621875 26.2621875 0 0 1-18.63-7.7184375L484.8790625 521.73875V253.7721875c0-14.5584375 11.803125-26.3484375 26.341875-26.3484375 14.5453125 0 26.3484375 11.7909375 26.3484375 26.3484375v246.151875l196.4521875 196.4521875c10.2890625 10.2778125 10.2890625 26.9709375 0 37.25625z" fill="" p-id="6944"></path></svg>最近搜索</div>
              <div className="but"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8102"><path d="M941.056 159.744H704.512V76.8c0-45.056-38.4-76.8-76.8-76.8H390.144c-38.4 0-76.8 38.4-76.8 76.8v76.8H76.8c-25.6 0-38.4 12.8-38.4 38.4s12.8 38.4 38.4 38.4h38.4v710.656c0 44.544 38.4 76.8 76.8 76.8h627.2c45.056 0 76.8-38.4 76.8-76.8v-704h38.4c25.6 0 38.4-12.8 38.4-38.4 12.8-25.6-6.144-38.4-31.744-38.912zM390.144 76.8h236.544v76.8H390.144V76.8zM198.656 941.056V236.544h627.2V947.2h-627.2v-6.144zM627.2 396.8c-25.6 0-38.4 12.8-38.4 38.4v313.344c0 25.6 12.8 38.4 38.4 38.4s38.4-12.8 38.4-38.4V435.2c0-25.6-12.8-38.4-38.4-38.4z m-237.056 0c-25.6 0-38.4 12.8-38.4 38.4v313.344c0 25.6 12.8 38.4 38.4 38.4s38.4-12.8 38.4-38.4V435.2c6.656-25.6-12.8-38.4-38.4-38.4z" p-id="8103"></path></svg></div>
            </div>
            <div className="search-box">
              <Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link>
              <div className="more-but">更多<svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8502"><path d="M153.269 351.452l362.024 362.02400001 360.927-360.92700001Z" p-id="8503"></path></svg></div>
            </div>
          </div>
          {/* 搜索发现 */}
          <div className="search-keyword">
            <div className="title-box">
              <div className="title"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12250"><path d="M512 469.2c-24.3 0-42.9 18.7-42.9 42.9-0.1 24.3 18.5 42.9 42.9 42.9 22.8 0 42.9-18.7 42.9-42.9-0.1-24.3-20.3-42.9-42.9-42.9z m0 0M901.6 347.4c-21.4-50.5-51.8-95.6-90.6-134.4-38.8-38.8-84.1-69.4-134.4-90.6-52.3-21.9-107.7-33.2-164.6-33.2-57.1 0-112.4 11.2-164.6 33.2-50.4 21.4-95.6 51.9-134.3 90.5-38.8 38.9-69.4 84.1-90.6 134.4-22 52.2-33.3 107.5-33.3 164.6 0 57.1 11.2 112.4 33.3 164.6 21.4 50.5 51.8 95.6 90.6 134.4 38.8 38.8 84 69.4 134.3 90.6 52.2 22 107.5 33.3 164.6 33.3 57 0 112.4-11.2 164.5-33.2 50.5-21.4 95.6-51.8 134.4-90.6 38.8-38.8 69.4-84.1 90.7-134.4 22-52.2 33.3-107.5 33.3-164.6-0.1-57.1-11.4-112.4-33.3-164.6z m-210.9 12.5L584.9 577.3c-2.8 4.3-5.8 8.6-10 10l-214.6 103c-2.8 1.4-5.8 2.8-8.6 2.8-5.8 0-11.5-1.4-15.8-5.8-7.2-5.7-8.6-15.7-4.3-24.3L436 444.2c1.4-4.3 5.8-8.6 10-10l216.1-101.5c8.5-4.3 18.6-2.9 24.4 4.3 7 7 8.5 17.1 4.2 22.9z m0 0" p-id="12251"></path></svg>搜索发现</div>
              <div className="but"><svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13001"><path d="M512 808.96c-138.24 0-266.24-51.2-363.52-148.48L5.12 512l158.72-158.72c194.56-194.56 506.88-194.56 701.44 0L1024 512l-148.48 148.48c-97.28 97.28-225.28 148.48-363.52 148.48zM76.8 512l112.64 112.64c87.04 87.04 204.8 133.12 322.56 133.12s240.64-46.08 322.56-133.12l112.64-112.64-122.88-122.88c-174.08-174.08-455.68-174.08-629.76 0L76.8 512zM645.12 419.84c5.12 5.12 5.12 15.36 5.12 25.6 0 35.84-30.72 66.56-66.56 66.56S512 481.28 512 445.44s30.72-66.56 66.56-66.56c10.24 0 15.36 0 25.6 5.12-25.6-20.48-56.32-30.72-92.16-30.72-87.04 0-158.72 71.68-158.72 158.72s71.68 158.72 158.72 158.72 158.72-71.68 158.72-158.72c0-35.84-10.24-66.56-25.6-92.16z" p-id="13002"></path></svg></div>
            </div>
            <div className="search-box">
              <Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link><Link to="/search-link">维生素</Link>
            </div>
          </div>
        </div>
      }
    </Fragment>;  
  }
}

export default SearchBlock;

