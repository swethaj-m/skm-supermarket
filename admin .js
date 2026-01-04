const adminForm = document.getElementById("adminForm");
const categorySelect = document.getElementById("category");
const descriptionInput = document.getElementById("description");
const savedMessage = document.getElementById("savedMessage");

const categories = ["Fruits", "Vegetables", "Groceries", "Dairy", "Household"];

// Default bilingual descriptions
const defaultDescriptions = {
  "Fruits": "Fresh seasonal fruits available daily. / புதிய பருவ பழங்கள் தினமும் கிடைக்கின்றன.",
  "Vegetables": "Organic and fresh vegetables from local farms. / உள்ளூர் தோட்டங்களில் இருந்து உயிரியல் காய்கறிகள்.",
  "Groceries": "All essential grocery items for your daily needs. / தினசரி தேவைக்கான அனைத்து அத்தியாவசிய கீரைகள்.",
  "Dairy": "Milk, curd, butter, and other dairy products. / பால், தயிர், வெண்ணெய் மற்றும் பிற பாலை பொருட்கள்.",
  "Household": "All household cleaning and daily utility items. / வீட்டு சுத்தம் மற்றும் அன்றாட பயன்பாட்டு பொருட்கள்."
};

// Load default descriptions if not present
categories.forEach(cat => {
  if (!localStorage.getItem(cat)) {
    localStorage.setItem(cat, defaultDescriptions[cat]);
  }
});

// Show description when category is selected
function loadDescription() {
  const cat = categorySelect.value;
  descriptionInput.value = localStorage.getItem(cat);
}

categorySelect.addEventListener("change", loadDescription);
window.onload = loadDescription;

// Save description
adminForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const cat = categorySelect.value;
  const desc = descriptionInput.value.trim();
  if(desc === "") return;

  localStorage.setItem(cat, desc);
  savedMessage.textContent = `Description for "${cat}" saved successfully!`;

  setTimeout(() => {
    savedMessage.textContent = "";
  }, 3000);
});
