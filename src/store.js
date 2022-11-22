import { reactive } from "vue";

export const store = reactive ({
    navLinks: [
        'Home',
        'Shop',
        'Products',
        'Categories',
        'News',
        'Elements'
    ],
    previewCategories: [
        'Men',
        'Women',
        'Accesories'
    ],
    previewCards: [
        {
            img:'/img/black_elegant_leather_jacket.jpg',
            product:'black leather jacket',
            categories: 'Man, Jackets, Jeans',
            oldcost: '235',
            cost: '200'
        },
        {
            img:'/img/black_leather_suit.jpg',
            product:'black leather suit',
            categories: 'Man, Jackets',
            cost: '176'
        },
        {
            img:'/img/blue_jacket_and_white_stripe_tee.jpg',
            product:'blue jacket & stripe tee',
            categories: 'Man, Jackets, Suits',
            cost: '580'
        },
        {
            img:'/img/black_rebel_leather_jacket.jpg',
            product:'modern black leather suit',
            categories: 'Man, Jackets',
            cost: '96'
        },
        
    ],
    collections: [
        {
            img: '/img/winter_collection_bg.jpg',
            collection: 'winter collection',
            subtitle: 'stylish and warm'
        },
        {
            img: '/img/spring_collection_bg.jpg',
            collection: 'spring collection',
            subtitle: 'bright and colorfull'
        },
        {
            img: '/img/autumn_collection_bg.jpg',
            collection: 'autumn collection',
            subtitle: 'rich and comfortable'
        }
    ],
    blogPosts: [
        {
            img: '/img/post_img_12-320x202.jpg',
            title: 'Aenean lobortis sapien enim viverra',
            date: 'september 9th, 2015',
            comments: '0 comments',
            intro: 'Donec finibus sit amet orci eget ultricies. Praesent posuere nate ut erat fringilla,'
        },
        {
            img: '/img/post_img_11-320x202.jpg',
            title: 'Duis ac massa semper maximus',
            date: 'september 9th, 2015',
            comments: '0 comments',
            intro: 'Donec finibus sit amet orci eget ultricies. Praesent posuere nate ut erat fringilla,'
        },
        {
            img: '/img/post_img_10-320x202.jpg',
            title: 'Nunc fermint nulla eu justo sem id',
            date: 'september 9th, 2015',
            comments: '0 comments',
            intro: 'Donec finibus sit amet orci eget ultricies. Praesent posuere nate ut erat fringilla,'
        }
    ],
    featuredOverview: [
        {
            product:'black jacket',
            rate: '',
            oldcost: '',
            cost: '215',
            img: '/img/black_leather_jacket-120x156.jpg'
        },
        {
            product:'black leather jacket',
            rate: '10',
            oldcost: '235',
            cost: '200',
            img: '/img/black_elegant_leather_jacket-120x156.jpg'
        },
        {
            product:'hipster black top',
            rate: '',
            oldcost: '',
            cost: '57',
            img: '/img/hipster_black_top-120x156.jpg'
        }
    ],
    onsaleOverview: [
        {
            product:'black leather jacket',
            rate: '10',
            oldcost: '235',
            cost: '200',
            img: '/img/black_elegant_leather_jacket-120x156.jpg'
        },
        {
            product:'blue leather jacket',
            rate: '',
            oldcost: '80',
            cost: '60',
            img: '/img/blue_leather_jacket-120x156.jpg'
        },
        {
            product:'modern leather boots',
            rate: '',
            oldcost: '50',
            cost: '30',
            img: '/img/modern_leather_boots-120x156.jpg'
        }
    ],
    ratedOverview: [
        {
            product:'leather gloves',
            rate: '10',
            oldcost: '',
            cost: '200',
            img: '/img/leather_gloves-120x156.jpg'
        },
        {
            product:'black leather jacket',
            rate: '10',
            oldcost: '235',
            cost: '200',
            img: '/img/black_elegant_leather_jacket-120x156.jpg'
        },
        {
            product:'spring printed dress',
            rate: '10',
            oldcost: '',
            cost: '47',
            img: '/img/spring_printed_dress-120x156.jpg'
        }
    ],
    reviewsOverview: [
        {
            product:'black leather jacket',
            rate: '10',
            oldcost: '235',
            cost: '200',
            img: '/img/black_elegant_leather_jacket-120x156.jpg'
        },
        {
            product:'leather gloves',
            rate: '10',
            oldcost: '',
            cost: '200',
            img: '/img/leather_gloves-120x156.jpg'
        },
        {
            product:'spring printed dress',
            rate: '10',
            oldcost: '',
            cost: '47',
            img: '/img/spring_printed_dress-120x156.jpg'
        }
    ]
})