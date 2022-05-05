import React from "react";
import Logo from "../../assets/img/logo-full.png";
import "./styles.css";

import Tree, { TreeNode } from "../tree/Tree";

export default function Siderbar() {
  const items: TreeNode[] = [
    {
      text: "Visão Geral",
      icon: "",
      active: true,
    },
    {
      text: "Carteira de cliente",
      icon: "",
      children: [
        {
          text: "Fazenda Agro Mais",
          icon: "",
        },
        {
          text: "Fazenda Agro Top",
          icon: "",
        },
      ],
    },
  ];

  const conta: TreeNode[] = [
    {
      text: "Rafael",
      icon: "",
    },
    {
      text: "Configurações",
      icon: "",
    },
  ];
  return (
    <div className="siderbar">
      <img className="siderbar__logo" src={Logo} />
      <div className="divider"></div>
      <div className="home">
        <Tree items={items} />

        <section className="conta-section">
            <h4>Conta</h4>
            <Tree items={conta}/>
        </section>
      </div>
    </div>
  );
}
