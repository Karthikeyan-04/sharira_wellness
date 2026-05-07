import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import ScrollToTop from '@/components/ScrollToTop';

// Lazy load all pages
const Index = lazy(() => import('@/pages/Index'));
const Explore = lazy(() => import('@/pages/Explore'));
const Categories = lazy(() => import('@/pages/Categories'));
const AyurvedaResults = lazy(() => import('@/pages/AyurvedaResults'));
const TreatmentDetail = lazy(() => import('@/pages/TreatmentDetail'));
const BookAppointment = lazy(() => import('@/pages/BookAppointment'));
const ChoosePractitioner = lazy(() => import('@/pages/ChoosePractitioner'));
const ReviewBooking = lazy(() => import('@/pages/ReviewBooking'));
const SecurePayment = lazy(() => import('@/pages/SecurePayment'));
const BookingConfirmed = lazy(() => import('@/pages/BookingConfirmed'));
const Profile = lazy(() => import('@/pages/Profile'));
const HealthRecords = lazy(() => import('@/pages/HealthRecords'));
const WellnessRewards = lazy(() => import('@/pages/WellnessRewards'));
const ConsentManagement = lazy(() => import('@/pages/ConsentManagement'));
const VendorProfile = lazy(() => import('@/pages/VendorProfile'));
const MyBookings = lazy(() => import('@/pages/MyBookings'));
const ModifyBooking = lazy(() => import('@/pages/ModifyBooking'));
const WellnessChat = lazy(() => import('@/pages/WellnessChat'));
const Messages = lazy(() => import('@/pages/Messages'));
const HelpSupport = lazy(() => import('@/pages/HelpSupport'));
const NotificationsPage = lazy(() => import('@/pages/Notifications'));
const Settings = lazy(() => import('@/pages/Settings'));
const SavedVendors = lazy(() => import('@/pages/SavedVendors'));
const MyReviews = lazy(() => import('@/pages/MyReviews'));
const PersonalInfo = lazy(() => import('@/pages/PersonalInfo'));
const Payments = lazy(() => import('@/pages/Payments'));
const PasswordSettings = lazy(() => import('@/pages/PasswordSettings'));
const Login = lazy(() => import('@/pages/onboarding/Login'));
const OTP = lazy(() => import('@/pages/onboarding/OTP'));
const ForgotPassword = lazy(() => import('@/pages/onboarding/ForgotPassword'));
const OnboardingFlow = lazy(() => import('@/pages/onboarding/OnboardingFlow'));
const ResetPassword = lazy(() => import('@/pages/onboarding/ResetPassword'));

const PageLoader = () => (
  <div className="min-h-screen bg-cream flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-sage border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Onboarding Flow (Full screen) */}
          <Route path="/onboarding/login" element={<Login />} />
          <Route path="/onboarding/otp" element={<OTP />} />
          <Route path="/onboarding/forgot-password" element={<ForgotPassword />} />
          <Route path="/onboarding/reset-password" element={<ResetPassword />} />
          <Route path="/onboarding/flow" element={<OnboardingFlow />} />
          
          {/* Main App Dashboard (at root for link compatibility) */}
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Index />} />
            <Route path="explore" element={<Explore />} />
            <Route path="categories" element={<Categories />} />
            <Route path="ayurveda-results" element={<AyurvedaResults />} />
            <Route path="treatment-detail" element={<TreatmentDetail />} />
            <Route path="vendor-profile" element={<VendorProfile />} />
            
            <Route path="book-appointment" element={<BookAppointment />} />
            <Route path="choose-practitioner" element={<ChoosePractitioner />} />
            <Route path="review-booking" element={<ReviewBooking />} />
            <Route path="secure-payment" element={<SecurePayment />} />
            <Route path="booking-confirmed" element={<BookingConfirmed />} />
            
            <Route path="bookings" element={<MyBookings />} />
            <Route path="modify-booking" element={<ModifyBooking />} />
            
            <Route path="chat" element={<WellnessChat />} />
            <Route path="messages" element={<Messages />} />
            <Route path="help" element={<HelpSupport />} />
            <Route path="notifications" element={<NotificationsPage />} />
            
            <Route path="profile" element={<Profile />} />
            <Route path="health-records" element={<HealthRecords />} />
            <Route path="wellness-rewards" element={<WellnessRewards />} />
            <Route path="consent-management" element={<ConsentManagement />} />
            <Route path="saved-vendors" element={<SavedVendors />} />
            <Route path="my-reviews" element={<MyReviews />} />
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="settings" element={<Settings />} />
            <Route path="payments" element={<Payments />} />
            <Route path="password-settings" element={<PasswordSettings />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
