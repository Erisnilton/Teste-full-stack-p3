import React from "react";
import classNames from "classnames";
import { Box, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface PropsTypes {
  color?: string;
  icon?: IconType
  title: string;
  isBg?: boolean
}

export default function Tag({ color, icon, title, isBg=true }: PropsTypes) {
  return (
    <div className={classNames(['credit', {'is-bg': isBg }])} >
      <div className="profile__credit">
        <div className="icon"><Box as={icon} size="14px"/></div>
        <span>{title}</span>
      </div>
    </div>
  );
}
