import axios from "axios";
import { useState } from "react";
import { useHandleAuth } from "./useHandleAuth";

export const useHandleHistoryRegistration = () => {
  const [historyRegistration, setHistoryRegistration] = useState([]);
  const [countHistory, setCountHistory] = useState({});

  const { handleLogout } = useHandleAuth();
  const getCountHistoryRegistration = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/history/count", { withCredentials: true });
      const response = await res.data;
      setCountHistory(response.data);
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        handleLogout();
      }
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
