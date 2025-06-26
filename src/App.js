import './App.css';

import FeatureCarousel from './FeatureCarousel';
import PopularCategories from './PopularCategories';
import StepsSection from './StepsSection';
import TestimonialSection from './TestimonialSection';

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
