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
            <h2 className="project-title">Aceone,Reker</h2>
            <h4 className="sub-title">회사 웹페이지, 신규 사업 웹 제작</h4>
          </div>
          <div className="content-wrapper row">
            <div className="col-md-6 video-wrapper">
            <div className="embed-responsive media">
            <Carousel interval={1000000}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/ace1.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/ace2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/reker1.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="./img/reker2.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel> 
              </div>
              <div className="btn-wrapper">
                <div className="btn-group" role="group" aria-label="button group">                  
                 <form action="https://github.com/hwan97/Ace" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-github" aria-hidden="true"></span>
                      &nbsp;Github
                  </button>
                  </form>
                  <form action="http://aceones.kr/" target="_blank">
                    <button type="submit" className="btn btn-info-link btn-outline-secondary">
                      <span className="fa fa-globe" aria-hidden="true"></span>
                      &nbsp;Web Site
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
                  &nbsp; 현재 재직중인 에이스원이라는 회사에서 파트타임으로 근무중 회사 홈페이지 구축<br/>
                  <i className="fa fa-angle-right"></i>&nbsp; 신사업 Reker 워드프레스로 구축, 특허 출원 알고리즘, 투자유치를 위한 PPT제작, 자료조사 
                  </p>
                </li>
                <li className="info-list">
                  <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 주요 역할</h5>
                  <ul className="content-text-wil">
                    <li className="fa fa-check" aria-hidden="true"> Js, jQuery 활용</li><br />
                    <li className="fa fa-check" aria-hidden="true"> BootStrap, Scss를 이용한 디자인</li><br />
                    <li className="fa fa-check" aria-hidden="true"> PHP 메일 템플릿 을 이용한 메일 문의 </li><br />
                    <li className="fa fa-check" aria-hidden="true"> WordPress 이용한 채용사이트 </li><br />
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
