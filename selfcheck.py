from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

url = "https://hcs.eduro.go.kr/#/relogin"
schoolname = "한국디지털미디어고등학교"
name = ""
yymmdd = ""
pw = ""


driver = webdriver.Chrome("chromedriver.exe")

driver.get(url)

driver.maximize_window()


driver.find_element_by_css_selector('.loginHome_typeCheck').click()
driver.find_element_by_css_selector('#btnConfirm2').click()
driver.find_element_by_css_selector('#schul_name_input').click()

driver.find_element_by_xpath("//select[@id='sidolabel']/option[@value='10']").click()
driver.find_element_by_xpath("//select[@id='crseScCode']/option[@value='4']").click()
driver.find_element_by_css_selector('.searchArea').send_keys(schoolname)
driver.find_element_by_css_selector('.searchBtn').click()
time.sleep(1);
link = driver.find_element_by_xpath("//*[@id='softBoardListLayer']/div[2]/div[1]/ul/li/a")
link.click()
driver.find_element_by_css_selector('.layerFullBtn').click()

driver.find_element_by_css_selector('#user_name_input').send_keys(name)
driver.find_element_by_css_selector('#birthday_input').send_keys(yymmdd)
driver.find_element_by_css_selector('#btnConfirm').click()

time.sleep(1)
driver.find_element_by_xpath("//*[@id='WriteInfoForm']/table/tbody/tr/td/input").send_keys(pw)
driver.find_element_by_xpath("//*[@id='btnConfirm']").click()

time.sleep(2)
driver.find_element_by_xpath("/html/body/app-root/div/div[1]/div[2]/div/section[2]/div[2]/ul/li/a").send_keys("\n")

time.sleep(2)
driver.find_element_by_xpath("//*[@id='survey_q1a1']").click()
driver.find_element_by_xpath("//*[@id='survey_q2a1']").click()
driver.find_element_by_xpath("//*[@id='survey_q3a1']").click()
driver.find_element_by_xpath("//*[@id='btnConfirm']").click()
time.sleep(2)
driver.close()

