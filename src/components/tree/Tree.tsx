import React, { ComponentType } from "react";
import "./styles.css";
import classNames from "classnames";
import { IconType } from "react-icons";
export interface TreeNode {
  text: string;
  icon: IconType
  route?: string;
  active?: boolean;
  children?: TreeNode[];
}

export default function Tree(props: { items: TreeNode[] }) {
  return (
    <ul className="tree">
      {props.items.map((item) => {
        return (
          <li
            className={classNames([
              "tree-node",
              { "tree-node--active": item.active },
            ])}
          >
            <div className="tree-node-header">
                <span className="tree-node-icon">< item.icon size={'16px'}/></span>
                <span>{item.text}</span>
            </div>
            {item.children && <Tree items={item.children} />}
          </li>
          
        );
      })}
    </ul>
  );
}
