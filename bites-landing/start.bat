@echo off
cd /d "%~dp0"
echo ==========================================
echo   Starting Bites Fruit Development Server
echo ==========================================
echo.
echo Server will be accessible at:
echo   - Local:   http://localhost:5173
echo   - Network: http://192.168.1.92:5173
echo.
echo Press Ctrl+C to stop the server
echo.
echo ==========================================
echo.

npm run dev -- --host

pause
