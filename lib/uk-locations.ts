// This file contains a comprehensive database of UK photography locations
// organized by region, including both inland and coastal locations

export const ukLocations = [
  {
    id: "south-west-england",
    name: "South West England",
    locations: [
      // Cornwall - Coastal
      {
        id: "st-michaels-mount",
        name: "St. Michael's Mount, Cornwall",
        type: "coastal",
        coordinates: { lat: 50.1177, lng: -5.4768 },
        tidalLocation: true,
      },
      {
        id: "godrevy-lighthouse",
        name: "Godrevy Lighthouse, Cornwall",
        type: "coastal",
        coordinates: { lat: 50.2359, lng: -5.3907 },
        tidalLocation: true,
      },
      {
        id: "kynance-cove",
        name: "Kynance Cove, Cornwall",
        type: "coastal",
        coordinates: { lat: 49.9748, lng: -5.2313 },
        tidalLocation: true,
      },
      {
        id: "porthcurno",
        name: "Porthcurno, Cornwall",
        type: "coastal",
        coordinates: { lat: 50.0422, lng: -5.6513 },
        tidalLocation: true,
      },

      // Cornwall - Inland
      {
        id: "bodmin-moor",
        name: "Bodmin Moor, Cornwall",
        type: "inland",
        coordinates: { lat: 50.5169, lng: -4.6675 },
        tidalLocation: false,
      },
      {
        id: "golitha-falls",
        name: "Golitha Falls, Cornwall",
        type: "inland",
        coordinates: { lat: 50.4736, lng: -4.5301 },
        tidalLocation: false,
      },

      // Devon - Coastal
      {
        id: "hartland-quay",
        name: "Hartland Quay, Devon",
        type: "coastal",
        coordinates: { lat: 50.9947, lng: -4.4873 },
        tidalLocation: true,
      },
      {
        id: "westward-ho",
        name: "Westward Ho!, Devon",
        type: "coastal",
        coordinates: { lat: 51.0425, lng: -4.2547 },
        tidalLocation: true,
      },

      // Devon - Inland
      {
        id: "dartmoor",
        name: "Dartmoor National Park, Devon",
        type: "inland",
        coordinates: { lat: 50.5719, lng: -3.9204 },
        tidalLocation: false,
      },
      {
        id: "haytor",
        name: "Haytor, Dartmoor",
        type: "inland",
        coordinates: { lat: 50.58, lng: -3.7566 },
        tidalLocation: false,
      },

      // Dorset - Coastal
      {
        id: "durdle-door",
        name: "Durdle Door, Dorset",
        type: "coastal",
        coordinates: { lat: 50.6212, lng: -2.2765 },
        tidalLocation: true,
      },
      {
        id: "lulworth-cove",
        name: "Lulworth Cove, Dorset",
        type: "coastal",
        coordinates: { lat: 50.6184, lng: -2.2477 },
        tidalLocation: true,
      },

      // Dorset - Inland
      {
        id: "gold-hill",
        name: "Gold Hill, Shaftesbury",
        type: "inland",
        coordinates: { lat: 51.0059, lng: -2.1969 },
        tidalLocation: false,
      },
      {
        id: "corfe-castle",
        name: "Corfe Castle, Dorset",
        type: "inland",
        coordinates: { lat: 50.6395, lng: -2.0566 },
        tidalLocation: false,
      },
    ],
  },
  {
    id: "south-east-england",
    name: "South & South East England",
    locations: [
      // Hampshire & Isle of Wight - Coastal
      {
        id: "the-needles",
        name: "The Needles, Isle of Wight",
        type: "coastal",
        coordinates: { lat: 50.6636, lng: -1.5904 },
        tidalLocation: true,
      },
      {
        id: "freshwater-bay",
        name: "Freshwater Bay, Isle of Wight",
        type: "coastal",
        coordinates: { lat: 50.6614, lng: -1.5169 },
        tidalLocation: true,
      },

      // Hampshire - Inland
      {
        id: "new-forest",
        name: "New Forest National Park",
        type: "inland",
        coordinates: { lat: 50.8679, lng: -1.5696 },
        tidalLocation: false,
      },
      {
        id: "bolderwood",
        name: "Bolderwood, New Forest",
        type: "inland",
        coordinates: { lat: 50.8743, lng: -1.6565 },
        tidalLocation: false,
      },

      // Sussex & Kent - Coastal
      {
        id: "seven-sisters",
        name: "Seven Sisters, Sussex",
        type: "coastal",
        coordinates: { lat: 50.7502, lng: 0.1548 },
        tidalLocation: true,
      },
      {
        id: "birling-gap",
        name: "Birling Gap, Sussex",
        type: "coastal",
        coordinates: { lat: 50.7438, lng: 0.2003 },
        tidalLocation: true,
      },

      // Sussex & Kent - Inland
      {
        id: "ashdown-forest",
        name: "Ashdown Forest, Sussex",
        type: "inland",
        coordinates: { lat: 51.0577, lng: 0.03 },
        tidalLocation: false,
      },
      {
        id: "scotney-castle",
        name: "Scotney Castle, Kent",
        type: "inland",
        coordinates: { lat: 51.0921, lng: 0.4066 },
        tidalLocation: false,
      },
    ],
  },
  {
    id: "east-england",
    name: "East England",
    locations: [
      // East Anglia - Coastal
      {
        id: "aldeburgh",
        name: "Aldeburgh, Suffolk",
        type: "coastal",
        coordinates: { lat: 52.1533, lng: 1.6013 },
        tidalLocation: true,
      },
      {
        id: "southwold",
        name: "Southwold, Suffolk",
        type: "coastal",
        coordinates: { lat: 52.3271, lng: 1.679 },
        tidalLocation: true,
      },

      // East Anglia - Inland
      {
        id: "norfolk-broads",
        name: "Norfolk Broads",
        type: "inland",
        coordinates: { lat: 52.6209, lng: 1.5619 },
        tidalLocation: false,
      },
      {
        id: "thetford-forest",
        name: "Thetford Forest, Norfolk",
        type: "inland",
        coordinates: { lat: 52.4542, lng: 0.6851 },
        tidalLocation: false,
      },
    ],
  },
  {
    id: "peak-district",
    name: "Peak District",
    locations: [
      {
        id: "mam-tor",
        name: "Mam Tor",
        type: "inland",
        coordinates: { lat: 53.3511, lng: -1.8094 },
        tidalLocation: false,
      },
      {
        id: "chrome-hill",
        name: "Chrome Hill",
        type: "inland",
        coordinates: { lat: 53.2564, lng: -1.89 },
        tidalLocation: false,
      },
      {
        id: "stanage-edge",
        name: "Stanage Edge",
        type: "inland",
        coordinates: { lat: 53.3464, lng: -1.6314 },
        tidalLocation: false,
      },
      {
        id: "derwent-reservoir",
        name: "Derwent Reservoir",
        type: "inland",
        coordinates: { lat: 53.4169, lng: -1.7485 },
        tidalLocation: false,
      },
    ],
  },
  {
    id: "lake-district",
    name: "Lake District",
    locations: [
      {
        id: "derwentwater",
        name: "Derwentwater",
        type: "inland",
        coordinates: { lat: 54.5764, lng: -3.1487 },
        tidalLocation: false,
      },
      {
        id: "buttermere",
        name: "Buttermere",
        type: "inland",
        coordinates: { lat: 54.5419, lng: -3.2752 },
        tidalLocation: false,
      },
      {
        id: "wastwater",
        name: "Wastwater",
        type: "inland",
        coordinates: { lat: 54.4438, lng: -3.289 },
        tidalLocation: false,
      },
      {
        id: "castlerigg-stone-circle",
        name: "Castlerigg Stone Circle",
        type: "inland",
        coordinates: { lat: 54.6034, lng: -3.0988 },
        tidalLocation: false,
      },
      // Coastal Lake District
      {
        id: "st-bees-head",
        name: "St. Bees Head, Cumbria",
        type: "coastal",
        coordinates: { lat: 54.4918, lng: -3.6384 },
        tidalLocation: true,
      },
    ],
  },
  {
    id: "north-east-england",
    name: "North East England",
    locations: [
      // Yorkshire - Coastal
      {
        id: "flamborough-head",
        name: "Flamborough Head, Yorkshire",
        type: "coastal",
        coordinates: { lat: 54.1144, lng: -0.082 },
        tidalLocation: true,
      },
      {
        id: "robin-hoods-bay",
        name: "Robin Hood's Bay, Yorkshire",
        type: "coastal",
        coordinates: { lat: 54.4359, lng: -0.534 },
        tidalLocation: true,
      },

      // Yorkshire - Inland
      {
        id: "yorkshire-dales",
        name: "Yorkshire Dales National Park",
        type: "inland",
        coordinates: { lat: 54.2339, lng: -2.1508 },
        tidalLocation: false,
      },
      {
        id: "malham-cove",
        name: "Malham Cove, Yorkshire Dales",
        type: "inland",
        coordinates: { lat: 54.0722, lng: -2.1564 },
        tidalLocation: false,
      },

      // Northumberland - Coastal
      {
        id: "bamburgh-castle",
        name: "Bamburgh Castle, Northumberland",
        type: "coastal",
        coordinates: { lat: 55.6089, lng: -1.7099 },
        tidalLocation: true,
      },
      {
        id: "holy-island",
        name: "Holy Island (Lindisfarne), Northumberland",
        type: "coastal",
        coordinates: { lat: 55.6813, lng: -1.8008 },
        tidalLocation: true,
      },

      // Northumberland - Inland
      {
        id: "hadrians-wall",
        name: "Hadrian's Wall, Northumberland",
        type: "inland",
        coordinates: { lat: 55.0252, lng: -2.5479 },
        tidalLocation: false,
      },
      {
        id: "kielder-water",
        name: "Kielder Water & Forest Park",
        type: "inland",
        coordinates: { lat: 55.2324, lng: -2.5802 },
        tidalLocation: false,
      },
    ],
  },
  {
    id: "wales",
    name: "Wales",
    locations: [
      // North Wales - Coastal
      {
        id: "llandudno",
        name: "Llandudno, North Wales",
        type: "coastal",
        coordinates: { lat: 53.3241, lng: -3.8276 },
        tidalLocation: true,
      },
      {
        id: "south-stack",
        name: "South Stack Lighthouse, Anglesey",
        type: "coastal",
        coordinates: { lat: 53.3048, lng: -4.6916 },
        tidalLocation: true,
      },

      // North Wales - Inland
      {
        id: "snowdonia",
        name: "Snowdonia National Park",
        type: "inland",
        coordinates: { lat: 53.0685, lng: -3.9356 },
        tidalLocation: false,
      },
      {
        id: "tryfan",
        name: "Tryfan, Snowdonia",
        type: "inland",
        coordinates: { lat: 53.1204, lng: -3.9962 },
        tidalLocation: false,
      },

      // West & South Wales - Coastal
      {
        id: "rhossili-bay",
        name: "Rhossili Bay, Gower",
        type: "coastal",
        coordinates: { lat: 51.5684, lng: -4.2929 },
        tidalLocation: true,
      },
      {
        id: "three-cliffs-bay",
        name: "Three Cliffs Bay, Gower",
        type: "coastal",
        coordinates: { lat: 51.5732, lng: -4.1124 },
        tidalLocation: true,
      },

      // West & South Wales - Inland
      {
        id: "brecon-beacons",
        name: "Brecon Beacons National Park",
        type: "inland",
        coordinates: { lat: 51.8833, lng: -3.4833 },
        tidalLocation: false,
      },
      {
        id: "pen-y-fan",
        name: "Pen y Fan, Brecon Beacons",
        type: "inland",
        coordinates: { lat: 51.8842, lng: -3.4367 },
        tidalLocation: false,
      },
    ],
  },
  {
    id: "scotland",
    name: "Scotland",
    locations: [
      // East Coast - Coastal
      {
        id: "dunnottar-castle",
        name: "Dunnottar Castle, Aberdeenshire",
        type: "coastal",
        coordinates: { lat: 56.9459, lng: -2.1971 },
        tidalLocation: true,
      },
      {
        id: "bow-fiddle-rock",
        name: "Bow Fiddle Rock, Portknockie",
        type: "coastal",
        coordinates: { lat: 57.7042, lng: -2.8472 },
        tidalLocation: true,
      },

      // Highlands - Inland
      {
        id: "glencoe",
        name: "Glencoe, Highlands",
        type: "inland",
        coordinates: { lat: 56.6826, lng: -5.1025 },
        tidalLocation: false,
      },
      {
        id: "eilean-donan",
        name: "Eilean Donan Castle, Highlands",
        type: "inland",
        coordinates: { lat: 57.2739, lng: -5.5163 },
        tidalLocation: false,
      },

      // Islands - Coastal
      {
        id: "elgol",
        name: "Elgol, Isle of Skye",
        type: "coastal",
        coordinates: { lat: 57.1495, lng: -6.1058 },
        tidalLocation: true,
      },
      {
        id: "neist-point",
        name: "Neist Point, Isle of Skye",
        type: "coastal",
        coordinates: { lat: 57.4233, lng: -6.7881 },
        tidalLocation: true,
      },

      // Islands - Inland
      {
        id: "old-man-storr",
        name: "Old Man of Storr, Isle of Skye",
        type: "inland",
        coordinates: { lat: 57.5096, lng: -6.1831 },
        tidalLocation: false,
      },
      {
        id: "quiraing",
        name: "Quiraing, Isle of Skye",
        type: "inland",
        coordinates: { lat: 57.6424, lng: -6.265 },
        tidalLocation: false,
      },
    ],
  },
  {
    id: "northern-ireland",
    name: "Northern Ireland",
    locations: [
      // Antrim Coast - Coastal
      {
        id: "giants-causeway",
        name: "Giant's Causeway, Antrim",
        type: "coastal",
        coordinates: { lat: 55.2408, lng: -6.5115 },
        tidalLocation: true,
      },
      {
        id: "ballintoy-harbour",
        name: "Ballintoy Harbour, Antrim",
        type: "coastal",
        coordinates: { lat: 55.2437, lng: -6.3669 },
        tidalLocation: true,
      },

      // Inland
      {
        id: "mourne-mountains",
        name: "Mourne Mountains, Down",
        type: "inland",
        coordinates: { lat: 54.19, lng: -6.07 },
        tidalLocation: false,
      },
      {
        id: "silent-valley",
        name: "Silent Valley, Mourne Mountains",
        type: "inland",
        coordinates: { lat: 54.1414, lng: -6.0047 },
        tidalLocation: false,
      },
    ],
  },
]

// Helper function to find a location by ID
export function findLocationById(locationId: string) {
  for (const region of ukLocations) {
    const location = region.locations.find((loc) => loc.id === locationId)
    if (location) {
      return {
        ...location,
        region: region.name,
        regionId: region.id,
      }
    }
  }
  return null
}

// Helper function to get all coastal locations
export function getCoastalLocations() {
  const coastalLocations = []
  for (const region of ukLocations) {
    for (const location of region.locations) {
      if (location.type === "coastal" && location.tidalLocation) {
        coastalLocations.push({
          ...location,
          region: region.name,
          regionId: region.id,
        })
      }
    }
  }
  return coastalLocations
}

export const ukRegions = [
  {
    id: "south-west-england",
    name: "South West England",
    center: { lat: 50.7, lng: -4.0 },
  },
  {
    id: "south-east-england",
    name: "South & South East England",
    center: { lat: 51.0, lng: 0.0 },
  },
  {
    id: "east-england",
    name: "East England",
    center: { lat: 52.5, lng: 1.0 },
  },
  {
    id: "peak-district",
    name: "Peak District",
    center: { lat: 53.3, lng: -1.8 },
  },
  {
    id: "lake-district",
    name: "Lake District",
    center: { lat: 54.5, lng: -3.1 },
  },
  {
    id: "north-east-england",
    name: "North East England",
    center: { lat: 54.9, lng: -1.6 },
  },
  {
    id: "north-west-england",
    name: "North West England",
    center: { lat: 53.8, lng: -2.6 },
  },
  {
    id: "wales",
    name: "Wales",
    center: { lat: 52.1, lng: -3.8 },
  },
  {
    id: "scotland",
    name: "Scotland",
    center: { lat: 56.8, lng: -4.2 },
  },
  {
    id: "northern-ireland",
    name: "Northern Ireland",
    center: { lat: 54.8, lng: -6.5 },
  },
]

// Helper function to find a region by ID
export function findRegionById(regionId) {
  return ukRegions.find((region) => region.id === regionId) || null
}

// Function to map coordinates to the closest region
export function mapToClosestRegion(lat, lng) {
  // Find the closest region by calculating distance
  let closestRegion = ukRegions[0]
  let minDistance = calculateDistance(lat, lng, ukRegions[0].center.lat, ukRegions[0].center.lng)

  for (let i = 1; i < ukRegions.length; i++) {
    const distance = calculateDistance(lat, lng, ukRegions[i].center.lat, ukRegions[i].center.lng)
    if (distance < minDistance) {
      minDistance = distance
      closestRegion = ukRegions[i]
    }
  }

  return closestRegion
}

// Calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3959 // Radius of the earth in miles
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c // Distance in miles
  return d
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

export type Location = {
  id: string
  name: string
  type: string
  coordinates: {
    lat: number
    lng: number
  }
  tidalLocation: boolean
  description?: string
  regionId?: string
  regionName?: string
  originalCategory?: string
  googleMapsData?: any
  rawHtml?: string
  cluster?: string
  category?: string
  displayName?: string
}
