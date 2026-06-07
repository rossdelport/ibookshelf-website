import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: `Terms of Use — ${site.name}`,
  description: `Terms of use for ${site.name}.`,
};

export default function Terms() {
  return (
    <main className="container legal">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
      <h1>Terms of Use</h1>
      <p className="updated">Last updated: June 7, 2026</p>

      <p>
        These are starter terms of use for {site.name}. Please review them with a
        legal professional and adjust them before publishing.
      </p>

      <h2>Acceptance of terms</h2>
      <p>
        By downloading or using {site.name}, you agree to these terms. If you do
        not agree, please do not use the app.
      </p>

      <h2>Use of the app</h2>
      <p>
        {site.name} is provided for your personal, non-commercial use to organize
        and track your book collection. You agree not to misuse the app or
        attempt to disrupt its operation.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The app is provided &quot;as is&quot; without warranties of any kind. We
        are not liable for any loss of data or other damages arising from your
        use of the app.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Reach us at{" "}
        {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : "our support email"}.
      </p>
    </main>
  );
}
