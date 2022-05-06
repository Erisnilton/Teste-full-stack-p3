import React, { useState } from "react";
import "./styles.css";

import Card from "../card/Card";
import CustomTable, { CustomTableHeader } from "../table/CustomTable";
import LogoProfile from "../../assets/svg/logo-profile.svg";
import LogoSerasa from "../../assets/img/serasa-experian.png";

import {
  BsSearch,
  BsPerson,
  BsFillBellFill,
  BsFillGearFill,
  BsFillCaretDownFill,
  BsFilePlus,
  BsPlus,
  BsFillPersonFill,
  BsWrench,
} from "react-icons/bs";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import {
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/react";

import ReactApexChart from "react-apexcharts";
import {
  getChartPerformace,
  getChartBar,
  getChartPie,
  getDatabank,
} from "../../service";
import CustomBox from "../ui/CustomBox";
import Devider from "../ui/Diveder";
import Tag from "../ui/Tag";
import {
  FaBalanceScale,
  FaBox,
  FaCalendarAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaMinusCircle,
  FaPencilAlt,
  FaSyncAlt,
  FaWrench,
} from "react-icons/fa";

export default function MainContent() {
  const { dataBarBank } = getDatabank();
  const { categoriesBarBank } = getDatabank();
  const chartPerformace: any = getChartPerformace();
  const chartBarBanck: any = getChartBar(dataBarBank, categoriesBarBank);
  const chartPie: any = getChartPie();
  const theadDataBalance: CustomTableHeader[] = [
    {
      id: "type",
      text: "",
      get: (item) => item.type,
    },
    {
      id: "2019",
      text: "2019",
      get: (item) => item.a2019,
    },
    {
      id: "2020",
      text: "2020",
      get: (item) => item.a2020,
    },

    {
      id: "2021",
      text: "2021",
      get: (item) => item.a2021,
    },
  ];

  const tbodyDataBalance = [
    {
      id: "1",
      type: "Patrimônio Líquido",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
      a2021: "R$1.800.340,00",
    },
    {
      id: "2",
      type: "Faturamento",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
      a2021: "R$1.800.340,00",
    },
    {
      id: "3",
      type: "EBITDA",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
      a2021: "R$1.800.340,00",
    },
    {
      id: "4",
      type: "Lucro Líquido",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
      a2021: "R$1.800.340,00",
    },
    {
      id: "5",
      type: "Endividamento CP",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
      a2021: "R$1.800.340,00",
    },
    {
      id: "6",
      type: "Endividamento LP",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
      a2021: "R$1.800.340,00",
    },
  ];

  const theadDataHistory: CustomTableHeader[] = [
    {
      id: "type",
      text: "",
      get: (item) => item.type,
    },
    {
      id: "2019",
      text: "2019",
      get: (item) => item.a2019,
    },
    {
      id: "2020",
      text: "2020",
      get: (item) => item.a2020,
    },
  ];
  const tbodyDataHistory = [
    {
      id: "1",
      type: "Pré - pgto",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
    },
    {
      id: "2",
      type: "No vencimento",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
    },
    {
      id: "3",
      type: "1 - 5",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
    },
    {
      id: "4",
      type: "6 - 15",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
    },
    {
      id: "5",
      type: "16 - 30",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
    },
    {
      id: "6",
      type: "31 - 60",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
    },
    {
      id: "7",
      type: "31 - 60",
      a2019: "R$1.800.340,00",
      a2020: "R$1.800.340,00",
    },
  ];

  return (
    <>
      <section className="main">
        <header>
          <div className="navbar">
            <div className="navbar--content">
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
                        children={<BsSearch color="white" />}
                      />
                      <Input placeholder="Type here ..." />
                    </InputGroup>
                  </Stack>
                </div>

                <div className="user">
                  <BsFillPersonFill />
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
          </div>
          <div className="navbar__bg">
            <div className="profile">
              <img src={LogoProfile} />
              <div className="profile__logo">
                <div className="box-pencil">
                  <FaPencilAlt />
                </div>
              </div>
              <div className="profile__info">
                <h2>produtor rural</h2>
                <span>gabriel@agromais.com.br</span>
                <span>CPF: 12.345.678-9</span>
              </div>
              <Tag icon={BsPlus} title="Solicitar Crédito" />
              <div className="initial">
                <div className="circle">.</div>
                <span>Cliente desde</span>
                <span>24/07/2018</span>
              </div>
            </div>
            <div className="analyzer">
              <Tag icon={FaBox} title="Análise" isBg={true} />
              <Tag icon={FaBalanceScale} title=" Balanço" isBg={false} />
              <Tag icon={FaWrench} title="Configurações" isBg={false} />
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
              width={150}
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
                columns={theadDataBalance}
                rows={tbodyDataBalance}
                variant="simple"
              />
            </div>
          </Card>

          <Card>
            <CustomBox
              color="#1FAB89"
              image={LogoSerasa}
              title="Sem Restritivos"
              subtitle="Verificado às 21:52:12 (GMT-2)"
              icon={FaCheckCircle}
              colorIcon="#48BB78"
            />

            <CustomBox
              color="#ECB22E"
              image={LogoSerasa}
              title="Impedimento Encontrado"
              subtitle="Verificado às 21:52:12 (GMT-2)"
              icon={FaExclamationCircle}
              colorIcon="#ECB22E"
              link="Clique para ver mais"
            />

            <CustomBox
              color="#E0E1E2"
              image={LogoSerasa}
              title="Sem informação"
              subtitle="Verificado às 21:52:12 (GMT-2)"
              icon={FaMinusCircle}
              colorIcon="#CCD2E3"
            />

            <Devider />
            <span className="restrict">Restritivos</span>
            <div className="update">
              <FaSyncAlt />
              <span>atualizar</span>
            </div>
          </Card>
        </section>
        <section>
          <div className="historico">
            <div className="date">
              <div className="button">Ano Atual</div>
              <div className="button">Histórico</div>
            </div>
            <div className="calendar">
              <div className="calendar--icon">
                <FaCalendarAlt />
              </div>
              <div className="button">
                <span>
                  <BsFillCaretDownFill />
                </span>
                Jan 2021
              </div>
              <div className="button">
                <span>
                  <BsFillCaretDownFill />
                </span>
                Dec 2021
              </div>
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
            <div className="table">
              <h2>Histórico de Performance</h2>
              <ReactApexChart
                options={chartPerformace.options}
                series={chartPerformace.series}
                width={"180%"}
              />
            </div>
          </Card>
          <Card style={{ flex: 1 }}>
            <div className="table">
              <h2>Histórico</h2>
              <CustomTable
                columns={theadDataHistory}
                rows={tbodyDataHistory}
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
            <div className="table">
              <h2>Dados Bancários</h2>
              <ReactApexChart
                options={chartBarBanck.options}
                series={chartBarBanck.series}
                type="bar"
                width={"180%"}
              />
            </div>
          </Card>
          <Card style={{ flex: 1 }}>
            <div className="table">
              <h2>Dados Bancários</h2>
              <CustomTable
                columns={theadDataBalance}
                rows={tbodyDataBalance}
                variant="simple"
              />
            </div>
          </Card>
        </section>
      <footer>
        <span>@2022, OpenCred</span>
      </footer>
      </section>
    </>
  );
}
