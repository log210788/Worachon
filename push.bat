@echo off
set "PATH=C:\Program Files\Git\cmd;C:\Users\Administrator\.gemini\antigravity\bin\git\cmd;%PATH%"
cd /d "D:\Documents\Worachon P"
echo ========================================================
echo Pushing Worachon's English Sanctuary to GitHub Pages
echo ========================================================
echo.
git add -A
git commit -m "Update Worachon's English Sanctuary notes for Lesson 02 (Oct 23, 2026)"
git push origin main
git push origin main:gh-pages
echo.
echo ========================================================
echo Done! Both main and gh-pages branches updated on GitHub.
echo ========================================================
pause