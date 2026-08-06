import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default Leaflet marker icons in React/TypeScript
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: (markerIcon as any).src || markerIcon,
  iconRetinaUrl: (markerIcon2x as any).src || markerIcon2x,
  shadowUrl: (markerShadow as any).src || markerShadow,
});

const stores = [
  { id: 1, name: "Zaika BBQ & grill, Edison", lat: 40.534787611862306, lng: -74.3482823472462 },
  { id: 2, name: "Sherins Halal Meat, Edison", lat: 40.57668189518129, lng: -74.37733610306739 },
  { id: 3, name: "Crepe Delisious Menlo Mall, Edison", lat: 40.54851819990462, lng: -74.33579364724568 },
  { id: 4, name: "Welsh farms, Edison", lat: 40.515209056486384, lng: -74.3758890742344 },
  { id: 5, name: "Khorasan Kabab, Metuchen", lat: 40.542329337040826, lng: -74.3642042300561 },
  { id: 6, name: "Supreme Halal Meat, Piscataway", lat: 40.538116461454464, lng: -74.42212326073975 },
  { id: 7, name: "Shalimar Halal Meat, Iselin", lat: 40.5734250621988, lng: -74.32406900289091 },
  { id: 8, name: "Shalimar Grill, Iselin", lat: 40.5740112597558, lng: -74.32619720289085 },
  { id: 9, name: "Shahnawaz Halal Meat, Iselin", lat: 40.57536415889202, lng: -74.31840142008164 },
  { id: 10, name: "Smash n Spice, Highland Park", lat: 40.499627146379275, lng: -74.4269700894005 },
  { id: 11, name: "Al Madina Halal Meat, Hamilton", lat: 40.58041859071294, lng: -74.29421642092176 },
  { id: 12, name: "Shan halal meat", lat: 40.76451596196686, lng: -73.82521875770038 },
  { id: 13, name: "Zinger halal express, East Brunswick", lat: 40.448055871434576, lng: -74.39776080289607 },
  { id: 14, name: "711, East Brunswick", lat: 40.41160309964544, lng: -74.37010348940422 },
  { id: 15, name: "Belmont Halal Meat, Haledon", lat: 40.93298528751272, lng: -74.18380700287602 },
  { id: 16, name: "Guacado, Paterson", lat: 40.895561161395165, lng: -74.16018004520643 },
  { id: 17, name: "Burger Mania, Manhattan", lat: 40.7557671068266, lng: -73.99050447404778 },
  { id: 18, name: "Al kofeia, Bayonne", lat: 40.65689964899988, lng: -74.1244242395038 },
  { id: 19, name: "Halal Express, Fords", lat: 40.54817046660112, lng: -74.3224315317275 },
  { id: 20, name: "Kennedy Fried, Fords", lat: 40.52740425600653, lng: -74.30888986056381 },
  { id: 21, name: "Shaan Halal Meat, Somerset", lat: 40.48190717142926, lng: -74.48259105871693 },
  { id: 22, name: "Khan Baba, North Brunswick", lat: 40.43346950508125, lng: -74.48748287406112 },
  { id: 23, name: "Istanbul Restaurant, North Brunswick", lat: 40.43868187143606, lng: -74.50898456056757 },
  { id: 24, name: "Rahat Bakery, North Brunswick", lat: 40.43871690571777, lng: -74.50909828940303 },
  { id: 25, name: "Am Halal Meat House, North Brunswick", lat: 40.43874837143598, lng: -74.50907273173193 },
  { id: 26, name: "Garden Farm Market, North Brunswick", lat: 40.43808600302915, lng: -74.50888440289651 },
  { id: 27, name: "Khyber, New Brunswick", lat: 40.49571447142711, lng: -74.44462613172959 },
  { id: 28, name: "Kaizr, New Brunswick", lat: 40.496189171426906, lng: -74.44437957405863 },
  { id: 29, name: "Bums & Shake, New Brunswick", lat: 40.49573089962617, lng: -74.4446505901395 },
  { id: 30, name: "Nacho Bae, New Brunswick", lat: 40.49680576095497, lng: -74.44720271000281 },
  { id: 33, name: "711, New Brunswick", lat: 40.49166697142778, lng: -74.44306183172979 },
  { id: 34, name: "Halal Butcher Market, UNION", lat: 40.67267047139956, lng: -74.24197003172236 },
  { id: 35, name: "Emaan Halal Meat, UNION", lat: 40.7034782942753, lng: -74.29166193127638 },
  { id: 36, name: "711, UNION", lat: 40.69888510754346, lng: -74.28160744706332 },
  { id: 37, name: "Blazin Chicken & Gyro, HACKENSACK", lat: 40.87423950913001, lng: -74.04056791637181 },
  { id: 38, name: "Blazin Chicken & Gyro, NORTH BERGEN", lat: 40.79978734967927, lng: -74.00777150288147 },
  { id: 39, name: "Hamza & Madina, Elizabeth", lat: 40.663416078347815, lng: -74.23452033172272 },
  { id: 40, name: "Halal express, Parsippany", lat: 40.85595577137225, lng: -74.42735010287922 },
  { id: 41, name: "Zalim Hot Chicken, Parsippany", lat: 40.865880725816744, lng: -74.42166220287874 },
  { id: 42, name: "Halal express, Jersey city", lat: 40.708848271394174, lng: -74.08118274521419 },
  { id: 43, name: "Smash City, Jersey City", lat: 40.70063807286255, lng: -74.09092481822773 },
  { id: 44, name: "711, Jersey City", lat: 40.73585884851959, lng: -74.05665176055528 },
  { id: 45, name: "Ravi Naan Kabab, Old Bridge", lat: 40.44005346479284, lng: -74.29971927406088 },
  { id: 46, name: "711, Old Bridge", lat: 40.432087137961815, lng: -74.29696318940326 },
  { id: 47, name: "Chick & Kick, Teaneck", lat: 40.90063220877492, lng: -74.00593900287726 },
  { id: 48, name: "Tiger Mart, Holmdel", lat: 40.411244400215445, lng: -74.14084900560916 },
  { id: 49, name: "711, Holmdel", lat: 40.41529340287719, lng: -74.15954820289738 },
  { id: 50, name: "Welsh Farms, Whippany", lat: 40.83622287137525, lng: -74.44747654520894 },
  { id: 51, name: "Welsh Farms, Sparta", lat: 41.04014153360305, lng: -74.64324917403596 },
  { id: 52, name: "711, Middlesex", lat: 40.56250095701082, lng: -74.52202779497802 },
  { id: 53, name: "711, Clark", lat: 40.618082390886826, lng: -74.29553307405351 },
  { id: 54, name: "Zac’s Burger, West Windsor", lat: 40.31267559044914, lng: -74.62082710290164 },
  { id: 55, name: "711, Princeton", lat: 40.31156693947659, lng: -74.6197182317372 },
  { id: 56, name: "711, Hightstown", lat: 40.26919171656543, lng: -74.54256120290346 },
  { id: 57, name: "711, Randolph", lat: 40.879212983345234, lng: -74.54130258938478 },
  { id: 58, name: "711, Harrison", lat: 40.74564271474469, lng: -74.16474954521269 },
  { id: 59, name: "Burger Mania, Manhattan NY", lat: 40.75267564392459, lng: -73.9851379605546 },
  { id: 61, name: "Raceway, Bethlehem PA", lat: 40.64298292627986, lng: -75.34986218754587 },
  { id: 62, name: "Taste Of Kabul Kabob, Scotch Plains", lat: 40.66454026254914, lng: -74.38678250288709 },
  { id: 63, name: "Hunger Chef, Wood Ridge", lat: 40.84673750328454, lng: -74.08257917404407 },
  { id: 64, name: "Zalim Hot Chicken, Englewood", lat: 40.89416190180182, lng: -73.97488507404202 },
  { id: 66, name: "CITGO, Bloomsbury", lat: 40.658324766341856, lng: -75.07372143172294 },
  { id: 67, name: "Mavi Cafe, Staten Island", lat: 40.64387081215322, lng: -74.07748221823014 },
  { id: 68, name: "Tacobees, Staten Island", lat: 40.626743257083355, lng: -74.13168978939534 },
  { id: 69, name: "Hejaz Cafe, Franklin Park", lat: 40.42824230542159, lng: -74.56304373173239 },
  { id: 70, name: "Tacobees, Franklin Park", lat: 40.43804823983804, lng: -74.53759566056755 },
  { id: 71, name: "Crown Fish & Chicken, Kendall Park", lat: 40.43799876629066, lng: -74.53631040474522 },
  { id: 72, name: "Zinger Halal Express, Staten Island", lat: 40.61229776060761, lng: -74.12951696056031 },
  { id: 73, name: "Best Grill & Fries, Princeton", lat: 40.351290871450225, lng: -74.65487153173561 },
  { id: 74, name: "Asian Halal Meat, East Windsor", lat: 40.26749861738533, lng: -74.54407510290358 },
  { id: 75, name: "Spice Wok, East Windsor", lat: 40.27170128549414, lng: -74.5401452317389 },
  { id: 76, name: "Masala Grill, Colonia", lat: 40.57989547141381, lng: -74.2942747433708 },
  { id: 77, name: "Ali Baba the Waffle House, Plainfield", lat: 40.6160449155504, lng: -74.41872990288915 },
  { id: 78, name: "Seoul Fried Chicken, Hackensack", lat: 40.885109948863786, lng: -74.04237351452264 },
  { id: 80, name: "Sumaq, Massapequa NY", lat: 40.7003545729665, lng: -73.43149316055676 },
  { id: 81, name: "Downtown Pharmacy, New York City", lat: 40.71028603668126, lng: -74.00584357404966 },
  { id: 82, name: "Metro Organic Deli, Brooklyn", lat: 40.71452523203049, lng: -73.94624410288499 },
  { id: 84, name: "Haris Grocery, Carteret", lat: 40.570702369431274, lng: -74.23686997405542 },
  { id: 85, name: "Mecca Mini Mart, Paterson", lat: 40.89614620107187, lng: -74.16067363171298 },
  { id: 86, name: "Al-Awda Cafe, Paterson", lat: 40.89806789069756, lng: -74.16314406054849 },
  { id: 87, name: "Tantoony, Paterson", lat: 40.89326838162053, lng: -74.15786850287756 },
  { id: 88, name: "Halal Wok, Paterson", lat: 40.89499519145138, lng: -74.15993373171314 },
  { id: 89, name: "Mashawy House, Paterson", lat: 40.8961475713665, lng: -74.16110243171302 },
  { id: 90, name: "Sam’s Pizza, Paterson", lat: 40.8982718810064, lng: -74.16258937404189 },
  { id: 91, name: "Grab & Go, Paterson", lat: 40.899607471366046, lng: -74.16143783171296 },
  { id: 92, name: "Dokan, Paterson", lat: 40.89806789069756, lng: -74.16311187404193 },
  { id: 93, name: "Arabian Cafe, Paterson", lat: 40.89116427136722, lng: -74.15588433171327 },
  { id: 94, name: "Moe’s Hot Chicken, Voorhees", lat: 39.820228831179726, lng: -74.94862890292184 },
  { id: 95, name: "711, Allentown Pa", lat: 40.60384931901915, lng: -75.47293331823177 },
  { id: 96, name: "711, Hellertown Pa", lat: 40.5851288235044, lng: -75.3416749298772 },
  { id: 97, name: "Ember & Bun, Bayonne", lat: 40.66276652518351, lng: -74.11902530288722 },
  { id: 98, name: "Koy Grill, East Brunswick", lat: 40.4535555271068, lng: -74.39892318940244 },
  { id: 99, name: "Koy Grill, Marlboro", lat: 40.342385558502116, lng: -74.304370631736 },
  { id: 100, name: "Bagel & Crumbs, Boonton", lat: 40.90535578890937, lng: -74.41137273171266 },
  { id: 101, name: "Bagel & Beyond, Montville", lat: 40.88432250542145, lng: -74.36526088938459 },
  { id: 102, name: "Rahat Bakery, Maryland", lat: 39.081666499924964, lng: -76.8633363452806 },
  { id: 103, name: "Forest Bagel, Staten Island", lat: 40.626442452084824, lng: -74.1293111732654 },
  { id: 104, name: "Grill 37, Tom’s River", lat: 39.964089517689565, lng: -74.19888503175144 },
  { id: 105, name: "Flaming Kabab, Somerset", lat: 40.51105128528003, lng: -74.487515231729 },
  { id: 106, name: "Dosti & Chai, Somerville", lat: 40.567630871498615, lng: -74.61342790289115 },
  { id: 107, name: "711, Marlton", lat: 39.90107980218701, lng: -74.88309307408296 },
];


// --- NEW COMPONENT: Button & User Location Marker ---
function FindNearMe() {
  const map = useMap();

  useEffect(() => {
    // When the map successfully gets the location
    map.on('locationfound', (e) => {
      // Changed zoom level from 11 to 13 to zoom in more
      map.flyTo(e.latlng, 13); 
    });

    // If the user denies permission or it fails
    map.on('locationerror', () => {
      alert("Could not access your location. Please check your browser permissions.");
    });
  }, [map]);

  return (
    <button 
      onClick={() => map.locate()}
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'white',
        border: '1px solid rgba(0,0,0,0.1)',
        padding: '10px 16px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: '#333'
      }}
    >
      📍 Find Near Me
    </button>
  );
}


export default function StoreMap() {
  return (
    <div 
      style={{ 
        height: "600px",
        width: "100%", 
        borderRadius: "24px", 
        overflow: "hidden", 
        border: "4px solid rgba(255,255,255,0.95)", 
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        marginBottom: "48px",
        zIndex: 10,
        position: "relative" // Required for the absolute button inside
      }}
    >
      <MapContainer 
        center={[40.6, -74.25]} 
        zoom={8} 
        style={{ height: "100%", width: "100%", zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Drop our custom control inside the map */}
        <FindNearMe />
        
        {/* Render all markers directly instead of clustering */}
        {stores.map(store => {
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name)}`;
          
          return (
            <Marker key={store.id} position={[store.lat, store.lng]}>
              <Popup>
                <div style={{ textAlign: 'center' }}>
                  <strong style={{ display: 'block', marginBottom: '8px' }}>{store.name}</strong>
                  <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#4285F4',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}
                  >
                    Open in Google Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}