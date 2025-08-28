import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.BilditSDK) {
      window.BilditSDK.renderCarousel({
        container: "#bildit-homepage-carousel",
        contentId: "homepage-carousel",
      });
    }
  }, []);

  return (
    <div>
      <div id="bildit-homepage-carousel"></div>

      {/* Load the SDK script */}
      <Script
        src="https://bildit-example.vercel.app/sdk.js"
        strategy="beforeInteractive"
      />
    </div>
  );
}
