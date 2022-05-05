import React from "react";
import './style.css';

export interface BoxProps {
    color: string;
    image: string;
    title: string;
    subtitle: string;
    icon?:string;
    titleIcon?: string;

}

export default function Box({color, image, title, subtitle, icon, titleIcon}: BoxProps) {
    return(

        <div className="box">
            <div className="box--img" style={{backgroundColor: color}}>
                <img src={image}/>
            </div>
            <div className="title">
                <span>{title}</span>
                <div className="subtitle">
                    <span>{subtitle}</span>
                </div>
                <div className="icon--box">
                    {icon && {icon}}
                    <span>{titleIcon}</span>
                </div>
            </div>
        </div>
    )
}
