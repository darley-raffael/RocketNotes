import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 10px;
    margin-bottom: 16px;

    >h1{
        flex: 1;
        text-align: left;
        
    }
`