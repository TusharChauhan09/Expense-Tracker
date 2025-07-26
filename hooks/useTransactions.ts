import { useState, useCallback } from "react";
import { Alert } from "react-native";
import { API_URL } from "@/lib/api"; 

export function useTransactions(userId: any) {
  const [transactions, setTransactions] = useState([]);
  const [summary, setSummary] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // all the transaction of the user in array
  const fetchTransactions = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/${userId}`);
      const { transactions, message } = await response.json();
      setTransactions(transactions);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  }, [userId]);

  // summary of the user
  const fetchSummary = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
      const data = await response.json();

      const balance = parseFloat(data.balance);
      const income = parseFloat(data.income);
      const expenses = parseFloat(data.expenses);

      setSummary({ balance, income, expenses });
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  }, [userId]);

  // function to call both the fuctions above simultaniously
  const loadData = useCallback(async () => {
    try {
      await Promise.all([fetchTransactions(), fetchSummary()]);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [fetchSummary, fetchTransactions, userId]);

  // delete the transaction using transaction id
  const deleteTransaction = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete transaction");

      loadData();
      Alert.alert("Success", "Transaction deleted successfully");
    } catch (error: any) {
      console.error("Error deleting transaction:", error);
      Alert.alert("Error", error?.message);
    }
  };

  return { transactions, summary, isLoading, loadData, deleteTransaction };
}
