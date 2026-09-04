// Photography piles.
//
// Each pile is a stack on the Photography page: the page shows the top photo,
// and clicking it opens the whole pile in a darkened, horizontally scrollable
// spread. Add a photo by dropping the file in public/img/ and appending an
// entry here -- the page picks it up, no layout changes needed. Add a pile by
// appending an object to this array.
//
// w/h are the file's natural pixel dimensions; they reserve the right aspect
// ratio so the layout doesn't jump while images load.
export const piles = [
  {
    title: 'Cities',
    blurb: 'Skylines, sidewalks, and the weather that comes with them.',
    photos: [
      { src: 'IMG_1066.JPG', w: 1883, h: 1255, title: 'Toronto, Canada', place: 'Diversity Our Strength', note: "Toronto's skyline", year: '2024' },
      { src: 'IMG_1592.JPG', w: 1120, h: 1624, title: 'Lady in Rain', place: 'Chicago, Illinois', note: 'Planned for a sunny day, but the day turned around', year: '2024' },
      { src: 'IMG_2699.JPG', w: 1565, h: 2128, title: 'Time', place: 'Chicago, Illinois', note: "Can't let time pass without notice", year: '2025' },
      { src: 'IMG_4434.JPG', w: 1638, h: 2150, title: 'Louis Vuitton', place: 'Miami, Florida', note: "Because you visit the city's luxury district", year: '2025' },
    ],
  },
  {
    title: 'Landmarks',
    blurb: 'The ones you wait years to stand in front of.',
    photos: [
      { src: 'IMG_8340.JPG', w: 2377, h: 3155, title: 'Taj Mahal', place: "A World's Wonder", note: 'Breaking the 15 year wait', year: '2023' },
      { src: 'IMG_3572.JPG', w: 2448, h: 3264, title: 'Eiffel Tower', place: 'Paris, France', note: "A child's last visit to Paris", year: '2018' },
      { src: 'IMG_9792.JPG', w: 1125, h: 1500, title: "St Paul's Cathedral", place: 'Busy London Morning', note: 'Every road leads to the dome', year: '2019' },
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
