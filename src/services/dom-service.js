const renderMapHost = (hostId) => {
  const mapHost = document.createElement('div');
  mapHost.id = hostId;

  const style = `
    width: 100vw;
    height: 100vh;
  `;

  mapHost.setAttribute('style', style);

  document.body.appendChild(mapHost);
};

export default renderMapHost;
