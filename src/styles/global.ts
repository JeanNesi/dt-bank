import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #F0F2F5;
    --shape: #FFFFFF;

    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E62E4D;

    --text-title: #363F5F;
    --text-body: #969CB3;
}
*{
margin: 0;
padding: 0;
box-sizing: border-box;

font-family: 'Poppins', sans-serif;
font-weight: 400;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%
    }
    @media (max-width: 720px) {
        font-size: 87.5%
    }
}

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button{
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background:  rgba(0,0,0,0.5);


    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--shape);
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;

    padding: 3rem;

    position: relative;
}

.closeButton{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;

    width: 14px;

    background: transparent;
    border: none;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.7)
    }
}

`