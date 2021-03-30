FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN apt-get update
RUN apt-get install ffmpeg libsm6 libxext6  -y
