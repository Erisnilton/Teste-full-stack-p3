import React, { ReactElement } from "react";

import "./styles.css";

export interface CardProps {
  right?: ReactElement | ReactElement[];
  children: ReactElement | ReactElement[];
  color?: string;
  style?: any
}

function CardContent({ children }: Pick<CardProps, "children">) {
  return <div className="card-content">{children}</div>;
}

export default function Card({
  right,
  children,
  color = "#1FAB89",
  style
}: CardProps) {
  return (
    <div className="card " style={style}>
      <CardContent>{children}</CardContent>
      {right && (
        <div className="card-right" style={{ background: color }}>
          {right}
        </div>
      )}
    </div>
  );
}
