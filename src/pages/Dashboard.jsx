import React, { useEffect } from "react";
import Header from "../components/dashboard/Header";
import Card from "../components/dashboard/Card";
import { FaCalendarAlt, FaUser, FaChartBar } from "react-icons/fa";
import { useHandleHistoryRegistration } from "../hook/useHandleHistoryRegistration";
import TableHistoryRegistration from "../components/dashboard/TableHistoryRegistration";

const Dashboard = () => {
  const { countHistory, getCountHistoryRegistration, historyRegistration, getHistoryRegistration } = useHandleHistoryRegistration();
  useEffect(() => {
    getCountHistoryRegistration();
    getHistoryRegistration();
  }, []);
  return (
    <section className="p-4 w-full">
      <Header />
      <div className="grid grid-cols-3 gap-3 ">
        <Card icon={FaCalendarAlt} total={countHistory.queuePatientToday} description={"Total Antrean Hari Ini"} />
        <Card icon={FaUser} total={countHistory.totalRegistrationToday} description={"Total Pelayanan Hari Ini"} />
        <Card icon={FaChartBar} total={countHistory.totalRegistrationPerMonth} description={"Total Pelayanan Bulan Ini"} />
      </div>
      <TableHistoryRegistration data={historyRegistration} />
    </section>
  );
};

export default Dashboard;
