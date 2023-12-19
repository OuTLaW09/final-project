export type City = {
  name: string;
  weight?: number | null;
  nameSearch: string;
  nameAddition?: string;
  codeIata: string;
  codeSky?: null | string;
  timezoneIana: string;
  bookingUrl: string;
  airbnbUrl?: string;
  themes: string[];
  icon: null;
  location: number[];
  countryId: string;
  docId: string;
  dayTrips?: undefined;
  startThemes: string[];
  apiVersion?: string;
  content?: object | null;
};

export const citiesArray: City[] = [
  {
    name: 'Stuttgart',
    weight: 53,
    nameSearch:
      'Estugarda,Gorad Shtutgart,STR,Shhutgart,Shtutgart,Shtutgarti,Shtuttgart,Stocarda,Stoccarda,Stoutnkarde,Stucarda,Stuggart,Stutgardia,Stutgartas,Stutgarte,Stutgarto,Stutqart,Stuttgart,ashtwtgart,ch tuthth kar th,icututkart,shtwtgart,shtwtghart,shuto~uttogaruto,si tu jia te,stutagarta,stwtgrt,syututeugaleuteu,\u015etutqart,\u0160tutgartas,\u0160tutgarte,\u03a3\u03c4\u03bf\u03c5\u03c4\u03b3\u03ba\u03ac\u03c1\u03b4\u03b7,\u0413\u043e\u0440\u0430\u0434 \u0428\u0442\u0443\u0442\u0433\u0430\u0440\u0442,\u0428\u0442\u0443\u0442\u0433\u0430\u0440\u0442,\u0428\u0442\u0443\u0442\u0442\u0433\u0430\u0440\u0442,\u0429\u0443\u0442\u0433\u0430\u0440\u0442,\u05e9\u05d8\u05d5\u05d8\u05d2\u05d0\u05e8\u05d8,\u05e9\u05d8\u05d5\u05d8\u05d2\u05e8\u05d8,\u0627\u0634\u062a\u0648\u062a\u06af\u0627\u0631\u062a,\u0633\u0679\u0679\u06af\u0627\u0631\u0679,\u0634\u062a\u0648\u062a\u063a\u0627\u0631\u062a,\u0634\u062a\u0648\u062a\u06af\u0627\u0631\u062a,\u0634\u0679\u0648\u0679\u06af\u0627\u0631\u0679,\u0936\u094d\u091f\u0941\u091f\u0917\u093e\u0930\u094d\u091f,\u09b8\u09cd\u099f\u09c1\u099f\u0997\u09be\u09b0\u09cd\u099f,\u0ab8\u0acd\u0a9f\u0ac1\u0a9f\u0a97\u0abe\u0ab0\u0acd\u0a9f,\u0b87\u0b9a\u0bc1\u0b9f\u0bc1\u0b9f\u0bcd\u0b95\u0bbe\u0bb0\u0bcd\u0b9f\u0bcd,\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d41\u0d1f\u0d4d\u0d1f\u0d4d\u0d17\u0d3e\u0d7c\u0d1f\u0d4d\u0d1f\u0d4d,\u0e0a\u0e15\u0e38\u0e17\u0e17\u0e4c\u0e01\u0e32\u0e23\u0e4c\u0e17,\u10e8\u10e2\u10e3\u10e2\u10d2\u10d0\u10e0\u10e2\u10d8,\u30b7\u30e5\u30c8\u30a5\u30c3\u30c8\u30ac\u30eb\u30c8,\u65af\u56fe\u52a0\u7279,\uc288\ud22c\ud2b8\uac00\ub974\ud2b8',
    nameAddition: '',
    codeIata: 'STR',
    codeSky: null,
    timezoneIana: 'Europe/Berlin',
    themes: ['de', 'de_big', 'eurp', 'eurp_sh', 'europe'],
    icon: null,
    location: [48.777105599999999, 9.1807687999999992],
    countryId: 'ctry-126',
    docId: 'cty-10',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-1871728\u0026no_rooms=1\u0026group_adults2\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'fr'],
    apiVersion: ':2:',
    content: {
      topReason: 'Mercedes-Benz Museum, Wilhelma Zoo, Schlossplatz',
      shortDesc: 'Automotive heart of Germany',
      storyDesc: 'Stuttgart, where innovation meets scenic beauty.',
      textDesc:
        'Nestled between vine-covered hills, Stuttgart is not only the capital of Baden-W\u00fcrttemberg but also the automotive heart of Germany. Home to Mercedes-Benz and Porsche, the city offers world-class museums dedicated to these iconic brands. The historic Schlossplatz provides a central point for exploration, while Wilhelma, one of Europe\u0027s most beautiful zoological-botanical gardens, offers a unique combination of flora and fauna. With its rich history, vibrant arts scene, and scenic beauty, Stuttgart provides a diverse range of attractions for every traveler.',
    },
  },
  {
    name: 'Fort William',
    nameSearch: 'Fort William, Highland',
    codeIata: '',
    timezoneIana: 'Europe/London',
    themes: ['europe'],
    icon: null,
    location: [56.819800000000001, -5.1052],
    countryId: 'ctry-17',
    docId: 'cty-1011',
    bookingUrl: 'https://www.booking.com//searchresults.en.html?city=-2596447\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['europe', 'eurp_sh', 'eurp_us'],
    apiVersion: ':2:',
    content: { topReason: '', shortDesc: 'City in Scotland' },
  },
  {
    name: 'Lillehammer',
    nameSearch: 'Lillehammer',
    nameAddition: 'Norway',
    codeIata: '',
    codeSky: null,
    timezoneIana: 'Europe/Oslo',
    themes: ['europe'],
    icon: null,
    location: [61.116667, 10.466666999999999],
    countryId: 'ctry-98',
    docId: 'cty-1012',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-268962\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['europe', 'eurp_sh', 'eurp_us'],
    apiVersion: ':2:',
    content: { topReason: '', shortDesc: 'Town in Norway' },
  },
  {
    name: 'Crotone',
    weight: 55,
    codeIata: '',
    nameSearch: 'Crotone',
    codeSky: null,
    timezoneIana: 'Europe/Rome',
    themes: ['europe'],
    icon: null,
    location: [39.083333000000003, 17.116667],
    countryId: 'ctry-109',
    docId: 'cty-1029',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-116612\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp', 'eurp_sh', 'eurp_us'],
    apiVersion: ':2:',
    content: { topReason: '', shortDesc: '' },
  },
  {
    name: 'Tel Aviv',
    weight: 85,
    nameAddition: 'Israel',
    nameSearch:
      'TLV,Tel Abib,Tel Aviv,Tel Aviv-Yafo,Tel-Aviv,Telaviva,Telavivo,Telawiw,tel abiba,tel aviva,tel avivu,\u062a\u0644 \u0623\u0628\u064a\u0628,\u062a\u0644 \u0627\u0628\u064a\u0628-\u064a\u0627\u0641\u0627,\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1-\u05d9\u05e4\u05d5,\u0422\u0435\u043b \u0410\u0432\u0438\u0432,\u10d7\u10d4\u10da-\u10d0\u10d5\u10d8\u10d5\u10d8,\u30c6\u30eb\u30a2\u30d3\u30d6,\u7279\u62c9\u7dad\u592b,\u7279\u62c9\u7ef4\u592b,\ud154\uc544\ube44\ube0c',
    codeIata: 'TLV',
    codeSky: null,
    timezoneIana: 'Asia/Jerusalem',
    themes: ['aa'],
    icon: null,
    location: [32.000453999999998, 34.870742999999997],
    countryId: 'ctry-159',
    docId: 'cty-103',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-781545\u0026no_rooms=1\u0026group_adults=2',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'fr', 'asia'],
    apiVersion: ':2:',
    content: {
      topReason: 'Beaches, Bauhaus Architecture, Carmel Market',
      shortDesc: 'A vibrant city on the Mediterranean coast',
      storyDesc: 'Tel Aviv, Israel\u0027s cultural and commercial heart.',
      textDesc:
        'Boasting a blend of contemporary vibes and ancient history, Tel Aviv is a sun-drenched city on Israel\u0027s Mediterranean coast. With its stunning beaches, Bauhaus architecture, lively nightlife, and diverse culinary scene, Tel Aviv attracts travelers from all over the world. The city\u0027s Carmel Market is a must-visit for anyone looking to dive into local culture and flavors. With its innovative spirit and warm hospitality, Tel Aviv offers a unique Middle Eastern experience.',
      oneDayTrip: 'Jerusalem, Dead Sea, Caesarea',
      localCurrency: 'Israeli new shekel (\u20aa)',
      yearOfBirth: '1909',
      localHolidays: [{ date: '4th April', reason: 'Tel Aviv City Day' }],
    },
  },
  {
    name: 'Lauterbrunnen',
    weight: 85,
    nameSearch: 'Lauterbrunnen',
    nameAddition: '',
    codeIata: '',
    codeSky: null,
    timezoneIana: 'Europe/Zurich',
    themes: ['europe', 'alps', 'ch'],
    icon: null,
    location: [46.598332999999997, 7.9077780000000004],
    countryId: 'ctry-132',
    docId: 'cty-1030',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-2552811\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp_us'],
    apiVersion: ':2:',
    content: { topReason: '', shortDesc: 'Set in a valley featuring rocky cliffs and the roaring, 300m-high Staubbach Falls' },
  },
  {
    name: 'Minsk',
    nameAddition: 'Belarus',
    nameSearch:
      'MSQ,Miensk,Minsk,Minska,Minsko,Minsk\u044a,Minsk\u2019\u016d,M\u012bnsk,ming si ke,minseukeu,mynsk,myynsk,\u039c\u03b9\u03bd\u03c3\u03ba,\u041c\u0438\u043d\u0441\u043a,\u041c\u0456\u043d\u0441\u043a,\u05de\u05d9\u05e0\u05e1\u05e7,\u0645\u064a\u0646\u0633\u0643,\u0645\u06cc\u0646\u0633\u06a9,\u0645\u06cc\u0646\u0633\u06a9\u060c \u0628\u06cc\u0644\u0627\u0634\u0648\u0648\u06cc\u0686\u06cc,\u10db\u10d8\u10dc\u10e1\u10d9\u10d8,\u0544\u056b\u0576\u057d\u056f,\u092e\u093f\u0902\u0938\u094d\u0915,\u09ae\u09bf\u09a8\u09b8\u09cd\u0995,\u0bae\u0bbf\u0ba9\u0bcd\u0bb8\u0bcd\u0b95\u0bcd,\u0e21\u0e34\u0e19\u0e2a\u0e04\u0e4c,\u0f58\u0f72\u0f53\u0f0b\u0f66\u0f72\u0f40\u0f0b,\u10db\u10d8\u10dc\u10e1\u10d9\u10d8,\u30df\u30f3\u30b9\u30af,\u660e\u65af\u514b,\ubbfc\uc2a4\ud06c',
    codeIata: 'MSQ',
    codeSky: null,
    timezoneIana: 'Europe/Minsk',
    themes: ['by', 'by_big'],
    icon: null,
    location: [53.899999999999999, 27.566666999999999],
    countryId: 'ctry-160',
    docId: 'cty-105',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-1946324\u0026no_rooms=1\u0026group_adults=2',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'fr'],
  },
  {
    name: 'Linz',
    weight: 75,
    nameSearch: 'Linz',
    nameAddition: 'Czechia',
    codeIata: 'LNZ',
    codeSky: null,
    timezoneIana: 'Europe/Prague',
    themes: ['at', 'europe'],
    icon: null,
    location: [48.299999999999997, 14.283333000000001],
    countryId: 'ctry-45',
    docId: 'cty-1058',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-1984321\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp', 'eurp_sh', 'eurp_us'],
    apiVersion: ':2:',
    content: { topReason: '', shortDesc: '' },
  },
  {
    name: 'Toulon',
    nameSearch:
      'TLN,Tolone,Toulon,Touloun,Tulon,Tulone,Tulonas,Tulone,Tulonj,Tul\u00f3n,Toulonum,teu-ron,toolona,toron,tu lun,tulwn,twrwn,\u03a4\u03bf\u03c5\u03bb\u03cc\u03bd,\u0422\u0443\u043b\u043e\u043d,\u0422\u0443\u043b\u043e\u043d\u0438,\u0422\u0443\u043b\u043e\u045e\u043d,\u05d8\u05d5\u05dc\u05d5\u05df,\u062a\u0648\u0644\u0648\u0646,\u062a\u0648\u0644\u0648\u06ba,\u062a\u0648\u0644\u06c6\u0646,\u071b\u0718\u0720\u0718\u0722,\u091f\u0941\u0932\u094b\u0928,\u0924\u0942\u0932\u094b\u0928,\u0924\u0941\u0932\u094b\u0902,\u0924\u0941\u0932\u094b\u0928,\u09a4\u09c1\u09b2\u09a8,\u0b9f\u0bc2\u0bb2\u0bcb\u0ba9\u0bcd,\u0e15\u0e39\u0e25\u0e07,\u10e2\u10e3\u10da\u10dd\u10dc\u10d8,\ud234\ub871,\u56fe\u9686,\u5716\u9686,\u571f\u9686,\ud234\ub860',
    codeIata: 'TLN',
    codeSky: null,
    timezoneIana: 'Europe/Paris',
    themes: ['cote', 'fr', 'include', 'fr_big', 'fr_max', 'mediterranean', 'europe'],
    icon: null,
    location: [43.130000000000003, 5.9199999999999999],
    countryId: 'ctry-120',
    docId: 'cty-106',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-1473153\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'fr'],
    apiVersion: ':2:',
    content: {
      topReason: 'Toulon Harbor, Mont Faron, Mus\u00e9e National de la Marine',
      shortDesc: 'Mediterranean charm meets naval history',
      storyDesc: 'Nestled between the sea and mountains, Toulon is the perfect blend of maritime tradition and Provencal charm.',
      textDesc:
        'Toulon, a port city on France\u0027s Mediterranean coast, is known for its rich naval history and as a gateway to the beautiful beaches and vineyards of the C\u00f4te d\u0027Azur. With its harbor being one of the finest natural anchorages on the Mediterranean, it offers a stunning view, especially from the Mont Faron. The Mus\u00e9e National de la Marine, the city\u0027s iconic naval museum, showcases the rich maritime tradition of the area. Apart from the historical attractions, the vibrant markets, and bustling plazas make Toulon a lively city to explore.',
      oneDayTrip: 'Porquerolles, Hy\u00e8res, Saint-Tropez',
      localCurrency: 'Euro (EUR)',
      yearOfBirth: '4th century BC',
      localHolidays: [{ date: '14th July', reason: 'Bastille Day' }],
    },
  },
  {
    name: 'Oviedo',
    weight: 95,
    nameSearch: 'Oviedo',
    nameAddition: '',
    codeIata: '',
    timezoneIana: 'Europe/Madrid',
    themes: ['es', 'europe'],
    icon: null,
    location: [43.359999999999999, -5.8449999999999998],
    countryId: 'ctry-23',
    docId: 'cty-1066',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-394970\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp', 'eurp_sh', 'eurp_us'],
    apiVersion: ':2:',
    content: {
      topReason: '',
      shortDesc: 'It\u2019s known for its medieval old town, the site of the Gothic Oviedo Cathedral with its 9th-century Holy Chamber',
    },
  },
  {
    name: 'Bern',
    nameSearch:
      'BRN,Barna,Barno,Berne,Berni,Berno,Bernu,Berno,B\u0113rna,B\u0113rne,B\u0113rni,B\u0113rno,B\u0113rn\u0113,B\u0113rnu,B\u0113rns,B\u0113rnu,B\u0113rne,Bernas,Berno,Berna,Berne,Berni,Berno,Berna,Berno,B\u0113rna,B\u0113rne,B\u0113rni,B\u0113rno,B\u0113rn\u0113,B\u0113rnu,B\u0113rns,B\u0113rnu,B\u0113rne,Bernas,Berno,bern,bernai,berne,berno,bernu,birnu,\u0392\u03ad\u03c1\u03bd\u03b7,\u0411\u0435\u0440\u043d,\u05d1\u05e2\u05e8\u05df,\u05d1\u05e8\u05df,\u0628\u064a\u0631\u0646,\u092c\u0947\u0930\u094d\u0928,\u09ac\u09c7\u09b0\u09cd\u09a8,\u0e1a\u0e23\u0e4c\u0e19,\u10d1\u10d4\u10e0\u10dc\u10d8,\u30d9\u30eb\u30f3,\u4f2f\u5c14\u5c3c,\u4f2f\u6069,\ubca0\ub978',
    codeIata: 'BRN',
    codeSky: null,
    timezoneIana: 'Europe/Zurich',
    themes: ['wrld', 'eurasia', 'westeurope', 'romantic', 'oldtown', 'schengen', 'southeurope', 'europe', 'eurozone', 'alps', 'ch'],
    icon: null,
    location: [46.950000000000003, 7.4500000000000002],
    countryId: 'ctry-132',
    docId: 'cty-108',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-2551235\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'fr'],
    apiVersion: ':2:',
    content: {
      topReason: 'Zytglogge, Bear Park, Bern Historical Museum',
      shortDesc: 'Capital with medieval allure',
      storyDesc: 'Bern, Switzerland\u0027s storied capital with rich history at every corner.',
      textDesc:
        'Bern, the Swiss capital, is renowned for its remarkably preserved medieval city center, which is a UNESCO World Heritage site. One of the most iconic landmarks is the Zytglogge, a medieval clock tower. The Bear Park, a symbol of the city, houses live bears in a natural setting. The Bern Historical Museum showcases the city\u0027s past and houses the second largest historical collection in Switzerland. Bern\u0027s compact nature makes it perfect for exploring on foot, with the meandering Aare River offering scenic views.',
      oneDayTrip: 'Thun, Gruy\u00e8res, Emmental region',
      localCurrency: 'Swiss Franc (CHF)',
      yearOfBirth: '1191',
      localHolidays: [{ date: '1st August', reason: 'Swiss National Day' }],
    },
  },
  {
    name: 'Brighton',
    weight: 75,
    nameSearch: 'Brighton',
    codeIata: '',
    codeSky: null,
    timezoneIana: 'Europe/London',
    themes: ['europe', 'uk'],
    icon: null,
    location: [50.842941000000003, -0.13131200000000001],
    countryId: 'ctry-17',
    docId: 'cty-1141',
    bookingUrl: '',
    airbnbUrl: '',
    startThemes: ['europe', 'eu', 'schengen', 'eurp_sh', 'eurp_us'],
    apiVersion: ':2:',
    content: { topReason: 'Bullring Shopping Centre, Gas Street, Barclaycard Arena', shortDesc: 'City in East Sussex' },
  },
  {
    name: 'Bedford',
    weight: 75,
    nameSearch: 'Bedford',
    codeIata: 'EWB',
    codeSky: null,
    timezoneIana: 'Europe/London',
    themes: ['europe', 'uk'],
    icon: null,
    location: [52.134999999999998, -0.46999999999999997],
    countryId: 'ctry-17',
    docId: 'cty-1144',
    bookingUrl: '',
    airbnbUrl: '',
    startThemes: ['europe', 'eu', 'schengen', 'eurp_sh', 'eurp_us'],
    apiVersion: ':2:',
    content: { topReason: '', shortDesc: 'City in England' },
  },
  {
    name: 'Berlin',
    weight: 93,
    nameSearch:
      '\u0438\u0443\u043a\u0434\u0448\u0442,Berlin,BER,\u0411\u0435\u0440\u043b\u0438\u043d,SXF,TXL,Beirlin,Beirl\u00edn,Berleno,Berlien,Berliin,Berliini,Berlijn,Berlim,Berlin,Berline,Berlini,Berlino,Berlyn,Berlynas,Berl\u00ebno,Berl\u00edn,Berl\u00een,Berl\u012bne,Berolino,Berolinum,Birlinu,B\u00e8rl\u00een,Estat de Berlin,Estat de Berl\u00edn,bai lin,barlina,beleullin,berlini,berurin,bexrlin,brlyn,perlin,\u0392\u03b5\u03c1\u03bf\u03bb\u03af\u03bd\u03bf,\u0411\u0435\u0440\u043b\u0438\u043d,\u0411\u0435\u0440\u043b\u0456\u043d,\u0411\u044d\u0440\u043b\u0456\u043d,\u0532\u0565\u0580\u056c\u056b\u0576,\u05d1\u05e2\u05e8\u05dc\u05d9\u05df,\u05d1\u05e8\u05dc\u05d9\u05df,\u0628\u0631\u0644\u064a\u0646,\u0628\u0631\u0644\u06cc\u0646,\u0628\u06d0\u0631\u0644\u0649\u0646,\u0712\u072a\u0720\u071d\u0722,\u092c\u0930\u094d\u0932\u093f\u0928,\u09ac\u09be\u09b0\u09cd\u09b2\u09bf\u09a8,\u0baa\u0bc6\u0bb0\u0bcd\u0bb2\u0bbf\u0ba9\u0bcd,\u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e25\u0e34\u0e19,\u10d1\u10d4\u10e0\u10da\u10d8\u10dc\u10d8,\u30d9\u30eb\u30ea\u30f3,\u67cf\u6797,\ubca0\ub97c\ub9b0',
    nameAddition: '',
    codeIata: 'BER',
    codeSky: 'Berl',
    timezoneIana: 'Europe/Berlin',
    themes: [
      'aa',
      'ab',
      'asia',
      'asia_s',
      'eurp10',
      'eurp_train',
      'eurp',
      'eurp_us',
      'eurp_il',
      'europe',
      'capital',
      'include',
      'de',
      'de_big',
      'rmntc',
    ],
    icon: null,
    location: [52.523405099999998, 13.411399899999999],
    countryId: 'ctry-126',
    docId: 'cty-1',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-1746443\u0026no_rooms=1\u0026group_adults=2',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'fr'],
  },
  {
    name: 'Tbilisi',
    weight: 75,
    nameAddition: 'Georgia',
    nameSearch: 'Tbilisi,\u0422\u0431\u0438\u043b\u0438\u0441\u0438,TBS',
    codeIata: 'TBS',
    codeSky: '',
    timezoneIana: 'Asia/Tbilisi',
    themes: ['aa', 'covid_ru', 'eurp', 'eurp_sh', 'eurasia', 'capital', 'southeurope', 'easteurope', 'europe', 'asia'],
    icon: null,
    location: [41.674064999999999, 44.958958000000003],
    countryId: 'ctry-119',
    docId: 'cty-102',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=900047975\u0026no_rooms=1\u0026group_adults=2',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'capital', 'mediterranean', 'fr', 'asia'],
    apiVersion: ':2:',
    content: { topReason: 'Old Town exploring, friendly locals and food', shortDesc: 'Capital of the country of Georgia' },
  },
  {
    name: 'Sharm El Sheikh',
    nameSearch: 'Sharm El Sheikh',
    nameAddition: 'Egypt',
    codeIata: 'SSH',
    codeSky: '',
    timezoneIana: 'Africa/Cairo',
    themes: ['covid_test', 'covid_cert', 'covid_ru', 'world'],
    icon: null,
    location: [27.912222, 34.329721999999997],
    countryId: 'ctry-16',
    docId: 'cty-1310',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-302053\u0026aid=849127\u0026no_rooms=1\u0026group_adults=2',
    startThemes: ['best place to visit', 'eurp_us'],
    content: { topReason: '', shortDesc: '' },
    weight: 75,
    apiVersion: ':2:',
  },
  {
    name: 'Eindhoven',
    nameAddition: 'Netherlands',
    nameSearch:
      'Amsterdam,Eindhoven,Netherland,\u963f\u59c6\u65af\u7279\u4e39\uff0c\u57c3\u56e0\u970d\u6eab\uff0c\u8377\u862d,\u05d0\u05de\u05e1\u05d8\u05e8\u05d3\u05dd, \u05d0\u05d9\u05d9\u05e0\u05d3\u05d4\u05d5\u05d1\u05df, \u05d4\u05d5\u05dc\u05e0\u05d3,\u090f\u092e\u094d\u0938\u094d\u091f\u0930\u094d\u0921\u092e, \u0906\u0907\u0902\u0921\u0939\u094b\u0935\u0928, \u0928\u0940\u0926\u0930\u0932\u0948\u0902\u0921,\u30a2\u30e0\u30b9\u30c6\u30eb\u30c0\u30e0\u3001\u30a2\u30a4\u30f3\u30c8\u30db\u30fc\u30d5\u30a7\u30f3\u3001\u30aa\u30e9\u30f3\u30c0,\u0410\u043c\u0441\u0442\u0435\u0440\u0434\u0430\u043c, \u042d\u0439\u043d\u0434\u0445\u043e\u0432\u0435\u043d, \u0413\u043e\u043b\u043b\u0430\u043d\u0434\u0438\u044f,Amsterdam, Eindhoven, Paesi Bassi,Niederlande,EIN',
    codeIata: 'EIN',
    codeSky: null,
    timezoneIana: 'Europe/Amsterdam',
    themes: [],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-2144027\u0026aid=855838\u0026no_rooms=1\u0026group_adults=1',
    airbnbUrl: '',
    countryId: 'ctry-99',
    docId: 'cty-140',
    location: [51.433332999999998, 5.483333],
    startThemes: ['eurp_us', 'balkans', 'fr', 'de', 'it', 'es', 'ch'],
    apiVersion: ':2:',
    content: { topReason: 'Shopping, restaurants and food', shortDesc: 'A city in the province of North Brabant in Netherlands' },
  },
  {
    name: 'New York, NY',
    nameSearch:
      'United States,NYC,JFK,EWR,LGA,SWF,Dallas,Chicago,Miami,Washington,Dallas,TX,CA,NY,US,USA,Toronto,Charlotte,Burlington,Portland,Syracuse,Durham,Buffalo,Boston,New Orleans,Cincinnati,Atlanta,Orlando,Detroit,Houston,Denver,Norfolk,Austin,Cleveland,Omaha,Salt Lake City,Albuquerque,Louisville,San Diego,\u0422\u0443\u0446,\u041d\u044c\u044e-\u0419\u043e\u0440\u043a',
    codeIata: 'NYC',
    codeSky: null,
    timezoneIana: 'America/New_York',
    themes: ['aa', 'ab', 'wrld', 'america', 'nam', 'us', 'us_big'],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=20088325\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    location: [40.730600000000003, -73.935199999999995],
    countryId: 'ctry-92',
    docId: 'cty-146',
    startThemes: ['america', 'capital', 'mediterranean'],
  },
  {
    name: 'Istanbul',
    weight: 82,
    nameSearch:
      'IST,Istanbul,Istanbula,Istanbule,Istanbulas,Istanbuli,Istanbulo,Istanbulo,Istanb\u00fal,Istanb\u016bl,Ist\u00e0mbul,Stamboul,Stambulas,Stambul\u012b,astanbuli,iseutanbul,isutanburu,shitanbulu,sitanbuleu,sytanbwl,\u0399\u03c3\u03c4\u03b1\u03bd\u03bc\u03c0\u03bf\u03cd\u03bb,\u0418\u0441\u0442\u0430\u043d\u0431\u0443\u043b,\u05d0\u05d9\u05e1\u05d8\u05e0\u05d1\u05d5\u05dc,\u0627\u0633\u0637\u0646\u0628\u0648\u0644,\u0627\u0633\u062a\u0627\u0646\u0628\u0648\u0644,\u0627\u0633\u062a\u0627\u0646\u0628\u0644,\u0627\u0633\u062a\u0627\u0646\u0628\u06c7\u0644,\u0627\u0633\u062a\u0627\u0646\u0628\u0648\u0644,\u0710\u0723\u071b\u0722\u0712\u0718\u0720,\u0907\u0938\u094d\u0924\u093e\u0902\u092c\u0941\u0932,\u0987\u09b8\u09cd\u09a4\u09be\u09a8\u09ac\u09c1\u09b2,\u0b87\u0bb8\u0bcd\u0ba4\u0bbe\u0ba9\u0bcd\u0baa\u0bc1\u0bb2\u0bcd,\u0c07\u0c38\u0c4d\u0c24\u0c3e\u0c02\u0c2c\u0c41\u0c32\u0c4d,\u0c87\u0cb8\u0ccd\u0ca4\u0cbe\u0c82\u0cac\u0cc1\u0cb2\u0ccd,\u0d07\u0d38\u0d4d\u0d24\u0d3e\u0d7b\u0d2c\u0d41\u0d7d,\u0e41\u0e2d\u0e2a\u0e15\u0e31\u0e19\u0e1a\u0e39\u0e25,\u10d8\u10e1\u10e2\u10d0\u10dc\u10d1\u10e3\u10da\u10d8,\u12a2\u1235\u1273\u1295\u1261\u120d,\u17a2\u17ca\u17b8\u179f\u17d2\u178f\u1784\u17cb\u1794\u17bc\u179b,\u30a4\u30b9\u30bf\u30f3\u30d6\u30fc\u30eb,\u4f0a\u65af\u5766\u5821,\uc774\uc2a4\ud0c4\ubd88',
    codeIata: 'IST',
    codeSky: null,
    timezoneIana: 'Europe/Istanbul',
    themes: [
      'eurp',
      'eurp10',
      'eurp_us',
      'eurp_in',
      'eurp_sh',
      'mediterranean',
      'europe',
      'balkans',
      'include',
      'turkey',
      'aa',
      'rmntc',
      'honeymoon',
    ],
    icon: null,
    location: [41.013610999999997, 28.954999999999998],
    countryId: 'ctry-135',
    docId: 'cty-104',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-755070\u0026no_rooms=1\u0026group_adults=2',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'fr', 'turkey'],
    apiVersion: ':2:',
    content: {
      topReason: 'Hagia Sophia, Blue Mosque, Topkapi Palace',
      shortDesc: 'Where East meets West',
      storyDesc:
        'Straddling two continents, Istanbul reflects the cultural influences of the empires that once ruled here. Its Old City reverberates with history, while across the Bosphorus, skyscrapers and malls denote modernity.',
      textDesc:
        'Istanbul is a vibrant city that proudly bears its rich history while pushing forward with contemporary attractions. Visitors can explore ancient sites like the Hagia Sophia and then shop in high-end boutiques, dine in world-class restaurants, or enjoy the city\u0027s dynamic nightlife.',
    },
  },
  {
    name: 'Cheb',
    weight: 75,
    nameSearch: 'Cheb',
    nameAddition: 'Czechia',
    codeIata: '',
    codeSky: null,
    timezoneIana: 'Europe/Prague',
    themes: ['europe'],
    icon: null,
    location: [50.079444000000002, 12.370556000000001],
    countryId: 'ctry-45',
    docId: 'cty-1055',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-542966\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp_us'],
    apiVersion: ':2:',
    content: { topReason: '', shortDesc: '' },
  },
  {
    name: 'San Diego, CA',
    nameSearch: 'San Diego, CA,SAN,\u044b\u0444\u0442,\u0421\u0430\u043d-\u0414\u0438\u0435\u0433\u043e',
    codeIata: 'SAN',
    codeSky: null,
    timezoneIana: 'America/Los_Angeles',
    themes: ['wrld', 'america', 'nam', 'us', 'western'],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=20015725\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1',
    airbnbUrl: '',
    location: [32.715330000000002, -117.15725999999999],
    countryId: 'ctry-92',
    docId: 'cty-153',
    startThemes: ['america', 'eurp_sh', 'capital', 'mediterranean'],
    apiVersion: ':2:',
    content: { topReason: 'Balboa Park, Uss Midway, La Jolla', shortDesc: null },
  },
  {
    name: 'Boston, MA',
    nameSearch: 'Boston,MA,BOS,\u0411\u043e\u0441\u0442\u043e\u043d',
    codeIata: 'BOS',
    codeSky: null,
    timezoneIana: 'America/New_York',
    themes: ['aa', 'wrld', 'america', 'nam', 'us_big', 'us'],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=20061717\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1',
    airbnbUrl: '',
    location: [42.358429999999998, -71.05977],
    countryId: 'ctry-92',
    docId: 'cty-164',
    startThemes: ['eurp_us', 'america', 'capital', 'mediterranean'],
    apiVersion: ':2:',
    content: { topReason: 'Freedom Trail, Fenway Park, Museum Of Fine Arts', shortDesc: null },
  },
  {
    name: 'Salamanca',
    weight: 45,
    nameSearch: 'Salamanca',
    nameAddition: 'Spain',
    codeIata: 'SLM',
    codeSky: null,
    timezoneIana: 'Europe/Madrid',
    themes: ['es', 'europe'],
    icon: null,
    location: [40.961612000000002, -5.6676070000000003],
    countryId: 'ctry-23',
    docId: 'cty-1072',
    bookingUrl: 'https://www.booking.com/searchresults.en.html?city=-400105\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp', 'best place to visit'],
    apiVersion: ':2:',
    content: {
      topReason: '',
      shortDesc:
        'With a history dating back to the Celtic era, it\u2019s known for its ornate sandstone architecture and for the Universidad de Salamanca.',
    },
  },
  {
    name: 'Washington D.C.',
    nameSearch:
      'Washington, DC,WAS,\u0446\u0444\u044b\u0440\u0448\u0442\u043f\u0435\u0449\u0442,wasington,\u0412\u0430\u0448\u0438\u043d\u0433\u0442\u043e\u043d',
    codeIata: 'WAS',
    codeSky: null,
    timezoneIana: 'America/New_York',
    themes: ['wrld', 'america', 'nam', 'us', 'include', 'us_big'],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=20021296\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1',
    airbnbUrl: '',
    location: [38.895110000000003, -77.036370000000005],
    countryId: 'ctry-92',
    docId: 'cty-167',
    startThemes: ['america', 'eurp_sh', 'capital'],
    apiVersion: ':2:',
    content: { topReason: 'White House, Museums amd National Mall', shortDesc: 'Capital of the United States of America' },
  },
  {
    name: 'Las Vegas, NV',
    nameSearch: 'Las Vegas, NV, LAS,\u0414\u0444\u044b\u043c\u0443\u043f\u0444\u044b,\u043b\u0430\u0441 \u0432\u0435\u0433\u0430\u0441',
    codeIata: 'LAS',
    codeSky: null,
    timezoneIana: 'America/Los_Angeles',
    themes: ['wrld', 'america', 'nam', 'us', 'us_big'],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=20079110\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1',
    airbnbUrl: '',
    location: [36.174970000000002, -115.13722],
    countryId: 'ctry-92',
    docId: 'cty-174',
    startThemes: ['america', 'us_big', 'best place to visit'],
    apiVersion: ':2:',
    content: { topReason: 'Grand Canyon, Helicopter Ride, Red Rock Canyon', shortDesc: null },
  },
  {
    name: 'Dublin',
    weight: 85,
    nameSearch:
      'Dublin,Ireland,\u0414\u0443\u0431\u043b\u0438\u043d,DUB,\u90fd\u67cf\u6797,\u30c0\u30d6\u30ea\u30f3,\u05d3\u05d1\u05dc\u05d9\u05df,\u0414\u0443\u0431\u043b\u0456\u043d',
    nameAddition: 'Ireland',
    codeIata: 'DUB',
    codeSky: null,
    timezoneIana: 'Europe/Dublin',
    themes: ['capital', 'include', 'eurp_restart', 'aa', 'eurp', 'eurp_us', 'wrld', 'eurasia', 'europe', 'eu', 'westeurope'],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-1502554\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1',
    airbnbUrl: '',
    location: [53.347777999999998, -6.259722],
    countryId: 'ctry-29',
    docId: 'cty-204',
    startThemes: ['eurp_us', 'eurp', 'eurp_sh', 'capital'],
    apiVersion: ':2:',
    content: { topReason: 'Temple Bar, Trinity College, Guinness Storehouse', shortDesc: 'Capital of the Republic of Ireland' },
  },
  {
    name: 'Ottawa, ON',
    nameSearch: 'YOW,Ottawa,Ontario,\u041e\u0442\u0442\u0430\u0432\u0430,\u041e\u043d\u0442\u0430\u0440\u0438\u043e',
    codeIata: 'YOW',
    codeSky: null,
    timezoneIana: 'America/Toronto',
    themes: ['wrld', 'america', 'canada', 'nam'],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-570760\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1',
    airbnbUrl: '',
    location: [45.421529999999997, -75.697192999999999],
    countryId: 'ctry-6',
    docId: 'cty-248',
    startThemes: ['america', 'eurp', 'eurp_sh'],
    apiVersion: ':2:',
    content: { topReason: 'Parliament Buildings, Rideau Canal, National Art Gallery', shortDesc: 'Capital of Canada' },
  },
  {
    name: 'Milan',
    weight: 100,
    nameSearch:
      'Lungsod ng Milano,MIL,Mailand,Mediolan,Mediolanum,Mila,Milaan,Milan,Milana,Milanas,Milano,Milanu,Milao,Mil\u00e0,Mil\u00e1n,Mil\u00e1no,Mil\u00e1n\u00f3,Mil\u00e3o,Mil\u0101na,M\u00edlan\u00f3,M\u0438\u043b\u0430\u043d,milan,milan,milani,millano,mirano,mylan,mylanw,\u041c\u0438\u043b\u0430\u043d,\u041c\u0438\u043b\u0430\u043d\u043e,\u041c\u0456\u043b\u0430\u043d,\u05de\u05d9\u05dc\u05d0\u05e0\u05d5,\u0645\u0649\u0644\u0627\u0646,\u0645\u064a\u0644\u0627\u0646\u0648,\u0bae\u0bbf\u0bb2\u0ba9\u0bcd,\u0e21\u0e34\u0e25\u0e32\u0e19,\u10db\u10d8\u10da\u10d0\u10dc\u10d8,\u30df\u30e9\u30ce,\u7c73\u862d,\ubc00\ub77c\ub178',
    nameAddition: '',
    codeIata: 'MIL',
    codeSky: null,
    timezoneIana: 'Europe/Rome',
    themes: [
      'eurp10',
      'eurp_train',
      'europe',
      'schengen',
      'rmntc',
      'alps',
      'fr_max',
      'itfr',
      'it',
      'eurp',
      'eurp_us',
      'eurp_sh',
      'eurp_il',
      'aa',
      'include',
    ],
    icon: null,
    location: [45.463681000000001, 9.1881713999999999],
    countryId: 'ctry-109',
    docId: 'cty-27',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-121726\u0026no_rooms=1\u0026group_adults=2',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'best place to visit'],
    apiVersion: ':2:',
    content: {
      topReason: 'Galleria Vittorio Emanuele II, Sforza Castle, Brera District',
      shortDesc: 'Italy\u0027s cosmopolitan heartbeat',
      storyDesc: 'Milan, where high fashion meets historical elegance.',
      textDesc:
        'Milan, an epitome of style, is where designers, artists, and entrepreneurs converge. Wander through the Galleria Vittorio Emanuele II, one of the world\u0027s oldest shopping malls, to experience luxury retail at its best. Delve into history at the Sforza Castle, or immerse yourself in the artsy ambiance of the Brera District. As dusk sets, Milan\u0027s nightlife springs to life, offering chic aperitivo spots and contemporary dining experiences. From its iconic fashion weeks to its rich tapestry of arts and history, Milan is endlessly captivating.',
      oneDayTrip: 'Lugano, Monza, Stresa',
    },
  },
  {
    name: 'Tokyo',
    nameSearch: 'TYO,Tokyo,\u0422\u043e\u043a\u0438\u043e,\u042f\u043f\u043e\u043d\u0438\u044f',
    codeIata: 'TYO',
    codeSky: null,
    timezoneIana: 'Asia/Tokyo',
    themes: ['wrld', 'eurasia', 'asia', 'east_asia', 'jp', 'asia_s'],
    icon: null,
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-246227\u0026aid=855838\u0026no_rooms=1\u0026group_adults=1',
    airbnbUrl: '',
    location: [35.689487499999998, 139.69170639999999],
    countryId: 'ctry-213',
    docId: 'cty-282',
    startThemes: ['eurp_us', 'capital', 'asia'],
    apiVersion: ':2:',
    content: { topReason: 'Japanese Cuisine, Japanese Culture, Train System\n', shortDesc: 'Capital of Japan' },
  },
  {
    name: 'Luxembourg',
    weight: 70,
    nameSearch:
      'LUX,Letzebuerg,Lexembourg,Lucemburc,Luksemburg,Luxebourg,Luxemburg,Luxemburgo,Luxembourg,Luxemburgum,Luksembourg,Lussemburgo,lugsambha,rksnbwrg,lugsembeogeu,luxmbwrgh,lukusenburugu,l\u00f9ksambharg,\u039b\u03bf\u03c5\u03be\u03b5\u03bc\u03b2\u03bf\u03cd\u03c1\u03b3\u03bf,\u041b\u0443\u043a\u0441\u0435\u043c\u0431\u0443\u0440\u0433,\u05dc\u05d5\u05e7\u05e1\u05de\u05d1\u05d5\u05e8\u05d2,\u0644\u0648\u0643\u0633\u0645\u0628\u0648\u0631\u062c,\u0932\u0915\u094d\u091d\u0947\u092e\u094d\u092c\u0930\u094d\u0917,\u30eb\u30af\u30bb\u30f3\u30d6\u30eb\u30af,\u5362\u68ee\u5821,\ub8e9\uc148\ubd80\ub974\ud06c',
    codeIata: 'LUX',
    codeSky: null,
    timezoneIana: 'Europe/Luxembourg',
    themes: ['capital', 'include', 'aa', 'europe', 'eurp', 'fr_max', 'eurp_us', 'eurp_sh', 'eurp_in', 'eurp_il'],
    icon: null,
    location: [49.75, 6.1666670000000003],
    countryId: 'ctry-50',
    docId: 'cty-118',
    bookingUrl: 'http://www.booking.com/searchresults.html?city=-1736191\u0026aid=849127\u0026no_rooms=1\u0026group_adults=1\u0026room1=A',
    airbnbUrl: '',
    startThemes: ['eurp_us', 'eurp_sh', 'capital', 'mediterranean', 'fr'],
    apiVersion: ':2:',
    content: {
      topReason: 'Casemates du Bock, Grand Ducal Palace, Notre-Dame Cathedral',
      shortDesc: 'A harmonious blend of old and new amidst green surroundings',
      storyDesc: 'Luxembourg City, a European hub of culture, finance, and history.',
      textDesc:
        'Nestled in the heart of Western Europe, Luxembourg City is famed for its fortified medieval old town perched on sheer cliffs. Its grand Casemates du Bock, a sprawling network of underground tunnels and galleries, is a highlight for history buffs. The modernity of the European Court of Justice contrasts the historic Grand Ducal Palace. Green spaces, vibrant plazas, and a mix of French and German cultures make this city a unique and charming European destination.',
      oneDayTrip: 'Echternach, Vianden, Mullerthal',
      localCurrency: 'Euro (\u20ac)',
      yearOfBirth: '963',
      localHolidays: [{ date: '23rd June', reason: 'National Day' }],
    },
  },
];

export const citiesThemes = [
  { apiVersion: ':2:', code: 'eurp_us', dstn: 'eurp', docId: 'thm-8', zoom: 3.5, name: 'Europe: Best Places to Visit' },
  { apiVersion: ':2:', code: 'eurp_sh', dstn: 'europe', docId: 'thm-5', zoom: 4.0999999999999996, name: 'Europe: Schengen countries' },
  { name: 'Turkey', dstn: 'tr', code: 'turkey', apiVersion: ':2:', docId: 'thm-94' },
  { apiVersion: ':2:', code: 'america/europe', docId: 'thm-54', name: ' America and Europe' },
  { name: 'United States', dstn: 'us', code: 'america', docId: 'thm-43', apiVersion: ':2:' },
  { name: 'Asia', code: 'asia', docId: 'thm-51', apiVersion: ':2:' },
  { apiVersion: ':2:', code: 'capital', docId: 'thm-10', dstn: 'europe', name: 'Capitals' },
];
