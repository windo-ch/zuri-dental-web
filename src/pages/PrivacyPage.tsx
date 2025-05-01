
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPage = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-dental-50 to-white py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="p-3 bg-dental-100 rounded-full mb-6">
                <Shield className="h-8 w-8 text-dental-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-dental-800">{t('footer.privacy')}</h1>
              <div className="h-1 w-24 bg-dental-500 mb-6"></div>
              <p className="text-lg text-dental-600 max-w-2xl">
                Last updated: May 1, 2025
              </p>
            </div>
            
            <div className="flex justify-center mt-4">
              <Link to="/" className="flex items-center text-dental-600 hover:text-dental-800 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span>{t('navigation.backToHome')}</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
          <Card className="border-none shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8 md:p-10">
              <div className="prose prose-dental max-w-none">
                <p className="text-lg text-dental-700 mb-8">At Pietrobon & Michel, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                
                <div className="space-y-12">
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">1. Important Information and Who We Are</h2>
                    <div className="bg-dental-50 p-6 rounded-lg">
                      <p className="text-dental-700">Pietrobon & Michel is responsible for your personal data (collectively referred to as "we", "us" or "our" in this privacy policy).</p>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">2. The Data We Collect About You</h2>
                    <p className="text-dental-700 mb-4">Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-dental-700">
                      <li><span className="font-medium text-dental-800">Identity Data</span> includes first name, last name, username or similar identifier, title.</li>
                      <li><span className="font-medium text-dental-800">Contact Data</span> includes billing address, delivery address, email address and telephone numbers.</li>
                      <li><span className="font-medium text-dental-800">Technical Data</span> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                      <li><span className="font-medium text-dental-800">Usage Data</span> includes information about how you use our website and services.</li>
                      <li><span className="font-medium text-dental-800">Marketing and Communications Data</span> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">3. How We Use Your Personal Data</h2>
                    <p className="text-dental-700 mb-4">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-dental-700">
                      <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                      <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                      <li>Where we need to comply with a legal obligation.</li>
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">4. Data Security</h2>
                    <div className="bg-dental-50 p-6 rounded-lg">
                      <p className="text-dental-700">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">5. Data Retention</h2>
                    <p className="text-dental-700">We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">6. Your Legal Rights</h2>
                    <p className="text-dental-700 mb-4">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {['Request access', 'Request correction', 'Request erasure', 'Object to processing', 'Request restriction', 'Request transfer', 'Withdraw consent'].map((right, index) => (
                        <li key={index} className="bg-white shadow-sm p-4 rounded-lg border border-dental-100 flex items-center">
                          <span className="h-6 w-6 rounded-full bg-dental-100 text-dental-600 flex items-center justify-center text-sm mr-3">
                            {index + 1}
                          </span>
                          <span className="text-dental-800">{right}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">7. Contact Us</h2>
                    <p className="text-dental-700 mb-4">If you have any questions about this privacy policy or our privacy practices, please contact us:</p>
                    
                    <div className="bg-white shadow-sm p-6 rounded-lg border border-dental-100">
                      <address className="not-italic text-dental-700">
                        <p className="font-medium text-dental-800 mb-2">Pietrobon & Michel</p>
                        Bahnhofstrasse 35<br />
                        8001 Zürich, Schweiz<br />
                        Phone: <a href="tel:+41442220565" className="text-dental-500 hover:text-dental-600">+41 44 222 05 65</a>
                      </address>
                    </div>
                  </section>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default PrivacyPage;
