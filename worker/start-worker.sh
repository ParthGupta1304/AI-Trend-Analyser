#!/usr/bin/env bash
set -e

# Activate virtual environment if running locally
if [ -d ".venv" ]; then
  source .venv/bin/activate
fi

# Start FastAPI worker server
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
