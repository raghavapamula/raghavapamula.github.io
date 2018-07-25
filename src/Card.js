import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './profile.jpg';

const Parent = styled.div`
    background-color: #ffffff;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    color: ${props => props.color};
    margin: 12px;
    border-color: #443e3e7a;
    border-width: 1px;
    border-style: solid;
    height: ${props => props.height*0.7};
`;

const VertCenter = styled.div`
    margin-top: 50%;
    margin-bottom: 50%;
`

const Title = styled.h1`
    font-size: 1.7em;
    text-align: left;
    border-bottom: 2px solid black;
`;

const ProfileTitle = styled.h1`
    font-size: 1.7em;
    border-bottom: 2px solid black;
`;

const Left = styled.div`
    text-align: left;
    font-family: 'Varela Round', sans-serif;
    font-size: 15px;
    line-height: 1.5;
    word-wrap: break-word
`

const Content = styled.div`
    @media (max-width: 600px) {
        background-color: rgb(30, 30, 30, 0.97);
        padding: 5px 0px 0px 0px;
    }
    @media (min-width: 601px) {
        background-color: rgb(30, 30, 30, 0.97);
        padding: 10px 0px 7px 0px;
    }
    margin-top: 15px;
        border: 1px groove black;
        border-radius: 25px;
        border-color: #8f8e8eb0;
`

const BoundingBox = styled.div`
    @media (max-width: 600px) {
        padding: 0 10px 10px 10px;
    }
    @media (min-width: 601px) {
        padding: 0 5px 15px 5px;
    }
    border: 1px groove black;
    border-radius: 25px;
    border-color: #8f8e8eb0;
`

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
            <div><a href="https://github.com/raghavapamula/"><i className="fab fa-github-square fa-2x column"></i></a></div>
            <div><a href="https://www.linkedin.com/in/raghava-pamula/"><i className="fab fa-linkedin fa-2x column"></i></a></div>
            <div><i className="fa fa-envelope fa-2x column"></i></div>
            <div><i className="fas fa-file-pdf fa-2x column"></i></div>
        </div>
    )
}

export class ProfileCard extends Component {
    render() {
        return(
            <Card profile={true}>
                <ProfileTitle>Raghava Pamula</ProfileTitle>
                <BoundingBox>
                <p>CS Student at the University of Virginia</p>
                    <img src={logo} className="Profile" alt="logo" />
                </BoundingBox>
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
                <Left>{ this.props.descrip }</Left>
                <Content>{this.props.children}</Content>
                <p><a href={ this.props.link }>Visit Site <i className="fa fa-link fa-2x" aria-hidden="true"></i></a></p>
            </Card>
        )
    }
}

export class IntroCard extends Component {
    render() {
        return(
            <Card profile={false} height="2px">
                <Title>{ this.props.title }</Title>
                <Left>{ this.props.descrip }</Left>
            </Card>
        )
    }
}