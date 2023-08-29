import { component$ } from '@builder.io/qwik';
import { $translate as t } from 'qwik-speak';
import type { DocumentHead } from '@builder.io/qwik-city';
import Section, {
  SectionHeader,
  SectionPadding,
} from '../../../components/section/section';
import { ContainerTheme } from '../../../components/container/container';
import Button, { ButtonTheme } from '../../../components/button/button';
import Navbar from '../../../components/navbar/navbar';
import Footer from '../../../components/footer/footer';

export const nav = [
  {
    label: 'Privacy policy',
    href: '#privacy-policy',
    bold: true,
  },
  {
    label: 'Definitions',
    href: '#definitions',
  },
  {
    label: 'Information collection and use',
    href: '#information-collection-and-use',
  },
  {
    label: 'Types of data collected',
    href: '#types-of-data-collected',
  },
  {
    label: 'Use of data',
    href: '#use-of-data',
  },
  {
    label:
      'Legal Basis for Processing Personal Data under the General Data Protection Regulation (GDPR)',
    href: '#legal-bassis-GDPR',
  },
  {
    label: 'Retention of data',
    href: '#retention-of-data',
  },
  {
    label: 'Transfer of data',
    href: '#transfer-of-data',
  },
  {
    label: 'Disclosure of data',
    href: '#disclosure-of-data',
  },
  {
    label: 'Security of data',
    href: '#disclosure-of-data',
  },
  {
    label:
      'Our Policy on "Do Not Track" Signals under the California Online Protection Act (CalOPPA)',
    href: '#do-not-track-CalOPPA',
  },
  {
    label:
      'Your Data Protection Rights under the General Data Protection Regulation (GDPR)',
    href: '#data-protection-regulation-GDPR',
  },
  {
    label: 'Service providers',
    href: '#service-providers',
  },
  {
    label: 'Links to other sites',
    href: '#links-to-other-sites',
  },
  {
    label: "Children's privacy",
    href: '#childrens-privacy',
  },
  {
    label: 'Changes to this privacy policy',
    href: '#changes-to-privacy-policy',
  },
  {
    label: 'Contact us',
    href: '#contact-us',
  },
];

export default component$(() => {
  const theme = ContainerTheme.NONE;
  return (
    <>
      <Navbar theme={theme} />
      <div class="block  h-[80px] md:h-[20px] z-[999]"></div>
      <Section padding={SectionPadding.TOP} theme={theme}>
        <div class="flex gap-12">
          <ul class="hidden md:flex flex-col w-1/3 gap-6">
            {nav.map((item) => {
              return (
                <li>
                  <Button
                    href={item.href}
                    type="link"
                    align="left"
                    theme={ButtonTheme.SUB_NAV}
                    bold={item.bold}
                  >
                    {item.label}
                  </Button>
                </li>
              );
            })}
          </ul>
          <div class="w-full article">
            <h2 id="privacy-policy">Privacy policy</h2>
            <p>
              <strong>Valor Labs Inc.</strong> ("us", "we", or "our") operates
              the{' '}
              <a href="https://modulefederation.com">
                www.modulefederation.com
              </a>{' '}
              website (here referred to as the "Site").
            </p>
            <p>
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data. We use your data
              to provide and improve the Site. By using the Site, you agree to
              the collection and use of information in accordance with this
              policy. Unless otherwise defined in this Privacy policy, the terms
              used in this Privacy policy have the same meanings as in our Terms
              and Conditions, accessible from{' '}
              <a href="https://modulefederation.com">
                www.modulefederation.com
              </a>
              .
            </p>
            <h2 id="definitions">Definitions</h2>
            <ul>
              <li>
                Site: is the{' '}
                <a href="https://modulefederation.com">
                  www.modulefederation.com
                </a>{' '}
                website operated by<strong> </strong>Valor Labs Inc.
              </li>
              <li>
                Personal Data: means data about a living individual who can be
                identified from that data (or from those and other information
                either in our possession or likely to come into our possession).
              </li>
              <li>
                Usage Data: is data collected automatically either generated by
                the Use of the Site.
              </li>
              <li>
                Cookies: are small files stored on your device (computer or
                mobile device).
              </li>
              <li>
                Data Controller: means the natural or legal person who (either
                alone or jointly, or commonly with other persons) determines the
                purposes for which and the manner in which any personal
                information is, or is to be, processed.
              </li>
              <ul>
                <li>
                  For the purpose of this Privacy policy, we are a Data
                  Controller of your Personal Data.
                </li>
              </ul>
              <li>
                Data Processor (or Service Provider) means any natural or legal
                person who processes the data on behalf of the Data Controller.
              </li>
              <ul>
                <li>
                  We may use the services of various Service Providers in order
                  to process your data more effectively.
                </li>
              </ul>
              <li>
                Data Subject: is any living individual using our Site and is the
                subject of Personal Data.
              </li>
            </ul>
            <h2 id="information-collection-and-use">
              Information collection and use
            </h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Site for you.
            </p>
            <h2 id="types-of-data-collected">Types of data collected</h2>
            <p>
              <strong>Personal Data</strong>
            </p>
            <p>
              While using the Site, we may ask you to provide us with certain
              personally identifiable information used to contact or identify
              you ("Personal Data"). Personally identifiable information may
              include, but is not limited to:
            </p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Cookies and Usage Data</li>
            </ul>
            <p>
              We may use your Personal Data to contact you with newsletters,
              marketing or promotional materials, and other information that may
              serve you. You may opt out of receiving any or all of these
              communications by following the unsubscribe link or instructions
              in any email we send.
            </p>
            <p>
              <strong>Usage Data</strong>
            </p>
            <p>
              We may also collect information on how the Site is accessed and
              used ("Usage Data"). This Usage Data may include information such
              as your computer's Internet Protocol address (e.g., IP address),
              browser type, browser version, the pages of our Site that you
              visit, the time and date of your visit, the time spent on those
              pages, unique device identifiers and other diagnostic data.
            </p>
            <p>
              <strong>Tracking &amp; Cookies Data</strong>
            </p>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our Site and hold certain information.Cookies are
              files with a small amount of data which may include a unique
              anonymous identifier. Cookies are sent to your browser from a
              website and stored on your device. Other tracking technologies are
              also used, such as beacons, tags, and scripts for collecting and
              tracking information and to improve and analyze our Site.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is sent. However, if you do not accept cookies, you
              may not be able to use some portions of our Site. Examples of
              Cookies we use:
            </p>
            <ul>
              <li>
                Session Cookies. We use Session Cookies to operate our Site.
              </li>
              <li>
                Preference Cookies. We use Preference Cookies to remember your
                preferences and various settings.
              </li>
              <li>
                Security Cookies. We use Security Cookies for security purposes.
              </li>
            </ul>
            <h2 id="use-of-data">Use of data</h2>
            <p>Valor Labs Inc. uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Site</li>
              <li>
                To allow you to participate in interactive features of our Site
                when you choose to do so
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information so that we can
                improve our Site
              </li>
              <li>To monitor the usage of our Site</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide invoices or receipts of approved transactions</li>
              <li>
                To provide you with news, special offers, and general
                information about other goods, services, and events which we
                offer that are similar to those that you have already purchased
                or enquired about unless you have opted not to receive such
                information
              </li>
            </ul>
            <h2 id="legal-bassis-GDPR">
              Legal basis for processing personal data under the General Data
              Protection Regulation (GDPR)
            </h2>
            <p>
              If you are from the European Economic Area (EEA), Valor Labs
              Inc.'s legal basis for collecting and using the personal
              information described in this Privacy policy depends on the
              Personal Data we collect and the specific context in which we
              collect it. Valor Labs Inc. may process your Personal Data
              because:
            </p>
            <ul>
              <li>We need to perform a contract with you</li>
              <li>You have permitted us to do so</li>
              <li>
                The processing is in our legitimate interests and is not
                overridden by your rights
              </li>
              <li>For payment processing purposes</li>
              <li>To comply with the law</li>
            </ul>
            <h2 id="retention-of-data">Retention of data</h2>
            <p>
              Valor Labs Inc.<strong> </strong>will retain your Personal Data
              only for as long as is necessary for the purposes set out in this
              Privacy policy. We will retain and use your Personal Data to the
              extent necessary to comply with our legal obligations (for
              example, if we are required to retain your data to comply with
              applicable laws), resolve disputes, and enforce our legal
              agreements and policies.
            </p>
            <p>
              Valor Labs Inc. will also retain Usage Data for internal analysis
              purposes. Usage Data remains for a shorter period of time except
              when this data is used for strengthening the security or improving
              the functionality of our Site, or we are legally obligated to
              retain this data for longer.
            </p>
            <h2 id="transfer-of-data">Transfer of data</h2>
            <p>
              Your information, including Personal Data, may be transferred to
              &mdash; and maintained on &mdash; computers located outside your
              state, province, country, or other governmental jurisdiction where
              the data protection laws may differ from those of your
              jurisdiction.
            </p>
            <p>
              If you are located outside the United States and choose to provide
              information to us, please note that we transfer the data,
              including Personal Data, to the United States and process it
              there. Your consent to this Privacy policy, followed by your
              submission of such information, represents your agreement to that
              transfer.
            </p>
            <p>
              Valor Labs Inc.<strong> </strong>will take all the steps
              reasonably necessary to ensure that your data is treated securely
              and in accordance with this Privacy policy, and no transfer of
              your Personal Data will take place to an organization or a country
              unless there are adequate controls in place including the security
              of your data and other personal information.
            </p>
            <h2 id="disclosure-of-data">Disclosure of data</h2>
            <p>
              <strong>Business Transaction</strong>
            </p>
            <p>
              If Valor Labs Inc. is involved in a merger, acquisition, or asset
              sale, your Personal Data may be transferred. We will provide
              notice before your Personal Data is transferred and becomes
              subject to a different Privacy Policy.
            </p>
            <p>
              <strong>Disclosure for Law Enforcement</strong>
            </p>
            <p>
              Under certain circumstances, Valor Labs Inc. may be required to
              disclose your Personal Data. In cases when required to do so by
              law or in response to valid requests by public authorities (e.g.,
              a court or a government agency).
            </p>
            <p>
              <strong>Legal Requirements</strong>
            </p>
            <p>
              Valor Labs Inc. may disclose your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul>
              <li>To comply with a legal obligation</li>
              <li>
                To protect and defend the rights or property of Valor Labs Inc.
              </li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the Site
              </li>
              <li>
                To protect the personal safety of users of the Site or the
                public
              </li>
              <li>To protect against legal liability</li>
            </ul>
            <h2 id="disclosure-of-data">Security of data</h2>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
            <h2 id="do-not-track-CalOPPA">
              Our policy on "Do Not Track" signals under the California Online
              Protection Act (CalOPPA)
            </h2>
            <p>
              We do not support Do Not Track ("DNT"). Do Not Track is a
              preference you can set in your web browser to inform websites that
              you do not want to be tracked. You can enable or disable Do Not
              Track by visiting the Preferences or Settings page of your web
              browser.
            </p>
            <h2 id="data-protection-regulation-GDPR">
              Your data protection rights under the General Data Protection
              Regulation (GDPR)
            </h2>
            <p>
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights. Valor Labs Inc. aims to take
              reasonable steps to allow you to correct, amend, delete, or limit
              the use of your Personal Data.If you wish to be informed about
              what Personal Data we hold about you and if you want it to be
              removed from our systems, please contact us.In certain
              circumstances, you have the following data protection rights:
            </p>
            <ul>
              <li>
                The right to access, update or delete the information we have on
                you. Whenever made possible, you can access, update, or request
                the deletion of your Personal Data directly within your account
                settings section. If you are unable to perform these actions
                yourself, please contact us to assist you.
              </li>
              <li>
                The right of rectification. You have the right to have your
                information rectified if that information needs to be more
                accurate or complete.
              </li>
              <li>
                The right to object. You have the right to object to our
                processing of your Personal Data.
              </li>
              <li>
                The right of restriction. You have the right to request that we
                restrict the processing of your personal information.
              </li>
              <li>
                The right to data portability. You have the right to be provided
                with a copy of the information we have on you in a structured,
                machine-readable, and commonly used format.
              </li>
              <li>
                The right to withdraw consent. You also have the right to
                withdraw your consent at any time, when Valor Labs Inc. relies
                on your consent to process your personal information.
              </li>
            </ul>
            <p>
              Please note that we may ask you to verify your identity before
              responding to such requests.You have the right to complain to a
              Data Protection Authority about our collection and use of your
              Personal Data. For more information, please contact your local
              data protection authority in the European Economic Area (EEA).
            </p>
            <h2 id="service-providers">Service providers</h2>
            <p>
              <strong>Business Transaction</strong>
            </p>
            <p>
              We may employ third-party companies and individuals to facilitate
              our Service ("Service Providers"), provide the Service on our
              behalf, perform Service-related services, or assist us in
              analyzing how our Service is used.These third parties have access
              to your Personal Data only to perform these tasks on our behalf
              and are obligated not to disclose or use it for any other purpose.
            </p>
            <p>
              <strong>Analytics</strong>
            </p>
            <p>
              We may use third-party Service Providers to monitor and analyze
              the use of our Service:
            </p>
            <ul>
              <li>Google Analytics</li>
              <li>
                Google Analytics is a web analytics service offered by Google
                that tracks and reports website traffic. Google uses the data
                collected to track and monitor the use of our Service. This data
                is shared with other Google services. Google may use the
                collected data to contextualize and personalize the ads of its
                advertising network.
              </li>
              <li>
                You can opt out of having made your activity on the Service
                available to Google Analytics by installing the Google Analytics
                opt-out browser add-on. The add-on prevents the Google Analytics
                JavaScript (ga.js, analytics.js, and dc.js) from sharing
                information with Google Analytics about visits activity.
              </li>
              <li>
                For more information on the privacy practices of Google, please
                visit the Google Privacy &amp; Terms web{' '}
                <a
                  href="https://policies.google.com/privacy?hl=en"
                  target="_blank"
                  rel="noopener"
                >
                  page:https://policies.google.com/privacy?hl=en
                </a>
              </li>
            </ul>
            <p>
              <strong>Payments</strong>
            </p>
            <p>
              We may provide paid products and/or services within the Service.
              We use third-party services for payment processing (e.g. payment
              processors).We will not store or collect your payment card
              details. That information is provided directly to our third-party
              payment processors whose use of your personal information is
              governed by their Privacy policy. These payment processors adhere
              to the standards set by PCI-DSS as managed by the PCI Security
              Standards Council, which is a joint effort of brands like Visa,
              MasterCard, American Express, and Discover. PCI-DSS requirements
              help ensure the secure handling of payment information.The payment
              processors we work with are:
            </p>
            <ul>
              <li>Stripe</li>
              <li>
                Their Privacy policy can be viewed at{' '}
                <a
                  href="https://stripe.com/us/privacy"
                  target="_blank"
                  rel="noopener"
                >
                  https://stripe.com/us/privacy
                </a>
              </li>
            </ul>
            <h2 id="links-to-other-sites">Links to other sites</h2>
            <p>
              Our Service may contain links to other sites that we do not
              operate. If you click a third-party link, you will be directed to
              that third party's site. We strongly advise you to review the
              Privacy policy of every site you visit.We have no control over and
              assume no responsibility for the content, privacy policies, or
              practices of any third-party sites or services.
            </p>
            <h2 id="childrens-privacy">Children's privacy</h2>
            <p>
              Our Site does not address anyone under the age of 18
              ("Children").We do not knowingly collect personally identifiable
              information from anyone under the age of 18. If you are a parent
              or guardian and you are aware that your Child has provided us with
              Personal Data, please contact us. If we become aware that we have
              collected Personal Data from children without verification of
              parental consent, we take steps to remove that information from
              our servers.
            </p>
            <h2 id="changes-to-privacy-policy">
              Changes to this privacy policy
            </h2>
            <p>
              We may update our Privacy policy from time to time. You are
              advised to review this Privacy policy periodically for any
              changes. Changes to this Privacy policy are effective when they
              are posted on this page.
            </p>
            <h2 id="contact-us">Contact us</h2>
            <p>
              If you have any questions about this Privacy policy, please
              contact us:
            </p>
            <ul>
              <li>
                By email:{' '}
                <a href="mailto:module-federation@valor-software.com">
                  module-federation@valor-software.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      <Footer theme={theme} />
    </>
  );
});

export const head: DocumentHead = {
  title: 'app.title',
  meta: [
    {
      name: 'description',
      content: 'app.meta.description',
    },
    {
      property: 'og:image',
      content: '/default-og.png',
    },
  ],
};
