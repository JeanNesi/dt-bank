import styled from "styled-components";
import { darken } from 'polished'

export const Container = styled.form`
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 1rem;
        margin-top: 1rem;

        h1{
            font-size: 1.5rem;
            color: var(--text-title);
            margin-bottom: 1rem;
        }

        input{
            width: 100%;
            background: var(--background);
            border: 1.5px solid rgba(150, 156, 178, 0.2);
            border-radius: 5px;
            padding: 1.25rem 1.25rem 1.25rem 1.5rem;

            font-weight: 400;
            font-size: 1rem;

            &::placeholder{
                color: var(--text-body);
            } 
        }

        button[type="submit"] {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 4rem;
            margin-top: 0.5rem;

            color: var(--shape);
            font-size: 1rem;
            font-weight: 600;

            background: none;
            border: none;
            background: #33CC95;
            border-radius: 5px;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9)
            }
        }
`
export const TransactionTypeComponent = styled.div`
            width:  100%;
            display: flex;
            align-items: center;
            gap: 0.5rem;
`

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red'
}

const colors = {
    green: "rgba(18, 164, 84, 0.2)",
    red: "rgba(229, 46, 77, 0.2)"
}

export const RadioBox = styled.button<RadioBoxProps>`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 4rem;
                gap: 1.1rem;

                background: ${(props) => props.isActive 
                ?  colors[props.activeColor]
                    : 'transparent'
            };
                border: 1.5px solid rgba(150, 156, 178, 0.2);
                border-radius: 5px;

                transition: filter 0.2s;

                &:hover {
                    border-color: ${darken(1, 'rgba(150, 156, 178, 0.2)')}
                }
            
`