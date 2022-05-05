import { Flex } from "@chakra-ui/react";
import React from "react";
import MainContent from "../main-content/MainContentent";
import Siderbar from "../siderbar/Siderbar";
// import './styles.css';

export default function Main() {
    return (
        <div className="main">
            <Flex flexDirection={'row'}>
                <Siderbar/>  
               <MainContent/>
            </Flex>
        </div>
    )
}