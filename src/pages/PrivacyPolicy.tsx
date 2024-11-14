import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PrivacyPolicy = () => {
  return (
    <div className="p-6 sm:p-10 md:p-16 lg:p-20">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-red-500 text-3xl secondaryFont">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Welcome to TheHomy, a dedicated service provider committed to safeguarding your privacy. This
            comprehensive Privacy Policy is designed to transparently communicate how we gather, utilize, and
            protect your information when you engage with our website.
          </p>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">Information Collected</h2>
          <p>
            We employ various methods to collect both personal and non-personal information to enhance your user
            experience:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Personal Information: This includes but is not limited to your name, contact details, and other
              relevant information voluntarily provided through forms on our website.
            </li>
            <li>
              Non-Personal Information: We leverage cookies and similar technologies, as detailed in our Cookie
              Policy, during your website visit to gather information that does not personally identify you but
              aids in optimizing our services.
            </li>
          </ul>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">Use of Information</h2>
          <p>Your data serves multiple essential purposes within our operations:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Personalization: We use your information to tailor our services, providing a more personalized and
              relevant experience.
            </li>
            <li>
              Analytics: Aggregated data is employed for analytics, aiding in our website's continuous
              improvement and optimization.
            </li>
          </ul>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">Data Sharing</h2>
          <p>
            We prioritize the confidentiality of your information and may share data with trusted third parties
            strictly for specific purposes, such as marketing and analytics. We assure you that user privacy
            remains a paramount concern.
          </p>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">Security Measures</h2>
          <p>
            The protection of your information is of utmost importance to us. We employ robust security measures
            to prevent unauthorized access, ensuring the confidentiality and integrity of your data. Our
            security protocols are regularly updated to align with industry standards.
          </p>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">User Rights</h2>
          <p>
            We recognize and respect your rights regarding your data. You have the right to access, modify, or
            delete your personal information. Please feel free to contact us for any privacy-related requests,
            and we will promptly address your concerns.
          </p>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally
            identifiable information from anyone under 13. If you are a parent or guardian and know that your
            child has provided us with personal data, please get in touch with us. Suppose we become aware that
            we have collected personal data from anyone under the age of 13 without verification of parental
            consent, in that case, we remove that information from our servers. If we need to rely on consent as
            a legal basis for processing our information and your country requires consent from a parent, we may
            require your parent's consent before we collect and use that information.
          </p>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">Updates to the Policy</h2>
          <p>
            This Privacy Policy is a living document and may be updated periodically. Users will be informed of
            any changes through notifications prominently displayed on our website. We encourage you to review
            the policy regularly to stay informed about how your data is being handled.
          </p>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">Contact Information</h2>
          <p>
            For any privacy concerns, queries, or requests related to your information, please don't hesitate to
            reach out to us at info@thehomy.in. We are dedicated to ensuring a transparent and responsive
            communication channel for all privacy matters.
          </p>

          <h2 className="secondaryFont text-2xl font-bold mt-8 text-red-500">Legal Compliance</h2>
          <p>
            We are committed to adhering to all relevant privacy laws and regulations. Our practices are
            designed to safeguard your rights and information in compliance with applicable legal frameworks.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default PrivacyPolicy