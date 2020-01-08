import requests
response = requests.get("http://13.126.147.241:8080/greeting")
print(response)
print(response.text)
