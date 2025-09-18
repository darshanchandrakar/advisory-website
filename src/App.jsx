import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import the initial data
import { allData as initialData } from './api/mockApi';

// Import Layout Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import GetQuoteModal from './components/GetQuoteModal/GetQuoteModal';

// Import Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Consultancy from './pages/Consultancy';
import ServiceDetail from './pages/ServiceDetail';
import ConsultancyDetail from './pages/ConsultancyDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import GetAQuote from './pages/GetAQuote';
import AdminDashboard from './pages/AdminDashboard';

/**
 * Main application component.// maine comments isi liye diye ki log samajh sake
 * Manages the application's entire data state and CRUD operations.
 * Sets up the overall layout and defines routing for all pages.
 */
function App() {
  // Lift the data into a state that can be modified
  const [servicesData, setServicesData] = useState(initialData);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // --- CRUD Functions ---

  // CREATE: Add a new service/consultancy
  const handleAddItem = (newItem) => {
    // In a real app, the backend would generate a unique ID
    const newItemWithId = { ...newItem, id: Date.now(), featuredServices: newItem.featuredServices.split(',').map(s => s.trim()) };
    setServicesData([newItemWithId, ...servicesData]);
  };

  // UPDATE: Find an item by ID and update it
  const handleUpdateItem = (updatedItem) => {
    setServicesData(
      servicesData.map((item) =>
        item.id === updatedItem.id ? { ...updatedItem, featuredServices: Array.isArray(updatedItem.featuredServices) ? updatedItem.featuredServices : updatedItem.featuredServices.split(',').map(s => s.trim()) } : item
      )
    );
  };

  // DELETE: Filter out an item by its ID
  const handleDeleteItem = (itemId) => {
    setServicesData(servicesData.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <NavBar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      <main>
        <Routes>
          {/* Pass the dynamic data to all pages that need it */}
          <Route path="/" element={<Home servicesData={servicesData} />} />
          <Route path="/services" element={<Services servicesData={servicesData} />} />
          <Route path="/services/:id" element={<ServiceDetail servicesData={servicesData} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />} />
          <Route path="/consultancy" element={<Consultancy servicesData={servicesData} />} />
          <Route path="/consultancy/:id" element={<ConsultancyDetail servicesData={servicesData} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />} />
          
          {/* Admin Route with CRUD functions passed as props */}
          <Route 
            path="/admin" 
            element={
              <AdminDashboard 
                servicesData={servicesData}
                onAddItem={handleAddItem}
                onUpdateItem={handleUpdateItem}
                onDeleteItem={handleDeleteItem}
              />
            } 
          />
          
          {/* Static Pages */}
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/get-a-quote" element={<GetAQuote />} />
        </Routes>
      </main>
      <Footer />
      {isQuoteModalOpen && <GetQuoteModal onClose={() => setIsQuoteModalOpen(false)} />}
    </div>
  );
}

export default App;