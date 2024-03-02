from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse
from fastapi import FastAPI, File, UploadFile
from model.model import Model
import io

m = Model()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def index():
    return "Wichianmas"


@app.post('/detect')
async def detect(file: UploadFile = File(...),  data = "false"):
    contents = await file.read()
    result = m.detect(contents)

    return StreamingResponse(io.BytesIO(result), media_type='image/jpg')
    
