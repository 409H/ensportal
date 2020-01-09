import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    bottom: 0;
    padding: 1em;
    max-height: 20px;
    width: 100%;
    background: ${props => props.theme.controlBackground}
    border-top: 1px solid black;
`;

class Footer extends Component 
{
    render()
    {
        return(
            <Container>
                ENSPortal - Run by <a href="https://twitter.com/kevingaspar" target="_blank">@kevingaspar</a> &amp; <a href="https://twitter.com/sniko_">Harry Denley</a>
            </Container>
        );
    }
}


export default Footer;