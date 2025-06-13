# README #

>   PWA 앱 만들기. (프로그레시브 웹앱)
>   간단히 말하면 웹의 리소스로 앱을 만들수있다.
>   웹뷰_ 브라우저에서열림. 다만 강력한제어권 을 갖고있음.
>   역할가능 1
>>   - app _ menifest
>>   - 네트워크 _ proxy 
>>   - 스토리지 _ IndexDB, WebStorage, Cache


##  Storage Manager API를 통해 클라이언트 로그쌓기 쌉가능. > 다운로드안눌러도 자동 servicewoker 브라우저상태에서 다운


# 사전준비
>   - node 22 v 
>   - 512x512 사이즈 아이콘
>   - https or localhost



# 프로젝트 구조
.      
├── config_worker/ # 서비스워커 세팅       
│   ├── idb.js  # 로컬인덱스디비 설정     
│   ├── sw.conf # 서비스워커 설정  
├── source/ # 클라이언트 소스     
│   ├── config/  # 클라이언트 세팅파일들     
│   ├── controller/ # 뷰컨트롤러     
│   ├── model/ # view-model,model      
│   ├── network/ # api, http 요청들      
│   └── static/ # 정적파일     
├── app.js # 메인 시작. 앱      
├── service-worker.js # 서비스워커 (pwa) 코어 파일 _ 멀티쓰레드로 동작     
├── manifest.json # app아이콘,이름등 설정파일     
└── index.html # 메인화면    

