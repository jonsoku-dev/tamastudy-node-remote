## route

- version 1
- version 2
- version 3

## database

- 연결부분
- 스키마부분(모델이라고 생각하면됨 , 단 모델은 아님절대!)

## controller

실질적인 로직을 담당하는 부분 - version 1 - version 2 - version 3

## middleware

custom

- verify token middleware
- error response middlware
- verify user access middleware
- async handler (try catch)

## 만드는 순서

1. 로직을 index.js(root file, 최상단파일) 에 만든다.
2. routing부분을 route로 옮긴다.
