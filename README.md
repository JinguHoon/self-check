<!--heading-->
# 자가진단 자동화 시스템
#### 여러분 매일 아침마다 자가진단하기 귀찮지 않으신가요?
##### 그러기에 저는 매일 오전 8시 45분마다 자동 자가진단을 해주는 프로그램을 만들었습니다
##### 작성언어는 **Python**이며 [selenium](https://hogni.tistory.com/76) Package를 사용하였습니다.
##### 또한 selenium을 실행하기위해서 [chromedriver](https://chromedriver.chromium.org/downloads)을 설치하였습니다.
#### Python으로 코드를 만든다음에 이것을 자동 스케줄러에 적용시키위해서
#### [bat pile](https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%B9%98_%ED%8C%8C%EC%9D%BC)로 변환하여 적용하였습니다.
```bat
@echo on
cd C:\Github\auto-selfcheck
python selfcheck.py
pause
```
#### bat파일을 작업스케줄러에 적용하면 매일 자동으로 자가진단 해주는 프로그램이 완성이 됩니다.
![캡처](https://user-images.githubusercontent.com/61940768/121277812-5c48d680-c90c-11eb-87d0-680df8ee6b22.PNG)


