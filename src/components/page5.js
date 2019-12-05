import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import Carousel from 'react-bootstrap/Carousel'

// 프로젝트 내역
class Page5 extends Component {
  render() {
    return (
      <div className="page-4">
        <ButtonBack className="to-top-project">
          <span className="fa fa-angle-double-up" aria-hidden="true"></span>
        </ButtonBack>
        <div className="container-fluid">
          <div className="title-wrapper">
            <h2 className="project-title">마이노트</h2>
            <h4 className="sub-title">질문하고 답변받는 노트</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 video-wrapper">
            <div className="embed-responsive media">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/today1.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/today2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/today3.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel> 
              </div>
              <div className="btn-wrapper">
                <div className="btn-group" role="group" aria-label="button group">
                  {/* <form action="https://github.com/realkth/mood" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp;Github
                  </button>
                  </form> */}
                  <form action="http://aceones.kr/" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-globe" aria-hidden="true"></span>
                      &nbsp;Web Site
                  </button>
                  </form>
                  <form action="https://youtu.be/k8K98UBskyA" target="_blank">
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
                  &nbsp; 에이스원이라는 회사에서 파트타임으로 근무하면서 다양한 업무를 맡았었는데 회사 홈페이지 구축<br/>
                  &nbsp; &nbsp; 신사업 워드프레스로 개발 등 최근에는 React로 간단한 신사업 소개 페이지를 제작중입니다.
                  </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 주요 역할</h5>
                  <ul className="content-text-wil">
                    <li className="fa fa-check" aria-hidden="true"> Js, jQuery 활용</li><br />
                    <li className="fa fa-check" aria-hidden="true"> BootStrap, Scss를 이용한 디자인</li><br />
                    <li className="fa fa-check" aria-hidden="true"> WordPress 이용한 채용사이트 </li><br />
                    <li className="fa fa-check" aria-hidden="true"> PHP 메일 템플릿 을 이용한 메일 문의 </li>
                  </ul>
                </li>
                <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 활용 기술</h5>
                <p className="content-text-stacks fa fa-angle-right" aria-hidden="true"> <code>JS</code> <code>Scss</code> <code>WordPress</code> <code>Jqeury</code> <code>Bootstrap</code>
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

export default Page5;
