import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed; // 항상 떠있도록
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem; // 하단 콘텐츠와 겹침 방지
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            Reacters
          </Link>
          <div className="right">
            <Button to="/login">로그인</Button>
          </div>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
