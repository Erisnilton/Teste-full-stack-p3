import React, { useState } from "react";

import Card from "../card/Card";
import CustomTable from "../table/CustomTable";
import LogoProfile from "../../assets/svg/logo-profile.svg";
import LogoSerasa from "../../assets/img/serasa-experian.png";

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
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
import { getChartPerformace, getChartBar, getChartPie } from "../../service";
import Box from "../ui/Box";
import Devider from "../ui/Diveder";

export default function MainContent() {
  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    series: [70],
    labels: ["Progress"],
  };

  const dataBarBank = [0, 100, 200, 300, 400, 500, 750, 1000, 1500];
  const categoriesBarBank = [
    "05/2022",
    "08/2022",
    "09/2022",
    "12/2022",
    "04/2023",
    "05/2023",
  ];

  const chartPerformace = getChartPerformace();
  const chartBarBanck = getChartBar(dataBarBank, categoriesBarBank);
  const chartPie = getChartPie();
  const theadDataBalance = ["", "2019", "2020", "2021"];

  const tbodyDataBalance = [
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

  const theadDataHistory = ["", "2019", "2020"];
  const tbodyDataHistory = [
    {
      id: "1",
      items: ["Pré - pgto", "R$1.800.340,00", "R$1.800.340,00"],
    },
    {
      id: "2",
      items: ["No vencimento", "R$1.800.340,00", "R$1.800.340,00"],
    },
    {
      id: "3",
      items: ["1 - 5", "R$1.800.340,00", "R$1.800.340,00"],
    },
    {
      id: "4",
      items: ["6 - 15", "R$1.800.340,00", "R$1.800.340,00"],
    },
    {
      id: "5",
      items: ["16 - 30", "R$1.800.340,00", "R$1.800.340,00"],
    },
    {
      id: "6",
      items: ["31 - 60", "R$1.800.340,00", "R$1.800.340,00"],
    },
    {
      id: "7",
      items: ["31 - 60", "R$1.800.340,00", "R$1.800.340,00"],
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
              <div className="profile__logo">
                <img src={LogoProfile} />
              </div>
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
            <ReactApexChart
              options={chartPie.options}
              series={chartPie.series}
              type="pie"
            />
            <div className="pie">
              <h2>Crédito</h2>
              <span>Risco: $ 1.2 M</span>
              <span>Limite: R$ 1.5M</span>
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
                theadData={theadDataBalance}
                tbodyData={tbodyDataBalance}
                variant="simple"
              />
            </div>
          </Card>

          <Card>
            <Box
              color="#1FAB89"
              image={LogoSerasa}
              title="Sem Restritivos"
              subtitle="Verificado às 21:52:12 (GMT-2)"
            />

            <Box
              color="#ECB22E"
              image={LogoSerasa}
              title="Impedimento Encontrado"
              subtitle="Verificado às 21:52:12 (GMT-2)"
            />

            <Box
              color="#E0E1E2"
              image={LogoSerasa}
              title="Sem informação"
              subtitle="Verificado às 21:52:12 (GMT-2)"
            />

            <Devider />
            <span className="restrict">Restritivos</span>
          </Card>
        </section>
        <section>
          <div className="historico">
            <div className="date">
              <div className="button">Ano Atual</div>
              <div className="button">Histórico</div>
            </div>
            <div className="calendar">
              <div className="button">Jan 2021</div>
              <div className="button">Dec 2021</div>
            </div>
          </div>
        </section>
        <section className="performace">
          <Card
            right={
              <strong style={{ writingMode: "vertical-lr" }}>
                Contectado com SAP
              </strong>
            }
          >
            <h2>Histórico de Performance</h2>
            <ReactApexChart
              options={chartPerformace.options}
              series={chartPerformace.series}
              width={"180%"}
            />
          </Card>
          <Card>
            <div className="table">
              <h2>Histórico</h2>
              <CustomTable
                theadData={theadDataHistory}
                tbodyData={tbodyDataHistory}
                variant="simple"
              />
            </div>
          </Card>
          <Card
            right={
              <strong style={{ writingMode: "vertical-lr" }}>
                Contectado com SAP
              </strong>
            }
          >
            <h2>Dados Bancários</h2>
            <ReactApexChart
              options={chartBarBanck.options}
              series={chartBarBanck.series}
              type="bar"
              width={"180%"}
            />
          </Card>
          <Card>
            <h2>Dados Bancários</h2>
            <CustomTable
              theadData={theadDataBalance}
              tbodyData={tbodyDataBalance}
              variant="simple"
            />
          </Card>
        </section>
      </section>
    </>
  );
}
