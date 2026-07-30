package models

type CalculatorRequest struct {
	Operation string  `json:"operation" binding:"required"`
	A         float64 `json:"a" binding:"required"`
	B         float64 `json:"b" binding:"required"`
}
