const PRODUCTS = [
  { id: 1, name: 'Smart WiFi Plug', category: 'Smart Living', price: 1800, img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', desc: 'Control appliances remotely with voice assistant integration and smartphone scheduling.' },
  { id: 2, name: 'WiFi Router Mini UPS', category: 'Power Backup', price: 3500, img: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=600&q=80', desc: 'Uninterrupted internet connection during load shedding with built-in high capacity lithium cells.' },
  { id: 3, name: 'Solar Motion Sensor Security Lights', category: 'Lighting', price: 2900, img: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80', desc: 'Weatherproof outdoor security lighting powered entirely by solar energy with auto-trigger motion sensors.' },
  { id: 4, name: 'Auto Voltage Protector', category: 'Safety', price: 2600, img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80', desc: 'Shields expensive home appliances against sudden power surges, high voltage spikes, and brownouts.' },
  { id: 5, name: 'WiFi RGB Smart Bulb', category: 'Lighting', price: 1200, img: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80', desc: 'Millions of vibrant colors and dimmable warm white tones controllable via app or voice command.' },
  { id: 6, name: 'Digital Electric Consumption Meter', category: 'Monitoring', price: 2200, img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', desc: 'Track live power consumption, voltage, frequency, and estimated electricity bills in real-time.' },
  { id: 7, name: 'Multi Power Plug Extension Board (4 Sockets + 2 USB + 1 Type-C)', category: 'Accessories', price: 2400, img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80', desc: 'Heavy-duty surge protected extension block featuring fast USB charging ports and Type-C output.' },
  { id: 8, name: 'Auto On-Off Water Rod', category: 'Home Appliances', price: 3800, img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80', desc: 'Smart immersion heating rod designed with automatic thermal cut-off for safe water heating.' },
  { id: 9, name: 'Electric Blanket Warmer', category: 'Home Appliances', price: 5500, img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80', desc: 'Cozy thermal comfort blanket with multi-level heat control settings and secure auto-shutoff.' },
  { id: 10, name: 'Mini Heater PTC Ceramic', category: 'Climate', price: 4200, img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=600&q=80', desc: 'Rapid heating compact ceramic fan heater with tip-over protection and adjustable thermostat.' },
  { id: 11, name: 'RGB Light Lamp Corner', category: 'Lighting', price: 3100, img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80', desc: 'Minimalist ambient corner standing lamp featuring dynamic music sync and customizable color effects.' },
  { id: 12, name: 'Motion Sensor Light Strip', category: 'Lighting', price: 1600, img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80', desc: 'Flexible LED strip with passive infrared sensor illumination ideal for bedsides, stairs, and corridors.' },
  { id: 13, name: 'Digital Air Inflator for Car & Bike', category: 'Automotive & Tools', price: 4500, img: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80', desc: 'Portable smart air compressor with a digital pressure gauge and auto-shutoff feature for vehicle tires and sports gear.' }
];

let cart = JSON.parse(localStorage.getItem('enafu_cart')) || [];
function saveCart() { localStorage.setItem('enafu_cart', JSON.stringify(cart)); updateCartBadge(); }

function updateCartBadge() {
  let badge = document.getElementById('cartBadge');
  if(badge) badge.innerText = cart.reduce((s, i) => s + i.qty, 0);
}

function addToCart(id) {
  let item = cart.find(i => i.id === id);
  if(item) item.qty++; else cart.push({...PRODUCTS.find(p => p.id === id), qty: 1});
  saveCart();
  alert('Product added to cart successfully!');
}

function filterCatalog() {
  let query = document.getElementById('globalSearch').value.toLowerCase();
  let grid = document.getElementById('productGrid');
  if(!grid) return;
  let filtered = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
  grid.innerHTML = filtered.map(p => `
    <div class="bg-white rounded-2xl border border-brand-border overflow-hidden shadow-sm flex flex-col justify-between">
      <a href="product.html?id=${p.id}" class="aspect-square bg-slate-100 overflow-hidden relative block">
        <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover hover:scale-105 transition duration-500">
        <span class="absolute top-3 left-3 bg-brand-navy/80 text-white text-[9px] font-bold px-2.5 py-1 rounded-lg uppercase">${p.category}</span>
      </a>
      <div class="p-4 flex flex-col flex-1 justify-between">
        <div>
          <a href="product.html?id=${p.id}" class="font-bold text-xs text-brand-navy line-clamp-2 hover:text-brand-orange transition">${p.name}</a>
          <p class="text-[11px] text-slate-500 mt-1 line-clamp-2">${p.desc}</p>
        </div>
        <div class="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
          <span class="font-extrabold text-sm text-brand-navy">Rs. ${p.price.toLocaleString()}</span>
          <div class="flex gap-2">
            <a href="product.html?id=${p.id}" class="bg-slate-100 hover:bg-slate-200 text-brand-navy font-bold px-2.5 py-1.5 rounded-lg text-[11px]">Details</a>
            <button onclick="addToCart(${p.id})" class="bg-brand-navy hover:bg-brand-orange text-white font-bold px-3 py-1.5 rounded-lg text-[11px] cursor-pointer">+ Add</button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function initProductPage() {
  let params = new URLSearchParams(window.location.search);
  let id = parseInt(params.get('id'));
  let p = PRODUCTS.find(item => item.id === id) || PRODUCTS[0];
  let container = document.getElementById('productDetailContainer');
  if(!container) return;
  
  container.innerHTML = `
    <div class="aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-brand-border shadow-md">
      <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover">
    </div>
    <div class="flex flex-col justify-center">
      <span class="bg-brand-orange/10 text-brand-orange font-extrabold text-[10px] uppercase px-3 py-1 rounded-full w-max mb-3">${p.category}</span>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-brand-navy">${p.name}</h1>
      <p class="text-2xl font-extrabold text-brand-orange mt-4">Rs. ${p.price.toLocaleString()}</p>
      <p class="text-sm text-slate-600 mt-4 leading-relaxed">${p.desc}</p>
      <div class="mt-8 border-t border-brand-border pt-6 space-y-4">
        <button onclick="addToCart(${p.id})" class="w-full bg-brand-orange hover:bg-orange-600 text-white font-extrabold py-4 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-brand-orange/30 cursor-pointer">Add to Cart</button>
      </div>
    </div>
  `;
}

function initCartPage() {
  let list = document.getElementById('cartItemsList');
  if(!list) return;
  list.innerHTML = cart.length === 0 ? '<div class="text-center py-8 text-slate-400 text-xs">Your cart is empty</div>' : cart.map(i => `
    <div class="py-4 flex items-center gap-4">
      <div class="flex-1">
        <h4 class="font-bold text-xs text-brand-navy">${i.name}</h4>
        <span class="text-[11px] text-brand-orange font-bold">Rs. ${i.price.toLocaleString()} x ${i.qty}</span>
      </div>
      <button onclick="cart = cart.filter(x=>x.id!==${i.id});saveCart();initCartPage();" class="text-red-500 font-bold text-lg px-2 cursor-pointer">&times;</button>
    </div>`).join('');
  
  let sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let subEl = document.getElementById('cartSubtotal');
  if(subEl) subEl.innerText = `Rs. ${sub.toLocaleString()}`;
}

function processOrder(e) {
  e.preventDefault();
  let name = document.getElementById('custName').value;
  let phone = document.getElementById('custPhone').value;
  let address = document.getElementById('custAddress').value;
  let city = document.getElementById('custCity').value;
  
  let itemsText = cart.map(i => `- ${i.name} (Qty: ${i.qty}) - Rs. ${i.price * i.qty}`).join('\n');
  let total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  
  let summary = `*New Order - Enafu Store*\n\n*Customer Details:*\nName: ${name}\nPhone: ${phone}\nAddress: ${address}, ${city}\n\n*Order Items:*\n${itemsText}\n\n*Total Amount:* Rs. ${total.toLocaleString()}`;
  
  cart = []; saveCart();
  window.open(`https://wa.me/923435356153?text=${encodeURIComponent(summary)}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  if(document.getElementById('productGrid')) filterCatalog();
  if(document.getElementById('productDetailContainer')) initProductPage();
  if(document.getElementById('cartItemsList')) initCartPage();
});
