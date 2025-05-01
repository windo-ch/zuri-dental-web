
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TermsPage = () => {
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
                <FileText className="h-8 w-8 text-dental-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-dental-800">{t('footer.terms')}</h1>
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
                <p className="text-lg text-dental-700 mb-8">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by Pietrobon & Michel.</p>
                
                <div className="space-y-12">
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">1. Terms</h2>
                    <div className="bg-dental-50 p-6 rounded-lg mb-6">
                      <p className="text-dental-700">By accessing this website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">2. Use License</h2>
                    <p className="text-dental-700 mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Pietrobon & Michel's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                    
                    <ul className="list-disc pl-6 space-y-2 text-dental-700 mb-6">
                      <li>modify or copy the materials;</li>
                      <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                      <li>attempt to decompile or reverse engineer any software contained on Pietrobon & Michel's website;</li>
                      <li>remove any copyright or other proprietary notations from the materials; or</li>
                      <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>
                    
                    <p className="text-dental-700">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Pietrobon & Michel at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
                  </section>
                  
                  <Separator className="my-8" />
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">3. Disclaimer</h2>
                    <div className="bg-white shadow-sm p-6 rounded-lg border border-dental-100 mb-6">
                      <p className="text-dental-700 mb-4">The materials on Pietrobon & Michel's website are provided on an 'as is' basis. Pietrobon & Michel makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                      <p className="text-dental-700">Further, Pietrobon & Michel does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">4. Limitations</h2>
                    <p className="text-dental-700">In no event shall Pietrobon & Michel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pietrobon & Michel's website, even if Pietrobon & Michel or a Pietrobon & Michel authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">5. Accuracy of Materials</h2>
                    <p className="text-dental-700">The materials appearing on Pietrobon & Michel's website could include technical, typographical, or photographic errors. Pietrobon & Michel does not warrant that any of the materials on its website are accurate, complete or current. Pietrobon & Michel may make changes to the materials contained on its website at any time without notice. However Pietrobon & Michel does not make any commitment to update the materials.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">6. Links</h2>
                    <p className="text-dental-700 mb-4">Pietrobon & Michel has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Pietrobon & Michel of the site. Use of any such linked website is at the user's own risk.</p>
                    <div className="bg-dental-50 p-6 rounded-lg">
                      <h3 className="font-medium text-lg text-dental-800 mb-2">External Links Notice</h3>
                      <p className="text-dental-700">When you click on links to third-party websites, you may be leaving our site. We are not responsible for the content or privacy practices of these other sites.</p>
                    </div>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">7. Governing Law</h2>
                    <p className="text-dental-700">These Terms shall be governed and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions. Any legal action or proceeding relating to your access to or use of the website shall be instituted in the courts of Zurich, Switzerland. You and Pietrobon & Michel agree to submit to the jurisdiction of, and agree that venue is proper in, these courts.</p>
                  </section>
                  
                  <section>
                    <h2 className="text-2xl font-display font-semibold text-dental-800 mb-4">8. Contact Information</h2>
                    <p className="text-dental-700 mb-4">If you have any questions about these Terms, please contact us at:</p>
                    
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

export default TermsPage;
