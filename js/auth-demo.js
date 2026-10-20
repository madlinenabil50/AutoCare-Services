window.registerDemoAccount = function registerDemoAccount(accountData) {
  const users = window.getStorage('omc_demo_users', []);
  if (users.some((user) => user.email.toLowerCase() === accountData.email.toLowerCase())) {
    return { success: false, message: 'An account with this email already exists.' };
  }

  users.push({ ...accountData, passwordHash: 'demo-hash' });
  window.setStorage('omc_demo_users', users);
  window.setStorage('omc_demo_session', { name: accountData.name, email: accountData.email, phone: accountData.phone });
  return { success: true, message: 'Demo registration successful.' };
};

window.loginDemoAccount = function loginDemoAccount(email, password) {
  const users = window.getStorage('omc_demo_users', []);
  const user = users.find((entry) => entry.email.toLowerCase() === email.toLowerCase());
  if (!user || !password) {
    return { success: false, message: 'No matching demo account was found.' };
  }

  window.setStorage('omc_demo_session', { name: user.name, email: user.email, phone: user.phone });
  return { success: true, message: 'Demo login successful.' };
};
