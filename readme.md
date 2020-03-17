## ROUTE

- version 1
  - user
  - post
- version 2
- version 3

## DATABASE

- 연결부분
- 스키마부분(몽고DB는 Nosql! 이해하기쉽게 모델이라고 생각하면됨 , 단 모델은 아님절대!)

## CONTROLLER

실질적인 로직을 담당하는 부분

- version 1
  - user
  - post
- version 2
- version 3

## MIDDLEWARE

custom

- verify token middleware
- error response middlware
- verify user access middleware
- async handler (try catch)

## 만드는 순서

1. 로직을 index.js(root file, 최상단파일) 에 만든다.
2. routing부분을 route로 옮긴다.
3. route의 handler 부분을 controller에 옮긴다.
