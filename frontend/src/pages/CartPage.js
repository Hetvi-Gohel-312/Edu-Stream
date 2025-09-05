import React, { useState } from 'react';
import { 
  TrashIcon, 
  PlusIcon, 
  MinusIcon,
  CreditCardIcon,
  LockClosedIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'John Doe',
      price: 99.99,
      originalPrice: 149.99,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cce?w=300&h=200&fit=crop',
      duration: '15 hours',
      students: 1250,
      rating: 4.8,
      quantity: 1
    },
    {
      id: 2,
      title: 'Advanced JavaScript Masterclass',
      instructor: 'Jane Smith',
      price: 79.99,
      originalPrice: 119.99,
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop',
      duration: '12 hours',
      students: 890,
      rating: 4.9,
      quantity: 1
    },
    {
      id: 3,
      title: 'CSS & Design Systems',
      instructor: 'Mike Johnson',
      price: 59.99,
      originalPrice: 89.99,
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
      duration: '8 hours',
      students: 2100,
      rating: 4.7,
      quantity: 1
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    const validCodes = {
      'WELCOME10': 0.1,
      'STUDENT20': 0.2,
      'SAVE15': 0.15
    };

    if (validCodes[promoCode]) {
      setAppliedPromo({ code: promoCode, discount: validCodes[promoCode] });
    } else {
      alert('Invalid promo code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo ? subtotal * appliedPromo.discount : 0;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + tax;

  const features = [
    'Lifetime access to all course materials',
    'Certificate of completion',
    '30-day money-back guarantee',
    'Mobile and desktop access',
    'Downloadable resources',
    'Community support'
  ];

  return (
    <div className="min-h-screen bg-gradient-soft dark:bg-gradient-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Shopping Cart</h1>
          <p className="text-gray-600 dark:text-gray-400">
            {cartItems.length} {cartItems.length === 1 ? 'course' : 'courses'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="card p-12 text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Start adding courses to your cart to begin learning
                </p>
                <button className="btn-primary">
                  Browse Courses
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="card p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-48 flex-shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-32 md:h-24 object-cover rounded-xl"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        by {item.instructor}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span>{item.duration}</span>
                        <span>•</span>
                        <span>{item.students.toLocaleString()} students</span>
                        <span>•</span>
                        <span className="flex items-center">
                          ⭐ {item.rating}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          {item.originalPrice > item.price && (
                            <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                              ${(item.originalPrice * item.quantity).toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h3>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 input-field"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="btn-secondary px-4 py-3"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromo && (
                  <div className="mt-2 text-sm text-green-600 dark:text-green-400 flex items-center">
                    <CheckIcon className="h-4 w-4 mr-1" />
                    {appliedPromo.code} applied ({Math.round(appliedPromo.discount * 100)}% off)
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Discount ({appliedPromo.code})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full btn-primary mb-6">
                <CreditCardIcon className="h-5 w-5 mr-2" />
                Proceed to Checkout
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
                <LockClosedIcon className="h-4 w-4 mr-1" />
                Secure checkout
              </div>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  What's included:
                </h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

