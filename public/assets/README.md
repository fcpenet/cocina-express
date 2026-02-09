# Assets Folder

Place your images and other static assets here.

## Usage in Next.js

To use images from this folder in your components:

```tsx
// For regular img tags
<img src="/assets/your-image.jpg" alt="Description" />

// For Next.js Image component (recommended)
import Image from 'next/image'

<Image
  src="/assets/your-image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

## Suggested Files

- `qr-code.png` - QR code for the menu
- `food-images/` - Folder for food photos
- `logo.png` - Restaurant logo
