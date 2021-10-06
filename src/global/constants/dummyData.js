import {
    logoImg,
    AEDImg,
    AUDImg,
    BHDImg,
    CADImg,
    CHFImg,
    CNYImg,
    DKKImg,
    EURImg,
    GBPImg,
    HKDImg,
    INRImg,
    JPYImg,
    KRWImg,
    KWDImg,
    MYRImg,
    NEPImg,
    QARImg,
    SARImg,
    SEKImg,
    SGDImg,
    THBImg,
    USDImg,
    artImg,
    businessImg,
    educationImg,
    entertainmentImg,
    fashionImg,
    healthImg,
    politicsImg,
    realEstateImg,
    scienceImg,
    sportsImg,
    technologyImg,
    travelImg,
    annapurnaTimesImg,
    adOneImg,
    commentIconImg,
    shareIconImg,
    bookmarkIconImg,
    likeIconImg,
} from '../../assets'

const dummyData = [
    {
        item: 'Media Alliance',
        type: 'logo',
        urlLink: '/',
        picture: logoImg,
    },
    {
        item: 'समाचार',
        type: 'text',
        urlLink: '/news',
        picture: '',
    },
    {
        item: 'विदेशी मुद्रा',
        type: 'text',
        urlLink: '/forex',
        picture: '',
    },
    {
        item: 'शेयर बजार',
        type: 'text',
        urlLink: '/share-market',
        picture: '',
    },
    {
        item: 'क्यालेन्डर',
        type: 'text',
        urlLink: '/calendar',
        picture: '',
    },
    {
        item: 'मिति परिवर्तन',
        type: 'text',
        urlLink: '/date-converter',
        picture: '',
    },
    {
        item: 'सुन/चाँदी मूल्य',
        type: 'text',
        urlLink: '/gold',
        picture: '',
    },
    {
        item: 'युनिकोड',
        type: 'text',
        urlLink: '/unicode',
        picture: '',
    },
    {
        item: 'ईएमआई क्यालकुलेटर',
        type: 'text',
        urlLink: '/emi-calculator',
        picture: '',
    },
    {
        item: 'शेयर क्यालकुलेटर',
        type: 'text',
        urlLink: '/share-calculator',
        picture: '',
    },
]
const countryDetails = [
    {
        ISO3: 'AED',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'AUD',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'BHD',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'CAD',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'CHF',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'CNY',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'DKK',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'EUR',
        unit: 'प्रति १० एकाइ',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'GBP',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'HKD',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'INR',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'JPY',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'KRW',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'KWD',
        unit: 'प्रति १०० एकाइ',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'MYR',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'NEP',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'QAR',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'SAR',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'SEK',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'SGD',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'THB',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
    {
        ISO3: 'USD',
        unit: '',
        fullName: 'संयुक्त राज्य डलर',
        buyAmount: '११७.१८',
        sellAmount: '११७.७८',
    },
]
const countryFlags = [
    AEDImg,
    AUDImg,
    BHDImg,
    CADImg,
    CHFImg,
    CNYImg,
    DKKImg,
    EURImg,
    GBPImg,
    HKDImg,
    INRImg,
    JPYImg,
    KRWImg,
    KWDImg,
    MYRImg,
    NEPImg,
    QARImg,
    SARImg,
    SEKImg,
    SGDImg,
    THBImg,
    USDImg,
]
const interestTopicsImages = [
    artImg,
    businessImg,
    educationImg,
    entertainmentImg,
    fashionImg,
    healthImg,
    politicsImg,
    realEstateImg,
    scienceImg,
    sportsImg,
    technologyImg,
    travelImg,
]

const interestTopicsHeadings = [
    'Art',
    'Business',
    'Education',
    'Entertainment',
    'Fashion',
    'Health',
    'Politics',
    'Real Estate',
    'Science',
    'Sports',
    'Technology',
    'Travel',
]
const newsTopicFilter = [
    { path: 'all', label: 'सबै' },
    { path: 'nepal', label: 'नेपालको राजनीति' },
    {
        path: 'world',
        label: 'विश्व राजनीति',
    },
    {
        path: 'asia',
        label: 'एशिया',
    },
]
const newsTopics = [
    {
        path: 'sports',
        label: 'खेलकुद',
    },
    {
        path: 'politics',
        label: 'राजनीति',
    },
    {
        path: 'technology',
        label: 'प्रविधि',
    },
    {
        path: 'business',
        label: 'व्यापार',
    },
    {
        path: 'health',
        label: 'स्वास्थ्य',
    },
    {
        path: 'education',
        label: 'शिक्षा',
    },
    {
        path: 'travel',
        label: 'यात्रा',
    },
    {
        path: 'lifestyle',
        label: 'जीवनशैली',
    },
    {
        path: 'entertainment',
        label: 'मनोरञ्जन',
    },
    {
        path: 'art',
        label: 'कला',
    },
]
const sampleNews = [
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
    {
        newsAgency: 'अन्नपूर्ण पोस्ट',
        newsAgencyIcon: annapurnaTimesImg,
        title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
        content: 'Some random shit',
        tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
        date: '१४ घण्टा अगाडी',
        image: adOneImg,
    },
]

const ellipseMenuItems = [
    {
        icon: likeIconImg,
        desc: 'Like this news',
    },
    {
        icon: shareIconImg,
        desc: 'Share this news',
    },
    {
        icon: bookmarkIconImg,
        desc: 'Mark as Favorite',
    },
    {
        icon: commentIconImg,
        desc: 'Add Comment',
    },
]

const nepaliEnglishNumerals = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०',
}

export {
    dummyData,
    countryDetails,
    countryFlags,
    interestTopicsHeadings,
    interestTopicsImages,
    newsTopicFilter,
    newsTopics,
    sampleNews,
    ellipseMenuItems,
    nepaliEnglishNumerals,
}
