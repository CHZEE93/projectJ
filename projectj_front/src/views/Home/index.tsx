import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Content = styled.section`
    flex: 1;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
    list-style: none; 
    padding: 0;
    margin: 0;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    margin-bottom: 8px;
    background: #f3f3f3;
    border-radius: 6px;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: #e0e0e0;
    }

    &::before {
        content: "✔️"; /* 체크 아이콘 */
        font-size: 1.2em;
        color: #4caf50;
    }
`

export type DatePiece = Date | null;
export type SelectedDate = DatePiece | [DatePiece, DatePiece];

export default function Home() {

    // 달력 날짜 state
    const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());

    return(
    <>
    <Container/>
        {/* 1번 구간 - 달력 */}
        <Content>
            <h2>📅 달력</h2>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Calendar onChange={setSelectedDate} value={selectedDate} locale="en-US"  />
            </div>
        </Content>

        {/* 2번 구간 - 오늘 할 일 */}
        <Content>
        <h2>✅ 오늘 할 일</h2>
        <List>
            <ListItem>할 일 1</ListItem>
            <ListItem>할 일 2</ListItem>
        </List>
        </Content>

        {/* 3번 구간 - 금주 예정 사항 */}
        <Content>
        <h2>📌 금주 예정 사항</h2>
        <List>
            <ListItem>예정 사항 1</ListItem>
            <ListItem>예정 사항 2</ListItem>
        </List>
        </Content>
    <Container/>
    </>
    );
}