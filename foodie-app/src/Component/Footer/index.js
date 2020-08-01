import React from 'react';
import { Container, Container1, Container2, Wrapper, Row, Column, Link, Title } from './styles/Footer';

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper1 = function Footer1({ children, ...restProps }) {
  return <Container1 {...restProps}>{children}</Container1>;
}
Footer.Wrapper2 = function Footer1({ children, ...restProps }) {
  return <Container2 {...restProps}>{children}</Container2>;
}
Footer.Wrapper = function FooterWrapper({children, ...restProps}) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

