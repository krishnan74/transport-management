"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiLineVerticalThin } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { AreaChartComponent } from "./components/AreaChartComponent";
import { PieChartComponent } from "./components/PieChartComponent";
import { TransactionComponent } from "./components/TransactionComponent";
import { AvatarComponent } from "@/components/Avatar";

import DummyCard from "./components/DummyCard";
import axios from "axios";
const Page = () => {
  const [tripCount, setTripCount] = useState(0);
  const [driverCount, setDriverCount] = useState(0);
  const [truckCount, setTruckCount] = useState(0);
  const [vendorCount, setVendorCount] = useState(0);
  const fetchData = async () => {
    try {
      const tripResponse = await axios.get("/api/trip");
      const driverResponse = await axios.get("/api/driver");
      const truckResponse = await axios.get("/api/truck");
      const vendorResponse = await axios.get("/api/vendor");
      setTripCount(tripResponse.data.data.length);
      setDriverCount(driverResponse.data.data.length);
      setTruckCount(truckResponse.data.data.length);
      setVendorCount(vendorResponse.data.data.length);
    } catch (error) {
      console.log("An error occurred while fetching data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="flex flex-col p-8 bg-white w-full rounded-3xl">
      {" "}
      <div className="flex justify-between items-center mb-8">
        {" "}
        <p className="text-2xl font-bold">
          {" "}
          Dashboard Overview <br />{" "}
          <span className="text-base font-normal text-[#666]">
            {" "}
            10th July 2024{" "}
          </span>{" "}
        </p>{" "}
        <div className="flex items-center">
          {" "}
          <CiSearch className="text-2xl " />{" "}
          <FaBell className="text-2xl  ml-8" />{" "}
          <IoMdSettings className="text-2xl ml-8" />{" "}
          <PiLineVerticalThin className="text-2xl ml-4 mr-3" />{" "}
          <AvatarComponent />{" "}
          <p className="font-bold text-lg ml-4">Rajesh Kumar</p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="grid grid-cols-4 gap-10 ">
        {" "}
        <div className="col-span-2 row-span-2">
          {" "}
          <AreaChartComponent />{" "}
        </div>{" "}
        <div className="col-span-1 row-span-2">
          {" "}
          <PieChartComponent />{" "}
        </div>{" "}
        <div className="row-span-1">
          {" "}
          <DummyCard
            count={tripCount}
            title="Trips in travel"
            percentage="30.00"
          />{" "}
        </div>{" "}
        <div className="row-span-1">
          {" "}
          <DummyCard
            count={vendorCount}
            title="Vendors"
            percentage="30.00"
          />{" "}
        </div>{" "}
        <div className="row-span-1">
          {" "}
          <DummyCard
            count={driverCount}
            title="Drivers in service"
            percentage="30.00"
          />{" "}
        </div>{" "}
        <div className="col-span-1 row-span-2">
          {" "}
          <PieChartComponent />{" "}
        </div>{" "}
        <div className="col-span-2 row-span-2">
          {" "}
          <TransactionComponent />{" "}
        </div>{" "}
        <div className="row-span-1">
          {" "}
          <DummyCard
            count={truckCount}
            title="Trucks in service"
            percentage="30.00"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Page;
