import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Pixels and Code - Frontend Engineering & Design Systems Consultant";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
            opacity: 0.15,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
            opacity: 0.1,
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Logo/Brand mark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
              }}
            />
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#f8fafc",
              margin: 0,
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Pixels and Code
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "32px",
              fontWeight: 400,
              color: "#94a3b8",
              margin: 0,
              marginBottom: "48px",
            }}
          >
            Frontend Engineering & Design Systems
          </p>

          {/* Accent line */}
          <div
            style={{
              width: "120px",
              height: "4px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #06b6d4 0%, #0891b2 100%)",
            }}
          />
        </div>

        {/* Bottom tagline */}
        <p
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            fontWeight: 400,
            color: "#64748b",
            margin: 0,
          }}
        >
          React &bull; React Native &bull; TypeScript &bull; Design Systems
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
