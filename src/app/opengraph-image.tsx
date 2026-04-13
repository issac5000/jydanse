import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "J'y Danse — Club de danse sportive à Gilly";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/logojydanse.png"),
    "base64"
  );
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fcedf4 0%, #f9f4f6 30%, #e7eff9 70%, #d2e2f5 100%)",
        }}
      >
        <img src={logoSrc} height={400} />
      </div>
    ),
    {
      ...size,
    }
  );
}
