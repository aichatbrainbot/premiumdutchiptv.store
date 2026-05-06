import { ImageResponse } from 'next/og'
 
export function generateImageMetadata() {
  return [
    {
      id: 'small',
      size: { width: 16, height: 16 },
      alt: 'Premium IPTV',
      contentType: 'image/png',
    },
    {
      id: 'medium',
      size: { width: 32, height: 32 },
      alt: 'Premium IPTV',
      contentType: 'image/png',
    },
    {
      id: 'large',
      size: { width: 48, height: 48 },
      alt: 'Premium IPTV',
      contentType: 'image/png',
    },
  ]
}
 
export default function Icon({ id }: { id: string }) {
  // Define dimensions based on the id
  let width = 32;
  let height = 32;
  if (id === 'small') { width = 16; height = 16; }
  if (id === 'large') { width = 48; height = 48; }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          border: '1px solid rgba(59, 130, 246, 0.3)', // Subtle blue border
          boxShadow: 'inset 0 0 10px rgba(59, 130, 246, 0.2)',
        }}
      >
        <svg
          width={width * 0.6}
          height={height * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3b82f6" // Blue-500
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))' }}
        >
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      </div>
    ),
    {
      width,
      height,
    }
  )
}
