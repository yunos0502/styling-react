import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSModule.module.scss";

// 미리 styles에서 클래스를 받아오도록 설정하고
const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    // classnames 라이브러리 사용 예
    <div className={cx("wrapper", "inverted")}>
      {/* css module + 백틱 사용 예 */}
      {/* <div className={`${styles.wrapper} ${styles.inverted}`}> */}
      {/* 백틱 문자열을 사용하고 싶지 않은 경우 아래와 같이 작성 가능 */}
      {/* <div className={[styles.wrapper, styles.inverted].join(' ')}> */}
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
