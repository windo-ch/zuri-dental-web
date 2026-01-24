import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FloatingBackButton from '@/components/FloatingBackButton';
import SlideNavBarBottom from '@/components/slides/SlideNavBar';
import SlideFooter from '@/components/slides/SlideFooter';
import { SEO } from '@/components/SEO';

interface Hotel {
  hotel_name: string;
  address: string;
  phone_number: string;
  star_rating: number;
  map_link: string;
  amenities: Array<{ value: string }>;
  restaurant_offerings: Array<{ value: string }>;
}

const HotelsPage: React.FC = () => {
  const { t } = useTranslation();
  const hotels: Hotel[] = [
    {
      hotel_name: "Baur au Lac",
      address: "Talstrasse 1, 8001 Zurich",
      phone_number: "+41 44 220 50 20",
      star_rating: 5,
      map_link: "https://www.google.com/maps/place/Baur+au+Lac+Hotel/@47.3673046,8.5367907,16z/data=!3m1!4b1!4m6!3m5!1s0x47900b1764f3ca65:0x99691e58db01a139!8m2!3d47.367301!4d8.539371!16s%2Fg%2F120t3rbj?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
      amenities: [
        { value: "Fitness center with panoramic views of Lake Zurich and the Alps" },
        { value: "Exclusive chauffeur service and private garage" },
        { value: "Pet-friendly amenities and services" },
        { value: "Historic saloon boat 'Tugenia' for lake excursions" },
        { value: "24-hour concierge service" }
      ],
      restaurant_offerings: [
        { value: "Marguita: Mediterranean-inspired fine dining with lake views" },
        { value: "Baur's: A refined reinterpretation of the classic brasserie" },
        { value: "Le Hall: Historic lobby bar known as the 'living room of Zurich'" }
      ]
    },
    {
      hotel_name: "Mandarin Oriental Savoy, Zurich",
      address: "Poststrasse 12, 8001 Zurich",
      phone_number: "+41 43 588 3888",
      star_rating: 5,
      map_link: "https://www.google.com/maps/place/Mandarin+Oriental+Savoy,+Zurich/@47.3698175,8.5371791,17z/data=!3m1!4b1!4m6!3m5!1s0x47900b0bc24a9589:0x1baa4fd499017848!8m2!3d47.3698139!4d8.5397594!16s%2Fg%2F11v3wyr10n?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
      amenities: [
        { value: "State-of-the-art fitness center" },
        { value: "Sophisticated event and meeting spaces" },
        { value: "24-hour concierge and valet parking" },
        { value: "Outdoor terrace and rooftop access" }
      ],
      restaurant_offerings: [
        { value: "ORSINI: Italian fine dining led by Consultant Chef Antonio Guida" },
        { value: "Savoy Brasserie & Bar: All-day French-inspired dining and cocktails" },
        { value: "1838: Rooftop bar with panoramic views of Zurich and the Alps" }
      ]
    },
    {
      hotel_name: "Widder Hotel",
      address: "Rennweg 7, 8001 Zurich",
      phone_number: "+41 44 224 25 26",
      star_rating: 5,
      map_link: "https://www.google.com/maps/place/Widder+Hotel/@47.3725317,8.535235,16z/data=!3m1!4b1!4m6!3m5!1s0x47900a0724b82ffd:0xd4085b50b89749aa!8m2!3d47.3725282!4d8.539843!16s%2Fg%2F122dkl61?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
      amenities: [
        { value: "Modern fitness room and in-room massage services" },
        { value: "Library with over 1,000 volumes" },
        { value: "Complimentary bicycles for guests" },
        { value: "Unique design blending 9 medieval townhouses" },
        { value: "Pet-friendly services and welcome treats" }
      ],
      restaurant_offerings: [
        { value: "Widder Restaurant: 2 Michelin-starred fine dining by Stefan Heilemann" },
        { value: "AuGust: A modern boucherie and bistro specializing in meat dishes" },
        { value: "Widder Bar: Legendary jazz bar with over 250 malt whiskies" },
        { value: "Widder Garden: Seasonal outdoor dining in a quiet courtyard" }
      ]
    },
    {
      hotel_name: "Hotel Glockenhof",
      address: "Sihlstrasse 31, 8001 Zurich",
      phone_number: "+41 44 225 91 91",
      star_rating: 4,
      map_link: "https://www.google.com/maps/place/Hotel+Glockenhof/@47.3729086,8.5339527,16z/data=!3m2!4b1!5s0x47900a06a72ed7a7:0xb6020fff04755327!4m6!3m5!1s0x47900a069880b895:0x2c1fe3d81426573d!8m2!3d47.372905!4d8.536533!16s%2Fg%2F1ym82p5ww?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
      amenities: [
        { value: "Private green courtyard garden, one of the city's largest" },
        { value: "Complimentary high-speed WiFi and air-conditioning in all rooms" },
        { value: "Business center and meeting/banquet facilities" },
        { value: "Valet parking and EV charging stations" },
        { value: "Concierge and 24-hour reception" }
      ],
      restaurant_offerings: [
        { value: "Restaurant Conrad: Traditional Swiss and international cuisine" },
        { value: "GloggeEgge: Modern bistro and bar with a popular summer terrace" },
        { value: "Boulevard-Café: Seasonal outdoor café for drinks and snacks" }
      ]
    },
    {
      hotel_name: "Hotel Storchen",
      address: "Weinplatz 2, 8001 Zurich",
      phone_number: "+41 44 227 27 27",
      star_rating: 5,
      map_link: "https://www.google.com/maps/place/Storchen+Z%C3%BCrich+-+Lifestyle+Boutique+Hotel/@47.3712846,8.5391937,17z/data=!3m2!4b1!5s0x47900a00a9cee833:0xcef06a97209f5516!4m6!3m5!1s0x47900a00aa1e1d17:0x278f576acdd580f5!8m2!3d47.371281!4d8.541774!16s%2Fg%2F1w0sbsng?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
      amenities: [
        { value: "Private pier for boat arrivals on the Limmat river" },
        { value: "Concierge service and personalized guest experiences" },
        { value: "Rooftop terrace with panoramic river and city views" },
        { value: "Valet parking and electric vehicle charging" },
        { value: "Historic building with a tradition dating back 660 years" }
      ],
      restaurant_offerings: [
        { value: "La Rôtisserie: 1 Michelin-starred fine dining restaurant" },
        { value: "The Nest: Rooftop bar serving light snacks and cocktails" },
        { value: "Barchetta: Riverside bar and lounge for coffee and aperitifs" },
        { value: "Cigar Bar: Sophisticated lounge for premium tobacco products" }
      ]
    },
    {
      hotel_name: "Hotel Kindli",
      address: "Pfalzgasse 1, 8001 Zurich",
      phone_number: "+41 43 888 76 78",
      star_rating: 3,
      map_link: "https://www.google.com/maps/place/Hotel+Kindli/@47.3723985,8.5380686,17z/data=!4m10!1m2!2m1!1shotel+kindli!3m6!1s0x47900a07477f8e17:0x26a8c117a511a3eb!8m2!3d47.3724547!4d8.5406447!15sCgxob3RlbCBraW5kbGlaDiIMaG90ZWwga2luZGxpkgEFaG90ZWyaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlhNMDlIYzNGUlJSQULgAQD6AQQIABAn!16s%2Fg%2F1tc__d8m?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
      amenities: [
        { value: "Elegant guest library with a curated selection of books" },
        { value: "Complimentary high-speed WiFi and custom-made mattresses" },
        { value: "Personalized concierge services in a boutique setting" },
        { value: "Complimentary soft drinks from the in-room minibar" }
      ],
      restaurant_offerings: [
        { value: "Restaurant Kindli: Classic Swiss cuisine, including Zürcher Geschnetzeltes" }
      ]
    },
    {
      hotel_name: "Hotel Seidenhof",
      address: "Sihlstrasse 9, 8001 Zurich",
      phone_number: "+41 44 228 75 00",
      star_rating: 4,
      map_link: "https://www.google.com/maps/place/Hotel+Seidenhof/@47.3733884,8.5330234,15.91z/data=!4m10!1m2!2m1!1sSorell+Hotel!3m6!1s0x47900a068fe30223:0x72f2a0154ed5b841!8m2!3d47.3736706!4d8.5373294!15sCgxTb3JlbGwgSG90ZWwiA4gBAZIBBWhvdGVs4AEA!16s%2Fg%2F1tg2cdrs?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
      amenities: [
        { value: "Wellness area with sauna and steam room" },
        { value: "Fitness room and wellness facilities" },
        { value: "Charming city garden courtyard" },
        { value: "Nespresso coffee machines in all rooms" },
        { value: "Box-sprung beds with a choice of pillows" }
      ],
      restaurant_offerings: [
        { value: "Restaurant Enja: Seasonal cuisine prepared over an open fire" }
      ]
    }
  ];

  const getStarColor = (stars: number) => {
    if (stars === 5) return 'text-yellow-500';
    if (stars === 4) return 'text-blue-500';
    return 'text-green-500';
  };

  const getCategoryColor = (stars: number) => {
    if (stars === 5) return 'bg-yellow-100 text-yellow-800';
    if (stars === 4) return 'bg-blue-100 text-blue-800';
    return 'bg-green-100 text-green-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dental-50 via-white to-white">
      <SEO 
        title={t('seo.hotels.title')}
        description={t('seo.hotels.description')}
      />
      <FloatingBackButton />

      {/* Main Content - Scrollable */}
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-dental-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-dental-800 mb-4">
                {t('slides.hotels.title')}
              </h1>
              <p className="text-xl text-dental-600 mb-8 max-w-2xl mx-auto">
                {t('slides.hotels.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hotels List */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="space-y-8">
              {hotels.map((hotel, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-dental-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Hotel Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(hotel.star_rating)}`}>
                          {hotel.star_rating}-Star
                        </span>
                        <div className="flex">
                          {[...Array(hotel.star_rating)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${getStarColor(hotel.star_rating)} fill-current`} />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-dental-800 mb-3">
                        {hotel.hotel_name}
                      </h3>
                      <div className="flex items-center text-dental-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{hotel.address}</span>
                      </div>
                      <div className="flex items-center text-dental-600">
                        <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                        <a href={`tel:${hotel.phone_number}`} className="hover:text-dental-800 transition-colors">
                          {hotel.phone_number}
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <motion.a
                        href={hotel.map_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-dental-600 text-white rounded-lg font-medium hover:bg-dental-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {t('slides.hotels.viewOnMap')}
                      </motion.a>
                    </div>
                  </div>

                  {/* Amenities and Restaurants */}
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-dental-100">
                    {/* Amenities */}
                    {hotel.amenities && hotel.amenities.length > 0 && (
                      <div>
                        <div className="flex items-center mb-4">
                          <Sparkles className="w-5 h-5 text-dental-600 mr-2" />
                          <h4 className="text-lg font-display font-semibold text-dental-800">
                            Amenities
                          </h4>
                        </div>
                        <ul className="space-y-2 list-none">
                          {hotel.amenities.map((amenity, amenityIndex) => (
                            <li key={amenityIndex} className="flex items-start text-dental-700">
                              <span className="text-dental-500 mr-3 mt-0.5 flex-shrink-0">•</span>
                              <span className="text-sm leading-relaxed">{amenity.value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Restaurant Offerings */}
                    {hotel.restaurant_offerings && hotel.restaurant_offerings.length > 0 && (
                      <div>
                        <div className="flex items-center mb-4">
                          <UtensilsCrossed className="w-5 h-5 text-dental-600 mr-2" />
                          <h4 className="text-lg font-display font-semibold text-dental-800">
                            Dining
                          </h4>
                        </div>
                        <ul className="space-y-2 list-none">
                          {hotel.restaurant_offerings.map((restaurant, restaurantIndex) => (
                            <li key={restaurantIndex} className="flex items-start text-dental-700">
                              <span className="text-dental-500 mr-3 mt-0.5 flex-shrink-0">•</span>
                              <span className="text-sm leading-relaxed">{restaurant.value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <SlideFooter />
      
      {/* Bottom Navigation with Tooltips */}
      <SlideNavBarBottom />
    </div>
  );
};

export default HotelsPage;
