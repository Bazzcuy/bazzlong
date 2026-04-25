@echo off
echo Mengirim perubahan ke GitHub...

:: Menambahkan semua perubahan
git add .

:: Membuat commit dengan pesan otomatis (tanggal dan waktu)
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set date=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2%
set time=%datetime:~8,2%:%datetime:~10,2%:%datetime:~12,2%

git commit -m "Auto-update pada %date% %time%"

:: Push ke GitHub
git push origin main

echo.
echo Selesai! Perubahan sudah dipush ke GitHub.
pause
