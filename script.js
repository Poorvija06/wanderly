function login(event) {

    event.preventDefault();

    document.getElementById("successPopup").classList.add("show");

    setTimeout(closePopup, 3000);

}

function closePopup() {

    document.getElementById("successPopup").classList.remove("show");

    window.location.href = "../index.html";

}
window.onload = function(){

    setTimeout(function(){

        document.getElementById("loader").style.display="none";

        document.getElementById("content").style.display="block";

    },2000);

}
const hotels = [

   // =================== Indonesia ===================
{
    location: "Indonesia",
    hotel: "The Apurva Kempinski Bali",
    image: "https://i.pinimg.com/originals/66/be/60/66be6080e0d4b76bfe8ce764ab1c5483.jpg",
    price: "$180 / Night",
    rating: "⭐ 4.9"
},
{
    location: "Indonesia",
    hotel: "Grand Hyatt Bali",
    image:"https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/08/14/0147/BALGH-P0544-Exterior-Aerial.jpg/BALGH-P0544-Exterior-Aerial.4x3.jpg?imwidth=2560",
    price: "$145 / Night",
    rating: "⭐ 4.7"
},
{
    location: "Indonesia",
    hotel: "Hard Rock Hotel Bali",
    image:"https://www.hardrockhotels.com/bali/files/6079/Rockin-Guitar-1360-x-1120-px.jpg",
    price: "$125 / Night",
    rating: "⭐ 4.6"
},

// =================== Tokyo ===================
{
    location: "Tokyo",
    hotel: "Hotel Gracery Shinjuku",
    image:"https://i.pinimg.com/736x/4d/e2/90/4de290968ef34b0901ae5276d5a21dbe.jpg",
    price: "$210 / Night",
    rating: "⭐ 4.7"
},
{
    location: "Tokyo",
    hotel: "Park Hotel Tokyo",
    image:"https://parkhoteltokyo.com/wp-content/uploads/sites/9/2019/04/Martin-Holtkamp_200211_172956_597_comp-scaled.jpg",
    price: "$195 / Night",
    rating: "⭐ 4.8"
},
{
    location: "Tokyo",
    hotel: "Shinjuku Prince Hotel",
    image:"https://fishand.tips/en/wp-content/uploads/2019/10/IMG_4660-copy.jpg",
    price: "$175 / Night",
    rating: "⭐ 4.6"
},

// =================== Japan ===================
{
    location: "Japan",
    hotel: "Fuji View Hotel",
    image:"https://fhr.fujiview.jp/intm4e00000000ax-img/intm4e000000041k.jpg",
    price: "$160 / Night",
    rating: "⭐ 4.8"
},
{
    location: "Japan",
    hotel: "Hotel Metropolitan Tokyo",
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/2b/37/e4/caption.jpg?w=500&h=500&s=1",
    price: "$145 / Night",
    rating: "⭐ 4.6"
},
{
    location: "Japan",
    hotel: "The Prince Park Tower Tokyo",
    image:"https://img.directhotels.com/jp/tokyo/the-prince-park-tower-tokyo/1.jpg",
    price: "$180 / Night",
    rating: "⭐ 4.8"
},

// =================== Switzerland ===================
{
    location: "Switzerland",
    hotel: "Badrutts Palace Hotel",
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3b/f3/c8/badrutt-s-palace-hotel.jpg?w=1800&h=1000&s=1",
    price: "$450 / Night",
    rating: "⭐ 4.9"
},
{
    location: "Switzerland",
    hotel: "Hotel Schweizerhof",
    image:"https://www.worldrainbowhotels.com/wp-content/uploads/2018/08/WRHHSCHZ-1024x630.jpg",
    price: "$320 / Night",
    rating: "⭐ 4.7"
},
{
    location: "Switzerland",
    hotel: "Victoria Jungfrau Grand Hotel",
    image:"https://i.pinimg.com/736x/05/1c/a8/051ca8061eaf1b751fd31bfa8af424cb.jpg",
    price: "$390 / Night",
    rating: "⭐ 4.8"
},

// =================== Italy ===================
{
    location: "Italy",
    hotel: "Hotel Danieli Venice",
    image:"https://www.centurion-magazine.com/media/4604/danieli-hotel-venice-luxury-collection-reception.jpg?quality=75&width=1024",
    price: "$340 / Night",
    rating: "⭐ 4.8"
},
{
    location: "Italy",
    hotel: "Rome Cavalieri",
    image:"https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1940/https://www.outthere.travel/wp-content/uploads/2019/08/Outdoor-pool_frontal-e1469604853813_FIN.jpg",
    price: "$290 / Night",
    rating: "⭐ 4.7"
},
{
    location: "Italy",
    hotel: "Grand Hotel Tremezzo",
    image:"https://i.pinimg.com/736x/14/53/68/1453687d71678393ad7461cb7e0eb45b.jpg",
    price: "$410 / Night",
    rating: "⭐ 4.9"
},

// =================== New York ===================
{
    location: "New York",
    hotel: "The Plaza Hotel",
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/02/03/76/the-plaza-hotel.jpg?w=400&h=400&s=1",
    price: "$550 / Night",
    rating: "⭐ 4.8"
},
{
    location: "New York",
    hotel: "New York Marriott Marquis",
    image:"https://cache.marriott.com/content/dam/marriott-renditions/NYCMQ/nycmq-double-guestroom-6008-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px:*",
    price: "$340 / Night",
    rating: "⭐ 4.6"
},
{
    location: "New York",
    hotel: "The Langham New York",
    image:"https://www.getawaymavens.com/wp-content/uploads/2021/04/Langham-Hotel-Entrance.jpg",
    price: "$480 / Night",
    rating: "⭐ 4.9"
},

// =================== Dubai ===================
{
    location: "Dubai",
    hotel: "Burj Al Arab",
    image:"https://th.bing.com/th/id/R.d72714cead8a47d9a02c0dc455c6e9e3?rik=ZGq4Z1LtzEmaiQ&riu=http%3a%2f%2fmedia.cntraveler.com%2fphotos%2f563126d4c406c560343dfdeb%2fmaster%2fpass%2fburj-al-arab-dubai-cr-alamy.jpg&ehk=nSDuQL697SdBxM0VXGJU7M2izOjQOjc1hiIOBTOof3Q%3d&risl=&pid=ImgRaw&r=0",
    price: "$1,200 / Night",
    rating: "⭐ 5.0"
},
{
    location: "Dubai",
    hotel: "Atlantis The Palm",
    image:"https://assets.kerzner.com/api/public/content/cfca4de8df4041dea015305e4b7ef75d?v=1a94c840&t=w2880",
    price: "$650 / Night",
    rating: "⭐ 4.9"
},
{
    location: "Dubai",
    hotel: "JW Marriott Marquis",
    image:"https://res.cloudinary.com/protenders/image/upload/s--gi3kgkyF--/ar_1:1,c_fill,dpr_auto,f_auto,fl_progressive:semi,g_auto,q_auto:eco,w_auto:100/o4gacawinoksaa2xei8e.jpg",
    price: "$280 / Night",
    rating: "⭐ 4.7"
},

// =================== Paris ===================
{
    location: "Paris",
    hotel: "Shangri-La Paris",
    image:"https://i.pinimg.com/originals/cf/db/f4/cfdbf421e0eb2d60b0f3fb60604904e0.jpg",
    price: "$620 / Night",
    rating: "⭐ 4.9"
},
{
    location: "Paris",
    hotel: "Hotel Lutetia",
    image:"https://media.istockphoto.com/id/1194446674/photo/hotel-lutetia-paris-france.jpg?s=612x612&w=0&k=20&c=JAPiQysbK4QlAUsUok_BpiHu3qGT1hZZSao0QBZxLNs=",
    price: "$460 / Night",
    rating: "⭐ 4.8"
},
{
    location: "Paris",
    hotel: "Pullman Paris Tour Eiffel",
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/bd/64/1f/pullman-paris-tour-eiffel.jpg?w=900&h=-1&s=1",
    price: "$260 / Night",
    rating: "⭐ 4.7"
},

// =================== Mount Kilimanjaro ===================
{
    location: "Mount Kilimanjaro",
    hotel: "Kilimanjaro Mountain Resort",
    image:"https://safariandbeach.com/wp-content/uploads/2023/11/Machame-Route-1024x767.webp",
    price: "$180 / Night",
    rating: "⭐ 4.6"
},
{
    location: "Mount Kilimanjaro",
    hotel: "Aishi Machame Hotel",
    image:"https://www.achieveglobalsafaris.com/wp-content/uploads/2021/02/Aishi-Machame-Hotel-1170x450.jpg",
    price: "$130 / Night",
    rating: "⭐ 4.5"
},
{
    location: "Mount Kilimanjaro",
    hotel: "Kibo Palace Hotel",
    image:"https://www.aardvark-expeditions.com/wp-content/uploads/2023/02/front-view-of-Kibo-palace-hotel.jpg",
    price: "$160 / Night",
    rating: "⭐ 4.7"
},

// =================== Rocky Mountains ===================
{
    location: "Rocky Mountains",
    hotel: "Fairmont Banff Springs",
    image:"https://www.banff-springs-hotel.com/content/uploads/2024/10/BanffSprings_2021_WinterSummer_Selects.00_21_54_01.Still032-4-1920x922.jpg",
    price: "$390 / Night",
    rating: "⭐ 4.9"
},
{
    location: "Rocky Mountains",
    hotel: "Rimrock Resort Hotel",
    image:"https://swifttravel.com/wp-content/uploads/2025/09/Rimrock-Resort-Hotel-Canada-7.jpg",
    price: "$310 / Night",
    rating: "⭐ 4.7"
},
{
    location: "Rocky Mountains",
    hotel: "The Fox Hotel & Suites",
    image:"https://banfflakelouise.bynder.com/m/53053c36e87fc311/2000x1080_jpg-2024_Accommodation_FoxHotel.jpg",
    price: "$250 / Night",
    rating: "⭐ 4.6"
},

// =================== Machu Picchu ===================
{
    location: "Machu Picchu",
    hotel: "Belmond Sanctuary Lodge",
    image:"https://img.belmond.com/f_auto/t_2580x1299/photos/mps/mps-ext02.jpg",
    price: "$580 / Night",
    rating: "⭐ 4.9"
},
{
    location: "Machu Picchu",
    hotel: "Sumaq Machu Picchu Hotel",
    image:"https://travel1tours.com/wp-content/uploads/2018/08/sumaq-machu-picchu-hotel-768x432.jpg",
    price: "$350 / Night",
    rating: "⭐ 4.8"
},
{
    location: "Machu Picchu",
    hotel: "Inkaterra Machu Picchu Pueblo Hotel",
    image:"https://www.inkaterra.com/blog/wp-content/uploads/2014/10/MP_Cafe-Inkaterra.jpg",
    price: "$420 / Night",
    rating: "⭐ 4.8"
},

// =================== Himalayas ===================
{
    location: "Himalayas",
    hotel: "Everest Summit Lodge",
    image:"https://cdn.audleytravel.com/780/557/60/240392-everest-summit-lodge-tashinga.jpg",
    price: "$120 / Night",
    rating: "⭐ 4.7"
},
{
    location: "Himalayas",
    hotel: "Yeti Mountain Home",
    image:"https://blogsmedia.s3.amazonaws.com/blog/wp-content/uploads/2021/05/22210150/banner-836x506.jpg",
    price: "$110 / Night",
    rating: "⭐ 4.6"
},
{
    location: "Himalayas",
    hotel: "Hotel Everest View",
    image:"https://peregrinetreks.com/wp-content/uploads/2024/10/amadablam-view-from-hotel-everest-view.webp",
    price: "$180 / Night",
    rating: "⭐ 4.8"
},
]
function searchHotels() {

    let location = document.getElementById("location").value;

    localStorage.setItem("location", location);

    window.location.href = "search.html";
}

let container = document.getElementById("hotelContainer");

if (container) {

    let searchLocation = localStorage.getItem("location");

    let output = "";

    for (let i = 0; i < hotels.length; i++) {

        if (hotels[i].location.toLowerCase() === searchLocation.toLowerCase()) {

            output += `
                <div class="hotel-card">
                    <img src="${hotels[i].image}" alt="${hotels[i].hotel}">
                    <h2>${hotels[i].hotel}</h2>
                    <p>📍 ${hotels[i].location}</p>
                    <h3>${hotels[i].price}</h3>
                    <p>${hotels[i].rating}</p>
                    <button class="book-btn" onclick="bookNow('${hotels[i].hotel}')">
                        Book Now
                    </button>
                </div>
                <div id="bookingPopup" class="popup">
          <div class="popup-content">
            <h2>🎉 Booking Successful!</h2>
            <p id="hotelName"></p>
           <button onclick="closeBookingPopup()">OK</button>
         </div>
        </div>
            `;
        }
    }

    if (output === "") {
        output = "<h2>No Hotels Found 😔</h2>";
    }

    container.innerHTML = output;
}

function bookNow(hotelName){

    document.getElementById("hotelName").innerHTML =
        "Your booking at <b>" + hotelName + "</b> has been confirmed! ✈️";

    document.getElementById("bookingPopup").classList.add("show");
}

function closeBookingPopup(){
    document.getElementById("bookingPopup").classList.remove("show");
}

let checkIn = document.getElementById("checkin").value;
let checkOut = document.getElementById("checkout").value;

function searchHotels() {

    let location = document.getElementById("location").value;
    let checkIn = document.getElementById("checkin").value;
    let checkOut = document.getElementById("checkout").value;

    // Empty fields validation
    if(location === "" || checkIn === "" || checkOut === ""){
        alert("Please fill all the fields.");
        return;
    }

    // Check-out must be after Check-in
    if(new Date(checkOut) <= new Date(checkIn)){
        alert("❌ Check-out date must be after the Check-in date.");
        return;
    }

    localStorage.setItem("location", location);

    window.location.href = "search.html";
}
function toggleTheme(){

    document.body.classList.toggle("dark-mode");

    let btn=document.getElementById("themeBtn");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");

        if(btn){
            btn.innerHTML="☀️";
        }

    }else{

        localStorage.setItem("theme","light");

        if(btn){
            btn.innerHTML="🌙";
        }

    }

}

window.addEventListener("load",function(){

    let theme=localStorage.getItem("theme");

    if(theme==="dark"){

        document.body.classList.add("dark-mode");

        let btn=document.getElementById("themeBtn");

        if(btn){
            btn.innerHTML="☀️";
        }

    }

});