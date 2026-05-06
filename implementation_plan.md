# Fix lint and build errors

## Goal Description

The project currently fails to build and has several lint warnings/errors:
- Unused variables (`row1`, `row2`, `ShieldAlert`, `lang`).
- `any` types in `PricingSection`.
- Unescaped quotes in `TestimonialsSection`.
- Incorrect `params` type in `src/app/[locale]/layout.tsx` causing TypeScript layout validation error.
- Usage of raw `<img>` tags triggering `next/no-img-element` warning.
- `middleware.ts` deprecation warning (optional).

We will resolve these issues, replace raw `<img>` with `next/image`, and ensure the TypeScript build passes.

## User Review Required

[!IMPORTANT]
- Verify that the updated image handling (`next/image`) aligns with your desired image dimensions and layout. Adjust `width`/`height` values if needed.
- Confirm that removing the `lang` prop from `PricingSection` does not affect any external usage.

## Open Questions

[!WARNING]
- Do you want to keep the `ShieldAlert` icon for future use, or should it be completely removed?
- Would you prefer a custom `Image` loader for CDN optimization, or is the default Next.js loader sufficient?

## Proposed Changes

---
### src/components/sections/MoviesPosterSection.tsx
- Remove unused `row1` and `row2` variables.
- Replace `<img>` with Next.js `<Image>` component for better performance.

---
### src/components/sections/PricingSection.tsx
- Remove unused `ShieldAlert` import.
- Replace `any` types with proper interfaces (`Dict`, `WhatsAppDict`).
- Remove unused `lang` prop from component signature.
- Adjust any related code accordingly.

---
### src/components/sections/TestimonialsSection.tsx
- Escape quotes in text to satisfy `react/no-unescaped-entities`.

---
### src/app/[locale]/layout.tsx
- Change `params` type from `Promise<{ locale: Locale }>` to `{ locale: Locale }`.
- Adjust usage accordingly (remove `await`).

---
### src/middleware.ts (optional)
- Rename to `proxy.ts` or remove if not needed.

## Verification Plan

### Automated Tests
- Run `npm run lint` to ensure no lint errors.
- Run `npm run build` to confirm TypeScript compilation succeeds.

### Manual Verification
- Start dev server (`npm run dev`) and visually confirm images load via `next/image`.
- Navigate through pricing toggles to ensure functionality remains.
