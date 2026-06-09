import Link from "next/link";
import type { Metadata } from "next";
import { site, legal } from "@/site.config";

export const metadata: Metadata = {
  title: `Terms of Use · ${site.name}`,
  description: `The terms that govern your use of ${site.name}.`,
};

export default function Terms() {
  const email = legal.contactEmail;

  return (
    <main className="container legal">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
      <h1>Terms of Use</h1>
      <p className="updated">Last updated: {legal.effectiveDate}</p>

      <p className="lead">
        These Terms of Use (&ldquo;Terms&rdquo;) are a legal agreement between you and{" "}
        {legal.operator}, the developer of {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;), and govern your use of the {site.name} mobile app and this website
        (together, the &ldquo;Service&rdquo;). By downloading, accessing, or using the Service,
        you agree to these Terms and to our{" "}
        <Link href="/privacy">Privacy Policy</Link>. If you do not agree, please do not use the
        Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old (or the minimum age of digital consent in your
        country) to use {site.name}. If you are under the age of majority where you live, you
        may use the Service only with the involvement and consent of a parent or guardian who
        agrees to these Terms.
      </p>

      <h2>2. Your account</h2>
      <p>
        Some features require an account. You agree to provide accurate information, to keep
        your login credentials secure, and to be responsible for all activity under your
        account. Notify us promptly at <a href={`mailto:${email}`}>{email}</a> if you believe
        your account has been accessed without authorization.
      </p>

      <h2>3. Licence to use the app</h2>
      <p>
        Subject to these Terms, we grant you a personal, limited, non-exclusive,
        non-transferable, revocable licence to download and use {site.name} for your own
        personal, non-commercial use, in accordance with the usage rules of the app store you
        downloaded it from.
      </p>

      <h2>4. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Service in any unlawful way or in breach of these Terms;</li>
        <li>infringe the rights of others or upload unlawful, harmful, or infringing content;</li>
        <li>
          reverse engineer, decompile, or attempt to extract the source code of the app, except
          to the extent this restriction is prohibited by applicable law;
        </li>
        <li>interfere with, disrupt, or place undue load on the Service or its infrastructure;</li>
        <li>access the Service through automated means or scrape its data;</li>
        <li>resell, sublicense, or commercially exploit the Service; or</li>
        <li>misuse other people&rsquo;s or third parties&rsquo; data.</li>
      </ul>

      <h2>5. Your content</h2>
      <p>
        You retain ownership of the content you add to {site.name}, such as your library entries,
        notes, reviews, and any custom cover images (&ldquo;Your Content&rdquo;). You grant us a
        worldwide, non-exclusive, royalty-free licence to host, store, copy, and process Your
        Content solely to operate and provide the Service to you (including syncing it across
        your devices and storing custom covers as described in our{" "}
        <Link href="/privacy">Privacy Policy</Link>). You are responsible for Your Content and
        confirm you have the rights necessary to upload it.
      </p>

      <h2>6. Book information and third-party content</h2>
      <p>
        Book details and cover images are provided by third-party sources, including the Google
        Books API and Open Library. This information is provided &ldquo;as is&rdquo;, may be
        incomplete or inaccurate, and remains subject to the rights of its respective owners. We
        do not guarantee its accuracy, completeness, or availability.
      </p>

      <h2>7. Premium, purchases, and subscriptions</h2>
      <p>
        Some features (&ldquo;Premium&rdquo;) require a paid purchase or subscription. Purchases
        are processed by the Apple App Store or Google Play and are subject to their terms.
        Subscriptions renew automatically unless cancelled at least 24 hours before the end of
        the current period; you can manage or cancel a subscription in your App Store or Google
        Play account settings. Prices may change with notice. Refunds are handled by the
        relevant app store under its policies, except for rights you have under law that cannot
        be excluded (see section 11).
      </p>

      <h2>8. Third-party services</h2>
      <p>
        The Service relies on third-party providers (for example, Supabase and Google). We are
        not responsible for third-party services, and your use of them may be subject to their
        own terms and privacy policies.
      </p>

      <h2>9. Intellectual property</h2>
      <p>
        The Service, including {site.name}&rsquo;s software, design, text, graphics, branding,
        and logos, is owned by {legal.operator} or its licensors and is protected by
        intellectual-property laws. Except for the licence granted to you in these Terms, no
        rights are transferred to you.
      </p>

      <h2>10. Availability and changes to the Service</h2>
      <p>
        We may modify, suspend, or discontinue any part of the Service at any time. While we aim
        to keep your data available and synced, you are responsible for keeping your own copies
        of anything important to you.
      </p>

      <h2>11. Disclaimers</h2>
      <p>
        To the maximum extent permitted by law, the Service is provided &ldquo;as is&rdquo; and
        &ldquo;as available&rdquo; without warranties of any kind, whether express or implied.
      </p>
      <p>
        <strong>Australian Consumer Law.</strong> Nothing in these Terms excludes, restricts, or
        modifies any consumer guarantee, right, or remedy you have under the Australian Consumer
        Law or any other law that cannot lawfully be excluded. Where permitted, our liability
        for breach of a non-excludable guarantee is limited to re-supplying the relevant service
        or paying the cost of having it re-supplied.
      </p>

      <h2>12. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we will not be liable for any indirect,
        incidental, special, consequential, or exemplary damages, or for any loss of data,
        profits, or goodwill, arising out of or relating to your use of the Service. To the
        extent our liability cannot be excluded but may be limited, our total liability is
        limited to the greater of the amount you paid us in the 12 months before the claim or
        AUD 50. Nothing in this section limits liability that cannot be limited by law.
      </p>

      <h2>13. Termination</h2>
      <p>
        You may stop using the Service and delete your account at any time. We may suspend or
        terminate your access if you breach these Terms or where necessary to comply with law.
        Provisions that by their nature should survive termination, including ownership,
        disclaimers, and limitation of liability, will survive.
      </p>

      <h2>14. Governing law</h2>
      <p>
        These Terms are governed by the laws in force in {legal.jurisdiction}, and you submit to
        the non-exclusive jurisdiction of its courts. This does not affect any mandatory
        consumer-protection rights you have in your place of residence.
      </p>

      <h2>15. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. We will revise the &ldquo;Last
        updated&rdquo; date above and, for material changes, provide notice in the app or on
        this site. Your continued use of the Service after an update means you accept the
        revised Terms.
      </p>

      <h2>Additional terms for Apple App Store users</h2>
      <p>
        If you download {site.name} from the Apple App Store, the following additional terms
        apply and, to the extent of any conflict, prevail for that download:
      </p>
      <ul>
        <li>
          These Terms are concluded between you and {legal.operator} only, and not with Apple.
          Apple is not responsible for the app or its content.
        </li>
        <li>Apple has no obligation to furnish any maintenance or support for the app.</li>
        <li>
          The licence granted to you is a non-transferable licence to use the app on any
          Apple-branded products that you own or control, as permitted by the Usage Rules in the
          App Store Terms of Service.
        </li>
        <li>
          In the event of any failure of the app to conform to any applicable warranty, you may
          notify Apple, and Apple will refund the purchase price (if any) for the app; to the
          maximum extent permitted by law, Apple has no other warranty obligation with respect
          to the app.
        </li>
        <li>
          {legal.operator}, not Apple, is responsible for addressing any claims relating to the
          app, including product-liability claims, claims that the app fails to conform to legal
          or regulatory requirements, claims under consumer-protection or similar legislation,
          and any third-party claim that the app infringes that party&rsquo;s
          intellectual-property rights.
        </li>
        <li>
          You represent that you are not located in a country subject to a U.S. Government
          embargo or designated as a &ldquo;terrorist-supporting&rdquo; country, and that you
          are not listed on any U.S. Government list of prohibited or restricted parties.
        </li>
        <li>
          Apple and its subsidiaries are third-party beneficiaries of these Terms and, upon your
          acceptance, will have the right to enforce these Terms against you.
        </li>
        <li>
          Direct any questions, complaints, or claims regarding the app to {legal.operator} at{" "}
          <a href={`mailto:${email}`}>{email}</a>.
        </li>
      </ul>

      <h2>Additional terms for Google Play users</h2>
      <p>
        If you download {site.name} from Google Play, your download and use of the app is also
        subject to the Google Play Terms of Service.
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
