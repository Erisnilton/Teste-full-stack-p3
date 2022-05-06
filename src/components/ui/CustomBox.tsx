import { Box } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import './style.css';

export interface BoxProps {
    color: string;
    image: string;
    title: string;
    subtitle: string;
    icon?:IconType
    colorIcon?: string
    titleIcon?: string;
    link?: string

}

export default function CustomBox({color, image, title, subtitle, icon,colorIcon, titleIcon, link}: BoxProps) {
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
                    {icon && <Box as={icon} size="14px" color={colorIcon}/>}
                    {link && <a href="#"> { link }</a>}
                    <span>{titleIcon}</span>
                </div>
            </div>
        </div>
    )
}
