const info = document.getElementById("categoryInfo");

function showCategory(category) {
  const description = localStorage.getItem(category) || "Click a category to see more information. / ஒரு பிரிவைக் கிளிக் செய்து மேலதிக தகவலைப் பார்க்கவும்.";
  info.innerHTML = `<h3>${category}</h3><p>${description}</p>`;
}

// Show first category by default
showCategory("Fruits");
