import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

class Page3 extends Component {
  render() {
    return (
      <div className="page-3">
        <ButtonBack className="to-top-project">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="title-wrapper">
            <h2 className="project-title-p3">TodayEat</h2>
            <h4 className="sub-title">음식 메뉴 고르기</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 video-wrapper">
              <div className="embed-responsive embed-responsive-16by9 media">
                <iframe title="project1" className="embed-responsive-item project-video" src="https://www.youtube.com/embed/gty0xzSBzRk" frameBorder="0" gesture="media" allowFullScreen />
              </div>
              <div className="btn-wrapper">
                <div className="btn-group" role="group" aria-label="button group">
                  <form action="https://github.com/realkth/Bond" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp;Github
                  </button>
                  </form>
                  <form action="http://bond.thekym.com" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-globe" aria-hidden="true"></span>
                      &nbsp;Web Site
                  </button>
                  </form>                  
                  <form action="https://youtu.be/gty0xzSBzRk" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-youtube-play" aria-hidden="true"></span>
                      &nbsp;Youtube
                  </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="info">
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 개요</h5>
                  <p className="content-text-summary fa fa-angle-right" aria-hidden="true">
                     &nbsp; 점심 메뉴를 3가지 게임으로 쉽게 고르고 메뉴를 저장 할 수 있는 서비스입니다.
                   </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span>작업사항</h5>
                  <ul className="content-text-wil">
                    <li className="fa fa-check" aria-hidden="true"> Node.js와 MySql(Sequelize) 활용한 백엔드 작업</li><br />
                    <li className="fa fa-check" aria-hidden="true"> Passport와 KaKao Api 를 이용한 회원 관리</li><br />
                    <li className="fa fa-check" aria-hidden="true"> Ejs와 Sass를 이용한 프론트엔드 작업</li><br />
                    <li className="fa fa-check" aria-hidden="true"> 깃헙 프로젝트, 배포전 보안 </li>
                  </ul>
                </li>
                <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 활용 기술</h5>
                <p className="content-text-stacks fa fa-angle-right" aria-hidden="true"> <code>Node.js</code> <code>Express</code> <code>Ejs</code> <code>Mysql</code> <code>Sass</code> 
                </p>
              </ul>
            </div>
          </div>
        </div>
        <ButtonNext className="to-bottom-project">
          <span className="fa fa-angle-double-down" aria-hidden="true"></span>
        </ButtonNext>
      </div>
    );
  }
}

export default Page3;
