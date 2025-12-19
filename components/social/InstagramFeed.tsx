'use client';

import { useEffect } from "react";
import { socialLinks } from "@/data/social";

export default function InstagramFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-6">
        Follow Us on Instagram
      </h2>

      <p className="text-center text-muted mb-12">
        Latest updates, hackathons, and behind-the-scenes at AlgoRiders
      </p>

      <div className="max-w-xl mx-auto">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={`${socialLinks.instagram}`}
          data-instgrm-version="14"
          style={{ background: "#000" }}
        ></blockquote>
      </div>

      <div className="text-center mt-10">
        <a
          href={socialLinks.instagram}
          target="_blank"
          className="inline-block px-6 py-3 rounded-xl border border-white/20 hover:border-white"
        >
          View on Instagram
        </a>
      </div>
    </section>
  );
}
