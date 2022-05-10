import React from "react";

import './style.css'

export interface BreadcrumbItems {
    link: string
    text: string
}

export default function Breadcrumb( props: { items: BreadcrumbItems [] }) {
    return (
        <div className="breadcrumb">
            { props.items.map((item) => (
                <a href={item.link}> { item.text }</a>
            ))}
        </div>
    )
}