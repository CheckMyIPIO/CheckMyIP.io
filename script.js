fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    document.getElementById("ip-info").innerHTML = `
      <p><strong>IP:</strong> ${data.ip}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Region:</strong> ${data.region}</p>
      <p><strong>Country:</strong> ${data.country_name}</p>
      <p><strong>ISP:</strong> ${data.org}</p>
    `;
  })
  .catch(() => {
    document.getElementById("ip-info").innerText = "Failed to load IP info.";
  });
