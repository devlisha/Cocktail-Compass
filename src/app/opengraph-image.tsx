import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Cocktail Compass';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: 96, marginBottom: 20 }}>🍸</div>
          <div style={{ fontWeight: 'bold' }}>Cocktail Compass</div>
          <div style={{ fontSize: 32, marginTop: 10, opacity: 0.9 }}>
            Your guide to the world of cocktails
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
