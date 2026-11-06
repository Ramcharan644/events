@echo off
title G. Pullaiah College Event Management System
echo ============================================================
echo   G. PULLAIAH COLLEGE OF ENGINEERING & TECHNOLOGY (GPCET)
echo   College Management & Events Portal
echo ============================================================
echo.
echo Starting local web server...
python --version >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Python detected. Launching local server...
    python server.py
) else (
    echo Python not found in PATH. Opening index.html directly in browser...
    start index.html
)
pause
