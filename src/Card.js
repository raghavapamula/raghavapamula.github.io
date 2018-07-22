import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './profile.jpg';

const Parent = styled.div`
    background-color: #ffffff;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    color: ${props => props.color};
    margin: 15px;
    border-color: #443e3e7a;
    border-width: 1px;
    border-style: solid;
    height: ${props => props.height*0.7};
    max-height: ${props => props.height};
`;

const VertCenter = styled.div`
    margin-top: 50%;
    margin-bottom: 50%;
`

const Title = styled.h1`
    font-size: 1.5em;
`;

export default class Card extends Component {
    construtor(props) {}
    render() {
        const height = this.props.profile ? "100%" : String(window.innerHeight - 100) + "px";
        const color = this.props.profile ? "#584f4f" : "#584f4f";
        return (
            <Parent color={color} height={height}>{this.props.children}</Parent>
        )
    }
}

const SocialIcons = () => {
    return(
        <div className = "social">
            <div><i className="fab fa-github-square fa-2x column"></i></div>
            <div><i className="fab fa-linkedin fa-2x column"></i></div>
            <div><i className="fa fa-envelope fa-2x column"></i></div>
            <div><i className="fas fa-file-pdf fa-2x column"></i></div>
        </div>
    )
}

export class ProfileCard extends Component {
    render() {
        return(
            <Card profile={true}>
                <Title>Raghava Pamula</Title>
                <p>CS Student at the University of Virginia</p>
                <img src={logo} className="Profile" alt="logo" />
                { SocialIcons() }
            </Card>
        )
    }
}

export class ProjectCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <Card profile={false} height="2px">
                <Title>{ this.props.title }</Title>
                <p>{ this.props.descrip }</p>
                <div>{this.props.children}</div>
                <p><a href={ this.props.link }>Visit Site <i class="fa fa-link fa-2x" aria-hidden="true"></i></a></p>
            </Card>
        )
    }
}

export class IntroCard extends Component {
    render() {
        return(
            <Card profile={false} height="2px">
                <Title>{ this.props.title }</Title>
                <p>{ this.props.descrip }</p>
            </Card>
        )
    }
}