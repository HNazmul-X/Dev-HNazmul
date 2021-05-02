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

 const TitleDesc = styled.h2`
 
   position:relative;
   display:inline-block;
   &:hover{
      &::after{
         right:-20px;
         background:#7777c2;
      }
   }
   &::after{
      position:absolute;
      transition:0.3s;
      content:"";
      width:100%;
      height:10px;
      bottom:-10px;
      right:0px;
      background:goldenrod;
      border-radius:20px;
   }
 
 `



export {ThemeButton, ThemeA, ThemeP,ThemeSpan, TitleDesc}