export interface CalculatorRequest {
  operation: string;
  a: number;
  b: number;
}

export interface CalculatorResponse {
  result: number;
}

export interface ErrorResponse {
  error: string;
}