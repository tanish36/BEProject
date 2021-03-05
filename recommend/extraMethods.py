import json
from django.utils import timezone
import datetime as dt
import requests
import random
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys


def userDetails(codeforcesHandle, clearPastProblems):
    url = requests.get(
        'https://codeforces.com/api/user.info?handles='+codeforcesHandle)
    jsonData = url.json()
    data = json.dumps(jsonData)
    codeforcesHandle = json.loads(data)
    if(codeforcesHandle['status'] != "OK"):
        return False
    if(clearPastProblems):
        completedProblems.clear()
    return codeforcesHandle['result'][0]


def convertUnixTime(unixtime):
    date = dt.datetime.fromtimestamp(unixtime).strftime('%Y-%m-%d')
    time = dt.datetime.fromtimestamp(unixtime).strftime('%H:%M:%S')
    date_time_obj = dt.datetime.strptime(date+" "+time, '%Y-%m-%d %H:%M:%S')
    time = date_time_obj.time()
    time = str((dt.datetime.combine(dt.date(1, 1, 1), time) +
                dt.timedelta(hours=5, minutes=30)).time())
    return date+" "+time


def convertToHour(secondsTime):
    return str(dt.timedelta(seconds=secondsTime))


def contestDetails():
    url = requests.get('https://codeforces.com/api/contest.list')
    jsonData = url.json()
    data = json.dumps(jsonData)
    contests = json.loads(data)
    contestList = []
    count = 0
    for contest in contests['result']:
        if(contest['phase'] == "FINISHED"):
            break
        else:
            contest['startTimeSeconds'] = convertUnixTime(
                contest['startTimeSeconds'])
            contest['durationSeconds'] = convertToHour(
                contest['durationSeconds'])
            contestList.append(contest)
            count += 1
    contestList = contestList[::-1]
    return contestList[0:5]


completedProblems = {}


def getTags(codeforcesHandle, rank):
    url = requests.get(
        'https://codeforces.com/api/user.status?handle='+codeforcesHandle)
    jsonData = url.json()
    data = json.dumps(jsonData)
    submissions = json.loads(data)
    submissions = submissions['result']
    print("fetched")
    visitedProblems = {}
    wrongSubmissions = {}
    for problem in submissions:
        if(problem['verdict'] != 'OK'):
            if(problem['problem']['name'] in visitedProblems):
                continue
            visitedProblems[problem['problem']['name']] = 1
            for tags in problem['problem']['tags']:
                if(tags not in wrongSubmissions):
                    wrongSubmissions[tags] = 1
                else:
                    wrongSubmissions[tags] += 1
        else:
            completedProblems[problem['problem']['name']] = 1
    weakTags = {}
    weaktagsurl = {}
    tagscurl = {}
    minSolvedCount = 0
    maxSolvedCount = 35000
    if(rank < 1200):
        minSolvedCount = 15000
        maxSolvedCount = 18000
    elif(rank < 1400):
        minSolvedCount = 10000
        maxSolvedCount = 16000
    elif(rank < 1600):
        minSolvedCount = 9000
        maxSolvedCount = 14000
    elif(rank < 1900):
        minSolvedCount = 9000
        maxSolvedCount = 12000
    elif(rank < 2100):
        minSolvedCount = 8000
        maxSolvedCount = 10000
    elif(rank < 2400):
        minSolvedCount = 5000
        maxSolvedCount = 7000
    elif(rank < 2600):
        minSolvedCount = 3000
        maxSolvedCount = 5000
    elif(rank < 3000):
        minSolvedCount = 1000
        maxSolvedCount = 3000
    else:
        minSolvedCount = 0
        maxSolvedCount = 2000
    for tags in sorted(wrongSubmissions.items(), key=lambda x: x[1], reverse=True):
        weakTags[tags[0]] = getProblems(
            tags[0], rank, minSolvedCount, maxSolvedCount)
        if(len(weakTags) == 4):
            break
    print("tags done /n browser started")
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    browser = webdriver.Chrome(chrome_options=chrome_options)
    #chrome_options.add_argument("--headless")
    for tags in sorted(wrongSubmissions.items(), key=lambda x: x[1], reverse=True):
        browser.get('https://www.youtube.com/results?search_query=coding+problem+example+on+'+tags[0]+'&page&utm_source=opensearch')
        user_data = browser.find_elements_by_xpath('//*[@id="video-title"]')
        links = []
        for i in user_data:
           links.append(i.get_attribute('href'))
           if len(links) == 4:
             break
        weaktagsurl[tags[0]] = links
        link2 = []
        url = "http://www.google.com/search?q=" + 'hackerearth codemonk '+tags[0]+' algorithm'
        browser.get(url)
        soup = BeautifulSoup(browser.page_source, 'html.parser')
        search = soup.find_all('div', class_="yuRUbf")
        for h in search:
            link2.append(h.a.get('href'))
            if len(link2) == 4:
           	 break
        tagscurl[tags[0]] = link2

        if(len(weaktagsurl) == 4):
            break
    browser.quit()
    print(weakTags,weaktagsurl,tagscurl)

    return weakTags,weaktagsurl,tagscurl



def getProblems(tag, rank, minSolvedCount, maxSolvedCount):
    problems = []
    url = requests.get(
        'https://codeforces.com/api/problemset.problems?tags='+tag)
    jsonData = url.json()
    data = json.dumps(jsonData)
    allData = json.loads(data)
    allProblems = allData['result']['problems']
    allproblemStatistics = allData['result']['problemStatistics']

    count = 0
    lengthOfProblemSet = len(allProblems)
    j = 0
    alreadySuggested = {}
    while(j < lengthOfProblemSet):
        j += 1
        i = random.randint(0, lengthOfProblemSet-1)
        if("points" in allProblems[i] and allProblems[i]['points'] <= 1000):
            continue
        elif (allProblems[i]['index'] == 'A'):
            continue
        if tag in allProblems[i]['tags']:
            if((allProblems[i]['name'] not in alreadySuggested) and (allProblems[i]['name'] not in completedProblems) and allproblemStatistics[i]['solvedCount'] >= minSolvedCount and allproblemStatistics[i]['solvedCount'] <= maxSolvedCount):
                alreadySuggested[allProblems[i]['name']] = 1
                tempList = []
                tempList.append(allProblems[i]['name'])
                tempList.append('https://codeforces.com/problemset/problem/' +
                                str(allProblems[i]['contestId'])+'/'+allProblems[i]['index'])
                problems.append(tempList)
                count += 1
        if(count == 6):
            break
    return problems
