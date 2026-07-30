package tests

import (
	"calculator-api/services"
	"testing"
)

func TestAdd(t *testing.T) {
	result := services.Add(2, 3)

	if result != 5 {
		t.Errorf("expected 5, got %v", result)
	}
}

func TestSubtract(t *testing.T) {
	result := services.Subtract(5, 2)

	if result != 3 {
		t.Errorf("expected 3, got %v", result)
	}
}

func TestMultiply(t *testing.T) {
	result := services.Multiply(4, 6)

	if result != 24 {
		t.Errorf("expected 24, got %v", result)
	}
}

func TestDivide(t *testing.T) {
	result, err := services.Divide(10, 2)

	if err != nil {
		t.Errorf("unexpected error: %v", err)
	}

	if result != 5 {
		t.Errorf("expected 5, got %v", result)
	}
}

func TestDivideByZero(t *testing.T) {
	_, err := services.Divide(10, 0)

	if err == nil {
		t.Error("expected division by zero error")
	}
}
