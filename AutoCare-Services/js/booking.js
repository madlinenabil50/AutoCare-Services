window.initializeBookingForm = function initializeBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const serviceSelect = document.getElementById('selectedService');
  if (serviceSelect && serviceSelect.options.length <= 1) {
    serviceSelect.innerHTML = ['<option value="">Select a maintenance service</option>']
      .concat(window.serviceCatalog.map((service) => `<option value="${service.name}">${service.name}</option>`))
      .join('');
  }

  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
};

window.submitBooking = function submitBooking(formData) {
  const existingBookings = window.getStorage('omc_demo_bookings', []);
  const bookingReference = `BK-${Math.random().toString(16).slice(2, 8).toUpperCase()}`;
  const booking = {
    id: window.generateDemoId('booking'),
    reference: bookingReference,
    status: 'Confirmed',
    createdAt: new Date().toISOString(),
    ...formData
  };
  existingBookings.unshift(booking);
  window.setStorage('omc_demo_bookings', existingBookings);
  return booking;
};
