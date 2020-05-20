
@echo off
start /b C:\tools\Cmder\start.bat "cd c:\www/unamipourlavie.be/backend & node server.js" 
-cur_console:s50V:n:t:"backend"

start /b C:\tools\Cmder\start.bat "cd c:\www/unamipourlavie.be/frontend & nodemon"
-cur_console:s50V:n:t:"web"

