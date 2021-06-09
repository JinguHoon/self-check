<!--heading-->
# 자가진단 자동화 시스템
#### 매일 아침마다 자가진단하기 귀찮으신 여러분께 이 프로그램을 적극추천 ❗️❗️
##### 그러기에 저는 매일 오전 8시 45분마다 자동 자가진단을 해주는 프로그램을 만들었습니다
> 개발방식
##### ✅ 작성언어는 **Python**이며 [selenium](https://hogni.tistory.com/76) Package를 사용하였습니다.
##### ✅ 또한 selenium을 실행하기위해서 [chromedriver](https://chromedriver.chromium.org/downloads)을 설치하였습니다.
##### ✅ Python으로 코드를 만든다음에 이것을 자동 스케줄러에 적용시키위해서 [bat pile](https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%B9%98_%ED%8C%8C%EC%9D%BC)로 변환하여 적용하였습니다.
```bat
@echo on
cd C:\Github\auto-selfcheck
python selfcheck.py
pause
```
##### ✅ bat파일을 작업스케줄러에 적용하면 매일 자동으로 자가진단 해주는 프로그램이 완성이 됩니다.
![캡처](https://user-images.githubusercontent.com/61940768/121277812-5c48d680-c90c-11eb-87d0-680df8ee6b22.PNG)
> 어떻게 사용할까?
##### 1. 현재 페이지 위로 올라가서 "Add file" -> download Zip 클릭 -> 압축하여 저장
##### 2. 터미널에서 다음을 입력합니다.
```cmd
pip install selenium
```
##### 3. 이름, 생년월일, 비밀번호 4자리를 입력합니다.
##### 4. Run버튼을 클릭하여 프로그램이 잘돌아가는지 확인합니다.
###### ⚠️ 만약 문제가 있으면 (https://open.kakao.com/o/sjXLmVhd)이쪽으로 연락주세요!
![image](https://user-images.githubusercontent.com/61940768/121284668-33c6d980-c918-11eb-8951-b874ce66bd76.png)
##### 5. 메모장을 키고 다음을 입력합니다.
```bat
@echo on
cd [본인이 저장한 위치]
python selfcheck.py
pause
```
##### 6. 파일이름을 [파일이름].bat으로 바탕화면(쉽게 파일가져오기 위해서)에 저장합니다.
##### 7. window버튼클릭 -> 작업 스케줄러 검색 -> 기본 작업 만들기 -> 이름 입력 -> 
##### 매일 -> 시간 입력 -> 프로그램 시작 -> 프로그램/스크립트에 bat파일 넣기 -> 마침

> 주의!!!!
##### ⚠️ 첫번째! Visual Studio Code에 Python Extension을 설치해주셔야 합니다.
##### ⚠️ 두번째! "&은(는) 예상되지 않았습니다."라는 에러가 발생할 수 있는데 파일경로를 반드시 확인하시기 바랍니다. (저도 그거때문에 10분동안 찾았다는😭)
##### ⚠️ 세번째! name, yymmdd, pw는 본인이 입력해주셔야합니다 ㅠㅠ  
![image](https://user-images.githubusercontent.com/61940768/121283280-cd40bc00-c915-11eb-82c1-98ff8327bd59.png)