
const packages = [["Exterior Wash", "Basic Wash", "Hatchback", "\u20b9399"], ["Exterior Wash", "Basic Wash", "Sedan", "\u20b9449"], ["Exterior Wash", "Basic Wash", "SUV / MUV", "\u20b9499"], ["Exterior Wash", "Premium Wash (Snow Foam + Dry)", "Hatchback", "\u20b9699"], ["Exterior Wash", "Premium Wash (Snow Foam + Dry)", "Sedan", "\u20b9799"], ["Exterior Wash", "Premium Wash (Snow Foam + Dry)", "SUV / MUV", "\u20b9899"], ["Interior", "Interior Cleaning", "Hatchback", "\u20b9999"], ["Interior", "Interior Cleaning", "Sedan", "\u20b91,199"], ["Interior", "Interior Cleaning", "SUV / MUV", "\u20b91,399"], ["Interior", "Complete Interior + Exterior Detailing", "Hatchback", "\u20b92,499"], ["Interior", "Complete Interior + Exterior Detailing", "Sedan", "\u20b92,999"], ["Interior", "Complete Interior + Exterior Detailing", "SUV / MUV", "\u20b93,499"], ["Premium Detailing", "Rubbing & Polishing", "All", "\u20b93,999 onwards"], ["Premium Detailing", "Premium Wax Treatment", "All", "\u20b92,999 onwards"], ["Premium Detailing", "Headlight Restoration", "All", "\u20b9999 onwards"], ["Premium Detailing", "Teflon Coating", "All", "\u20b92,499 onwards"], ["Premium Detailing", "Nano Coating", "All", "\u20b93,499 onwards"], ["Paint Protection", "Ceramic Coating (9H)", "All", "\u20b914,999 onwards"], ["Paint Protection", "Graphene Coating", "All", "\u20b919,999 onwards"], ["Paint Protection", "PPF \u2013 Partial", "All", "\u20b919,999 onwards"], ["Paint Protection", "PPF \u2013 Full Front", "All", "\u20b929,999 onwards"], ["Paint Protection", "PPF \u2013 Full Body", "All", "\u20b965,000 onwards"], ["Underbody", "Silencer Coating + Underbody Rust Protection", "Hatchback", "\u20b93,999"], ["Underbody", "Silencer Coating + Underbody Rust Protection", "SUV / MUV", "\u20b94,999"], ["Underbody", "Premium Silencer + Underbody Treatment", "Hatchback", "\u20b95,999"], ["Underbody", "Premium Silencer + Underbody Treatment", "SUV / MUV", "\u20b97,999"], ["Underbody", "Polishing + Silencer + Underbody Protection", "Hatchback", "\u20b97,999"], ["Underbody", "Polishing + Silencer + Underbody Protection", "SUV / MUV", "\u20b99,999"], ["Interior & Other", "AC Disinfection (Anti-bacterial)", "All", "\u20b9799 onwards"], ["Interior & Other", "Interior Deep Cleaning", "All", "\u20b92,499 onwards"], ["Interior & Other", "Seat & Carpet Cleaning", "All", "\u20b92,499 onwards"], ["Interior & Other", "Engine Bay Cleaning", "All", "\u20b9999 onwards"], ["Interior & Other", "Mirror / Glass Coating", "All", "\u20b91,499 onwards"]];
const wa = "919392128833";
function renderPackages(filter="All"){
  const body=document.getElementById("priceBody");
  body.innerHTML="";
  packages.filter(x=>filter==="All"||x[0]===filter).forEach(x=>{
    const tr=document.createElement("tr");
    const safeName=x[1].replace(/'/g,"\\'");
    tr.innerHTML=`<td>${x[0]}</td><td>${x[1]}</td><td>${x[2]}</td><td class="price">${x[3]}</td><td><button class="btn primary" onclick="choosePackage('${safeName}','${x[3]}')">Book</button></td>`;
    body.appendChild(tr);
  });
}
function choosePackage(name,price){
  document.getElementById("service").value=name;
  document.getElementById("message").value=`I am interested in ${name} (${price}). Please confirm availability and final price for my vehicle.`;
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}
function filterPackages(f){
  document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.f===f));
  renderPackages(f);
}
function sendWA(e){
  e.preventDefault();
  const ids=["name","phone","vehicle","reg","service","date","message"];
  const v=Object.fromEntries(ids.map(id=>[id,document.getElementById(id).value]));
  const msg=`Hello HARSHITH MOTORS, I want to book a service.%0A%0AName: ${encodeURIComponent(v.name)}%0AMobile: ${encodeURIComponent(v.phone)}%0ACar: ${encodeURIComponent(v.vehicle)}%0ARegistration: ${encodeURIComponent(v.reg)}%0AService/package: ${encodeURIComponent(v.service)}%0APreferred date: ${encodeURIComponent(v.date)}%0ADetails: ${encodeURIComponent(v.message)}`;
  window.open(`https://wa.me/${wa}?text=${msg}`,"_blank");
}
document.addEventListener("DOMContentLoaded",()=>renderPackages());
