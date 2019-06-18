import React from 'react';
import classes from './layout.module.css';

const gallery = props => {
    return (
        <div className = {classes.outsideContainer}>
            <div className = {classes.Container} style = {{backgroundImage: `url(${props.img})`}}/>
            
            <div className = {classes.Footer}>
                <div className = {classes.FooterBackground} style = {{backgroundImage: `url(${props.img})`}}/>
                <button className = {classes.Previous} onClick = {props.previousClickHandler}>Previous</button>
                <button className = {classes.Previous} onClick = {props.previousClickHandler}>Previous</button>
                <button className = {classes.Next} onClick = {props.nextClickHandler}>Next</button>
            </div>
            
        </div>
    );
};

export default gallery;