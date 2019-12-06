import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import Carousel from 'react-bootstrap/Carousel'


// 프로젝트 내역
class Page4 extends Component {
  render() {
    return (
      <div className="page-4">
        <ButtonBack className="to-top-project">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="title-wrapper">
            <h2 className="project-title">마이노트 (제작중) </h2>
            <h4 className="sub-title">질문하고 답변받는 노트</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 video-wrapper">
              <div className="embed-responsive media">
              <Carousel interval={1000000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/note1.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/note2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>                
              </Carousel> 
              </div>
              <div className="btn-wrapper">
                <div className="btn-group" role="group" aria-label="button group">
                  {/* <form action="https://github.com/hwan97/TodayEat" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp;Github
                  </button>
                  </form> */}
                  {/* <form action="https://.firebaseapp.com/" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-globe" aria-hidden="true"></span>
                      &nbsp;Web Site
                  </button>
                  </form>                   */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="info">
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 개요</h5>
                  <p className="content-text-summary fa fa-angle-right" aria-hidden="true"> 
                  &nbsp; 쿼라를 모티브한 서비스 입니다. 회원들 간의 질문을 하고 답변을 받거나 답변을 줄 수 있습니다. 
                  </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 주요 역할</h5>
                  <ul className="content-text-wil">
                    <li className="fa fa-check" aria-hidden="true"> React, Redux를 활용, JWT 회원 인증 작업</li><br />
                    <li className="fa fa-check" aria-hidden="true"> Axios를 이용한 데이터 통신</li><br />
                    <li className="fa fa-check" aria-hidden="true"> MongoDB, koa 활용 </li><br />
                    <li className="fa fa-check" aria-hidden="true"> 깃헙 프로젝트 </li>
                  </ul>
                </li>
                <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 활용 기술</h5>
                <p className="content-text-stacks fa fa-angle-right" aria-hidden="true"> <code>React</code> <code>Redux</code> <code>Axios</code> <code>MongoDB</code> <code>koa</code>
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

export default Page4;
