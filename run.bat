@echo off
REM Array of suites
@REM rd /s /q ./allure-results
set "suites=login"

REM loop through the array and run npm commands
for %%s in (%suites%) do (
    call npm run %%s
)

REM generate and serve allure report
call npm run publish