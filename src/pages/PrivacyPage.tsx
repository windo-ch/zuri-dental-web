
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const PrivacyPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-dental-50 py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-dental-800">{t('footer.privacy')}</h1>
            <div className="h-1 w-20 bg-dental-500 mb-8"></div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="prose prose-dental max-w-none">
            <h2>Privacy Policy</h2>
            <p className="text-lg text-gray-600 mb-6">Last updated: May 1, 2025</p>
            
            <p>At Pietrobon & Michel, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            
            <h3>1. Important Information and Who We Are</h3>
            <p>Pietrobon & Michel is responsible for your personal data (collectively referred to as "we", "us" or "our" in this privacy policy).</p>
            
            <h3>2. The Data We Collect About You</h3>
            <p>Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier, title.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>
            
            <h3>3. How We Use Your Personal Data</h3>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            
            <h3>4. Data Security</h3>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
            
            <h3>5. Data Retention</h3>
            <p>We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
            
            <h3>6. Your Legal Rights</h3>
            <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
            
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h3>7. Contact Us</h3>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
            
            <address className="not-italic">
              Pietrobon & Michel<br />
              Bahnhofstrasse 35<br />
              8001 Zürich, Schweiz<br />
              Phone: +41 44 222 05 65
            </address>
          </div>
        </div>
      </main>
      
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
