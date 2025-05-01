'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type PaymentMethod = 'credit' | 'paypal' | 'crypto';
type CheckoutStep = 'details' | 'shipping' | 'payment' | 'review';

export default function CheckoutPage() {
  const [step, setStep] = useState<CheckoutStep>('details');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardFlip, setCardFlip] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    remember: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const nextStep = () => {
    if (step === 'details') setStep('shipping');
    else if (step === 'shipping') setStep('payment');
    else if (step === 'payment') setStep('review');
  };

  const prevStep = () => {
    if (step === 'shipping') setStep('details');
    else if (step === 'payment') setStep('shipping');
    else if (step === 'review') setStep('payment');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Process checkout here
    console.log('Checkout submitted:', formData);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      
      <div className="min-h-screen bg-[#1d1515] py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-20"
          >
            <h1 className="text-4xl font-bold text-amber-600 mb-2">Checkout</h1>
            <p className="text-lg text-white">Complete your purchase with ease</p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white -z-10"></div>
            {['details', 'shipping', 'payment', 'review'].map((s, index) => (
              <div key={s} className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${step === s ? 'bg-indigo-600' : index < ['details', 'shipping', 'payment', 'review'].indexOf(step) ? 'bg-green-500' : 'bg-gray-300'}`}
                >
                  {index + 1}
                </motion.div>
                <span className="mt-2 text-sm font-medium capitalize text-white">
                  {s}
                </span>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-2/3 bg-transparent border border-amber-600 rounded-2xl shadow-xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {step === 'details' && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8"
                  >
                    <h2 className="text-2xl font-bold text-white mb-6">Personal Details</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg text-white border bg-transparent border-amber-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-white rounded-lg bg-transparent border border-amber-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 'shipping' && (
                  <motion.div
                    key="shipping"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8"
                  >
                    <h2 className="text-2xl font-bold text-amber-600 mb-6">Shipping Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-white mb-1">Address</label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-white rounded-lg bg-transparent border border-amber-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-white mb-1">City</label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 text-white rounded-lg bg-transparent border border-amber-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="New York"
                          />
                        </div>
                        <div>
                          <label htmlFor="zip" className="block text-sm font-medium text-white mb-1">ZIP Code</label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 text-white rounded-lg bg-transparent border border-amber-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="10001"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-white mb-1">Country</label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-white rounded-lg bg-transparent border border-amber-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                          placeholder="United States"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 'payment' && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8"
                  >
                    <h2 className="text-2xl font-bold text-amber-600 mb-6">Payment Method</h2>
                    
                    <div className="space-y-6">
                      <div className="flex space-x-4">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('credit')}
                          className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'credit' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-gray-300 text-white'} font-medium transition`}
                        >
                          Credit Card
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('paypal')}
                          className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'paypal' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-gray-300 text-white'} font-medium transition`}
                        >
                          PayPal
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('crypto')}
                          className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'crypto' ? 'border-purple-600 bg-purple-50 text-purple-700' : 'border-gray-300 text-white'} font-medium transition`}
                        >
                          Crypto
                        </button>
                      </div>

                      {paymentMethod === 'credit' && (
                         <motion.div
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.3 }}
                         className="space-y-4"
                       >
                         {/* Credit Card Container - Shows back by default */}
                         <div className="relative">
                           <div 
                             className="relative h-48 perspective-1000 cursor-pointer"
                             onMouseEnter={() => setCardFlip(true)}  // Show front on hover
                             onMouseLeave={() => setCardFlip(false)} // Show back when not hovering
                           >
                             {/* Front of Card (shown when hovered) */}
                             <motion.div
                               animate={{ rotateY: cardFlip ? 0 : 180 }} // Inverted logic
                               transition={{ duration: 0.6 }}
                               className="absolute w-full h-full backface-hidden"
                               style={{ 
                                 transformStyle: 'preserve-3d',
                                 zIndex: cardFlip ? 1 : 0
                               }}
                             >
                               <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 shadow-lg text-white h-full flex flex-col justify-between">
                                 {/* Front card content */}
                                 <div className="flex justify-between items-start">
                                   <div>
                                     <p className="text-sm opacity-80 text-white">Card Number</p>
                                     <p className="text-xl text-white font-mono tracking-wider mt-1">
                                       {formData.cardNumber || '•••• •••• •••• ••••'}
                                     </p>
                                   </div>
                                   <div className="w-12 h-8 bg-white rounded-md flex items-center justify-center">
                                     <span className="text-xs font-bold text-indigo-600">VISA</span>
                                   </div>
                                 </div>
                                 <div className="flex justify-between">
                                   <div>
                                     <p className="text-sm opacity-80 text-white">Card Holder</p>
                                     <p className="font-medium mt-1 text-white">
                                       {formData.name || 'YOUR NAME'}
                                     </p>
                                   </div>
                                   <div>
                                     <p className="text-sm opacity-80 text-white">Expires</p>
                                     <p className="font-medium mt-1 text-white">
                                       {formData.cardExpiry || '••/••'}
                                     </p>
                                   </div>
                                 </div>
                               </div>
                             </motion.div>
                             
                             {/* Back of Card (shown by default) */}
                             <motion.div
                               animate={{ rotateY: cardFlip ? 180 : 0 }} // Inverted logic
                               transition={{ duration: 0.6 }}
                               className="absolute w-full h-full backface-hidden"
                               style={{ 
                                 transformStyle: 'preserve-3d',
                                 zIndex: cardFlip ? 0 : 1
                               }}
                             >
                               <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-xl p-6 shadow-lg text-white h-full flex flex-col justify-between">
                                 <div className="h-8 bg-black/80 mt-4"></div>
                                 <div className="bg-gray-200 h-10 rounded flex items-center px-4 justify-end">
                                   <p className="text-black font-mono text-lg font-bold">
                                     {formData.cardCvc || '•••'}
                                   </p>
                                 </div>
                                 <p className="text-xs opacity-90 text-right">
                                   Hover to see card details
                                 </p>
                               </div>
                             </motion.div>
                           </div>
                         </div>
                       
                         {/* Input Fields */}
                         <div className="space-y-4 bg-white/5 p-4 rounded-lg backdrop-blur-sm">
                                           <div>
                                             <label htmlFor="cardNumber" className="block text-sm font-medium text-amber-100 mb-1">
                                               Card Number
                                             </label>
                                             <input
                                               type="text"
                                               id="cardNumber"
                                               name="cardNumber"
                                               value={formData.cardNumber}
                                               onChange={handleInputChange}
                                               className="w-full px-4 py-3 rounded-lg bg-white/20 border border-amber-400/30 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition text-white placeholder-amber-200/60"
                                               placeholder="4242 4242 4242 4242"
                                               maxLength={19}
                                             />
                                           </div>
                                           
                                           <div className="grid grid-cols-2 gap-4">
                                             <div>
                                               <label htmlFor="cardExpiry" className="block text-sm font-medium text-amber-100 mb-1">
                                                 Expiration Date
                                               </label>
                                               <input
                                                 type="text"
                                                 id="cardExpiry"
                                                 name="cardExpiry"
                                                 value={formData.cardExpiry}
                                                 onChange={handleInputChange}
                                                 className="w-full px-4 py-3 rounded-lg bg-white/20 border border-amber-400/30 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition text-white placeholder-amber-200/60"
                                                 placeholder="MM/YY"
                                                 maxLength={5}
                                               />
                                             </div>
                                             
                                             <div>
                                               <label htmlFor="cardCvc" className="block text-sm font-medium text-amber-100 mb-1">
                                                 <span className="flex items-center">
                                                   CVC
                                                   <button 
                                                     type="button" 
                                                     onClick={() => setCardFlip(!cardFlip)}
                                                     className="ml-2 text-amber-300 hover:text-amber-200 text-xs underline flex items-center"
                                                   >
                                                     (view code)
                                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                     </svg>
                                                   </button>
                                                 </span>
                                               </label>
                                               <input
                                                 type="text"
                                                 id="cardCvc"
                                                 name="cardCvc"
                                                 value={formData.cardCvc}
                                                 onChange={handleInputChange}
                                                 className="w-full px-4 py-3 rounded-lg bg-white/20 border border-amber-400/30 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition text-white placeholder-amber-200/60"
                                                 placeholder="123"
                                                 maxLength={3}
                                               />
                                             </div>
                                           </div>
                                           
                                           <div className="flex items-center pt-2">
                                             <input
                                               type="checkbox"
                                               id="remember"
                                               name="remember"
                                               checked={formData.remember}
                                               onChange={handleInputChange}
                                               className="h-5 w-5 text-amber-500 focus:ring-amber-500 border-amber-400 rounded bg-white/20"
                                             />
                                             <label htmlFor="remember" className="ml-3 block text-sm text-amber-100">
                                               Save this card for future purchases
                                             </label>
                                           </div>
                                         </div>
                       </motion.div>
                      )}

                      {paymentMethod === 'paypal' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className=" p-6 rounded-lg bg-transparent border-2 border-amber-600"
                        >
                          <div className="flex items-center justify-center space-x-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.3 17.3h3.6v-8.5H7.3v8.5zM9.1 4.8C8.2 4.8 7.3 5.4 7.3 6.8s.9 2.1 1.8 2.1 1.8-.6 1.8-2.1-.9-2-1.8-2zm7.4 3.3c-1.5 0-2.1.8-2.1 1.9v5.3h3.6v-5.3c0-1.1-.6-1.9-2.1-1.9h-.6zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z"/>
                              </svg>
                            </div>
                            <p className="text-white font-medium">You be redirected to PayPal to complete your purchase securely</p>
                          </div>
                        </motion.div>
                      )}

                      {paymentMethod === 'crypto' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-transparent border-2 border-amber-600 p-6 rounded-lg text-white"
                        >
                          <div className="flex items-center justify-center space-x-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                              <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm1.4 4h-2.8v1.4h-1.4v2.8h1.4v1.4h-1.4v2.8h1.4v1.4h-1.4v2.8h1.4V20h2.8v-1.4h1.4v-2.8h-1.4v-1.4h1.4V9.4h-1.4V8h1.4V5.2h-1.4V4z"/>
                              </svg>
                            </div>
                            <p className="text-white font-medium">Select your preferred cryptocurrency at the confirmation page</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 'review' && (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8"
                  >
                    <h2 className="text-2xl font-bold text-amber-600 mb-6">Review Your Order</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-transparent order border-amber-600 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-white mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-white">Full Name</p>
                            <p className="font-medium text-white">{formData.name || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-white">Email</p>
                            <p className="font-medium text-white">{formData.email || 'Not provided'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-transparent order border-amber-600 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-amber-600 mb-4">Shipping Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-white">Address</p>
                            <p className="font-medium text-white">{formData.address || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-white">City</p>
                            <p className="font-medium text-white">{formData.city || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-white">ZIP Code</p>
                            <p className="font-medium text-white">{formData.zip || 'Not provided'}</p>
                          </div>
                          <div>
                            <p className="text-sm text-white">Country</p>
                            <p className="font-medium text-white">{formData.country || 'Not provided'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-transparent order border-amber-600 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-amber-600 mb-4">Payment Method</h3>
                        <div className="flex items-center space-x-4">
                          {paymentMethod === 'credit' && (
                            <>
                              <div className="w-10 h-6 bg-indigo-100 rounded flex items-center justify-center">
                                <span className="text-xs font-bold text-indigo-600">VISA</span>
                              </div>
                              <p className="font-medium text-white">•••• •••• •••• {formData.cardNumber.slice(-4) || '••••'}</p>
                            </>
                          )}
                          {paymentMethod === 'paypal' && (
                            <>
                              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7.3 17.3h3.6v-8.5H7.3v8.5zM9.1 4.8C8.2 4.8 7.3 5.4 7.3 6.8s.9 2.1 1.8 2.1 1.8-.6 1.8-2.1-.9-2-1.8-2zm7.4 3.3c-1.5 0-2.1.8-2.1 1.9v5.3h3.6v-5.3c0-1.1-.6-1.9-2.1-1.9h-.6zM12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z"/>
                              </svg>
                              <p className="font-medium text-white">PayPal</p>
                            </>
                          )}
                          {paymentMethod === 'crypto' && (
                            <>
                              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm1.4 4h-2.8v1.4h-1.4v2.8h1.4v1.4h-1.4v2.8h1.4v1.4h-1.4v2.8h1.4V20h2.8v-1.4h1.4v-2.8h-1.4v-1.4h1.4V9.4h-1.4V8h1.4V5.2h-1.4V4z"/>
                              </svg>
                              <p className="font-medium text-white">Cryptocurrency</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <>
      <div className="px-8 pb-8 flex justify-between">
        {step !== 'details' && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={prevStep}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            Back
          </motion.button>
        )}
        
        {step !== 'review' ? (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={nextStep}
            className="ml-auto px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Continue
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleSubmit}
            className="ml-auto px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            Complete Purchase
          </motion.button>
        )}
      </div>

      {/* Modal - placed outside the button container */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="bg-[#1d1515] p-8 rounded-lg max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              <svg 
                className="w-16 h-16 text-green-500 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <h2 className="text-2xl font-bold mb-2 text-amber-600">Success!</h2>
              <p className=" mb-6 text-amber-600">Your order placed successfully</p>
              <Link href='shop'>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-green-700 transition"
              >
                Close
              </button>
              </Link>
              
            </div>
          </div>
        </div>
      )}
    </>
            </motion.div>

            {/* Order Summary */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-1/3 bg-transparent border border-amber-600 rounded-2xl shadow-xl overflow-hidden h-fit sticky top-8"
            >
              <div className="p-6 border-b border-amber-600">
                <h2 className="text-xl font-bold text-amber-600">Order Summary</h2>
              </div>
              
              <div className="p-6 space-y-4">
                {/* Sample Cart Items */}
                <div className="flex justify-between items-start">
                  <div className="flex space-x-4">
                    <div className="w-16 h-16 bg-transparent rounded-lg overflow-hidden">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWnYu9j_0k5zG81IIVRdxFMbxC5ftNwhSBpA&s" 
                        alt="Product" 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Hot Pizza</h3>
                      <p className="text-sm text-white">Qty: 1</p>
                    </div>
                  </div>
                  <p className="font-medium text-white">$199.99</p>
                </div>

                <div className="flex justify-between items-start">
                  <div className="flex space-x-4">
                    <div className="w-16 h-16 bg-transparent rounded-lg overflow-hidden">
                      <img 
                        src="https://assets.bonappetit.com/photos/62b5fec6094fcaa09e5a30ea/1:1/w_2873,h_2873,c_limit/BA0822chintan06.jpg" 
                        alt="Product" 
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Chicken Burger</h3>
                     
                      <p className="text-sm text-white">Qty: 1</p>
                    </div>
                  </div>
                  <p className="font-medium text-white">$249.99</p>
                </div>

                <div className="border-t border-amber-600 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white">Subtotal</span>
                    <span className="font-medium text-white">$449.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Shipping</span>
                    <span className="font-medium text-white">$9.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Tax</span>
                    <span className="font-medium text-white">$36.00</span>
                  </div>
                </div>

                <div className="border-t border-amber-600 pt-4 flex justify-between">
                  <span className="text-lg font-bold text-white">Total</span>
                  <span className="text-lg font-bold text-amber-600">$495.97</span>
                </div>

                {/* Promo Code */}
                <div className="pt-4">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="flex-1 px-4 py-2 bg-transparent rounded-l-lg  border border-amber-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    />
                    <button className="px-4 py-2 bg-amber-700 text-white rounded-r-lg hover:bg-amber-800 transition">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}