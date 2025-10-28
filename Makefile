# Next.js Project Makefile

.PHONY: help install dev build start lint format

help:
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  install    Install project dependencies"
	@echo "  dev        Start the development server"
	@echo "  build      Build the application for production"
	@echo "  start      Start the production server"
	@echo "  lint       Run the linter"
	@echo "  format     Format the code"

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

format:
	npm run format
