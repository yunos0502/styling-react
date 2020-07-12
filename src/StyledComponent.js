import React from "react";
// 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는
// css를 불러와야 한다.
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

// size 객체에 따라 자동으로 media 쿼리 함수를 만들어 준다.
// 참고: https://styled-components.com/docs/advanced
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// Tagged 템플릿 리터럴: 백틱(`)을 사용하여 만든 문법으로
// 자바스크립트 객체나 함수를 전달할 때 온전히 추출이 가능하다.
const Box = styled.div`
  /* props로 넣어준 값을 직접 전달해 줄 수 있다 */
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  /* @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  } */
  ${media.desktop`width: 768px`}
  ${media.tablet`width: 100%`};
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* inverted 값이 true일 때 특정 스타일을 부여 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;
