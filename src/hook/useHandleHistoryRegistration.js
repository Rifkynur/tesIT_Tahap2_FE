import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useHandleHistoryRegistration = () => {
  const [historyRegistration, setHistoryRegistration] = useState([]);
  const [countHistory, setCountHistory] = useState({});

  const getCountHistoryRegistration = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/history/count", { withCredentials: true });
      const response = await res.data;
      setCountHistory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getHistoryRegistration = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/history", { withCredentials: true });
      const response = await res.data;
      setHistoryRegistration(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getCountHistoryRegistration, getHistoryRegistration, historyRegistration, countHistory };
};
