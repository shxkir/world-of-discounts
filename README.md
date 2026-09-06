# World of Discounts

A playful, cinematic website for the Cambridge Park grocery / convenience / discount store.

All business facts live in `src/data/store.ts`. Update that file when the owner supplies a logo, catalogue, prices, photos, hours, or social links.

## Content rules

- Do not invent prices. Use `$—` plus `CHECK IN STORE` or `PRICE COMING SOON`.
- Do not invent opening hours. Keep `hours.weekly` as `null` until a real schedule is supplied.
- Do not invent review quotes. Add `text` only when the exact wording is available.
- Product images in `/public/products` are original illustrated placeholders, labelled as demo content.

## Develop

```bash
npm install
npm run dev
```
