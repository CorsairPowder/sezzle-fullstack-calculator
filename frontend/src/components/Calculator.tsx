import { useState } from "react";
import axios from "axios";

import api from "../services/api";

import type {
  CalculatorRequest,
  CalculatorResponse,
  ErrorResponse,
} from "../types/calculator";

type CalculatorProps = {
  onCalculate: () => void;
};

function Calculator({ onCalculate }: CalculatorProps) {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");

  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const calculate = async () => {
    setError("");
    setResult(null);

    if (a === "" || b === "") {
      setError("Please enter both numbers.");
      return;
    }

    const request: CalculatorRequest = {
      operation,
      a: Number(a),
      b: Number(b),
    };

    try {
      const response = await api.post<CalculatorResponse>(
        "/calculate",
        request
      );

      setResult(response.data.result);

      // Trigger background pulse
      onCalculate();

    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data) {
        const apiError = err.response.data as ErrorResponse;
        setError(apiError.error);
      } else {
        setError("Unable to reach server.");
      }
    }
  };

  return (
    <div className="calculator">
      <h1>Sezzle Calculator</h1>

      <input
        type="number"
        placeholder="First number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <div className="operations">
        <button
          type="button"
          className={operation === "add" ? "operation active" : "operation"}
          onClick={() => setOperation("add")}
        >
          +
        </button>

        <button
          type="button"
          className={operation === "subtract" ? "operation active" : "operation"}
          onClick={() => setOperation("subtract")}
        >
          −
        </button>

        <button
          type="button"
          className={operation === "multiply" ? "operation active" : "operation"}
          onClick={() => setOperation("multiply")}
        >
          ×
        </button>

        <button
          type="button"
          className={operation === "divide" ? "operation active" : "operation"}
          onClick={() => setOperation("divide")}
        >
          ÷
        </button>
      </div>

      <input
        type="number"
        placeholder="Second number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <button
        className="calculate-btn"
        onClick={calculate}
      >
        Calculate
      </button>

      {result !== null && (
        <div className="result-card">
          <span>Result</span>
          <h2>{result}</h2>
        </div>
      )}

      {error && (
        <div className="error-card">
          {error}
        </div>
      )}
    </div>
  );
}

export default Calculator;