import React from "react";
import classNames from "classnames";
import { Box, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface PropsTypes {
  color?: string;
  icon?: IconType
  title: string;
  elevated?: boolean
}

export default function Tag(props: PropsTypes) {
  return (
    <div className={classNames(['credit', {'is-bg': props.elevated??true }])} >
      <div className="profile__credit">
        <div className="icon"> { props.icon && <props.icon/>}</div>
        <span>{props.title}</span>
      </div>
    </div>
  );
}
