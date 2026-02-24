import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isFullscreen]);

  if (!images || images.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const isVideo = (src) => {
    if (typeof src !== 'string') return false;
    return src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm');
  };

  const renderMedia = (src, className, isThumbnail = false) => {
    if (isVideo(src)) {
      return (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={className}
        />
      );
    }
    return (
      <img
        src={src}
        alt="Media"
        className={className}
      />
    );
  };

  return (
    <div className="w-full">
      <div
        className="group relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden aspect-video cursor-pointer flex items-center justify-center transition-all duration-300 select-none"
        onClick={() => setIsFullscreen(true)}
      >
        {/* Main Media with subtle scale on container hover */}
        {renderMedia(
          images[currentIndex],
          "max-h-[60vh] w-auto max-w-full object-contain mx-auto pointer-events-none transition-transform duration-500 group-hover:scale-[1.02]"
        )}

        {/* Subtle Hover Overlay for Feedback */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm p-3 rounded-full">
            <ZoomIn className="w-6 h-6 text-white shadow-sm" />
          </div>
        </div>
        {/* Previous Button ... unchanged ... */}
        {images.length > 1 && (
          <button
            onClick={e => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {/* Next Button ... unchanged ... */}
        {images.length > 1 && (
          <button
            onClick={e => { e.stopPropagation(); goToNext(); }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
        {/* Image Counter */}
        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-3 mt-4 overflow-x-auto pb-4 select-none">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-300 shadow-md ${index === currentIndex
                ? 'ring-2 ring-teal-500 scale-105'
                : 'opacity-50 hover:opacity-100'
                }`}
            >
              {renderMedia(image, "w-full h-full object-cover", true)}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Image View - Portalled to Body */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isFullscreen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-colors duration-500 overflow-hidden"
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[10000] text-white/80 hover:text-white p-3 sm:p-4 bg-white/10 rounded-full backdrop-blur-md shadow-2xl"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close fullscreen"
              >
                <X className="w-8 h-8 md:w-8 md:h-8" />
              </motion.button>

              {/* Media Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full h-full flex items-center justify-center p-0 md:p-10"
                onClick={(e) => e.stopPropagation()}
              >
                {isVideo(images[currentIndex]) ? (
                  <motion.video
                    src={images[currentIndex]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-sm shadow-[0_0_100px_rgba(255,255,255,0.1)]"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.img
                    src={images[currentIndex]}
                    alt={`Fullscreen media ${currentIndex + 1}`}
                    className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-sm shadow-[0_0_100px_rgba(255,255,255,0.1)]"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <motion.button
                      onClick={() => goToPrevious()}
                      className="absolute left-8 top-1/2 transform -translate-y-1/2 z-[10000] bg-white/10 hover:bg-white/20 text-white p-6 rounded-full transition-all duration-200 backdrop-blur-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-10 h-10" />
                    </motion.button>

                    <motion.button
                      onClick={() => goToNext()}
                      className="absolute right-8 top-1/2 transform -translate-y-1/2 z-[10000] bg-white/10 hover:bg-white/20 text-white p-6 rounded-full transition-all duration-200 backdrop-blur-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-10 h-10" />
                    </motion.button>
                  </>
                )}

                {/* Image Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 bg-white/10 text-white px-6 py-2 sm:px-8 sm:py-4 rounded-full backdrop-blur-xl shadow-2xl border border-white/10"
                >
                  <span className="text-sm sm:text-lg font-semibold tracking-wider">
                    {currentIndex + 1} / {images.length}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default ImageCarousel;
