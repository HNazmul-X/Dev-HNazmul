import styled from "styled-components";



 const ThemeButton = styled.button`
 
    background:goldenrod;

 `

 const ThemeSpan = styled.span`
    color:goldenrod;
    margin:0px;
 `
 const ThemeP = styled.span`
    color:goldenrod;
    margin:0px;
 `
 const ThemeA = styled.span`
    color:goldenrod;
    margin:0px;
    &:hover{
        text-decoration:underline;
    }
 `



export {ThemeButton, ThemeA, ThemeP}