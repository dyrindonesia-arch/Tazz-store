document.addEventListener("DOMContentLoaded", () => {
  let activeTab = "alight";
  const app = document.getElementById("app");

  function render() {
    if (activeTab === "alight") {
      app.innerHTML = `
        <header>
          <h1>Tazz Store</h1>
          <p>Premium Apps & Mobile Legends Boosting</p>
        </header>
        <nav>
          <button class="active" onclick="setTab('alight')">Alight Motion</button>
          <button class="inactive" onclick="setTab('mobile')">Joki Mobile Legends</button>
        </nav>
        <main>
          <h2>Alight Motion Premium</h2>
          <p>Paket 1 Tahun - Rp 15.000</p>
          <p>Paket Lifetime - Rp 40.000</p>
        </main>
      `;
    } else {
      app.innerHTML = `
        <header>
          <h1>Tazz Store</h1>
          <p>Premium Apps & Mobile Legends Boosting</p>
        </header>
        <nav>
          <button class="inactive" onclick="setTab('alight')">Alight Motion</button>
          <button class="active" onclick="setTab('mobile')">Joki Mobile Legends</button>
        </nav>
        <main>
          <h2>Joki Mobile Legends</h2>
          <p>Epic ⭐ - Rp 4.000</p>
          <p>Legend ⭐ - Rp 5.000</p>
          <p>Mythic ⭐ - Rp 8.000</p>
        </main>
      `;
    }
  }

  window.setTab = function(tab) {
    activeTab = tab;
    render();
  };

  render();
});
