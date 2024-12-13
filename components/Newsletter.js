import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

const NewsletterSignup = () => {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const [isMounted, setIsMounted] = useState(false);


  useEffect(() => {
    // Set the component as mounted to avoid mismatch between SSR and CSR
    setIsMounted(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000); // Simule une requête réseau
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-center h-[500px] bg-baltacolor rounded-xl my-12 w-[80%] mx-auto">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg w-[96%] mx-auto max-w-md"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-800 text-center"
              >
                {t("newsletter.title")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-center"
              >
                {t("newsletter.subtitle")}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <input
                  type="email"
                  placeholder={t("newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-lg text-white ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                  }`}
              >
                {isSubmitting
                  ? t("newsletter.button.submitting")
                  : t("newsletter.button.default")}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-green-600"
              >
                {t("newsletter.success.title")}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600"
              >
                {t("newsletter.success.message")}
              </motion.p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
