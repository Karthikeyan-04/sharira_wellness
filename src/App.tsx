import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Index from './pages/Index';
import Explore from './pages/Explore';
import Categories from './pages/Categories';
import AyurvedaResults from './pages/AyurvedaResults';
import TreatmentDetail from './pages/TreatmentDetail';
import BookAppointment from './pages/BookAppointment';
import ChoosePractitioner from './pages/ChoosePractitioner';
import ReviewBooking from './pages/ReviewBooking';
import SecurePayment from './pages/SecurePayment';
import BookingConfirmed from './pages/BookingConfirmed';
import Profile from './pages/Profile';
import HealthRecords from './pages/HealthRecords';
import WellnessRewards from './pages/WellnessRewards';
import ConsentManagement from './pages/ConsentManagement';
import VendorProfile from './pages/VendorProfile';
import MyBookings from './pages/MyBookings';
import ModifyBooking from './pages/ModifyBooking';
import WellnessChat from './pages/WellnessChat';
import Messages from './pages/Messages';
import HelpSupport from './pages/HelpSupport';
import NotificationsPage from './pages/Notifications';
import Settings from './pages/Settings';
import Login from './pages/onboarding/Login';
import OTP from './pages/onboarding/OTP';
import OnboardingFlow from './pages/onboarding/OnboardingFlow';

function App() {
  return (
    <Router basename="/">
      <Routes>
        {/* Onboarding Flow (Full screen) */}
        <Route path="/onboarding/login" element={<Login />} />
        <Route path="/onboarding/otp" element={<OTP />} />
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
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
