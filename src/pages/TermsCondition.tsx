import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="p-6 sm:p-10 md:p-16 lg:p-20">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-red-500 text-3xl font-bold">Terms and Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Welcome to TheHomy</h2>
          <p className="mb-4">
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all
            Agreements: "Client", "You", and "Your" refer to you, the person logged on to this Website and compliant with the
            Company's terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us" refer to our Company. "Party",
            "Parties", or "Us" refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration
            of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client's needs in respect of the provision of the Company's stated services, in accordance
            with and subject to, prevailing law of in.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Cookies</h2>
          <p className="mb-4">
            We employ the use of cookies by accessing TheHomy. You agreed to use cookies in agreement with TheHomy's Privacy Policy.
            Most interactive websites use cookies to let us retrieve the user's details for each visit. Our Website uses cookies to
            enable the functionality of certain areas to make it easier for people visiting our Website. Some of our
            affiliate/advertising partners may also use cookies.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">License</h2>
          <p className="mb-4">
            Unless otherwise stated, TheHomy and/or its licensors own the intellectual property rights for all material on Thehomy.in.
            All intellectual property rights are reserved. You may access this from Thehomy.in. It is for your own personal use,
            subject to restrictions set in these terms and conditions.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>You must not republish material from Thehomy.in</li>
            <li>You must not sell, rent or sub-license material from Thehomy.in</li>
            <li>You must not reproduce, duplicate or copy material from Thehomy.in</li>
            <li>You must not redistribute content from Thehomy.in</li>
          </ul>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">User Comments</h2>
          <p className="mb-4">
            Parts of this Website offer an opportunity for users to post and exchange opinions and information in certain areas of the
            Website. TheHomy does not filter, edit, publish or review Comments prior to their presence on the Website. Comments do
            not reflect the views and opinions of TheHomy, its agents and/or affiliates. Comments reflect the views and opinions of
            the person who posts their views and opinions. To the extent permitted by applicable laws, The Homy shall not be liable
            for the Comments or any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of
            and/or appearance of the Comments on this Website.
          </p>
          <p className="mb-4">
            TheHomy reserves the right to monitor all Comments and to remove any Comments that can be considered inappropriate,
            offensive or cause a breach of these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Hyperlinking to our Content</h2>
          <p className="mb-4">
            The following organizations may link to our Website without prior written approval:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other
              listed businesses and
            </li>
            <li>
              System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity
              fundraising groups, which may not hyperlink to our Web site.
            </li>
          </ul>
          <p className="mb-4">
            We will approve link requests from these organizations if we decide that: the link would not make us look unfavorably to
            ourselves or our accredited businesses; the organization does not have any negative records with us; the benefit to us
            from the visibility of the hyperlink compensates for the absence of TheHomy; and the link is in the context of general
            resource information.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">iFrames</h2>
          <p className="mb-4">
            Without prior approval and written permission, you may not create frames around our web pages that alter in any way the
            visual presentation or appearance of our Website.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Content Liability</h2>
          <p className="mb-4">
            We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against
            all claims raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or
            criminal or which infringes, otherwise violates, or advocates the infringement or other violation of any third-party rights.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Reservation of Rights</h2>
          <p className="mb-4">
            We reserve the right to request that you remove all links or any particular link to our Website. You approve immediately
            removing all links to our Website upon request. We also reserve the right to amend these terms and conditions and their
            linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking
            terms and conditions.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Removal of links from our Website</h2>
          <p className="mb-4">
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment.
            We will consider requests to remove links, but we are not obligated to do so or to respond to you directly. We do not
            ensure that the information on this Website is correct, nor do we warrant its completeness or accuracy, nor do we promise
            to ensure that the Website remains available or that the material on the Website is kept up to date.
          </p>

          <h2 className="text-2xl font-bold secondaryFont text-red-500 mb-4">Disclaimer</h2>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to
            our Website and the use of this Website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p className="mb-4">
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer (a) are subject to the
            preceding paragraph and (b) govern all liabilities arising under the disclaimer, including liabilities arising in
            contract, in tort and for breach of statutory duty.
          </p>
          <p>
            As long as the Website and the information and services on the Website are provided free of charge, we will not be liable
            for any loss or damage of any nature.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TermsAndConditions;