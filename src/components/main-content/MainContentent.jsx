import React, { useState } from "react";

import Card from "../card/Card";
import CustomTable from "../table/CustomTable";

import {
  BsSearch,
  BsPerson,
  BsFillBellFill,
  BsFillGearFill,
} from "react-icons/bs";

import "./styles.css";

import {
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import ApexCharts from "apexcharts";

export default function MainContent() {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    series: [70],
    labels: ["Progress"],
  };

  const theadData = ["", "2019", "2020", "2021"];

  const tbodyData = [
    {
      id: "1",
      items: [
        "Patrimônio Líquido",
        "R$1.800.340,00",
        "R$1.800.340,00",
        "R$1.800.340,00",
      ],
    },
    {
      id: "2",
      items: [
        "Faturamento",
        "R$1.800.340,00",
        "R$1.800.340,00",
        "R$1.800.340,00",
      ],
    },
    {
      id: "3",
      items: ["EBITDA", "R$1.800.340,00", "R$1.800.340,00", "R$1.800.340,00"],
    },
    {
      id: "4",
      items: [
        "Lucro Líquido",
        "R$1.800.340,00",
        "R$1.800.340,00",
        "R$1.800.340,00",
      ],
    },
    {
      id: "5",
      items: [
        "Endividamento CP",
        "R$1.800.340,00",
        "R$1.800.340,00",
        "R$1.800.340,00",
      ],
    },
    {
      id: "6",
      items: [
        "Endividamento LP",
        "R$1.800.340,00",
        "R$1.800.340,00",
        "R$1.800.340,00",
      ],
    },
  ];

  return (
    <>
      <section className="main">
        <header>
          <div className="navbar">
            <div className="read">
              <div className="readcrumb">
                <Breadcrumb fontWeight="medium" fontSize="sm">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Pages</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">Profile</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
              <div>Profile</div>
            </div>

            <div className="actions">
              <div className="input-text">
                <Stack spacing={4}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsSearch color="black" />}
                    />
                    <Input placeholder="Type here ..." />
                  </InputGroup>
                </Stack>
              </div>

              <div className="user">
                <BsPerson />
                <span>Rafael</span>
              </div>

              <div className="notification">
                <BsFillBellFill />
              </div>
              <div className="gear">
                <BsFillGearFill />
              </div>
            </div>
          </div>
          <div className="navbar__bg">
            <div className="profile">
              <div className="profile__logo">{/* <img /> */}</div>
              <div className="profile__info">
                <h2>produtor rural</h2>
                <span>gabriel@agromais.com.br</span>
                <span>CPF: 12.345.678-9</span>
              </div>
              <div className="credit">
                <div className="profile__credit">
                  <div className="icon">+</div>
                  <span>Solicitar crédito</span>
                </div>
              </div>
              <div className="initial">
                <div className="circle">.</div>
                <span>Cliente desde</span>
                <span>24/07/2018</span>
              </div>
            </div>
          </div>
        </header>

        <section className="balance-info">
          <Card>
            <div className="limit__values">
              <div className="money">R$ 1.5M</div>
              <div>Limite</div>
            </div>
            <div className="limit__values">
              <div className="money risco">R$ 1.2M</div>
              <div>Risco</div>
            </div>
            <div className="limit__values">
              <div className="money liquidez">X %</div>
              <div>Liquidez</div>
            </div>
          </Card>

          <Card>
            <div className="limit__values">
              <div className="money">R$ 1.5M</div>
              <div>Limite</div>
            </div>
            <div className="limit__values">
              <div className="money risco">R$ 1.2M</div>
              <div>Risco</div>
            </div>
            <div className="limit__values">
              <div className="money liquidez">X %</div>
              <div>Liquidez</div>
            </div>
          </Card>

          <Card
            style={{ flex: 1 }}
            right={
              <strong style={{ writingMode: "vertical-lr" }}>
                Contectado com SAP
              </strong>
            }
          >
            <div className="table">
              <h2>Balanço e DRE</h2>
              <CustomTable
                theadData={theadData}
                tbodyData={tbodyData}
                variant="simple"
              />
            </div>
          </Card>

          <Card>
            <div className="limit__values">
              <div className="money">R$ 1.5M</div>
              <div>Limite</div>
            </div>
            <div className="limit__values">
              <div className="money risco">R$ 1.2M</div>
              <div>Risco</div>
            </div>
            <div className="limit__values">
              <div className="money liquidez">X %</div>
              <div>Liquidez</div>
            </div>
          </Card>
        </section>

        <section>y</section>
      </section>
    </>
  );
}
