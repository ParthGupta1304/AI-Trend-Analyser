# Simple dev Dockerfile for Python FastAPI worker
FROM python:3.11-slim

WORKDIR /app

# copy requirements first to leverage cache
COPY requirements.txt .

RUN python -m pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# copy app code and start script
COPY app ./app
COPY start-worker.sh ./start-worker.sh

RUN chmod +x ./start-worker.sh

EXPOSE 8000
CMD ["./start-worker.sh"]
