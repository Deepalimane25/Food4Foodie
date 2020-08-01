import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 0px;
  background: black;


  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container1 = styled.div`
  padding: 80px 80px;
  background: grey;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container2 = styled.div`
  padding: 10px 80px;
  background: black;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 2000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0px;
  padding: 0px 40px;
`;

export const Row = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: white;
  margin-top: 0px;
  margin-bottom: 8px;
  font-size: 17px;
  ${'' /* background: white; */}
  text-decoration: none;
  ${'' /* padding : 18px 20px; */}
  font-width: normal;

  &:hover {
      color: white;
      transition: 700ms ease-out;
      font-size: 18px;
      text-decoration: none;
  }
`;

export const Title = styled.p`
  font-size: 15px;
  color: grey;
  margin-bottom: 40px;
  font-weight: 600;
`;