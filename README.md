# Java-Springboot

Github link:
https://github.com/coepavi/Java-Springboot

1.	Create Ubuntu instance in AWS
2.	Download below softwares
JDK
sudo apt install default-jre
sudo apt install default-jdk
Gradle
                sudo apt install gradle
node js, npm, express, body-parser, requests, python, python request
3.	Git clone
git clone https://github.com/spring-guides/gs-rest-service.git
4.	Build project in spring boot
Refer - https://spring.io/guides/gs/rest-service/
cd gs-rest-service/
cd initial/
cd src/main/java/hello/
5.	Inside hello folder. Create below 4 files
Application.java  Greeting.java  GreetingController.java  build.gradle
6.	For above 4 files, Copy details from https://spring.io/guides/gs/rest-service/
7.	Go to folder cd initial and type below command
./gradlew bootRun
8.	Above command will run spring boot server (apache) 
> Task :bootRun

  .   ____          _            __ _ _
/\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
\\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
=========|_|==============|___/=/_/_/_/
:: Spring Boot ::        (v2.2.1.RELEASE)

2020-01-08 08:59:47.646  INFO 19077 --- [           main] hello.Application                        : Starting Application on ip-172-31-8-30 with PID 19077 (/home/ubuntu/spring-boot/gs-rest-service/initial/build/classes/java/main started by root in /home/ubuntu/spring-boot/gs-rest-service/initial)
2020-01-08 08:59:47.649  INFO 19077 --- [           main] hello.Application                        : No active profile set, falling back to default profiles: default
2020-01-08 08:59:48.714  INFO 19077 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2020-01-08 08:59:48.722  INFO 19077 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2020-01-08 08:59:48.723  INFO 19077 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.27]
2020-01-08 08:59:48.800  INFO 19077 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2020-01-08 08:59:48.800  INFO 19077 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 1091 ms
2020-01-08 08:59:49.295  INFO 19077 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2020-01-08 08:59:49.447  INFO 19077 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2020-01-08 08:59:49.452  INFO 19077 --- [           main] hello.Application                        : Started Application in 2.258 seconds (JVM running for 2.74)
<=========----> 75% EXECUTING [49s]
> :bootRun

9.	Testing 
Via UI / browser
http://localhost:8080/greeting
via python
import requests
response = requests.get("http://13.126.147.241:8080/greeting")
print(response)
print(response.text)

via NodeJS
var express = require("express")
var app = express()
var body = require("body-parser")
var request = require("request");
app.use(body.urlencoded({extended:true}))
app.use(body.json());

request.get({
    headers: {'content-type': 'application/json'},
    url: 'http://13.126.147.241:8080/greeting'
}, function(error, response, body){
  console.log(body)
});


