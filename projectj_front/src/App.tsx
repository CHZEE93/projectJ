
import styled from 'styled-components';
import './App.css';

const MainHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e293b;
  color: white;
  padding: 10px 20px;
`;

const SideBar= styled.aside`
  width: 250px;
  height: 100vh;
  background: #334155;
  color: white;
  padding: 15px;
  transition: width 0.3s ease;
`;

const SideBarButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;

const SideBarMenu = styled.nav`
  margin-top: 20px;
`
const SideBarMenuItem = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #475569;
  }
`;

function App() {
  return (
    <>
      <MainHead><h3>Project Manager</h3></MainHead>
      <SideBar>
        <SideBarButton>X</SideBarButton>
        <SideBarMenu>
          <SideBarMenuItem>
            TEST
          </SideBarMenuItem>
          <SideBarMenuItem>
            TEST2
          </SideBarMenuItem>
        </SideBarMenu>
      </SideBar>
    </>
  );
}

export default App;
