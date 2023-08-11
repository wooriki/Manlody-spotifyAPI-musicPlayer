import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap");
    html,body{
        font-family: "Libre Franklin", sans-serif;
        
        // background-color:gray;
        z-index:-99;
        background-image: url('/test_wallpaper.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    body {
        min-height: 1000px;
    }

    h1,h2,h3,h4,h5,p{
        color:white;
    }

    button{
        color:gray;
        border:none;
        background-color:transparent;
        &:hover {
            // background-color: rgba(128, 128, 128, 0.1);
            color: rgba(128, 128, 128, 0.6);
        }

    input{
        border: none;
    }
`;
export default GlobalStyle;
