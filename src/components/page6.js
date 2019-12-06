import React, { Component } from 'react';
import { ButtonBack, Dot } from 'pure-react-carousel';

// 연락처
class Page6 extends Component {
  render() {
    return (
      <div className="page-6">
        <ButtonBack className="to-top">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="page-6-content">
         
            <h1 className="h1-p6">더 알아보기</h1>
            <p><span className="fa fa-envelope" aria-hidden="true"></span> <a className="email" href="mailto:jhxxx7@gmail.com"> jhxxx7@gmail.com</a></p>
            <p><span className="fa fa-window-restore" aria-hidden="true"></span> <a className="email"  href="https://hwan97.github.io/Vue-PF/"> 예전 작업물 (2018)</a></p>
            <p className="more-contact"> 연락주시면 상세한 이력서 보내드리겠습니다.<br /> 당신과 함께 성장하고 싶습니다.</p>
            <p><a className="btn btn-dark btn-sm" href="https://docs.google.com/document/d/1SixjoX73MAMWlnFmKDF8cvDJsV1SYHnDsg3RC1xpwr0/edit#heading=h.x8fm1uorkbaw" role="button" target="_blank">
              <span className=" fa fa-file-text" aria-hidden="true"></span>
              &nbsp; Resume</a></p>            
            <img src="../img/FireShot Capture 010 - 오늘뭐먹지! - todayeat.kro.kr.png" alt=""/>
          </div>
        </div>
        <Dot slide={0} className="to-first">
          <span className="touch-guide">처음 페이지로</span>
          <br />
          <span className="fa fa-step-backward" aria-hidden="true"></span>
        </Dot>
      </div>
    );
  }
}

export default Page6;
