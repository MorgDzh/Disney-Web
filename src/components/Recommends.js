import React from "react";
import styled from "styled-components";

const Recommends = () => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
`;

export default Recommends;
