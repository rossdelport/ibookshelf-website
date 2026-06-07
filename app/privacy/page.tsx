import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} handles your data.`,
};

export default function Privacy() {
  return (
    <main className="container legal">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: June 7, 2026</p>

      <p>
        This is a starter privacy policy for {site.name}. Please review it with a
        legal professional and adjust it to accurately reflect how your app
        handles data before publishing to the App Store.
      </p>

      <h2>Information we collect</h2>
      <p>
        {site.name} stores the books and shelves you create directly on your
        device. We do not require an account and we do not collect personal
        information on our servers.
      </p>

      <h2>How your data is used</h2>
      <p>
        Your library data is used solely to provide the features of the app on
        your device. It is never sold or shared with third parties.
      </p>

      <h2>Data storage</h2>
      <p>
        Your data remains on your device and, if you enable it, may be backed up
        through Apple&apos;s iCloud using your own Apple ID. We have no access to
        that backup.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about this policy, contact us at{" "}
        {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : "our support email"}.
      </p>
    </main>
  );
}
