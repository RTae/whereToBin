# whereToBin
  ***whereToBin*** is a web application base that help you to classify the grabage by using AI. We want you to handle the grabage easier, so we come up with this solution to help you. This project is part of ***one night miracle team***

### :tv: Video demo
https://youtu.be/kAK1ByV6Jcs
### :computer: Web application
https://wheretobin-font-xhsqbxxiha-as.a.run.app

### :globe_with_meridians: API
https://wichianmas-xhsqbxxiha-as.a.run.app/detect?data=false

### :hammer: How to run

:hand: Manual

***Backend***
1) `pip install pipenv`
2) `cd backend`
3) `pipenv shell`
4) `pip install -r requirements.txt`
5) `uvicorn main:app --reload`

***Frontend***
1) `cd fontend`
2) `yarn install`
3) `yarn start`

:whale: Docker

***Backend***
1) `cd backend`
2) `docker build -t wheretobin_backend .`
3) `docker run -d --name wheretobin_container -p 80:80 wheretobin_backend`

***Frontend***
1) `cd fontend`
2) `docker build -t wheretobin_fontend .`
3) `docker container run -d --name whereToBin_container -p 80:8080  wheretobin_fontend`

### :electric_plug: Technology
- React.js
- Tensorflow
- FastAPI
- Clound-run

### :robot: AI Model
- Tiny-yolo model

### :page_facing_up: Reference
Tiny-yolo darknet [URL](https://pjreddie.com/darknet/yolo/)
