import React from "react";
import Logo from "../../assets/img/logo-full.png";
import "./styles.css";

import Tree, { TreeNode } from "../tree/Tree";
import Devider from "../ui/Diveder";
import {
  BsWrench,
  BsWallet,
  BsFillBarChartFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaHome, FaWrench } from "react-icons/fa";

export default function Siderbar() {
  const items: TreeNode[] = [
    {
      text: "Visão Geral",
      icon:  FaHome,
      active: true,
    },
    {
      text: "Carteira de cliente",
      icon:   BsFillBarChartFill,
      children: [
        {
          text: "Fazenda Agro Mais",
          icon: BsWallet
        },
        {
          text: "Fazenda Agro Top",
          icon: BsWallet,
        },
      ],
    },
  ];

  const conta: TreeNode[] = [
    {
      text: "Rafael",
      icon: BsFillPersonFill,
    },
    {
      text: "Configurações",
      icon: FaWrench,
    },
  ];
  return (
    <div className="siderbar">
      <img className="siderbar__logo" src={Logo} />
      <Devider/>
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
