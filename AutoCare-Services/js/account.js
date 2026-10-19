window.renderAccountOverview = function renderAccountOverview() {
  const session = window.getDemoSession();
  const profileInfo = document.getElementById('profileInfo');
  if (!profileInfo) return;

  if (!session) {
    profileInfo.innerHTML = '<p class="mb-0">Please log in to view your account details.</p>';
    return;
  }

  profileInfo.innerHTML = `
    <div class="mb-3"><strong>Name:</strong> ${session.name}</div>
    <div class="mb-3"><strong>Email:</strong> ${session.email}</div>
    <div class="mb-3"><strong>Phone:</strong> ${session.phone}</div>
  `;
};

window.renderAccountBookings = function renderAccountBookings() {
  const container = document.getElementById('upcomingBookings');
  if (!container) return;
  const bookings = window.getStorage('omc_demo_bookings', []);
  if (!bookings.length) {
    container.innerHTML = '<div class="empty-state"><p class="mb-0">No upcoming bookings found.</p></div>';
    return;
  }

  const upcoming = bookings.slice(0, 3);
  container.innerHTML = upcoming.map((booking) => `
    <div class="border rounded p-3 mb-3">
      <div class="d-flex justify-content-between align-items-center mb-2"><strong>${booking.reference}</strong><span class="badge bg-success">${booking.status}</span></div>
      <div class="text-muted">${booking.selectedService}</div>
      <div class="small text-muted">${booking.preferredDate} at ${booking.preferredTime}</div>
    </div>
  `).join('');
};
