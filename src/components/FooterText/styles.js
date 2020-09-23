import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    bottom: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Text = styled.p`
    text-align: center;
    font-size: 12pt;
    color: ${props => props.color ? props.color : ({theme}) => theme.inputLabel};
    margin-bottom: 5px;
    font-weight: 500;
`

export const Destak = styled.a`
    font-weight: 500;
    color: #ED6A5A;
    text-decoration: none;

    :hover {
        text-decoration: none;
        color: #ED6A5A;
    }
`