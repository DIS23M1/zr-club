# ZR Club — BJJ club member management (PWA)

Zé Radiola Team. Offline, on-device, PIN-encrypted club roster.

## Features (v1)
- **4-digit PIN** lock; database **encrypted** with the PIN (WebCrypto AES-GCM + PBKDF2), stored only on the device.
- **Members:** name, belt (white→black) + stripes 0–4, group, paid/not-paid per month, coach notes, competitions.
- **Groups/sections** (Beginners / Veterans / custom).
- **Attendance** check-in (mark present today); session count, last-seen, "inactive" flag.
- **Payment history** by month (8-month grid) + "unpaid this month" filter.
- **Belt history** with dates + months-in-grade.
- **Dashboard:** totals, paid/due this month, present today, belt distribution, inactive list.
- **Export / Import** backup file (encrypted).
- UA / EN, dark / light, installable PWA, fully offline.

## Run locally
```
cd "ZR Club"
python3 -m http.server 8080
```
Open http://localhost:8080

## Install on iPhone
Open the GitHub Pages URL in Safari → Share → Add to Home Screen.

## Files
- `index.html` — whole app (UI + logic + crypto)
- `manifest.webmanifest`, `sw.js` — PWA / offline
- `icons/` — ZR Team logo icons

> Data lives only in this browser/device (localStorage, encrypted). Use Export regularly to back up.
