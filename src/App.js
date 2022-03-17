import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  flex-direction: ${(props) => props.dr || "row"};
  align-items: center;
  justify-content: center;
`;

const TabBtn = styled.button`
  width: 300px;
  height: 25px;

  border: none;
  outline: none;
  background: ${(props) => (props.ac ? "red" : "none ac={active === 1}")};

  color: ${(props) => (props.ac ? "#fff" : "red")};

  border-top: 1px solid red;

  cursor: pointer;

  &:hover {
    color: #fff;
    background: red;
  }

  &.ls {
    border-bottom: 1px solid red;
  }
`;

const App = () => {
  //STATE
  const [active, setActive] = useState(1);

  //Handler
  const clickBtn = (value) => {
    setActive(value);
  };
  return (
    <Wrapper>
      <Wrapper dr="column">
        <TabBtn ac={active === 1} onClick={() => clickBtn(1)}>
          Tab - 1
        </TabBtn>
        <TabBtn ac={active === 2} onClick={() => clickBtn(2)}>
          Tab - 2
        </TabBtn>
        <TabBtn ac={active === 3} onClick={() => clickBtn(3)} class="ls">
          Tab - 3
        </TabBtn>
      </Wrapper>
      <Wrapper>
        {active === 1 ? "저는 1번쨰 tab입니다" : null}
        {active === 2 ? "저는 2번쨰 tab입니다" : null}
        {active === 3 ? "저는 3번쨰 tab입니다" : null}
      </Wrapper>
    </Wrapper>
  );
};

export default App;
