import './App.css';

import FeatureCarousel from './components/FeatureCarousel';
import PopularCategories from './components/PopularCategories';
import StepsSection from './components/StepsSection';
import TestimonialSection from './components/TestimonialSection';

function App() {
  return (
    <div>
      <FeatureCarousel />
      <StepsSection />
      <PopularCategories />
      <TestimonialSection />
    </div>
  );
}

export default App;
