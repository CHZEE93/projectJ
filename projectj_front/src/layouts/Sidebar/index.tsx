import { useState } from "react";
import styled from "styled-components";
import { Menu, X, ListCheck, FolderKanban, BarChart3 } from "lucide-react";

const Container = styled.aside<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "220px" : "70px")};
  height: 100vh;
  background-color: #1e293b;
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease-in-out;
  padding-top: 20px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  display: flex;
  justify-content: center;
`;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container isOpen={isOpen}>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </ToggleButton>
      <MenuList>
        <MenuItem>
          <IconWrapper><ListCheck size={20} /></IconWrapper>
          {isOpen && "To-Do List"}
        </MenuItem>
        <MenuItem>
          <IconWrapper><FolderKanban size={20} /></IconWrapper>
          {isOpen && "WBS"}
        </MenuItem>
        <MenuItem>
          <IconWrapper><BarChart3 size={20} /></IconWrapper>
          {isOpen && "PMS"}
        </MenuItem>
      </MenuList>
    </Container>
  );
}
