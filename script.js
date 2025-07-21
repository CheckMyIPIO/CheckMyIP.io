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
const infoBox = document.getElementById("ip-info");

fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    infoBox.innerHTML = `
      <p><strong>IP Address:</strong> ${data.ip}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Region:</strong> ${data.region}</p>
      <p><strong>Country:</strong> ${data.country_name} (${data.country})</p>
      <p><strong>Postal Code:</strong> ${data.postal}</p>
      <p><strong>Timezone:</strong> ${data.timezone}</p>
      <p><strong>ISP / Org:</strong> ${data.org}</p>
      <p><strong>Hostname:</strong> ${data.hostname || "N/A"}</p>
    `;
  })
  .catch(error => {
    console.error("Error fetching IP data:", error);
    infoBox.innerHTML = `<p style="color:red;">⚠️ Could not load your IP info. Please try again later.</p>`;
  });
📡 Network Info
IP Address: 103.87.204.45
City: London
Region: England
Country: United Kingdom (GB)
Postal Code: SW1A
Timezone: Europe/London
ISP / Org: Cloudflare, Inc.
Hostname: 103-87-204-45.cloudflare.net

📱 Device Info
Browser: Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...
Platform: Win32
Screen Size: 1920 x 1080
