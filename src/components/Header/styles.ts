import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            width: 3rem;
            height: 3rem;

            display: flex;
            justify-content: center;
            align-items:center;
            color: ${props => props.theme["gray-100"]};
            
            /*
            Estilização para evitar movimentação dos ícones quando Hover que adiciona bordas, ser acionado.
            A borda no topo serve para deixar proporcional e não quebrar o alinhamento
            */
            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;

            &:hover {
                border-bottom: 3px solid ${props => props.theme["green-500"]};
            }
            
            /* 
                Ao utilizar o componente NavLink, quando clicamos na áncora, ele adiciona uma classe
                chamada Active, então podemos utiliza-la para dar uma cor específica ao elemento ativo.
            */
            &.active {
                color: ${props => props.theme["green-500"]};
            } 
        }
    }
`