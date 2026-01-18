import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = DATA.name;
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
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: "60px",
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)",
                    position: "relative",
                }}
            >
                {/* Content */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {/* Top section */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "32px",
                                fontWeight: 700,
                                color: "#ffffff",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            {DATA.name}
                        </span>
                        <span
                            style={{
                                fontSize: "20px",
                                fontWeight: 500,
                                color: "#18CCFC",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                            }}
                        >
                            AI Engineer
                        </span>
                    </div>

                    {/* Middle section with description */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            maxWidth: "900px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "28px",
                                fontWeight: 400,
                                color: "rgba(255,255,255,0.85)",
                                lineHeight: 1.5,
                                margin: 0,
                            }}
                        >
                            {DATA.description}
                        </p>
                    </div>

                    {/* Bottom section with domain */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "12px",
                            }}
                        >
                            {["AI Agents", "RAG", "Cloud", "Full-Stack"].map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        color: "rgba(255,255,255,0.6)",
                                        padding: "6px 14px",
                                        borderRadius: "20px",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        background: "rgba(255,255,255,0.05)",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <span
                            style={{
                                fontSize: "18px",
                                fontWeight: 500,
                                color: "rgba(255,255,255,0.5)",
                            }}
                        >
                            denorjhan.com
                        </span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
