package handlers

import (
	"net/http"

	"calculator-api/models"
	"calculator-api/services"

	"github.com/gin-gonic/gin"
)

func Calculate(c *gin.Context) {
	var req models.CalculatorRequest

	// Parse the JSON request
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, models.ErrorResponse{
			Error: "Invalid request body",
		})
		return
	}

	var result float64

	switch req.Operation {
	case "add":
		result = services.Add(req.A, req.B)

	case "subtract":
		result = services.Subtract(req.A, req.B)

	case "multiply":
		result = services.Multiply(req.A, req.B)

	case "divide":
		value, err := services.Divide(req.A, req.B)
		if err != nil {
			c.JSON(http.StatusBadRequest, models.ErrorResponse{
				Error: err.Error(),
			})
			return
		}
		result = value

	default:
		c.JSON(http.StatusBadRequest, models.ErrorResponse{
			Error: "Unsupported operation",
		})
		return
	}

	c.JSON(http.StatusOK, models.CalculatorResponse{
		Result: result,
	})
}
