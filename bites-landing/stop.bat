@echo off
echo ==========================================
echo   Stopping Bites Fruit Development Server
echo ==========================================
echo.

taskkill /F /IM node.exe

if %errorlevel% equ 0 (
    echo.
    echo [SUCCESS] Server stopped successfully!
    echo.
) else (
    echo.
    echo [INFO] No server process found or already stopped.
    echo.
)

echo ==========================================
pause