import styled from '@emotion/styled';

const HeaderTemplate = styled.header`
  display: flex;
  width: 100%;
  height: 63px;
  background-color: #fff;
  padding: 0px 1.5rem;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 0.5rem 0px;
  border-bottom: 1px solid rgb(240, 241, 243);
`;
const LogoImg = styled.img`
  display: block;
  box-sizing: border-box;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`;

const Header = (): JSX.Element => {
  return (
    <HeaderTemplate className="header">
      <a href="/">
        <LogoImg
          src="academy.png"
          alt="eliceAcademy"
          width="auto"
          height="100%"
        />
      </a>
    </HeaderTemplate>
  );
};

export default Header;
