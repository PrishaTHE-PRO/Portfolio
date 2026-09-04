// Photography piles.
//
// Each pile is a stack on the Photography page: the page shows the top photo,
// and clicking it opens the whole pile in a darkened, horizontally scrollable
// spread. Add a photo by dropping the file in public/photographs/ and
// appending an entry here; add a pile by appending an object to this array.
//
// w/h are the file's natural pixel dimensions; they reserve the right aspect
// ratio so the layout doesn't jump while images load.
export const piles = [
  {
    title: 'Graduation',
    blurb: 'Doctoral regalia on a bright day in Madison.',
    photos: [
      { src: 'IMG_5058.JPG', w: 1245, h: 1868, title: 'Bascom Hill', place: 'University of Wisconsin-Madison', note: 'Hood, tassel, and the whole four years behind it', year: '2025' },
      { src: 'IMG_5063.JPG', w: 1243, h: 1865, title: 'Faith That Rings', place: 'University of Wisconsin-Madison', note: 'Standing where the inscription reads', year: '2025' },
      { src: 'IMG_5171.JPG', w: 1239, h: 1858, title: 'Against the Column', place: 'University of Wisconsin-Madison', note: 'A quiet minute out of the crowd', year: '2025' },
      { src: 'IMG_5175.JPG', w: 1280, h: 1920, title: 'Green Door', place: 'University of Wisconsin-Madison', note: 'The grin that says it is finally done', year: '2025' },
      { src: 'IMG_5237.JPG', w: 1153, h: 1729, title: 'Lakeside', place: 'Memorial Union, Madison', note: 'Looking out over Mendota in full regalia', year: '2025' },
      { src: 'IMG_5248.JPG', w: 1280, h: 1920, title: 'Hands Up', place: 'Memorial Union, Madison', note: 'No composure left, and rightly so', year: '2025' },
    ],
  },
  {
    title: 'Senior Year',
    blurb: 'Caps, school walls, and the last week of it.',
    photos: [
      { src: 'IMG_3187.JPG', w: 1156, h: 1841, title: 'Cap and Tassel', place: 'Elkhorn South High School', note: 'Waiting outside before the ceremony', year: '2025' },
      { src: 'IMG_3270.JPG', w: 1280, h: 1920, title: 'With Dad', place: 'Elkhorn South High School', note: 'The photo the family actually wanted', year: '2025' },
      { src: '94B0763D-04A2-4ED7-A76A-22787D56172A.JPG', w: 1174, h: 1630, title: 'Cap Toss', place: 'Elkhorn South High School', note: 'Chalk underfoot, cap in the air', year: '2025' },
      { src: 'AD259748-6F52-46D5-B933-F68064B3F66C.JPG', w: 1241, h: 1920, title: 'On the Sign', place: 'Elkhorn South High School', note: 'Sitting on the school name one last time', year: '2025' },
    ],
  },
  {
    title: 'Golden Hour',
    blurb: 'A senior session in tall grass, chasing the last of the light.',
    photos: [
      { src: 'IMG_1655.JPG', w: 1280, h: 1920, title: 'Backlit', place: 'Open field at sunset', note: 'The sun doing most of the work', year: '2025' },
      { src: 'IMG_1715.JPG', w: 1280, h: 1920, title: 'Close', place: 'Open field at sunset', note: 'Grass up to the shoulders', year: '2025' },
      { src: 'IMG_1658.JPG', w: 1280, h: 1920, title: 'Crouched', place: 'Open field at sunset', note: 'Chin on hands, waiting me out', year: '2025' },
      { src: 'IMG_1629.JPG', w: 1243, h: 1920, title: 'Trumpet', place: 'Treeline at golden hour', note: 'Four years of band, in one prop', year: '2025' },
      { src: 'IMG_1630.JPG', w: 1153, h: 1841, title: 'Laughing', place: 'Treeline at golden hour', note: 'Between two takes', year: '2025' },
      { src: 'IMG_1643.JPG', w: 1201, h: 1917, title: 'The Folder', place: 'Treeline at golden hour', note: 'Sheet music she is not going to miss', year: '2025' },
    ],
  },
  {
    title: 'Summer Portraits',
    blurb: 'Hydrangeas, old trees, and a lot of green.',
    photos: [
      { src: 'IMG_4194.JPG', w: 1217, h: 1844, title: 'Hydrangeas', place: 'Omaha, Nebraska', note: 'Sat down in the middle of the bush', year: '2025' },
      { src: 'IMG_4210.JPG', w: 1193, h: 1881, title: 'The Oak', place: 'Omaha, Nebraska', note: 'Leaning on something older than everyone', year: '2025' },
      { src: 'IMG_4172.JPG', w: 1164, h: 1830, title: 'Marian', place: 'Marian High School', note: 'In front of the name on the building', year: '2025' },
      { src: 'IMG_4272.JPG', w: 1280, h: 1920, title: 'Walking Off', place: 'Marian High School', note: 'Flowers in hand, done for the day', year: '2025' },
      { src: 'IMG_4391.JPG', w: 1280, h: 1799, title: 'Under the Tree', place: 'Omaha, Nebraska', note: 'Late light across the whole yard', year: '2025' },
      { src: 'IMG_4417.JPG', w: 1218, h: 1787, title: 'On the Bench', place: 'Omaha, Nebraska', note: 'The frame she picked out of the set', year: '2025' },
    ],
  },
  {
    title: 'Autumn in the City',
    blurb: 'Brick, dry leaves, and a grey hoodie.',
    photos: [
      { src: 'IMG_1913.JPG', w: 1224, h: 1836, title: 'Brick Wall', place: 'Old Market, Omaha', note: 'Straight down the lens', year: '2024' },
      { src: 'IMG_1920.JPG', w: 1280, h: 1920, title: 'Looking Up', place: 'Old Market, Omaha', note: 'Watching something off frame', year: '2024' },
      { src: 'IMG_1849.JPG', w: 1280, h: 1920, title: 'Through the Leaves', place: 'Old Market, Omaha', note: 'Shot past an autumn garland', year: '2024' },
      { src: 'IMG_1775.JPG', w: 1280, h: 1920, title: 'On the Corner', place: 'Old Market, Omaha', note: 'Flag and storefronts behind him', year: '2024' },
      { src: 'IMG_1819.JPG', w: 1159, h: 1748, title: 'Cobblestones', place: 'Old Market, Omaha', note: 'Crouched in the middle of the street', year: '2024' },
    ],
  },
  {
    title: 'Chicago',
    blurb: 'Portraits along the river, in full summer.',
    photos: [
      { src: 'IMG_4520.JPG', w: 1179, h: 1847, title: 'On the Bridge', place: 'Chicago Riverwalk', note: 'Green water and the skyline behind', year: '2024' },
      { src: 'IMG_4627.JPG', w: 1280, h: 1920, title: 'Tow Zone', place: 'Chicago, Illinois', note: 'Traffic, flowers, and a good sign', year: '2024' },
      { src: '321E0A7D-65AC-45BD-BAC8-FB1041609F6D.JPG', w: 1280, h: 1920, title: 'Riverside', place: 'Chicago Riverwalk', note: 'The water was that colour all day', year: '2024' },
      { src: '40483ABC-D0B0-4696-8743-B6F207A5D6A9.JPG', w: 1280, h: 1920, title: 'The Steps', place: 'Chicago, Illinois', note: 'Stone rail, summer trees', year: '2024' },
    ],
  },
  {
    title: 'Cities',
    blurb: 'Skylines, sidewalks, and the weather that comes with them.',
    photos: [
      { src: 'IMG_1066.JPG', w: 1883, h: 1255, title: 'Toronto, Canada', place: 'Diversity Our Strength', note: 'Toronto\'s skyline', year: '2024' },
      { src: 'IMG_1592.JPG', w: 1120, h: 1624, title: 'Lady in Rain', place: 'Chicago, Illinois', note: 'Planned for a sunny day, but the day turned around', year: '2024' },
      { src: 'IMG_2699.JPG', w: 1565, h: 2128, title: 'Time', place: 'Chicago, Illinois', note: 'Can\'t let time pass without notice', year: '2025' },
      { src: 'IMG_4434.JPG', w: 1638, h: 2150, title: 'Louis Vuitton', place: 'Miami, Florida', note: 'Because you visit the city\'s luxury district', year: '2025' },
    ],
  },
  {
    title: 'Landmarks',
    blurb: 'The ones you wait years to stand in front of.',
    photos: [
      { src: 'IMG_8340.JPG', w: 2377, h: 3155, title: 'Taj Mahal', place: 'A World\'s Wonder', note: 'Breaking the 15 year wait', year: '2023' },
      { src: 'IMG_3572.JPG', w: 2448, h: 3264, title: 'Eiffel Tower', place: 'Paris, France', note: 'A child\'s last visit to Paris', year: '2018' },
      { src: 'IMG_9792.JPG', w: 1125, h: 1500, title: 'St Paul\'s Cathedral', place: 'Busy London Morning', note: 'Every road leads to the dome', year: '2019' },
    ],
  },
  {
    title: 'Wild',
    blurb: 'Water and animals, neither of them holding still.',
    photos: [
      { src: 'IMG_0972.JPG', w: 1741, h: 1280, title: 'Niagara Falls', place: 'The Canadian boat', note: 'The border between New York, USA, and Canada', year: '2024' },
      { src: 'IMG_2782.jpg', w: 1170, h: 882, title: 'The Wild', place: 'Wildlife Safari', note: 'Life in the wild is unpredictable', year: '2024' },
      { src: 'IMG_1590.JPG', w: 1280, h: 1744, title: 'Wonder', place: 'Grove Park', note: 'Watching the wonder in the world we once played in', year: '2024' },
    ],
  },
  {
    title: 'In Motion',
    blurb: 'Things mid-journey, caught on the way past.',
    photos: [
      { src: 'IMG_0274.JPG', w: 1078, h: 1503, title: 'Waiting for the Train', place: '', note: '', year: '2024' },
      { src: 'IMG_7174.JPG', w: 1920, h: 1280, title: 'Tennis', place: 'UCLA, Los Angeles', note: 'The summer games begin', year: '2019' },
      { src: 'IMG_0481.JPG', w: 1225, h: 1791, title: 'Sad Mis-Step', place: '12 x 16 inch C type hand print', note: 'Edition of 1 plus an additional artist proof', year: '2024' },
    ],
  },
];
