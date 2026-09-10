import React, { useState, useRef, useEffect, useCallback } from 'react';
import Preloader from './components/Preloader';
import FloatingPetals from './components/FloatingPetals';
import MusicController from './components/MusicController';
import CurtainReveal from './components/CurtainReveal';
import NavigationControls from './components/NavigationControls';
import Toast from './components/Toast';

import OpeningScreen from './components/OpeningScreen';
import GanpatiHero from './components/GanpatiHero';
import Celebration25 from './components/Celebration25';
import InvitationMessage from './components/InvitationMessage';
import EventDetails from './components/EventDetails';
import LocationSection from './components/LocationSection';
import ClosingSection from './components/ClosingSection';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isCurtainOpening, setIsCurtainOpening] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const musicRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const totalPages = 7;

  // Show subtle toast notification
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2800);
  }, []);

  // Handler for OPEN INVITATION CTA on Page 1
  const handleOpenInvitation = () => {
    setIsCurtainOpening(true);

    // Start background music at 00:25 as specified
    if (musicRef.current) {
      musicRef.current.startAt25s();
    }

    // Advance to Page 2 (Ganpati Reveal) with curtain opening sequence
    setTimeout(() => {
      setCurrentPage(2);
    }, 600);

    // Clean up curtain state after opening completes
    setTimeout(() => {
      setIsCurtainOpening(false);
    }, 2500);
  };

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, totalPages]);

  const handlePrev = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  const handleGoToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Share Invitation handler with Web Share API and graceful clipboard fallback
  const handleShare = async () => {
    const shareData = {
      title: 'Ganpati Invitation | 25th Year Celebration',
      text: '॥ श्री गणेशाय नमः ॥ You are cordially invited to celebrate the 25th Year Ganesh Chaturthi with Amit Shah & Family.',
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => showToast('INVITATION LINK COPIED ✨'))
        .catch(() => showToast('INVITATION LINK READY ✨'));
    } else {
      // Fallback for older browsers
      const dummy = document.createElement('input');
      document.body.appendChild(dummy);
      dummy.value = window.location.href;
      dummy.select();
      document.execCommand('copy');
      document.body.removeChild(dummy);
      showToast('INVITATION LINK COPIED ✨');
    }
  };

  // Keyboard Navigation: Arrow Left/Right/Up/Down
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Navigation for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Horizontal swipe threshold > 50px and more horizontal than vertical
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        // Swiped Left -> Next Page
        if (currentPage === 1) {
          handleOpenInvitation();
        } else {
          handleNext();
        }
      } else {
        // Swiped Right -> Previous Page
        handlePrev();
      }
    }
  };

  return (
    <div
      className="invitation-app"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Traditional Preloader */}
      <Preloader />

      {/* Background Floating Petals & Gold Sparkles */}
      <FloatingPetals />

      {/* Floating Music Controller (starts at 00:25 on Open Invitation) */}
      <MusicController ref={musicRef} />

      {/* Ceremonial Curtain Reveal on Open Invitation */}
      <CurtainReveal isOpening={isCurtainOpening} />

      {/* Toast Notification for Clipboard */}
      <Toast message={toastMessage} isVisible={isToastVisible} />

      {/* Main Page Stage - Page-by-Page Digital Booklet Flow */}
      <main
        className="page-stage"
        key={currentPage}
      >
        {currentPage === 1 && (
          <OpeningScreen onOpenInvitation={handleOpenInvitation} />
        )}
        {currentPage === 2 && <GanpatiHero onNext={handleNext} />}
        {currentPage === 3 && <Celebration25 onNext={handleNext} />}
        {currentPage === 4 && <InvitationMessage onNext={handleNext} />}
        {currentPage === 5 && <EventDetails onNext={handleNext} />}
        {currentPage === 6 && <LocationSection onNext={handleNext} />}
        {currentPage === 7 && <ClosingSection onShare={handleShare} />}
      </main>

      {/* Elegant Bottom Navigation Controls */}
      <NavigationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
        onGoToPage={handleGoToPage}
        onShare={handleShare}
      />
    </div>
  );
}

export default App;
