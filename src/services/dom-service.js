const showToast = (message, displayFor = 5000) => {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  toastMessage.innerText = message;

  toast.classList.remove('hidden');
  toast.classList.add('showing');
  setTimeout(() => {
    toast.classList.remove('showing');
    toast.classList.add('hidden');
  }, displayFor);
};

export default showToast;
