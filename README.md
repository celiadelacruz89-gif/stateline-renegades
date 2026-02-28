# Stateline Renegades — Final Package

## Deploy on Vercel
1) Push this repo to GitHub.
2) Vercel → New Project → Import repo.
3) Vercel → Project Settings → Environment Variables:
   - ADMIN_USER = your admin username
   - ADMIN_PASS = your admin password
   - BLOB_READ_WRITE_TOKEN = Vercel Storage → Blob → Tokens → Read/Write token
   - (Optional) NEXT_PUBLIC_BASE_URL = https://YOUR-DOMAIN.com

4) Vercel Storage → Blob:
   - This code uses `access: "public"` when uploading.
   - If your Blob store is set to PRIVATE, switch it to PUBLIC (recommended for galleries).

## Logos not showing
Put your images in `/public/logos/` with these exact names:
- riot.png
- karma.png
- anarchy.png
- blessedmayhem.png
- tball.png

Commit + push → Vercel redeploys → refresh site.

## Why you were seeing “Forbidden / token”
That happens when:
- `BLOB_READ_WRITE_TOKEN` is missing/incorrect in Vercel env vars, OR
- Blob store access is PRIVATE while your code is trying to upload PUBLIC files.

This package is aligned to PUBLIC store + password-protected admin uploads.
