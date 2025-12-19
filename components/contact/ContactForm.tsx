'use client';

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("Message sent successfully. We’ll get back to you soon.");
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto space-y-6 bg-surface border border-white/10 p-8 rounded-2xl"
    >
      <div>
        <label className="block text-sm mb-2">Name</label>
        <input
          name="name"
          required
          className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl outline-none"
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl outline-none"
        />
      </div>

      <div>
        <label className="block text-sm mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-xl bg-white text-black font-semibold disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-green-400 text-sm">{success}</p>}
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </form>
  );
}
