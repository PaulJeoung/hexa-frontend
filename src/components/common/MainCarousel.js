import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import { Container, Button } from "react-bootstrap";
import "./Slider.css";

const MainCarousel = () => {


  const [activeIndex, setActiveIndex] = useState(0); // 기본 활성 슬라이드 인덱스
    const totalSlides = 8;
    const intervalRef = useRef(null);
  
    const slideData = [
      { title: "슬라이드 1 타이틀", subtitle: "슬라이드 1 부제", image: "./images/raw1.jpg" },
      { title: "슬라이드 2 타이틀", subtitle: "슬라이드 2 부제", image: "./images/raw2.jpg" },
      { title: "슬라이드 3 타이틀", subtitle: "슬라이드 3 부제", image: "./images/raw3.jpg" },
      { title: "슬라이드 4 타이틀", subtitle: "슬라이드 4 부제", image: "./images/raw4.jpg" },
      { title: "슬라이드 5 타이틀", subtitle: "슬라이드 5 부제", image: "./images/raw5.jpg" },
      { title: "슬라이드 6 타이틀", subtitle: "슬라이드 6 부제", image: "./images/raw6.jpg" },
      { title: "슬라이드 7 타이틀", subtitle: "슬라이드 7 부제", image: "./images/raw3.jpg" },
      { title: "슬라이드 8 타이틀", subtitle: "슬라이드 8 부제", image: "./images/raw5.jpg" },
    ];
  
    const updateSlides = (newIndex) => {
      if (newIndex < 0) {
        newIndex = totalSlides - 1;
      } else if (newIndex >= totalSlides) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
    };
  
    const handleLeftArrowClick = () => {
      updateSlides(activeIndex - 1);
      resetAutoSlide();
    };
  
    const handleRightArrowClick = () => {
      updateSlides(activeIndex + 1);
      resetAutoSlide();
    };
  
    const handleDotClick = (index) => {
      setActiveIndex(index);
      resetAutoSlide();
    };
  
    // 자동 슬라이드 전환 시작
    const startAutoSlide = useCallback(() => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides); // 다음 슬라이드로 이동
      }, 10000); 
    }, [totalSlides]);
  
    // 자동 슬라이드 타이머 초기화
    const resetAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      startAutoSlide();
    };
  
    // 컴포넌트가 마운트되면 자동 슬라이드 시작
    useEffect(() => {
      startAutoSlide();
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [startAutoSlide]);
  
    const getClassName = (index) => {
      const diff = index - activeIndex;
      if (diff === -2 || diff === totalSlides - 2) return "prev-2";
      if (diff === -1 || diff === totalSlides - 1) return "prev-1";
      if (diff === 0) return "active";
      if (diff === 1 || diff === -(totalSlides - 1)) return "next-1";
      if (diff === 2 || diff === -(totalSlides - 2)) return "next-2";
      return "";
    };
  
    return (
      <div className="slider-container">
          <span className = "arrow-left-center" onClick={handleLeftArrowClick}/>
          <span className = "arrow-right-center" onClick={handleRightArrowClick}/>
          <span className="arrow-left" onClick={handleLeftArrowClick}>
            <ArrowLeftShort size={28} color="gray" />
          </span>
          <span className="arrow-right" onClick={handleRightArrowClick}>
            <ArrowRightShort size={28} color="gray" />
          </span>
          <div className="slider">
            {Array.from({ length: totalSlides }, (_, index) => (
              <div key={index} className={`slide ${getClassName(index)}`}/>
            ))}
          </div>
          <div className="dots">
            {Array.from({ length: totalSlides }, (_, index) => (
              <span
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
        </div>
        <Container className="text-center">
              <h5 id="GmarketSans">{slideData[activeIndex].title}</h5>
              <p id="GmarketSans" >{slideData[activeIndex].subtitle}</p>
          <Button className="m-3 rounded-pill custom-btn-1">
            알아보기
          </Button>
          <Button className="m-3 rounded-pill custom-btn-2">
            구매하기
          </Button>
          <div><img src="./images/raw5.jpg" alt="이미지" /></div>
      </Container>
      </div>
    );
};

export default MainCarousel