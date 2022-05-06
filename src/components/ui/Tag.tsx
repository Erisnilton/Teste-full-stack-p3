import React from "react";
import classNames from "classnames";
import { Icon } from "@chakra-ui/react";

export interface PropsTypes {
  color?: string;
  icon?: any
  title: string;
  isBg?: boolean
}

export default function Tag({ color, icon, title, isBg=true }: PropsTypes) {
  return (
    <div className={classNames(['credit', {'is-bg': isBg }])} >
      <div className="profile__credit">
        <div className="icon">{icon}</div>
        <span>{title}</span>
      </div>
    </div>
  );
}
