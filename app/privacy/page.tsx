import Link from "next/link";
import type { Metadata } from "next";
import { site, legal } from "@/site.config";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} collects, uses, stores, shares, and protects your data.`,
};

export default function Privacy() {
  const email = legal.contactEmail;

  return (
    <main className="container legal">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: {legal.effectiveDate}</p>

      <p className="lead">
        This Privacy Policy explains how {legal.operator}, the developer of {site.name}{" "}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), collects, uses, stores,
        shares, and protects your information when you use the {site.name} mobile app and this
        website (together, the &ldquo;Service&rdquo;).
      </p>

      <div className="legal-note">
        In short: {site.name} keeps your account and book library securely in the cloud so it
        syncs across your devices. We do <strong>not</strong> sell your data, show ads, or use
        any third-party advertising or analytics trackers.
      </div>

      <h2>Who we are</h2>
      <p>
        {site.name} is a personal book-library app that lets you scan, organize, and track the
        books you own so you always know your collection — and never buy the same book twice.
        For any privacy question or request, contact us at{" "}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>

      <h2>Information we collect</h2>
      <p>
        We only collect what we need to run {site.name}. The table below summarizes the data
        we handle, followed by more detail on each category.
      </p>

      <table className="legal-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Examples</th>
            <th>Why we use it</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account &amp; sign-in</td>
            <td>
              Email address and password (the password is stored encrypted/hashed by our
              authentication provider), or — if you use Google sign-in — your Google account
              email and basic profile details. A unique account identifier.
            </td>
            <td>Create and secure your account, and sign you in.</td>
          </tr>
          <tr>
            <td>Library &amp; reading data</td>
            <td>
              Books you add (ISBN, title, author, cover, page count, publication year, genres,
              description) and your entries about them: shelf/status, current page, ratings,
              reviews, personal notes, and start/finish dates.
            </td>
            <td>The core feature — store and sync your library and reading progress.</td>
          </tr>
          <tr>
            <td>Profile &amp; personalization</td>
            <td>
              Username, favourite genres, chosen avatar, &ldquo;soul animal&rdquo;, library
              size, and any custom shelves you create.
            </td>
            <td>Personalize the app and keep it consistent across your devices.</td>
          </tr>
          <tr>
            <td>Custom cover photos</td>
            <td>
              If you choose a cover from your photo library, that image is uploaded to our
              cloud storage and served from a publicly accessible URL.
            </td>
            <td>Display and sync your custom covers across devices.</td>
          </tr>
          <tr>
            <td>Purchases</td>
            <td>
              If you buy Premium, your subscription/entitlement status. Payment is processed by
              Apple or Google — we never receive your full card details.
            </td>
            <td>Provide and restore Premium features.</td>
          </tr>
          <tr>
            <td>Camera (not stored)</td>
            <td>
              A live camera feed used only to read a book&rsquo;s barcode on your device.
            </td>
            <td>
              Scan barcodes to add books. The image is processed on your device and is not
              stored or sent to us.
            </td>
          </tr>
          <tr>
            <td>Technical &amp; connection</td>
            <td>
              Network connectivity status, and a sign-in token and pending-changes queue stored
              locally on your device.
            </td>
            <td>Keep your library reliably synced and keep you signed in.</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>We do not collect</strong> your precise location, your contacts, or advertising
        identifiers, and we do not use third-party advertising networks or third-party
        analytics SDKs.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>Provide, operate, and maintain the Service — including storing and syncing your library.</li>
        <li>Authenticate you and keep your account secure.</li>
        <li>Provide, restore, and manage Premium features you purchase.</li>
        <li>Respond to your support requests and send you important service notices.</li>
        <li>Detect, prevent, and address technical issues, fraud, or misuse.</li>
        <li>Comply with our legal obligations.</li>
      </ul>
      <p>
        For users in the EEA, UK, and other regions where this applies, our legal bases are:
        performance of our agreement with you (our Terms), our legitimate interests in
        operating and securing the Service, your consent (for example, camera and photo
        access), and compliance with law.
      </p>

      <h2>Where your data is stored and who processes it</h2>
      <p>
        Your account and library are stored using <strong>Supabase</strong>, our hosting,
        database, authentication, and file-storage provider. Access is restricted by per-user
        security rules so that only you, signed in to your own account, can read or change your
        data — with the exception of custom cover images, which are served from a public URL so
        they can load across your devices.
      </p>

      <h3>Third-party services</h3>
      <ul>
        <li>
          <strong>Supabase</strong> — hosting, database, authentication, and file storage for
          your account and library.
        </li>
        <li>
          <strong>Google</strong> — Google Sign-In (only if you choose it) and the Google Books
          API. When you scan or search for a book, the ISBN or search text is sent to Google to
          return book details. Governed by Google&rsquo;s Privacy Policy.
        </li>
        <li>
          <strong>Open Library (Internet Archive)</strong> — book details and cover images. If
          a book isn&rsquo;t found via Google, the ISBN is sent to Open Library.
        </li>
        <li>
          <strong>Apple App Store / Google Play</strong> — process Premium purchases and
          subscriptions under their own terms and privacy policies.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> sell or rent your personal data. Where we share data with a
        service provider, they are required to protect it to a standard at least equal to this
        policy and to use it only to provide their service to us.
      </p>

      <h2>Data retention</h2>
      <p>
        We keep your account and library data for as long as your account is active. If you
        delete your account (see below), we permanently delete your data within 30 days, except
        where we are required to retain limited records to meet legal, tax, or accounting
        obligations. Data cached locally on your device is removed when you sign out or
        uninstall the app.
      </p>

      <h2>Your rights and choices</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, export, or
        delete your personal data, to object to or restrict certain processing, and to withdraw
        consent. To exercise any of these, email us at <a href={`mailto:${email}`}>{email}</a>.
        You may also lodge a complaint with your local data-protection authority (in Australia,
        the Office of the Australian Information Commissioner).
      </p>

      <h3>Deleting your account and data</h3>
      <p>
        You can delete your account and all associated cloud data at any time from within the
        {" "}{site.name} app (in your profile / account settings), or by emailing us at{" "}
        <a href={`mailto:${email}`}>{email}</a>. Once your request is confirmed, we permanently
        delete your account and library data within 30 days.
      </p>

      <h2>App permissions</h2>
      <p>
        {site.name} requests the following device permissions, which are optional and used only
        for the stated purpose. You can grant or revoke them at any time in your device
        settings, though some features won&rsquo;t work without them:
      </p>
      <ul>
        <li>
          <strong>Camera</strong> — to scan book barcodes and add them to your library.
        </li>
        <li>
          <strong>Photo library</strong> — only when you choose to set a custom cover image for
          a book.
        </li>
      </ul>

      <h2>Security</h2>
      <p>
        We protect your data in transit using HTTPS/TLS encryption, store passwords using
        industry-standard hashing through our authentication provider, and restrict access to
        your records with per-user access controls. No method of transmission or storage is
        completely secure, but we work to protect your information and to address any issues
        promptly.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        {site.name} is not directed to children under 13 (or the minimum age required in your
        country — for example, 16 in parts of the EEA). We do not knowingly collect personal
        data from children. If you believe a child has provided us with personal data, contact
        us at <a href={`mailto:${email}`}>{email}</a> and we will delete it.
      </p>

      <h2>International data transfers</h2>
      <p>
        Your data may be processed and stored on servers located outside your country, including
        the data centres operated by our service providers. Where required, we rely on
        appropriate safeguards to protect your data when it is transferred internationally.
      </p>

      <h2>This website</h2>
      <p>
        This marketing website does not use cookies, third-party analytics, or tracking. It only
        opens your email app if you choose to contact us.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will revise the &ldquo;Last
        updated&rdquo; date above and, for material changes, provide notice in the app or on
        this site. Your continued use of the Service after an update means you accept the
        revised policy.
      </p>

      <h2>Contact us</h2>
      <p>
        {legal.operator} (trading as {site.name})
        <br />
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </main>
  );
}
