
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const TermsPage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-dental-50 py-12">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-dental-800">{t('footer.terms')}</h1>
            <div className="h-1 w-20 bg-dental-500 mb-8"></div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-4xl px-4 py-12">
          <div className="prose prose-dental max-w-none">
            <h2>Terms of Service</h2>
            <p className="text-lg text-gray-600 mb-6">Last updated: May 1, 2025</p>
            
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the website operated by Pietrobon & Michel.</p>
            
            <h3>1. Terms</h3>
            <p>By accessing this website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
            
            <h3>2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Pietrobon & Michel's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Pietrobon & Michel's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            
            <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Pietrobon & Michel at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
            
            <h3>3. Disclaimer</h3>
            <p>The materials on Pietrobon & Michel's website are provided on an 'as is' basis. Pietrobon & Michel makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            <p>Further, Pietrobon & Michel does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
            
            <h3>4. Limitations</h3>
            <p>In no event shall Pietrobon & Michel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Pietrobon & Michel's website, even if Pietrobon & Michel or a Pietrobon & Michel authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            
            <h3>5. Accuracy of Materials</h3>
            <p>The materials appearing on Pietrobon & Michel's website could include technical, typographical, or photographic errors. Pietrobon & Michel does not warrant that any of the materials on its website are accurate, complete or current. Pietrobon & Michel may make changes to the materials contained on its website at any time without notice. However Pietrobon & Michel does not make any commitment to update the materials.</p>
            
            <h3>6. Links</h3>
            <p>Pietrobon & Michel has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Pietrobon & Michel of the site. Use of any such linked website is at the user's own risk.</p>
            
            <h3>7. Governing Law</h3>
            <p>These Terms shall be governed and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions. Any legal action or proceeding relating to your access to or use of the website shall be instituted in the courts of Zurich, Switzerland. You and Pietrobon & Michel agree to submit to the jurisdiction of, and agree that venue is proper in, these courts.</p>
            
            <h3>8. Contact Information</h3>
            <p>If you have any questions about these Terms, please contact us at:</p>
            
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

export default TermsPage;
