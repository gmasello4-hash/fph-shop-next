// Add a board: one entry here + image in public/boards/. Never change a published slug.
export type Item={name:string;url:string};
export type Board={slug:string;title:string;image:string;items:Item[]};
export const boards:Board[]=[
  {
    "slug": "cozy-and-moody-brrr-basket",
    "title": "The Cozy & Moody Brrr Basket",
    "image": "/boards/cozy-and-moody-brrr-basket.png",
    "items": [
      {
        "name": "Charcoal Chunky Knit Throw",
        "url": "https://evergracehome.com/products/chunky-moss-stitch-chenille-knit-throw?variant=52555966054694"
      },
      {
        "name": "Olive Faux Fur Pom Beanie",
        "url": "https://www.nordstromrack.com/s/marcus-adler-faux-fur-pom-honeycomb-knit-beanie/8015162"
      },
      {
        "name": "Amber & Cedar Candle",
        "url": "https://www.target.com/p/amber-glass-wooden-wick-amber-and-cedar-jar-candle-13oz-threshold-8482/-/A-90011052"
      },
      {
        "name": "Striped Wool Blend Socks",
        "url": "https://www.nordstrom.com/s/barbour-houghton-stripe-wool-blend-socks/8470737"
      },
      {
        "name": "Godiva Holiday Truffles",
        "url": "https://www.godiva.com/products/assorted-chocolate-truffles-gift-box-holiday-edition-15pc"
      },
      {
        "name": "Cream & Natural Rope Basket",
        "url": "https://www.target.com/p/regalwoven-woven-cotton-rope-lightweight-handcrafted-open-storage-bins-1-pc-white-coffee-18-9-11-9-1in/-/A-1011274539"
      }
    ]
  },
  {
    "slug": "midnight-in-brrr-basket",
    "title": "The Midnight In Brrr Basket",
    "image": "/boards/midnight-in-brrr-basket.png",
    "items": [
      {
        "name": "Baltic Amber Large Jar Candle",
        "url": "https://voluspa.com/products/large-embossed-glass-jar-candle-1-baltic-amber"
      },
      {
        "name": "Antique Brass Taper Holder",
        "url": "https://mcgeeandco.com/products/antique-brass-taper-candle-holder"
      },
      {
        "name": "Natural Linen Tea Towel",
        "url": "https://athenscooks.com/products/magiclinen-linen-tea-towels-natural-linen"
      },
      {
        "name": "Godiva Dark Truffles",
        "url": "https://www.godiva.com/products/dark-chocolate-truffles-gift-box-24pc-16264"
      },
      {
        "name": "Seagrass Folio Basket",
        "url": "https://www.target.com/p/braided-seagrass-folio-bin-brightroom-8482/-/A-86383687"
      }
    ]
  },
  {
    "slug": "espresso-and-evergreen-brrr-basket",
    "title": "The Espresso & Evergreen Brrr Basket",
    "image": "/boards/espresso-and-evergreen-brrr-basket.png",
    "items": [
      {
        "name": "Black Travel Mug",
        "url": "https://www.walmart.com/ip/TAL-20-oz-Insulated-Travel-Coffee-Mug-Black/749805900"
      },
      {
        "name": "Khaki Green Fringed Scarf",
        "url": "https://www.nordstrom.com/s/fringed-scarf/7981605"
      },
      {
        "name": "Leathered Amber Candle",
        "url": "https://www.walmart.com/ip/Better-Homes-Gardens-13oz-Warm-Leathered-Amber-Scented-Wooden-Wick-Jar-Candle/7329366328"
      },
      {
        "name": "Olive Pom Beanie",
        "url": "https://www.gravitytrading.com/gravity-threads-knit-pom-pom-beanie-hat/"
      },
      {
        "name": "Godiva Truffles 15pc",
        "url": "https://www.macys.com/shop/product/godiva-signature-truffles-assorted-chocolate-gift-box-with-red-ribbon-15-pieces?ID=23096458"
      },
      {
        "name": "Brown Woven Folio Basket",
        "url": "https://www.target.com/p/woven-banana-bark-folio-bin-brightroom-8482/-/A-86383771"
      }
    ]
  },
  {
    "slug": "the-high-school-girl-edit",
    "title": "The High School Girl Edit",
    "image": "/boards/the-high-school-girl-edit.png",
    "items": [
      {
        "name": "Burgundy Oversized Hoodie",
        "url": "https://www.amazon.com/dp/B0CJV2NCR8?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Metal Claw Clips",
        "url": "https://www.amazon.com/dp/B0B1QC4JHG?tag=feelingpret0e-20"
      },
      {
        "name": "Summer Fridays Lip Balm",
        "url": "https://www.amazon.com/dp/B0BYP81HN8?tag=feelingpret0e-20"
      },
      {
        "name": "Cheirosa 40 Body Mist",
        "url": "https://www.amazon.com/dp/B096W846FC?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Fuzzy Cloud Socks",
        "url": "https://www.amazon.com/dp/B0B4F45C6Y?tag=feelingpret0e-20"
      },
      {
        "name": "Chunky Gold Hoop Earrings",
        "url": "https://www.amazon.com/dp/B08776TBZS?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-off-duty-college-edit",
    "title": "The Off-Duty College Edit",
    "image": "/boards/the-off-duty-college-edit.png",
    "items": [
      {
        "name": "Nike Brasilia Duffel, Black",
        "url": "https://www.amazon.com/dp/B07BZXKHS1?tag=feelingpret0e-20"
      },
      {
        "name": "Charcoal Oversized Hoodie",
        "url": "https://www.amazon.com/dp/B0CHJQLZLT?tag=feelingpret0e-20"
      },
      {
        "name": "Stanley IceFlow Tumbler, Black",
        "url": "https://www.amazon.com/dp/B0DR9PMK1W?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Leather Dopp Kit",
        "url": "https://www.amazon.com/dp/B0CQQZ63CN?tag=feelingpret0e-20"
      },
      {
        "name": "Marshall Emberton III Speaker",
        "url": "https://www.amazon.com/dp/B0DDCJMDJC?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Leather Bifold Wallet",
        "url": "https://www.amazon.com/dp/B0877BJ9GW?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-first-apartment-edit",
    "title": "The First Apartment Edit",
    "image": "/boards/the-first-apartment-edit.png",
    "items": [
      {
        "name": "Brown Checkered Throw",
        "url": "https://www.amazon.com/dp/B0F37K56K6?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Mushroom Lamp",
        "url": "https://www.amazon.com/dp/B0DX6T68BL?tag=feelingpret0e-20"
      },
      {
        "name": "Olive Velvet Pillow Covers",
        "url": "https://www.amazon.com/dp/B0G6YV9K3Z?tag=feelingpret0e-20"
      },
      {
        "name": "Black Framed Art, Set of 3",
        "url": "https://www.amazon.com/dp/B0H4G457G4?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Bud Vases",
        "url": "https://www.amazon.com/dp/B0GV3HM5XJ?tag=feelingpret0e-20"
      },
      {
        "name": "Ribbed Ceramic Mug",
        "url": "https://www.amazon.com/dp/B0GZWZJDDC?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-midnight-self-care-edit",
    "title": "The Midnight Self-Care Edit",
    "image": "/boards/the-midnight-self-care-edit.png",
    "items": [
      {
        "name": "Black Mulberry Silk Pajama Set",
        "url": "https://www.amazon.com/dp/B0HJBNPJKC?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate Silk Pillowcase",
        "url": "https://www.amazon.com/dp/B0F8NMWKGH?tag=feelingpret0e-20"
      },
      {
        "name": "Cashmere Vanilla Body Mist",
        "url": "https://www.amazon.com/dp/B0H7RXNHCN?tag=feelingpret0e-20"
      },
      {
        "name": "Laneige Lip Mask, Berry",
        "url": "https://www.amazon.com/dp/B07XXPHQZK?tag=feelingpret0e-20"
      },
      {
        "name": "Cotton Waffle Headband",
        "url": "https://www.amazon.com/dp/B0H5FM212Y?tag=feelingpret0e-20"
      },
      {
        "name": "Vanilla Amber Candle",
        "url": "https://www.amazon.com/dp/B0H2D7Z7N3?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-room-upgrade-edit",
    "title": "The Room Upgrade Edit",
    "image": "/boards/the-room-upgrade-edit.png",
    "items": [
      {
        "name": "Satechi Aluminum Wireless Mouse",
        "url": "https://www.amazon.com/dp/B0G8HKJJP9?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Leather Desk Mat",
        "url": "https://www.amazon.com/dp/B0HFT67CZ4?tag=feelingpret0e-20"
      },
      {
        "name": "Black Aluminum Headphone Stand",
        "url": "https://www.amazon.com/dp/B076CN4YQM?tag=feelingpret0e-20"
      },
      {
        "name": "Wood Digital Alarm Clock",
        "url": "https://www.amazon.com/dp/B0DHJK3MB4?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Wood Desk Shelf",
        "url": "https://www.amazon.com/dp/B0FLBX5HRC?tag=feelingpret0e-20"
      },
      {
        "name": "BenQ ScreenBar Monitor Light",
        "url": "https://www.amazon.com/dp/B076VNFZJG?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-christmas-house-edit",
    "title": "The Christmas House Edit",
    "image": "/boards/the-christmas-house-edit.png",
    "items": [
      {
        "name": "Thymes Frasier Fir Candle",
        "url": "https://www.amazon.com/dp/B00YPP2LBM?tag=feelingpret0e-20"
      },
      {
        "name": "Mrs. Meyer's Iowa Pine Room Freshener",
        "url": "https://www.amazon.com/dp/B07YP2KPD9?tag=feelingpret0e-20"
      },
      {
        "name": "Thymes Frasier Fir Reed Diffuser",
        "url": "https://www.amazon.com/dp/B07PX41PHQ?tag=feelingpret0e-20"
      },
      {
        "name": "Mrs. Meyer's Iowa Pine Hand Soap",
        "url": "https://www.amazon.com/dp/B0096M65RK?tag=feelingpret0e-20"
      },
      {
        "name": "Yankee Candle Balsam & Cedar",
        "url": "https://www.amazon.com/dp/B0F3DPXQP1?tag=feelingpret0e-20"
      },
      {
        "name": "Christmas Simmer Pot Kit, Orange & Cinnamon",
        "url": "https://www.amazon.com/dp/B0H8M2DHXF?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-everything-shower-edit",
    "title": "The Everything Shower Edit",
    "image": "/boards/the-everything-shower-edit.png",
    "items": [
      {
        "name": "Real Dried Eucalyptus Bundle",
        "url": "https://www.amazon.com/dp/B0B18N8N45?tag=feelingpret0e-20"
      },
      {
        "name": "Black Teak Shower Bench",
        "url": "https://www.amazon.com/dp/B0H44Q8RPN?tag=feelingpret0e-20"
      },
      {
        "name": "Gold Metal Cordless Shower Lamp",
        "url": "https://www.amazon.com/dp/B0GZZMHGY3?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Pump Bottles, Set of 2",
        "url": "https://www.amazon.com/dp/B0FBL9V33T?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Brown Waffle Bath Towels",
        "url": "https://www.amazon.com/dp/B0BDKBNHZC?tag=feelingpret0e-20"
      },
      {
        "name": "Black Marble Soap Dish",
        "url": "https://www.amazon.com/dp/B098Q331CB?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-college-girl-edit",
    "title": "The College Girl Edit",
    "image": "/boards/the-college-girl-edit.png",
    "items": [
      {
        "name": "Cream Pebbled Leather Makeup Bag",
        "url": "https://www.amazon.com/dp/B0GT4PQRL7?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Leather Jewelry Case",
        "url": "https://www.amazon.com/dp/B0F8ZRVXT9?tag=feelingpret0e-20"
      },
      {
        "name": "Owala FreeSip 24 oz, Black Cherry",
        "url": "https://www.amazon.com/dp/B0FJN3BTPV?tag=feelingpret0e-20"
      },
      {
        "name": "Coach Audrey Crossbody, Chalk",
        "url": "https://www.amazon.com/dp/B0GD8B8NN2?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Faux Fur Slippers",
        "url": "https://www.amazon.com/dp/B09TVHS5CG?tag=feelingpret0e-20"
      },
      {
        "name": "Bedsure Grey Sherpa Throw",
        "url": "https://www.amazon.com/dp/B0158EQJSY?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-after-dark-living-room",
    "title": "The After Dark Living Room",
    "image": "/boards/the-after-dark-living-room.png",
    "items": [
      {
        "name": "Dark Wood Pleated Shade Lamp",
        "url": "https://www.target.com/p/-/A-95005664"
      },
      {
        "name": "Evergreen Chunky Chenille Throw",
        "url": "https://www.target.com/p/-/A-95177485"
      },
      {
        "name": "Dark Sage Chenille Throw",
        "url": "https://www.target.com/p/-/A-1013018796"
      },
      {
        "name": "Chocolate Velvet Pillow Covers",
        "url": "https://www.amazon.com/dp/B0CCYD7PJ4?tag=feelingpret0e-20"
      },
      {
        "name": "Black Metal Taper Holders",
        "url": "https://www.target.com/p/-/A-94586657"
      },
      {
        "name": "Antique Brass Ribbed Candleholders",
        "url": "https://www.target.com/p/-/A-94688433"
      }
    ]
  },
  {
    "slug": "the-sculptural-entryway",
    "title": "The Sculptural Entryway",
    "image": "/boards/the-sculptural-entryway.png",
    "items": [
      {
        "name": "Black Arched Mantel Mirror",
        "url": "https://kateandlaurel.com/products/travis-arch-framed-wall-mirror?variant=43685495046211"
      },
      {
        "name": "Dark Brown Gallery Frame",
        "url": "https://www.target.com/p/-/A-1006978980"
      },
      {
        "name": "Rustic Brown Ceramic Vase",
        "url": "https://www.target.com/p/-/A-94685983"
      },
      {
        "name": "Black Twisted Ceramic Bowl",
        "url": "https://www.target.com/p/-/A-94818544"
      },
      {
        "name": "Short Black Twisted Ceramic Vase",
        "url": "https://www.target.com/p/-/A-94818547"
      },
      {
        "name": "Rustic Ceramic Pedestal Bowl",
        "url": "https://www.target.com/p/-/A-94687005"
      }
    ]
  },
  {
    "slug": "olive-and-espresso-evenings",
    "title": "Olive & Espresso Evenings",
    "image": "/boards/olive-and-espresso-evenings.png",
    "items": [
      {
        "name": "Antique Brass Arched Mirror",
        "url": "https://www.target.com/p/-/A-95046403"
      },
      {
        "name": "Green Ribbed Glass Pedestal Bowl",
        "url": "https://www.target.com/p/-/A-95016187"
      },
      {
        "name": "Brown Twisted Wood Frame",
        "url": "https://www.target.com/p/-/A-95046186"
      },
      {
        "name": "Tall Black Twisted Ceramic Vase",
        "url": "https://www.target.com/p/-/A-94818545"
      },
      {
        "name": "Brown & Natural Painted Vase",
        "url": "https://www.target.com/p/-/A-95012223"
      },
      {
        "name": "Matte Black Ceramic Candleholders",
        "url": "https://www.amazon.com/dp/B0HKWCZNVK?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-dark-coquette-girl-room",
    "title": "The Dark Coquette Girl Room",
    "image": "/boards/the-dark-coquette-girl-room.png",
    "items": [
      {
        "name": "Dusty Pink Ruffle Comforter Set",
        "url": "https://www.amazon.com/dp/B0FJLY6R42?tag=feelingpret0e-20"
      },
      {
        "name": "Black Scalloped Wood Nightstand",
        "url": "https://www.amazon.com/dp/B0G3TF415S?tag=feelingpret0e-20"
      },
      {
        "name": "Antique Gold Heart Mirror",
        "url": "https://www.amazon.com/dp/B0HDNP8XHC?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy Velvet Curtains",
        "url": "https://www.amazon.com/dp/B0BB1NZGJ7?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy Velvet Bow Pillow Covers",
        "url": "https://www.amazon.com/dp/B0HH3GD5WB?tag=feelingpret0e-20"
      },
      {
        "name": "Dusty Pink Velvet Jewelry Boxes",
        "url": "https://www.amazon.com/dp/B0H6ZD638H?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-morning-pour-edit",
    "title": "The Morning Pour Edit",
    "image": "/boards/the-morning-pour-edit.png",
    "items": [
      {
        "name": "Matte Black Ceramic Mugs",
        "url": "https://www.amazon.com/dp/B07P1G8MHJ?tag=feelingpret0e-20"
      },
      {
        "name": "Glass Syrup Bottles, Bronze Pumps",
        "url": "https://www.amazon.com/dp/B0GBV329MJ?tag=feelingpret0e-20"
      },
      {
        "name": "Gold Milk Pitcher",
        "url": "https://www.amazon.com/dp/B0FL23T83J?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Pour-Over Stand",
        "url": "https://www.amazon.com/dp/B0GWQ351YG?tag=feelingpret0e-20"
      },
      {
        "name": "Black Glass Coffee Canister",
        "url": "https://www.amazon.com/dp/B00VB20MMM?tag=feelingpret0e-20"
      },
      {
        "name": "Black Marble Tray",
        "url": "https://www.amazon.com/dp/B0CLKFJ6VQ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-cozy-patio-edit",
    "title": "The Cozy Patio Edit",
    "image": "/boards/the-cozy-patio-edit.png",
    "items": [
      {
        "name": "Black Propane Fire Pit Table",
        "url": "https://www.amazon.com/dp/B0G49HT8N8?tag=feelingpret0e-20"
      },
      {
        "name": "Teak Candle Lantern",
        "url": "https://www.amazon.com/dp/B07PCQNY71?tag=feelingpret0e-20"
      },
      {
        "name": "Black Metal Lanterns",
        "url": "https://www.amazon.com/dp/B0CSP2QJ5F?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate Outdoor Pillow Covers",
        "url": "https://www.amazon.com/dp/B0H6XHLL97?tag=feelingpret0e-20"
      },
      {
        "name": "Brown 100% Wool Throw",
        "url": "https://www.amazon.com/dp/B0FD7WD8FT?tag=feelingpret0e-20"
      },
      {
        "name": "Teak 2-Tier Side Table",
        "url": "https://www.amazon.com/dp/B0FSRZZ91R?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "movie-night-after-dark",
    "title": "Movie Night After Dark",
    "image": "/boards/movie-night-after-dark.png",
    "items": [
      {
        "name": "Chocolate Chunky Knit Throw",
        "url": "https://www.amazon.com/dp/B0D3WVB6JR?tag=feelingpret0e-20"
      },
      {
        "name": "Wooden Popcorn Bowl",
        "url": "https://www.amazon.com/dp/B000Y528F6?tag=feelingpret0e-20"
      },
      {
        "name": "Smokey Glass Hobnail Bowls",
        "url": "https://www.amazon.com/dp/B0DXMH5658?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Couch Arm Tray",
        "url": "https://www.amazon.com/dp/B0H288YHCG?tag=feelingpret0e-20"
      },
      {
        "name": "Black & Brass Metal Table Lamp",
        "url": "https://www.amazon.com/dp/B0CBK4WJHS?tag=feelingpret0e-20"
      },
      {
        "name": "Ivory Cotton Knit Pouf",
        "url": "https://www.amazon.com/dp/B00KW2VCBC?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "shelf-after-dark",
    "title": "Shelf After Dark",
    "image": "/boards/shelf-after-dark.png",
    "items": [
      {
        "name": "Walnut Pedestal Riser",
        "url": "https://www.amazon.com/dp/B0BLN7QCW9?tag=feelingpret0e-20"
      },
      {
        "name": "Brass Picture Light",
        "url": "https://www.amazon.com/dp/B0DHTTJCTF?tag=feelingpret0e-20"
      },
      {
        "name": "Framed Moody Landscape Print",
        "url": "https://www.amazon.com/dp/B0GRNDLFKZ?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Bud Vases",
        "url": "https://www.amazon.com/dp/B0HJ2255K9?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Wood Knot",
        "url": "https://www.amazon.com/dp/B0HR5CJSN8?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Marble Bookends",
        "url": "https://www.amazon.com/dp/B0CQY19M7R?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "for-him-elevated",
    "title": "For Him, Elevated",
    "image": "/boards/for-him-elevated.png",
    "items": [
      {
        "name": "Crystal Whiskey Decanter",
        "url": "https://www.amazon.com/dp/B093L6BHMR?tag=feelingpret0e-20"
      },
      {
        "name": "Wood Watch Box",
        "url": "https://www.amazon.com/dp/B0FP2C54BM?tag=feelingpret0e-20"
      },
      {
        "name": "Leather Valet Tray",
        "url": "https://www.amazon.com/dp/B0B4PTQTTY?tag=feelingpret0e-20"
      },
      {
        "name": "Faux Fur Lined Moccasins",
        "url": "https://www.amazon.com/dp/B0H8F5X7LR?tag=feelingpret0e-20"
      },
      {
        "name": "Leather Wrapped Flask",
        "url": "https://www.amazon.com/dp/B07KP6QTLZ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "ski-lodge-weekend",
    "title": "Ski Lodge Weekend",
    "image": "/boards/ski-lodge-weekend.png",
    "items": [
      {
        "name": "Rustic Wood Lantern",
        "url": "https://www.amazon.com/dp/B0CFPYX5VP?tag=feelingpret0e-20"
      },
      {
        "name": "Cast Iron Fondue Set",
        "url": "https://www.amazon.com/dp/B0DGGPYFHN?tag=feelingpret0e-20"
      },
      {
        "name": "Black Knit Mittens",
        "url": "https://www.amazon.com/dp/B07554KV6N?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Stoneware Mugs",
        "url": "https://www.amazon.com/dp/B0GD586HR1?tag=feelingpret0e-20"
      },
      {
        "name": "Sheepskin Scuff Slippers",
        "url": "https://www.amazon.com/dp/B0CCD4F81X?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "winter-spa-bath-night",
    "title": "Winter Spa Bath Night",
    "image": "/boards/winter-spa-bath-night.png",
    "items": [
      {
        "name": "Turkish Cotton Towel Set",
        "url": "https://www.amazon.com/dp/B0CVFFRVMQ?tag=feelingpret0e-20"
      },
      {
        "name": "Boar Bristle Body Brush",
        "url": "https://www.amazon.com/dp/B0016ISD04?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Dispenser Set",
        "url": "https://www.amazon.com/dp/B0D7HFS3BM?tag=feelingpret0e-20"
      },
      {
        "name": "Glass Bath Salt Jar",
        "url": "https://www.amazon.com/dp/B0F6TXWNZX?tag=feelingpret0e-20"
      },
      {
        "name": "Black Marble Soap Dish",
        "url": "https://www.amazon.com/dp/B0FKBG1MJ8?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "hostess-gifts-under-30",
    "title": "Hostess Gifts Under $30",
    "image": "/boards/hostess-gifts-under-30.png",
    "items": [
      {
        "name": "Glass Votives on Wood Tray",
        "url": "https://www.amazon.com/dp/B0DPWPMWTZ?tag=feelingpret0e-20"
      },
      {
        "name": "Flax Linen Napkins",
        "url": "https://www.amazon.com/dp/B0797PK1RN?tag=feelingpret0e-20"
      },
      {
        "name": "Marble Salt Cellar",
        "url": "https://www.amazon.com/dp/B0GYPDVQK5?tag=feelingpret0e-20"
      },
      {
        "name": "Striped Linen Tea Towels",
        "url": "https://www.amazon.com/dp/B0C43GSPBB?tag=feelingpret0e-20"
      },
      {
        "name": "Olive Wood Spoon",
        "url": "https://www.amazon.com/dp/B01MT6H72O?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "teen-boy-gift-guide",
    "title": "Teen Boy Gift Guide",
    "image": "/boards/teen-boy-gift-guide.png",
    "items": [
      {
        "name": "Waxed Canvas Backpack",
        "url": "https://www.amazon.com/dp/B07QJB9H6N?tag=feelingpret0e-20"
      },
      {
        "name": "Black Metal Desk Lamp",
        "url": "https://www.amazon.com/dp/B0CXD95ZDD?tag=feelingpret0e-20"
      },
      {
        "name": "Black Hex Dumbbells",
        "url": "https://www.amazon.com/dp/B0D8RHHLCT?tag=feelingpret0e-20"
      },
      {
        "name": "Wood MagSafe Charging Stand",
        "url": "https://www.amazon.com/dp/B0CFR7R3DV?tag=feelingpret0e-20"
      },
      {
        "name": "Wood Digital Alarm Clock",
        "url": "https://www.amazon.com/dp/B09SHM519D?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-new-years-eve",
    "title": "Moody New Year's Eve",
    "image": "/boards/moody-new-years-eve.png",
    "items": [
      {
        "name": "Crystal Champagne Flutes",
        "url": "https://www.amazon.com/dp/B00M3P486M?tag=feelingpret0e-20"
      },
      {
        "name": "Brass Taper Candle Holders",
        "url": "https://www.amazon.com/dp/B0HJGXGC9C?tag=feelingpret0e-20"
      },
      {
        "name": "Gold Double Wall Ice Bucket",
        "url": "https://www.amazon.com/dp/B0CQST2G1P?tag=feelingpret0e-20"
      },
      {
        "name": "Black Leather Serving Tray",
        "url": "https://www.amazon.com/dp/B0DDTBZX95?tag=feelingpret0e-20"
      },
      {
        "name": "Matte Gold Flatware",
        "url": "https://www.amazon.com/dp/B0C4JXPV1T?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-home-bar-edit",
    "title": "The Home Bar Edit",
    "image": "/boards/the-home-bar-edit.png",
    "items": [
      {
        "name": "Black Bartender Kit & Stand",
        "url": "https://www.amazon.com/dp/B08LSPP4WX?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Finish Ice Bucket",
        "url": "https://www.amazon.com/dp/B0CWLVLBMB?tag=feelingpret0e-20"
      },
      {
        "name": "Crystal Mixing Glass",
        "url": "https://www.amazon.com/dp/B09PMM9C2B?tag=feelingpret0e-20"
      },
      {
        "name": "Crystal Coupe Glasses",
        "url": "https://www.amazon.com/dp/B01N9BCDNN?tag=feelingpret0e-20"
      },
      {
        "name": "Smoke Rocks Glasses",
        "url": "https://www.amazon.com/dp/B076L3ZRLX?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "galentines-preview",
    "title": "Galentine's Preview",
    "image": "/boards/galentines-preview.png",
    "items": [
      {
        "name": "Brown Artificial Roses",
        "url": "https://www.amazon.com/dp/B0H1LTMXC8?tag=feelingpret0e-20"
      },
      {
        "name": "Glass Cake Stand",
        "url": "https://www.amazon.com/dp/B00W7ODJGO?tag=feelingpret0e-20"
      },
      {
        "name": "Etched Stemless Wine Glasses",
        "url": "https://www.amazon.com/dp/B0B3RVN553?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Round Vanity Tray",
        "url": "https://www.amazon.com/dp/B0FYDQFW87?tag=feelingpret0e-20"
      },
      {
        "name": "Heart Ramekins",
        "url": "https://www.amazon.com/dp/B0922KTKK5?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-gifts-under-25",
    "title": "Moody Gifts Under $25",
    "image": "/boards/moody-gifts-under-25.png",
    "items": [
      {
        "name": "Black Leather Flask Gift Set",
        "url": "https://www.amazon.com/dp/B09CQ5JKCH?tag=feelingpret0e-20"
      },
      {
        "name": "Matte Black Mugs (Set of 4)",
        "url": "https://www.amazon.com/dp/B08TW8GQ45?tag=feelingpret0e-20"
      },
      {
        "name": "Black Silk Sleep Mask",
        "url": "https://www.amazon.com/dp/B07CNT74Z6?tag=feelingpret0e-20"
      },
      {
        "name": "Black Marble Coasters",
        "url": "https://www.amazon.com/dp/B0CS378XBM?tag=feelingpret0e-20"
      },
      {
        "name": "Ceramic Match Holders",
        "url": "https://www.amazon.com/dp/B0C65DBXJ5?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "winter-bedding-refresh",
    "title": "Winter Bedding Refresh",
    "image": "/boards/winter-bedding-refresh.png",
    "items": [
      {
        "name": "Brown Flannel Sheet Set",
        "url": "https://www.amazon.com/dp/B0G3Q7VR5G?tag=feelingpret0e-20"
      },
      {
        "name": "Waffle Weave Cotton Blanket",
        "url": "https://www.amazon.com/dp/B0GC4YX4FS?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Faux Fur Throw",
        "url": "https://www.amazon.com/dp/B0CH3WRDGB?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Velvet Pillow Covers",
        "url": "https://www.amazon.com/dp/B0FH4S8GTC?tag=feelingpret0e-20"
      },
      {
        "name": "Linen Pillow Shams",
        "url": "https://www.amazon.com/dp/B09176C9SM?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "cozy-november",
    "title": "Come In, Stay Awhile",
    "image": "/boards/cozy-november.png",
    "items": [
      {
        "name": "Chocolate Velvet Pillow Covers",
        "url": "https://www.amazon.com/dp/B07Y7X26H2?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Wood Stool",
        "url": "https://www.amazon.com/dp/B0DGL7N8ZJ?tag=feelingpret0e-20"
      },
      {
        "name": "Aged Brass Bowl",
        "url": "https://www.amazon.com/dp/B08DNWPFG7?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Cordless Lamp",
        "url": "https://www.amazon.com/dp/B0HFP7CYBF?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Cotton Cable Knit Throw",
        "url": "https://www.amazon.com/dp/B07QTX3GPS?tag=feelingpret0e-20"
      },
      {
        "name": "Black Linen Coffee Table Book",
        "url": "https://www.amazon.com/dp/B0CDYYJFT8?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "dark-thoughtful",
    "title": "Dark & Thoughtful",
    "image": "/boards/dark-thoughtful.png",
    "items": [
      {
        "name": "Full-Grain Leather Jewelry Roll",
        "url": "https://www.amazon.com/dp/B0CHMJTP4P?tag=feelingpret0e-20"
      },
      {
        "name": "Mulberry Silk Sleep Mask",
        "url": "https://www.amazon.com/dp/B0D41C9KZP?tag=feelingpret0e-20"
      },
      {
        "name": "Solid Brass Footed Dish",
        "url": "https://www.amazon.com/dp/B0H8YQW9DC?tag=feelingpret0e-20"
      },
      {
        "name": "Ombré Leather Eau de Parfum",
        "url": "https://www.amazon.com/dp/B07DZKJMRN?tag=feelingpret0e-20"
      },
      {
        "name": "Santal & Vetiver Hand Cream",
        "url": "https://www.amazon.com/dp/B0BZK477LB?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Velvet Ribbon",
        "url": "https://www.amazon.com/dp/B0H8S9742K?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-gratitude-edit",
    "title": "The Moody Gratitude Edit",
    "image": "/boards/the-gratitude-edit.png",
    "items": [
      {
        "name": "Brown Swirl Ceramic Mug",
        "url": "https://www.amazon.com/dp/B0H774VKS8?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Sandalwood Candle",
        "url": "https://www.amazon.com/dp/B0H9XP4J48?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Wood Serving Tray",
        "url": "https://www.amazon.com/dp/B0CFV1ZLNR?tag=feelingpret0e-20"
      },
      {
        "name": "Leather Key Lock Journal",
        "url": "https://www.amazon.com/dp/B093DBV25C?tag=feelingpret0e-20"
      },
      {
        "name": "Antique Brass Candleholders",
        "url": "https://www.amazon.com/dp/B0HHCXCGFJ?tag=feelingpret0e-20"
      },
      {
        "name": "Baby Alpaca Throw",
        "url": "https://www.amazon.com/dp/B0BRNVQTJS?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "a-very-moody-welcome",
    "title": "A Very Moody Welcome",
    "image": "/boards/a-very-moody-welcome.png",
    "items": [
      {
        "name": "Brown Velvet Bows (Set of 2)",
        "url": "https://www.amazon.com/dp/B0H3PJZKH3?tag=feelingpret0e-20"
      },
      {
        "name": "Preserved Boxwood Wreath",
        "url": "https://www.amazon.com/dp/B07S22RRG3?tag=feelingpret0e-20"
      },
      {
        "name": "Fresh Balsam Fir Boughs",
        "url": "https://www.amazon.com/dp/B01LWR2ZM2?tag=feelingpret0e-20"
      },
      {
        "name": "Black Metal Lanterns",
        "url": "https://www.amazon.com/dp/B0CS2874LC?tag=feelingpret0e-20"
      },
      {
        "name": "Wax Pillar Candle",
        "url": "https://www.amazon.com/dp/B09ZN5D889?tag=feelingpret0e-20"
      },
      {
        "name": "Black & White Striped Mat",
        "url": "https://www.amazon.com/dp/B08J87PRR3?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "cool-girl-christmas",
    "title": "The Cool Girl Christmas",
    "image": "/boards/cool-girl-christmas.png",
    "items": [
      {
        "name": "Michael Kors Shoulder Bag",
        "url": "https://www.amazon.com/dp/B0H442RBD8?tag=feelingpret0e-20"
      },
      {
        "name": "Espresso Oversized Hoodie",
        "url": "https://www.amazon.com/dp/B0DRVKK1TB?tag=feelingpret0e-20"
      },
      {
        "name": "Sol de Janeiro Mist Gift Set",
        "url": "https://www.amazon.com/dp/B0GF3ZZYBH?tag=feelingpret0e-20"
      },
      {
        "name": "UGG Tazz Platform Slippers",
        "url": "https://www.amazon.com/dp/B0DPJGSWPJ?tag=feelingpret0e-20"
      },
      {
        "name": "Gold Initial Necklace",
        "url": "https://www.amazon.com/dp/B009YH6BNU?tag=feelingpret0e-20"
      },
      {
        "name": "Laneige Lip Mask Set",
        "url": "https://www.amazon.com/dp/B0B9HPYZJH?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "grandmas-little-luxuries",
    "title": "Grandma's Little Luxuries",
    "image": "/boards/grandmas-little-luxuries.png",
    "items": [
      {
        "name": "100% Cashmere Wrap",
        "url": "https://www.amazon.com/dp/B0C42T9NDQ?tag=feelingpret0e-20"
      },
      {
        "name": "Family Birthstone Necklace",
        "url": "https://www.amazon.com/dp/B0CHPK193D?tag=feelingpret0e-20"
      },
      {
        "name": "Minnetonka Faux Fur Slippers",
        "url": "https://www.amazon.com/dp/B074G5DNW7?tag=feelingpret0e-20"
      },
      {
        "name": "Porcelain Tea Set",
        "url": "https://www.amazon.com/dp/B075WPYDJN?tag=feelingpret0e-20"
      },
      {
        "name": "Leather Recipe Journal",
        "url": "https://www.amazon.com/dp/B0D9KK2X1M?tag=feelingpret0e-20"
      },
      {
        "name": "Wood Digital Photo Frame",
        "url": "https://www.amazon.com/dp/B0HC5SWXN4?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "grandpas-favorite-things",
    "title": "Grandpa's Favorite Things",
    "image": "/boards/grandpas-favorite-things.png",
    "items": [
      {
        "name": "Leather Valet Tray",
        "url": "https://www.amazon.com/dp/B08GQ9J6P2?tag=feelingpret0e-20"
      },
      {
        "name": "YETI 20 oz Tumbler",
        "url": "https://www.amazon.com/dp/B0DHHJ3R9H?tag=feelingpret0e-20"
      },
      {
        "name": "Minnetonka Plaid-Lined Slippers",
        "url": "https://www.amazon.com/dp/B0DCPR43RN?tag=feelingpret0e-20"
      },
      {
        "name": "Cable-Knit Quarter-Zip",
        "url": "https://www.amazon.com/dp/B0H3L4S19S?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Walnut Watch Box",
        "url": "https://www.amazon.com/dp/B0B4J2BZ1P?tag=feelingpret0e-20"
      },
      {
        "name": "Custom Family Photo Calendar",
        "url": "https://www.amazon.com/dp/B0DNG5C3GB?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "better-together",
    "title": "Better Together",
    "image": "/boards/better-together.png",
    "items": [
      {
        "name": "Cotton Waffle Robe",
        "url": "https://www.amazon.com/dp/B0F6D593B6?tag=feelingpret0e-20"
      },
      {
        "name": "Couples Scratch-Off Book",
        "url": "https://www.amazon.com/dp/B087Q6NV9V?tag=feelingpret0e-20"
      },
      {
        "name": "Voluspa Baltic Amber Candle",
        "url": "https://www.amazon.com/dp/B005Z5Q3Z6?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Keepsake Box",
        "url": "https://www.amazon.com/dp/B09NNMZTJM?tag=feelingpret0e-20"
      },
      {
        "name": "Monogram Leather Passport Set",
        "url": "https://www.amazon.com/dp/B0DWV2XQGR?tag=feelingpret0e-20"
      },
      {
        "name": "Oversized Brown Knit Throw",
        "url": "https://www.amazon.com/dp/B0DP1ZS4MG?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "christmas-in-the-shadows",
    "title": "Christmas in the Shadows",
    "image": "/boards/christmas-in-the-shadows.png",
    "items": [
      {
        "name": "Fresh Cedar Garland",
        "url": "https://www.amazon.com/dp/B0CNNQNLQ6?tag=feelingpret0e-20"
      },
      {
        "name": "Antique Bronze Glass Ornaments",
        "url": "https://www.amazon.com/dp/B0H293KC54?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Velvet Stockings",
        "url": "https://www.amazon.com/dp/B0H8CN47ZW?tag=feelingpret0e-20"
      },
      {
        "name": "Black Iron Stocking Holders",
        "url": "https://www.amazon.com/dp/B074PYPJMT?tag=feelingpret0e-20"
      },
      {
        "name": "Clear Glass Globe String Lights",
        "url": "https://www.amazon.com/dp/B0H37J2GH8?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy Velvet Ribbon",
        "url": "https://www.amazon.com/dp/B0F1CYH265?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-thanksgiving-table",
    "title": "The Moody Thanksgiving Table",
    "image": "/boards/the-moody-thanksgiving-table.png",
    "items": [
      {
        "name": "Vintage Brass Candlesticks",
        "url": "https://www.amazon.com/dp/B0HG94R4TT?tag=feelingpret0e-20"
      },
      {
        "name": "Black Linen Napkins",
        "url": "https://www.amazon.com/dp/B08FCMQ5B6?tag=feelingpret0e-20"
      },
      {
        "name": "Acacia Wood Chargers",
        "url": "https://www.amazon.com/dp/B08Z2YHQZL?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Goblets",
        "url": "https://www.amazon.com/dp/B082493PKP?tag=feelingpret0e-20"
      },
      {
        "name": "Matte Gold Flatware",
        "url": "https://www.amazon.com/dp/B0FYRRCSG2?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-pie-and-dessert-bar",
    "title": "The Pie & Dessert Bar",
    "image": "/boards/the-pie-and-dessert-bar.png",
    "items": [
      {
        "name": "Marble Cake Stand",
        "url": "https://www.amazon.com/dp/B0GWRK8WWW?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Stoneware Dessert Plates",
        "url": "https://www.amazon.com/dp/B0HGQTQVST?tag=feelingpret0e-20"
      },
      {
        "name": "Chemex Coffee Carafe",
        "url": "https://www.amazon.com/dp/B000I1WP7W?tag=feelingpret0e-20"
      },
      {
        "name": "Glass Cloche with Wood Base",
        "url": "https://www.amazon.com/dp/B01FL7Q5GY?tag=feelingpret0e-20"
      },
      {
        "name": "Ruffled Ceramic Pie Dish",
        "url": "https://www.amazon.com/dp/B0D7H1TBFJ?tag=feelingpret0e-20"
      },
      {
        "name": "Marble Pie Server",
        "url": "https://www.amazon.com/dp/B0D227WP5W?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "hostess-serveware",
    "title": "Hostess Serveware",
    "image": "/boards/hostess-serveware.png",
    "items": [
      {
        "name": "Acacia Serving Board",
        "url": "https://www.amazon.com/dp/B09STY7DR7?tag=feelingpret0e-20"
      },
      {
        "name": "Damascus Carving Set",
        "url": "https://www.amazon.com/dp/B0HGNTGSCC?tag=feelingpret0e-20"
      },
      {
        "name": "Stoneware Oval Platters",
        "url": "https://www.amazon.com/dp/B0FJLX42R5?tag=feelingpret0e-20"
      },
      {
        "name": "Stoneware Gravy Boat",
        "url": "https://www.amazon.com/dp/B0HKRLQWNK?tag=feelingpret0e-20"
      },
      {
        "name": "Marble-Glaze Butter Dish",
        "url": "https://www.amazon.com/dp/B09H5NH34J?tag=feelingpret0e-20"
      },
      {
        "name": "Olive Wood Salt Keeper",
        "url": "https://www.amazon.com/dp/B01LR8WLVY?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "after-dinner-cozy",
    "title": "After-Dinner Cozy",
    "image": "/boards/after-dinner-cozy.png",
    "items": [
      {
        "name": "Camel Knit Throw",
        "url": "https://www.amazon.com/dp/B0B5CT8N2P?tag=feelingpret0e-20"
      },
      {
        "name": "Brass Banker Lamp",
        "url": "https://www.amazon.com/dp/B0DGW9SWW6?tag=feelingpret0e-20"
      },
      {
        "name": "UGG Tasman Slippers",
        "url": "https://www.amazon.com/dp/B0G7KH5M6K?tag=feelingpret0e-20"
      },
      {
        "name": "Oversized Stoneware Mug",
        "url": "https://www.amazon.com/dp/B0CKRWVRJF?tag=feelingpret0e-20"
      },
      {
        "name": "Santal Vanille Candle",
        "url": "https://www.amazon.com/dp/B08KGBS1D3?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "black-friday-preview",
    "title": "Black Friday Preview",
    "image": "/boards/black-friday-preview.png",
    "items": [
      {
        "name": "Crystal Whiskey Set",
        "url": "https://www.amazon.com/dp/B0F9WQGZPK?tag=feelingpret0e-20"
      },
      {
        "name": "Cotton Cable-Knit Throw",
        "url": "https://www.amazon.com/dp/B078SL2FTQ?tag=feelingpret0e-20"
      },
      {
        "name": "Brass Spyglass Table Lamp",
        "url": "https://www.amazon.com/dp/B07MHLZ27W?tag=feelingpret0e-20"
      },
      {
        "name": "Glass Votives on Wood Tray",
        "url": "https://www.amazon.com/dp/B00YXB1L7S?tag=feelingpret0e-20"
      },
      {
        "name": "Travertine Pillar Holder",
        "url": "https://www.amazon.com/dp/B0G63K4QNX?tag=feelingpret0e-20"
      },
      {
        "name": "Marble Bookends",
        "url": "https://www.amazon.com/dp/B08V1WKHJZ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "friendsgiving-edit",
    "title": "Friendsgiving Edit",
    "image": "/boards/friendsgiving-edit.png",
    "items": [
      {
        "name": "Rust Velvet Pumpkins",
        "url": "https://www.amazon.com/dp/B0BGLLCZM3?tag=feelingpret0e-20"
      },
      {
        "name": "Travertine Cheese Board",
        "url": "https://www.amazon.com/dp/B0BD6XPW4R?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked Glass Wine Glasses",
        "url": "https://www.amazon.com/dp/B0CY4QN9DT?tag=feelingpret0e-20"
      },
      {
        "name": "Gold Cheese Knives",
        "url": "https://www.amazon.com/dp/B0GVY187H5?tag=feelingpret0e-20"
      },
      {
        "name": "Brass Place Card Holders",
        "url": "https://www.amazon.com/dp/B0FNLLZYX8?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "after-dark-entertaining",
    "title": "After Dark Entertaining",
    "image": "/boards/after-dark-entertaining.png",
    "items": [
      {
        "name": "Smoked Crystal Wine Glasses",
        "url": "https://www.amazon.com/dp/B0HDX73LCD?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Linen Napkins",
        "url": "https://www.amazon.com/dp/B0H83N9FZX?tag=feelingpret0e-20"
      },
      {
        "name": "Antique Brass Taper Holders",
        "url": "https://www.amazon.com/dp/B0GVHD58Q4?tag=feelingpret0e-20"
      },
      {
        "name": "Matte Black Oval Platters",
        "url": "https://www.amazon.com/dp/B0BRJNXNVC?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut End-Grain Board",
        "url": "https://www.amazon.com/dp/B0GWB37WQW?tag=feelingpret0e-20"
      },
      {
        "name": "Black Marble Serving Bowl",
        "url": "https://www.amazon.com/dp/B0DTQ4DHZS?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-sunday-reset",
    "title": "The Sunday Reset",
    "image": "/boards/the-sunday-reset.png",
    "items": [
      {
        "name": "Amber Glass Spray Bottles",
        "url": "https://www.amazon.com/dp/B01G98Y1BA?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Cocoa Waffle Bath Towel",
        "url": "https://www.amazon.com/dp/B0D47M4CXJ?tag=feelingpret0e-20"
      },
      {
        "name": "Black Ribbed Soap Dispenser",
        "url": "https://www.amazon.com/dp/B0D9Y7GBMD?tag=feelingpret0e-20"
      },
      {
        "name": "Tobacco Sandalwood Room Spray",
        "url": "https://www.amazon.com/dp/B0DYZD9SZ2?tag=feelingpret0e-20"
      },
      {
        "name": "UGG Scuffette II Slippers",
        "url": "https://www.amazon.com/dp/B083RTQC6N?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Rechargeable Lamp",
        "url": "https://www.amazon.com/dp/B0G4C67Y4S?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-gift-closet",
    "title": "The Gift Closet",
    "image": "/boards/the-gift-closet.png",
    "items": [
      {
        "name": "Godiva Gold Chocolate Box",
        "url": "https://www.amazon.com/dp/B0FDLT4Y1P?tag=feelingpret0e-20"
      },
      {
        "name": "Leather Envelope Card Holder",
        "url": "https://www.amazon.com/dp/B07NYGSS98?tag=feelingpret0e-20"
      },
      {
        "name": "Black Safety Matches Jar",
        "url": "https://www.amazon.com/dp/B0B4BHQBW2?tag=feelingpret0e-20"
      },
      {
        "name": "P.F. Candle Co. Amber Jar Candle",
        "url": "https://www.amazon.com/dp/B01GVTEGDU?tag=feelingpret0e-20"
      },
      {
        "name": "Slip Silk Skinny Scrunchies",
        "url": "https://www.amazon.com/dp/B0BSLYBJKH?tag=feelingpret0e-20"
      },
      {
        "name": "Black-Border Notecard Set",
        "url": "https://www.amazon.com/dp/B0F35MHM9C?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-just-to-be-moody",
    "title": "Moody Just to Be Moody",
    "image": "/boards/moody-just-to-be-moody.png",
    "items": [
      {
        "name": "Charcoal Aran Cable Cardigan",
        "url": "https://www.amazon.com/dp/B07BBP5ZWY?tag=feelingpret0e-20"
      },
      {
        "name": "Black & Brass Table Lamp",
        "url": "https://www.amazon.com/dp/B0FRBJ3JF6?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Brown Faux Fur Throw",
        "url": "https://www.amazon.com/dp/B0FK9XCGM3?tag=feelingpret0e-20"
      },
      {
        "name": "Deep Red Leather Journal",
        "url": "https://www.amazon.com/dp/B0F4XFTJ8W?tag=feelingpret0e-20"
      },
      {
        "name": "Matte Black Stoneware Mug",
        "url": "https://www.amazon.com/dp/B0GQ7VLSSX?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked Glass Sandalwood Candle",
        "url": "https://www.amazon.com/dp/B0DL9W7Z3C?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "desk-after-dark",
    "title": "Desk After Dark",
    "image": "/boards/desk-after-dark.png",
    "items": [
      {
        "name": "Espresso Leather Desk Pad",
        "url": "https://www.amazon.com/dp/B001F4KKOG?tag=feelingpret0e-20"
      },
      {
        "name": "Black & Brass Task Lamp",
        "url": "https://www.amazon.com/dp/B07MNC2C5Z?tag=feelingpret0e-20"
      },
      {
        "name": "Black Walnut Letter Tray",
        "url": "https://www.amazon.com/dp/B0C583TMBT?tag=feelingpret0e-20"
      },
      {
        "name": "Gold Metal File Sorter",
        "url": "https://www.amazon.com/dp/B0DL9ML3CX?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Walnut Monitor Riser",
        "url": "https://www.amazon.com/dp/B0BHMW8HFB?tag=feelingpret0e-20"
      },
      {
        "name": "Black & Gold Ceramic Pen Cup",
        "url": "https://www.amazon.com/dp/B0BL35P7QB?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "bedroom-after-dark",
    "title": "Bedroom After Dark",
    "image": "/boards/bedroom-after-dark.png",
    "items": [
      {
        "name": "Chocolate Duvet Cover Set",
        "url": "https://www.amazon.com/dp/B0C5C8PVF4?tag=feelingpret0e-20"
      },
      {
        "name": "Cream & Black Boucle Pillow Covers",
        "url": "https://www.amazon.com/dp/B0F3WTV7G4?tag=feelingpret0e-20"
      },
      {
        "name": "Carved Wood Side Table",
        "url": "https://www.amazon.com/dp/B0FZKVNJ58?tag=feelingpret0e-20"
      },
      {
        "name": "Charcoal Linen Blackout Curtains",
        "url": "https://www.amazon.com/dp/B0C9CLH3S7?tag=feelingpret0e-20"
      },
      {
        "name": "Espresso 100% Wool Blanket",
        "url": "https://www.amazon.com/dp/B0FD79G6GM?tag=feelingpret0e-20"
      },
      {
        "name": "Antique Brass Dome Table Lamp",
        "url": "https://www.amazon.com/dp/B0DT4NDY1Z?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-organized-home",
    "title": "The Moody Organized Home",
    "image": "/boards/the-moody-organized-home.png",
    "items": [
      {
        "name": "Black Walnut Drawer Organizer",
        "url": "https://www.amazon.com/dp/B07S6LLDBG?tag=feelingpret0e-20"
      },
      {
        "name": "Glass Jars with Bamboo Lids",
        "url": "https://www.amazon.com/dp/B0GSFDSYHY?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Wide-Shoulder Hangers",
        "url": "https://www.amazon.com/dp/B09GFT3Z22?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Lazy Susan",
        "url": "https://www.amazon.com/dp/B0H6SFY6NP?tag=feelingpret0e-20"
      },
      {
        "name": "Water Hyacinth Storage Basket",
        "url": "https://www.amazon.com/dp/B097Y8D7H9?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Ribbed Glass Soap Dispensers",
        "url": "https://www.amazon.com/dp/B0HCPWD2T7?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "wake-up-moody-and-refreshed",
    "title": "Wake Up Moody and Refreshed",
    "image": "/boards/wake-up-moody-and-refreshed.png",
    "items": [
      {
        "name": "Espresso Waffle Robe",
        "url": "https://www.amazon.com/dp/B0D4QH9TCB?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Wood Tray",
        "url": "https://www.amazon.com/dp/B0GGBD6C7P?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked Glass Coffee Mug",
        "url": "https://www.amazon.com/dp/B0FQXP793X?tag=feelingpret0e-20"
      },
      {
        "name": "Stainless Steel Cooling Globes",
        "url": "https://www.amazon.com/dp/B0D2B6F3NH?tag=feelingpret0e-20"
      },
      {
        "name": "Charcoal Luxury Bath Sheets",
        "url": "https://www.amazon.com/dp/B0CXZBN6SB?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Dropper Bottles",
        "url": "https://www.amazon.com/dp/B0BGH3VNXB?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "thank-you-for-hosting-gifts",
    "title": "Thank You for Hosting Gifts",
    "image": "/boards/thank-you-for-hosting-gifts.png",
    "items": [
      {
        "name": "Amber Glass Votive Holders",
        "url": "https://www.amazon.com/dp/B0CBPFM7T9?tag=feelingpret0e-20"
      },
      {
        "name": "Black Marble Coasters",
        "url": "https://www.amazon.com/dp/B0G2XWLM88?tag=feelingpret0e-20"
      },
      {
        "name": "Gold Cheese Knives in Black Box",
        "url": "https://www.amazon.com/dp/B0DRNZSBSY?tag=feelingpret0e-20"
      },
      {
        "name": "Smoke Gray Glass Bud Vase",
        "url": "https://www.amazon.com/dp/B0D93FJLDH?tag=feelingpret0e-20"
      },
      {
        "name": "Black Ceramic Oil Dispenser",
        "url": "https://www.amazon.com/dp/B09TR499GH?tag=feelingpret0e-20"
      },
      {
        "name": "Wooden Recipe Box",
        "url": "https://www.amazon.com/dp/B0CX7Z73DJ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-dark-and-dreamy-library-edit",
    "title": "The Dark & Dreamy Library Edit",
    "image": "/boards/the-dark-and-dreamy-library-edit.png",
    "items": [
      {
        "name": "Brass Pharmacy Reading Lamp",
        "url": "https://www.amazon.com/dp/B094YXX3BZ?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate Waffle Knit Throw",
        "url": "https://www.amazon.com/dp/B0GSQNYT4S?tag=feelingpret0e-20"
      },
      {
        "name": "Black Metal Bookends",
        "url": "https://www.amazon.com/dp/B07MXBSSFT?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Floral Velvet Pillow Cover",
        "url": "https://www.amazon.com/dp/B0GVJDHB2G?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Book Stand",
        "url": "https://www.amazon.com/dp/B08CZPT1H8?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Hurricanes",
        "url": "https://www.amazon.com/dp/B0HD7MLC58?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "elevated-tea-matcha",
    "title": "Elevated Tea + Matcha",
    "image": "/boards/elevated-tea-matcha.png",
    "items": [
      {
        "name": "SANGO Anderson cream stoneware coffee mugs set of 4, 16.5 oz, ribbed",
        "url": "https://www.amazon.com/dp/B0GSH4PT2S?tag=feelingpret0e-20"
      },
      {
        "name": "Apace luxury wooden tea bag organizer box with glass lid (8 compartments)",
        "url": "https://www.amazon.com/dp/B07HGDHJ2T?tag=feelingpret0e-20"
      },
      {
        "name": "Mino Ware Japanese handcrafted matcha bowl (chawan), beige / cream speckled",
        "url": "https://www.amazon.com/dp/B07FFML1ZG?tag=feelingpret0e-20"
      },
      {
        "name": "Fellow Stagg EKG Pro gooseneck electric kettle, matte black, 0.9 L",
        "url": "https://www.amazon.com/dp/B0BF7DXLBF?tag=feelingpret0e-20"
      },
      {
        "name": "JOVGANK grey vintage hobnail drinking glasses set of 6, 15 oz smoked tumblers",
        "url": "https://www.amazon.com/dp/B0FB8NVTLT?tag=feelingpret0e-20"
      },
      {
        "name": "Kate and Laurel Lipton decorative wooden tray with metal gold handles",
        "url": "https://www.amazon.com/dp/B0877DDJ6L?tag=feelingpret0e-20"
      },
      {
        "name": "Creative Co-Op farmhouse embossed stoneware honey pot with wood dipper, amber",
        "url": "https://www.amazon.com/dp/B0B94TDBQM?tag=feelingpret0e-20"
      },
      {
        "name": "Naoki Matcha Japanese bamboo whisk (chasen) + scoop set",
        "url": "https://www.amazon.com/dp/B07NTZNPPT?tag=feelingpret0e-20"
      },
      {
        "name": "JFFLYIT black marble-vein ceramic sugar bowls with wood lids & spoons (set of 2)",
        "url": "https://www.amazon.com/dp/B09FZ34H6J?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "quiet-luxury-bed",
    "title": "Quiet Luxury Bed Edit",
    "image": "/boards/quiet-luxury-bed.png",
    "items": [
      {
        "name": "BFS HOME stonewashed cotton-linen duvet cover set w/ 2 pillowcases (Queen; white shown)",
        "url": "https://www.amazon.com/dp/B07SX1MZK5?tag=feelingpret0e-20"
      },
      {
        "name": "Alashan Ripple Finish camel throw — 95% merino / 5% cashmere, fringed",
        "url": "https://www.amazon.com/dp/B07H9CB5KC?tag=feelingpret0e-20"
      },
      {
        "name": "MIULEE cream bouclé euro sham covers 26x26 (set of 2)",
        "url": "https://www.amazon.com/dp/B0F99S2FSX?tag=feelingpret0e-20"
      },
      {
        "name": "DEZENE chocolate brown velvet pillow covers 18x18 (pack of 2)",
        "url": "https://www.amazon.com/dp/B07SDF1Y41?tag=feelingpret0e-20"
      },
      {
        "name": "LCSMVLQ 15.7\" cream ceramic bedside lamp, pleated shade, brass base",
        "url": "https://www.amazon.com/dp/B0DF7P22WQ?tag=feelingpret0e-20"
      },
      {
        "name": "MIULEE dark brown bouclé lumbar pillow cover 14x36",
        "url": "https://www.amazon.com/dp/B0FP537J1Z?tag=feelingpret0e-20"
      },
      {
        "name": "Solid walnut valet / bedside tray, rounded edges",
        "url": "https://www.amazon.com/dp/B0HDSG1PFW?tag=feelingpret0e-20"
      },
      {
        "name": "Lartvivré cognac grained faux-leather tissue box cover, brass side snaps",
        "url": "https://www.amazon.com/dp/B0GZZQG6KB?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "sunday-football",
    "title": "Sunday Football, But Make It Moody",
    "image": "/boards/sunday-football.png",
    "items": [
      {
        "name": "BATTILO HOME chocolate-brown diamond-knit throw w/ fringe, 50x60",
        "url": "https://www.amazon.com/dp/B0BZ8BQSFJ?tag=feelingpret0e-20"
      },
      {
        "name": "THETCHRY walnut end-grain cutting / grazing board set (3 boards + stand)",
        "url": "https://www.amazon.com/dp/B0GJS4Z6BD?tag=feelingpret0e-20"
      },
      {
        "name": "Matte black chip & dip serving bowl (tiered)",
        "url": "https://www.amazon.com/dp/B0C7RHDX9B?tag=feelingpret0e-20"
      },
      {
        "name": "Aquiver matte black 10oz porcelain snack bowls (set)",
        "url": "https://www.amazon.com/dp/B08G51L997?tag=feelingpret0e-20"
      },
      {
        "name": "Woodard & Charles acacia-wood lidded ice bucket w/ liner, 3 qt (8\" x 8.5\")",
        "url": "https://www.amazon.com/dp/B001BGW1IQ?tag=feelingpret0e-20"
      },
      {
        "name": "famiware cappuccino-white fluted 4oz dip bowls (set of 6)",
        "url": "https://www.amazon.com/dp/B0CQQL5T7X?tag=feelingpret0e-20"
      },
      {
        "name": "KLIFA Eton smoke-grey acrylic tumblers & highballs (set of 8, 15.2 + 20.8oz)",
        "url": "https://www.amazon.com/dp/B09C1VGTVZ?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut square cocktail-napkin holder w/ black metal arm",
        "url": "https://www.amazon.com/dp/B0DK6Q8SVD?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "stay-in-movie-night",
    "title": "Stay-In Movie Night",
    "image": "/boards/stay-in-movie-night.png",
    "items": [
      {
        "name": "YnM chunky cotton knit throw blanket, cream white (medium weight)",
        "url": "https://www.amazon.com/dp/B0D3WSG1MR?tag=feelingpret0e-20"
      },
      {
        "name": "11\" thick tufted corduroy floor pillow / pouf with handle, brown (washable cover)",
        "url": "https://www.amazon.com/dp/B0HH3NWCQR?tag=feelingpret0e-20"
      },
      {
        "name": "Multibey solid North American walnut serving tray with clear lid (4 compartments)",
        "url": "https://www.amazon.com/dp/B0F5VVZZT7?tag=feelingpret0e-20"
      },
      {
        "name": "DEZENE chocolate brown velvet lumbar pillow covers 12x20 (pack of 2)",
        "url": "https://www.amazon.com/dp/B07SFT1X7S?tag=feelingpret0e-20"
      },
      {
        "name": "Kanwone large 55 oz matte black ceramic serving / popcorn bowls, 8\" (set of 2)",
        "url": "https://www.amazon.com/dp/B0BNHYZ24B?tag=feelingpret0e-20"
      },
      {
        "name": "Snug Leaves curly faux-fur scuff slippers, Nutty Mocha",
        "url": "https://www.amazon.com/dp/B0D1K7BWB3?tag=feelingpret0e-20"
      },
      {
        "name": "Viyffo 20 oz 3-wick soy candle in matte black ceramic pot, Eucalyptus & Rosemary",
        "url": "https://www.amazon.com/dp/B0H7FJH1PK?tag=feelingpret0e-20"
      },
      {
        "name": "Moretoes 10 oz smoked grey hobnail drinking glasses (set of 6)",
        "url": "https://www.amazon.com/dp/B0FY5Q63KW?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "sunday-morning",
    "title": "Sunday Morning",
    "image": "/boards/sunday-morning.png",
    "items": [
      {
        "name": "Fibogollo walnut wood folding breakfast bed tray",
        "url": "https://www.amazon.com/dp/B0G9NM5D48?tag=feelingpret0e-20"
      },
      {
        "name": "Women's kimono waffle robe, 100% Turkish cotton, light brown",
        "url": "https://www.amazon.com/dp/B0DX46HDNM?tag=feelingpret0e-20"
      },
      {
        "name": "CozeCube dark brown seed-stitch knit throw blanket 50\"x60\"",
        "url": "https://www.amazon.com/dp/B0DP1YP9DL?tag=feelingpret0e-20"
      },
      {
        "name": "Easyworkz ribbed porcelain French press 34 oz, ivory",
        "url": "https://www.amazon.com/dp/B0D9PWB3DQ?tag=feelingpret0e-20"
      },
      {
        "name": "PUERSI open book display stand, black wood",
        "url": "https://www.amazon.com/dp/B0DD7KL7BY?tag=feelingpret0e-20"
      },
      {
        "name": "Elanze Designs brown matte-glaze stoneware mugs 17 oz (pack of 2)",
        "url": "https://www.amazon.com/dp/B0CBL81DCS?tag=feelingpret0e-20"
      },
      {
        "name": "M&SENSE amber glass soy candle with wooden wick, Teakwood (9.9 oz)",
        "url": "https://www.amazon.com/dp/B0DLGF6117?tag=feelingpret0e-20"
      },
      {
        "name": "HomeTop curly fleece memory-foam loafer slippers, cream white",
        "url": "https://www.amazon.com/dp/B09HHFSRFW?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-vanity",
    "title": "Moody Vanity Edit",
    "image": "/boards/moody-vanity.png",
    "items": [
      {
        "name": "Vintage black ornate arched vanity mirror with stand (9.6\" W x 11.8\" H)",
        "url": "https://www.amazon.com/dp/B0DL5NSR37?tag=feelingpret0e-20"
      },
      {
        "name": "CHOSIN 5-layer walnut jewelry box/cabinet, ginkgo brass handle, magnetic doors (7.9x8.7x10\")",
        "url": "https://www.amazon.com/dp/B0D6G6825X?tag=feelingpret0e-20"
      },
      {
        "name": "Sureio walnut + black velvet necklace display busts (set of 2, small, 8.3\" H)",
        "url": "https://www.amazon.com/dp/B0GHNHJSX6?tag=feelingpret0e-20"
      },
      {
        "name": "Ivory bouclé decorative jewelry/keepsake boxes w/ wood handles (set of 2, 14.2\" + 12.4\")",
        "url": "https://www.amazon.com/dp/B0FNWZJFSC?tag=feelingpret0e-20"
      },
      {
        "name": "BESTOOL walnut wood boar-bristle hair brush (8.8\")",
        "url": "https://www.amazon.com/dp/B0DMSMW8ZF?tag=feelingpret0e-20"
      },
      {
        "name": "Koville natural travertine makeup brush holder (3.7x3.7x3.9\")",
        "url": "https://www.amazon.com/dp/B0H38BGX8K?tag=feelingpret0e-20"
      },
      {
        "name": "HiTotes cognac leather vanity / train case (8.5x4.9x5.5\")",
        "url": "https://www.amazon.com/dp/B0FMF41S55?tag=feelingpret0e-20"
      },
      {
        "name": "Lamoutor vintage smoked-glass perfume atomizer, black bulb (100 ml)",
        "url": "https://www.amazon.com/dp/B0BGS5LFSD?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "holiday-guest-prep",
    "title": "Holiday Guest Prep Edit",
    "image": "/boards/holiday-guest-prep.png",
    "items": [
      {
        "name": "Winsome Wood Sedona bed tray w/ folding legs, antique walnut finish (~21.6\" W)",
        "url": "https://www.amazon.com/dp/B0046EC1AI?tag=feelingpret0e-20"
      },
      {
        "name": "Mid-century walnut-arc + black metal table lamp, adjustable shade (~22\" H)",
        "url": "https://www.amazon.com/dp/B0H8YMG5RT?tag=feelingpret0e-20"
      },
      {
        "name": "Large handwoven water hyacinth basket w/ 2 handles (16.5x12x7.5\")",
        "url": "https://www.amazon.com/dp/B0DN6TTN1Y?tag=feelingpret0e-20"
      },
      {
        "name": "Sizikato amber ribbed glass bedside carafe w/ tumbler lid (30 oz)",
        "url": "https://www.amazon.com/dp/B09D3JZN88?tag=feelingpret0e-20"
      },
      {
        "name": "Texere organic cotton 700 GSM rice-weave towel set, cream w/ stone stripe (6 pc)",
        "url": "https://www.amazon.com/dp/B0G2T7MXDN?tag=feelingpret0e-20"
      },
      {
        "name": "Creative Co-Op recycled-cotton brown plaid throw w/ fringe (50x60)",
        "url": "https://www.amazon.com/dp/B0B55VVTFX?tag=feelingpret0e-20"
      },
      {
        "name": "Cream teddy-fleece closed-toe guest slippers (white, 8-9)",
        "url": "https://www.amazon.com/dp/B0H6GDCCQF?tag=feelingpret0e-20"
      },
      {
        "name": "Boll & Branch organic cotton waffle robe (unisex)",
        "url": "https://www.amazon.com/dp/B0H5T1X4TL?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "linen-closet-reset",
    "title": "The Linen Closet Reset",
    "image": "/boards/linen-closet-reset.png",
    "items": [
      {
        "name": "Casafield Woven Water Hyacinth Laundry Hamper with Lid & Removable Liner, Espresso",
        "url": "https://www.amazon.com/dp/B0CQKGQDVH?tag=feelingpret0e-20"
      },
      {
        "name": "Bagno Milano Turkish Cotton Jacquard Towel Set of 6, Cream",
        "url": "https://www.amazon.com/dp/B0HBLKLKYK?tag=feelingpret0e-20"
      },
      {
        "name": "Ornavo Home Collapsible Lidded Storage Bins with Leather Handles, Beige, 3-Pack",
        "url": "https://www.amazon.com/dp/B0BDPS1Y9Z?tag=feelingpret0e-20"
      },
      {
        "name": "Household Essentials Handled Seagrass Basket, Natural & Black",
        "url": "https://www.amazon.com/dp/B0BL8H25LG?tag=feelingpret0e-20"
      },
      {
        "name": "Avalon Towels 600 GSM Cotton Bath Towel Set, 8 Piece, Chocolate Brown",
        "url": "https://www.amazon.com/dp/B08K3MQQ6C?tag=feelingpret0e-20"
      },
      {
        "name": "Organizix XLarge Round Cotton Rope Storage Basket with Leather Handles, 21x21x14, Cream",
        "url": "https://www.amazon.com/dp/B0BDMXBTGJ?tag=feelingpret0e-20"
      },
      {
        "name": "StorageWorks Black Wicker Storage Baskets, 2-Pack",
        "url": "https://www.amazon.com/dp/B0G4Q4YVB3?tag=feelingpret0e-20"
      },
      {
        "name": "Hygge & Sage Metal Clip-On Basket Labels, Set of 8",
        "url": "https://www.amazon.com/dp/B0B5KN5R4Y?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "collected-shelf",
    "title": "The Collected Shelf",
    "image": "/boards/collected-shelf.png",
    "items": [
      {
        "name": "Deco 79 Faux Leather Book-Shaped Storage Boxes, Set of 3",
        "url": "https://www.amazon.com/dp/B00CD6RSMW?tag=feelingpret0e-20"
      },
      {
        "name": "Signature Design by Ashley Modern Ceramic Abstract Sculpture, Off White",
        "url": "https://www.amazon.com/dp/B0CS521VR3?tag=feelingpret0e-20"
      },
      {
        "name": "Framed Cream Impasto Sculptural Abstract Canvas Art, Black Frame",
        "url": "https://www.amazon.com/dp/B0HC6HXW2X?tag=feelingpret0e-20"
      },
      {
        "name": "Ottimo Polished Black Marble 6\" Triangular Bookends",
        "url": "https://www.amazon.com/dp/B09DK5HP9J?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Linen-Textured Photo Storage Boxes with Leather Tab, 2-Piece",
        "url": "https://www.amazon.com/dp/B0FPB5P9VH?tag=feelingpret0e-20"
      },
      {
        "name": "Torre & Tagus 6\" Smoked Gray Glass Bud Vase",
        "url": "https://www.amazon.com/dp/B0D7GJ2X2N?tag=feelingpret0e-20"
      },
      {
        "name": "Natural Travertine Decorative Sphere, 4.72\"",
        "url": "https://www.amazon.com/dp/B0FMDFH6F4?tag=feelingpret0e-20"
      },
      {
        "name": "Acacia Wood Pedestal Pillar Candle Holder",
        "url": "https://www.amazon.com/dp/B0GTDBP1G5?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-front-porch",
    "title": "Moody Front Porch",
    "image": "/boards/moody-front-porch.png",
    "items": [
      {
        "name": "Bdor 16 Inch Outdoor Indoor Lantern, Set of 2 Black Metal Candle Lanterns",
        "url": "https://www.amazon.com/dp/B0BX2YS7VQ?tag=feelingpret0e-20"
      },
      {
        "name": "Windsor Tall Square Fiberglass Planter, Black, 13 Inch",
        "url": "https://www.amazon.com/dp/B08FHBHPDC?tag=feelingpret0e-20"
      },
      {
        "name": "Christopher Knight Home Sante Round Outdoor Side Table, Acacia Wood Small Outdoor Table, Side Desk for Backyard Balcony Garden, Weather Resi",
        "url": "https://www.amazon.com/dp/B0FGX7JCVC?tag=feelingpret0e-20"
      },
      {
        "name": "Pillow Perfect Outdoor Forsyth Chocolate Over-Sized Rectangular Throw Pillow, Set of 2",
        "url": "https://www.amazon.com/dp/B00J9BAQAA?tag=feelingpret0e-20"
      },
      {
        "name": "Goodpick Large Woven Rope Blanket Basket, Rectangle, Black, 75L",
        "url": "https://www.amazon.com/dp/B0CF1RCS6Z?tag=feelingpret0e-20"
      },
      {
        "name": "YnM Chunky Throw Blanket, Hand Knitted with Chenille Yarn, Skin Friendly, Ventilated and Breathable, Machine Washable, Home Décor Piece for",
        "url": "https://www.amazon.com/dp/B0BWJ5SS8D?tag=feelingpret0e-20"
      },
      {
        "name": "Torre & Tagus Mini Lustre Hand Blown Smoke Gray Glass Vase Set of 3",
        "url": "https://www.amazon.com/dp/B00E3RH12G?tag=feelingpret0e-20"
      },
      {
        "name": "Kempf 1\" Thick Natural Woven Coco Coir Doormat, 18\" x 30\", Heavy-Duty Coconut Fiber Scraper Mat for Front Door, Entryway & Porch",
        "url": "https://www.amazon.com/dp/B004EBHSI8?tag=feelingpret0e-20"
      },
      {
        "name": "Northlight Set of 3 Natural Wood Candle Lanterns with Black Metal Tops, 26.5\", Brown",
        "url": "https://www.amazon.com/dp/B0B1XBTHP4?tag=feelingpret0e-20"
      },
      {
        "name": "Windsor Tall Square Fiberglass Planter, Black, 13 Inch",
        "url": "https://www.amazon.com/dp/B08FHBHPDC?tag=feelingpret0e-20"
      },
      {
        "name": "Christopher Knight Home Sante Round Outdoor Side Table, Acacia Wood Small Outdoor Table, Side Desk for Backyard Balcony Garden, Weather Resi",
        "url": "https://www.amazon.com/dp/B0FGX7JCVC?tag=feelingpret0e-20"
      },
      {
        "name": "Pillow Perfect Outdoor Forsyth Chocolate Over-Sized Rectangular Throw Pillow, Set of 2",
        "url": "https://www.amazon.com/dp/B00J9BAQAA?tag=feelingpret0e-20"
      },
      {
        "name": "Goodpick Large Woven Rope Blanket Basket, Rectangle, Black, 75L",
        "url": "https://www.amazon.com/dp/B0CF1RCS6Z?tag=feelingpret0e-20"
      },
      {
        "name": "YnM Chunky Throw Blanket, Hand Knitted with Chenille Yarn, Skin Friendly, Ventilated and Breathable, Machine Washable, Home Décor Piece for",
        "url": "https://www.amazon.com/dp/B0BWJ5SS8D?tag=feelingpret0e-20"
      },
      {
        "name": "Torre & Tagus Mini Lustre Hand Blown Smoke Gray Glass Vase Set of 3",
        "url": "https://www.amazon.com/dp/B00E3RH12G?tag=feelingpret0e-20"
      },
      {
        "name": "Kempf 1\" Thick Natural Woven Coco Coir Doormat, 18\" x 30\", Heavy-Duty Coconut Fiber Scraper Mat for Front Door, Entryway & Porch",
        "url": "https://www.amazon.com/dp/B004EBHSI8?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-wedding-shower-gifts",
    "title": "Moody Wedding Shower Gifts",
    "image": "/boards/moody-wedding-shower-gifts.png",
    "items": [
      {
        "name": "Black Walnut Wood Ottoman Serving Tray",
        "url": "https://www.amazon.com/dp/B0FGQJ6VL9?tag=feelingpret0e-20"
      },
      {
        "name": "Coloch Black Marble and Acacia Wood Cutting/Charcuterie Board",
        "url": "https://www.amazon.com/dp/B0BHNNRM88?tag=feelingpret0e-20"
      },
      {
        "name": "muso wood Walnut Square Cutting Board with Hanging Handle",
        "url": "https://www.amazon.com/dp/B09BCHRLC4?tag=feelingpret0e-20"
      },
      {
        "name": "Linen Cream Stoneware Deep Serving Bowl 88 oz, 10.25\"",
        "url": "https://www.amazon.com/dp/B0FS3G32XY?tag=feelingpret0e-20"
      },
      {
        "name": "Solino Home 100% Pure Linen Black Dinner Napkins",
        "url": "https://www.amazon.com/dp/B07H4JLWH2?tag=feelingpret0e-20"
      },
      {
        "name": "Modern Smoky Grey Wine Glasses, 15 oz, Set of 6",
        "url": "https://www.amazon.com/dp/B0GTTN5DD8?tag=feelingpret0e-20"
      },
      {
        "name": "Glaver's Art Deco Ribbed Smoke Drinking Glasses (dimension graphics cropped off)",
        "url": "https://www.amazon.com/dp/B0F456SFM6?tag=feelingpret0e-20"
      },
      {
        "name": "4\" Round Natural Travertine Coasters with wood holder",
        "url": "https://www.amazon.com/dp/B0FY3PF8YB?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "teen-christmas-wish-list",
    "title": "Teen Christmas Wish List",
    "image": "/boards/teen-christmas-wish-list.png",
    "items": [
      {
        "name": "L'AGRATY Faux Rabbit Fur Bubble Throw Blanket, Cocoa Brown, 50x60",
        "url": "https://www.amazon.com/dp/B0DHRN56F5?tag=feelingpret0e-20"
      },
      {
        "name": "Frebeauty 3-Drawer Jewelry Box with Clear Lid, brown",
        "url": "https://www.amazon.com/dp/B0DQD7YCXR?tag=feelingpret0e-20"
      },
      {
        "name": "Uvvyui Cream Bouclé Knot Pillow Ball",
        "url": "https://www.amazon.com/dp/B0B34PTY3X?tag=feelingpret0e-20"
      },
      {
        "name": "Oval Vanity Mirror with Stand, Black Metal Frame, 5.9x8.9 (mirror glass restored after cutout)",
        "url": "https://www.amazon.com/dp/B0GCZPG5VT?tag=feelingpret0e-20"
      },
      {
        "name": "UIXIZQ Chocolate Suede Makeup Pouch",
        "url": "https://www.amazon.com/dp/B0FYFXSVYC?tag=feelingpret0e-20"
      },
      {
        "name": "Beeswax 2-Wick Candle in Embossed Amber Glass Jar",
        "url": "https://www.amazon.com/dp/B0GJ6963F5?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Crackle Glaze Footed Ring Dish",
        "url": "https://www.amazon.com/dp/B0H61SF81S?tag=feelingpret0e-20"
      },
      {
        "name": "Black Metal Claw Hair Clip (model inset cropped off)",
        "url": "https://www.amazon.com/dp/B0DMSZNGRK?tag=feelingpret0e-20"
      },
      {
        "name": "L'AGRATY Faux Rabbit Fur Bubble Throw Blanket, Cocoa Brown, 50x60",
        "url": "https://www.amazon.com/dp/B0DHRN56F5?tag=feelingpret0e-20"
      },
      {
        "name": "Frebeauty 3-Drawer Jewelry Box with Clear Lid, brown",
        "url": "https://www.amazon.com/dp/B0DQD7YCXR?tag=feelingpret0e-20"
      },
      {
        "name": "Uvvyui Cream Bouclé Knot Pillow Ball",
        "url": "https://www.amazon.com/dp/B0B34PTY3X?tag=feelingpret0e-20"
      },
      {
        "name": "Oval Vanity Mirror with Stand, Black Metal Frame, 5.9x8.9 (mirror glass restored after cutout)",
        "url": "https://www.amazon.com/dp/B0GCZPG5VT?tag=feelingpret0e-20"
      },
      {
        "name": "UIXIZQ Chocolate Suede Makeup Pouch",
        "url": "https://www.amazon.com/dp/B0FYFXSVYC?tag=feelingpret0e-20"
      },
      {
        "name": "96NORTH Black Glass 3-Wick Soy Jar Candle, Mystic Night",
        "url": "https://www.amazon.com/dp/B0D6Z39CP6?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Crackle Glaze Footed Ring Dish",
        "url": "https://www.amazon.com/dp/B0H61SF81S?tag=feelingpret0e-20"
      },
      {
        "name": "Black Metal Claw Hair Clip (model inset cropped off)",
        "url": "https://www.amazon.com/dp/B0DMSZNGRK?tag=feelingpret0e-20"
      },
      {
        "name": "L'AGRATY Faux Rabbit Fur Bubble Throw Blanket, Cocoa Brown, 50x60",
        "url": "https://www.amazon.com/dp/B0DHRN56F5?tag=feelingpret0e-20"
      },
      {
        "name": "Frebeauty 3-Drawer Jewelry Box with Clear Lid, brown",
        "url": "https://www.amazon.com/dp/B0DQD7YCXR?tag=feelingpret0e-20"
      },
      {
        "name": "Uvvyui Cream Bouclé Knot Pillow Ball",
        "url": "https://www.amazon.com/dp/B0B34PTY3X?tag=feelingpret0e-20"
      },
      {
        "name": "Oval Vanity Mirror with Stand, Black Metal Frame, 5.9x8.9 (mirror glass restored after cutout)",
        "url": "https://www.amazon.com/dp/B0GCZPG5VT?tag=feelingpret0e-20"
      },
      {
        "name": "UIXIZQ Chocolate Suede Makeup Pouch",
        "url": "https://www.amazon.com/dp/B0FYFXSVYC?tag=feelingpret0e-20"
      },
      {
        "name": "Black Pillar Candle in Glass Jar, 2.24x7 in",
        "url": "https://www.amazon.com/dp/B0FT41TXHZ?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Crackle Glaze Footed Ring Dish",
        "url": "https://www.amazon.com/dp/B0H61SF81S?tag=feelingpret0e-20"
      },
      {
        "name": "Black Metal Claw Hair Clip (model inset cropped off)",
        "url": "https://www.amazon.com/dp/B0DMSZNGRK?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-travel-girl",
    "title": "The Moody Travel Girl Edit",
    "image": "/boards/moody-travel-girl.png",
    "items": [
      {
        "name": "Puffy Quilted Travel Duffel Weekender, Chocolate",
        "url": "https://www.amazon.com/dp/B0H7VKWTG1?tag=feelingpret0e-20"
      },
      {
        "name": "Carriediosa 100% Cotton Muslin Throw, Chocolate",
        "url": "https://www.amazon.com/dp/B0F29DC2G3?tag=feelingpret0e-20"
      },
      {
        "name": "U+U 5-Set Leopard Packing Cubes",
        "url": "https://www.amazon.com/dp/B0FP56L2VW?tag=feelingpret0e-20"
      },
      {
        "name": "Genuine Leather Dark Brown Cosmetic Pouch",
        "url": "https://www.amazon.com/dp/B09C5SXSVS?tag=feelingpret0e-20"
      },
      {
        "name": "Genuine Leather Travel Jewelry Case with Mirror",
        "url": "https://www.amazon.com/dp/B0FF54MVG9?tag=feelingpret0e-20"
      },
      {
        "name": "Maruse Italian Leather Passport Holder, Black",
        "url": "https://www.amazon.com/dp/B01LX385MD?tag=feelingpret0e-20"
      },
      {
        "name": "Leopard Grain Leather Luggage Tags, 2-Pack",
        "url": "https://www.amazon.com/dp/B0BYZ5T4B5?tag=feelingpret0e-20"
      },
      {
        "name": "kuangre Gold Fluted Perfume Atomizer 10ml",
        "url": "https://www.amazon.com/dp/B0FRS7DXKS?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "midnight-movie-night",
    "title": "Midnight Movie Night",
    "image": "/boards/midnight-movie-night.png",
    "items": [
      {
        "name": "PAVILIA Maroon Red Knit Throw Blanket 50x60",
        "url": "https://www.amazon.com/dp/B08DBZTZJP?tag=feelingpret0e-20"
      },
      {
        "name": "Black Velvet Tufted Square Floor Pillow",
        "url": "https://www.amazon.com/dp/B0DV5STPKN?tag=feelingpret0e-20"
      },
      {
        "name": "Saypeacher Vintage Film Reel & Projector 3-Panel Canvas Wall Art",
        "url": "https://www.amazon.com/dp/B0C2YXJNZ8?tag=feelingpret0e-20"
      },
      {
        "name": "Gibson Home Urban Cafe Black & Red Stoneware Serving Bowl 10.3\"",
        "url": "https://www.amazon.com/dp/B0CXHPPPXB?tag=feelingpret0e-20"
      },
      {
        "name": "ZMOWIPDL Grey Hobnail Drinking Glasses, Set of 6",
        "url": "https://www.amazon.com/dp/B0D2D474PW?tag=feelingpret0e-20"
      },
      {
        "name": "Folinstall Wide Mouth Glass Jar with Lid, 1/2 Gal",
        "url": "https://www.amazon.com/dp/B07GZ76ZZ6?tag=feelingpret0e-20"
      },
      {
        "name": "Acacia Wood Serving Tray",
        "url": "https://www.amazon.com/dp/B0C6T55PNX?tag=feelingpret0e-20"
      },
      {
        "name": "zeochyni Vintage Brass Gold Taper Candle Holders, Set of 2",
        "url": "https://www.amazon.com/dp/B0D4DDQPDW?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-sunday-brunch",
    "title": "The Moody Sunday Brunch Edit",
    "image": "/boards/moody-sunday-brunch.png",
    "items": [
      {
        "name": "Acacia Wood Breakfast Serving Tray with Handles, 17x12\"",
        "url": "https://www.amazon.com/dp/B0DYRZXWHR?tag=feelingpret0e-20"
      },
      {
        "name": "LERATIO Reactive Glaze Ceramic Dinner Plates, Set of 6, 10.5\"",
        "url": "https://www.amazon.com/dp/B0BFGWHTHV?tag=feelingpret0e-20"
      },
      {
        "name": "100% Cotton Brown Plaid Table Napkins, Set of 4",
        "url": "https://www.amazon.com/dp/B07G61VX2B?tag=feelingpret0e-20"
      },
      {
        "name": "Retro Vintage Amber Glass Butter Dish with Lid",
        "url": "https://www.amazon.com/dp/B0DSVP25J1?tag=feelingpret0e-20"
      },
      {
        "name": "NIKKY HOME Gold Hammered Taper Candle Holders, Set of 3",
        "url": "https://www.amazon.com/dp/B0B1M6YLKS?tag=feelingpret0e-20"
      },
      {
        "name": "Hario Colors Stackable Amber Glass Mug, 300ml",
        "url": "https://www.amazon.com/dp/B0D6CC8CX4?tag=feelingpret0e-20"
      },
      {
        "name": "Bandesun Diamond-Pattern Grey Glass Tumblers, Set of 6",
        "url": "https://www.amazon.com/dp/B09B6Y9YTG?tag=feelingpret0e-20"
      },
      {
        "name": "Gold Stainless Steel Mini Coffee & Jam Spoons, Set of 6",
        "url": "https://www.amazon.com/dp/B0F2HW4PKN?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "college-girl-christmas-list",
    "title": "College Girl Christmas List",
    "image": "/boards/college-girl-christmas-list.png",
    "items": [
      {
        "name": "100% Mulberry Silk Pillowcase, 19 Momme, Taupe, Standard",
        "url": "https://www.amazon.com/dp/B0CJ91WSZ1?tag=feelingpret0e-20"
      },
      {
        "name": "LIGHT FLIGHT Quilted Travel Toiletry Bag with Handle, brown",
        "url": "https://www.amazon.com/dp/B0GN26J1VW?tag=feelingpret0e-20"
      },
      {
        "name": "Packing Cubes 7-Set, cream",
        "url": "https://www.amazon.com/dp/B0G7DYT41B?tag=feelingpret0e-20"
      },
      {
        "name": "OOW Fuzzy Faux Fur Slippers, taupe/cream",
        "url": "https://www.amazon.com/dp/B0FKSQGLB7?tag=feelingpret0e-20"
      },
      {
        "name": "BuyCard Foldable Travel Necklace Organizer Roll, Brown",
        "url": "https://www.amazon.com/dp/B0HFLY112X?tag=feelingpret0e-20"
      },
      {
        "name": "MIULEE Sherpa Faux Fur Pillow Covers 18x18, Oatmeal, set of 2",
        "url": "https://www.amazon.com/dp/B0DFYN9J92?tag=feelingpret0e-20"
      },
      {
        "name": "Satin Heatless Curling Rod Headband with Claw Clip, black",
        "url": "https://www.amazon.com/dp/B0995G69ZJ?tag=feelingpret0e-20"
      },
      {
        "name": "Soft Zip Electronics/Accessories Case, black fabric (tech organizer; 4.6★, 1,667)",
        "url": "https://www.amazon.com/dp/B071X3KTFL?tag=feelingpret0e-20"
      },
      {
        "name": "100% Mulberry Silk Pillowcase, 19 Momme, Taupe, Standard",
        "url": "https://www.amazon.com/dp/B0CJ91WSZ1?tag=feelingpret0e-20"
      },
      {
        "name": "LIGHT FLIGHT Quilted Travel Toiletry Bag with Handle, brown",
        "url": "https://www.amazon.com/dp/B0GN26J1VW?tag=feelingpret0e-20"
      },
      {
        "name": "Packing Cubes 7-Set, cream",
        "url": "https://www.amazon.com/dp/B0G7DYT41B?tag=feelingpret0e-20"
      },
      {
        "name": "OOW Fuzzy Faux Fur Slippers, taupe/cream",
        "url": "https://www.amazon.com/dp/B0FKSQGLB7?tag=feelingpret0e-20"
      },
      {
        "name": "BuyCard Foldable Travel Necklace Organizer Roll, Brown",
        "url": "https://www.amazon.com/dp/B0HFLY112X?tag=feelingpret0e-20"
      },
      {
        "name": "VLANDO Small Travel Jewelry Box, Beige",
        "url": "https://www.amazon.com/dp/B0CL34BL6Z?tag=feelingpret0e-20"
      },
      {
        "name": "Satin Heatless Curling Rod Headband with Claw Clip, black",
        "url": "https://www.amazon.com/dp/B0995G69ZJ?tag=feelingpret0e-20"
      },
      {
        "name": "Soft Zip Electronics/Accessories Case, black fabric (tech organizer; 4.6★, 1,667)",
        "url": "https://www.amazon.com/dp/B071X3KTFL?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-coffee-table-styling",
    "title": "Moody Coffee Table Styling",
    "image": "/boards/moody-coffee-table-styling.png",
    "items": [
      {
        "name": "Walnut Rectangular Serving Tray with Handles",
        "url": "https://www.amazon.com/dp/B0G1YFBKNF?tag=feelingpret0e-20"
      },
      {
        "name": "Arina Rustic Cream Stone-Look Round Vase, 11\"",
        "url": "https://www.amazon.com/dp/B0FNS3WKG6?tag=feelingpret0e-20"
      },
      {
        "name": "Granite-Textured Matte Black Pedestal Bowl, 11\"",
        "url": "https://www.amazon.com/dp/B0DNN64R3P?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked Ribbed Glass Candle Holder",
        "url": "https://www.amazon.com/dp/B0H48ZC63G?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Wood Box with Lid & Brass Knob",
        "url": "https://www.amazon.com/dp/B0FX39P7PH?tag=feelingpret0e-20"
      },
      {
        "name": "Natural Brown Marble Coasters, Set of 4",
        "url": "https://www.amazon.com/dp/B0GTRMMLDV?tag=feelingpret0e-20"
      },
      {
        "name": "Natural Travertine Decorative Bowl, 7.8\"",
        "url": "https://www.amazon.com/dp/B0GWPG79TF?tag=feelingpret0e-20"
      },
      {
        "name": "Matte Black Stainless Steel Candle Snuffer",
        "url": "https://www.amazon.com/dp/B0FC6ML522?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-bride-edit",
    "title": "The Moody Bride Edit",
    "image": "/boards/moody-bride-edit.png",
    "items": [
      {
        "name": "Black satin long kimono robe (PRODESIGN, polyester)",
        "url": "https://www.amazon.com/dp/B08V95BTWB?tag=feelingpret0e-20"
      },
      {
        "name": "Oirlv gold 3-layer jewelry travel case (vegan leather)",
        "url": "https://www.amazon.com/dp/B073VCFQ25?tag=feelingpret0e-20"
      },
      {
        "name": "Emprier pearl clutch",
        "url": "https://www.amazon.com/dp/B0DLBG8N9T?tag=feelingpret0e-20"
      },
      {
        "name": "Creative Co-Op embossed metal hand mirror, antique gold",
        "url": "https://www.amazon.com/dp/B0GLYNLYYV?tag=feelingpret0e-20"
      },
      {
        "name": "Champagne satin bow slippers",
        "url": "https://www.amazon.com/dp/B0GS958Y9Q?tag=feelingpret0e-20"
      },
      {
        "name": "Gold pearl U hair pins (Charonle)",
        "url": "https://www.amazon.com/dp/B095X54Y59?tag=feelingpret0e-20"
      },
      {
        "name": "OwMell gold pearl drop earrings",
        "url": "https://www.amazon.com/dp/B087WTKJ9V?tag=feelingpret0e-20"
      },
      {
        "name": "Black velvet ring box (ZUFECY)",
        "url": "https://www.amazon.com/dp/B0F9K2L8M5?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-dark-and-dreamy-guest-suite",
    "title": "The Dark & Dreamy Guest Suite",
    "image": "/boards/the-dark-and-dreamy-guest-suite.png",
    "items": [
      {
        "name": "Walnut wood folding luggage rack (LZMS)",
        "url": "https://www.amazon.com/dp/B0D9GCZ25H?tag=feelingpret0e-20"
      },
      {
        "name": "Dark floral framed wall art, 9 x 11 (Vbaourut)",
        "url": "https://www.amazon.com/dp/B0GYDCVW8G?tag=feelingpret0e-20"
      },
      {
        "name": "Brown velvet pillow covers, 18 x 18, set of 2 (GIGIZAZA)",
        "url": "https://www.amazon.com/dp/B0FH4WNJWS?tag=feelingpret0e-20"
      },
      {
        "name": "Chunky chenille knit throw, mocha brown (EVERGRACEHOME)",
        "url": "https://www.amazon.com/dp/B0FC6843CP?tag=feelingpret0e-20"
      },
      {
        "name": "Hammered smoke grey glass bedside carafe set (gökotta)",
        "url": "https://www.amazon.com/dp/B0D45PLW87?tag=feelingpret0e-20"
      },
      {
        "name": "Amber fluted glass votive holders, set of 6 (Kate Aspen)",
        "url": "https://www.amazon.com/dp/B0BJGXKD9H?tag=feelingpret0e-20"
      },
      {
        "name": "Acacia wood valet tray",
        "url": "https://www.amazon.com/dp/B0DT1X5W9W?tag=feelingpret0e-20"
      },
      {
        "name": "Amber ribbed glass taper holders, 10 pcs (Hewory)",
        "url": "https://www.amazon.com/dp/B0D813CHMK?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "dinner-after-dark",
    "title": "Dinner After Dark",
    "image": "/boards/dinner-after-dark.png",
    "items": [
      {
        "name": "Matte black stoneware dinner plates, set of 6 (AmorArc)",
        "url": "https://www.amazon.com/dp/B093G66YVD?tag=feelingpret0e-20"
      },
      {
        "name": "Black marble board with handle (Bloomingville)",
        "url": "https://www.amazon.com/dp/B0BV45DCQY?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked glass vase (GeLive)",
        "url": "https://www.amazon.com/dp/B0BZVNSRV9?tag=feelingpret0e-20"
      },
      {
        "name": "Smokey black hobnail goblets, set of 6 (Yungala)",
        "url": "https://www.amazon.com/dp/B0B62BZJRQ?tag=feelingpret0e-20"
      },
      {
        "name": "100% pure linen dinner napkins, brown, set of 4 (Solino Home)",
        "url": "https://www.amazon.com/dp/B083Z9MG2G?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage gold cast iron taper holders, set of 2",
        "url": "https://www.amazon.com/dp/B0H7RWNYRJ?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage carved gold flatware, 40 pc (Meythway)",
        "url": "https://www.amazon.com/dp/B0C53SQYQY?tag=feelingpret0e-20"
      },
      {
        "name": "Black marble salt cellar with lid (HESHIBI)",
        "url": "https://www.amazon.com/dp/B0BN54M4FQ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-master-closet-edit",
    "title": "The Moody Master Closet Edit",
    "image": "/boards/the-moody-master-closet-edit.png",
    "items": [
      {
        "name": "Black arched full length floor mirror, 56 x 15 (Delma)",
        "url": "https://www.amazon.com/dp/B0D16T4G91?tag=feelingpret0e-20"
      },
      {
        "name": "Stackable black metal purse organizer rack (HapiRm)",
        "url": "https://www.amazon.com/dp/B0GX4SZ9D1?tag=feelingpret0e-20"
      },
      {
        "name": "Twin valet stand, walnut (Proman Sakura)",
        "url": "https://www.amazon.com/dp/B01N6J7LIF?tag=feelingpret0e-20"
      },
      {
        "name": "Black metal boot rack, 6 pairs",
        "url": "https://www.amazon.com/dp/B0CFZVQT6Z?tag=feelingpret0e-20"
      },
      {
        "name": "Slim black velvet hangers (Amazon Basics)",
        "url": "https://www.amazon.com/dp/B00FXNAAW2?tag=feelingpret0e-20"
      },
      {
        "name": "Black velvet stackable jewelry trays, 4 pack (AojSup)",
        "url": "https://www.amazon.com/dp/B0FH3YX5R4?tag=feelingpret0e-20"
      },
      {
        "name": "Top-grain leather 4 watch case, espresso (TAWBURY)",
        "url": "https://www.amazon.com/dp/B0D57ZRVYJ?tag=feelingpret0e-20"
      },
      {
        "name": "Solid walnut vanity/perfume tray (BEECO)",
        "url": "https://www.amazon.com/dp/B0DR2VYSDJ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "midnight-coffee-ritual",
    "title": "Midnight Coffee Ritual",
    "image": "/boards/midnight-coffee-ritual.png",
    "items": [
      {
        "name": "Walnut wood mug tree, 6 hooks (Aomomery)",
        "url": "https://www.amazon.com/dp/B0FBRJ6KQK?tag=feelingpret0e-20"
      },
      {
        "name": "Amber glass apothecary bottle with ground glass stopper, 250 ml",
        "url": "https://www.amazon.com/dp/B0CYSF58C9?tag=feelingpret0e-20"
      },
      {
        "name": "Gold milk frothing pitcher, 20 oz (Amrules)",
        "url": "https://www.amazon.com/dp/B0H28V87Y9?tag=feelingpret0e-20"
      },
      {
        "name": "Black marble tray, 12 x 8",
        "url": "https://www.amazon.com/dp/B0BR7ND7MK?tag=feelingpret0e-20"
      },
      {
        "name": "Black ceramic sugar bowl with gold rim, lid and spoon (HAOTOP)",
        "url": "https://www.amazon.com/dp/B0F3D8VNLH?tag=feelingpret0e-20"
      },
      {
        "name": "Smoke glass mugs with walnut handles, 12 oz, set of 2",
        "url": "https://www.amazon.com/dp/B0G6Z79GG9?tag=feelingpret0e-20"
      },
      {
        "name": "Matte black espresso cups, 3 oz, set of 2 (Folk Ceramics)",
        "url": "https://www.amazon.com/dp/B0BQLJ24NK?tag=feelingpret0e-20"
      },
      {
        "name": "Long handle gold coffee spoons, set of 4",
        "url": "https://www.amazon.com/dp/B091CHRKVH?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-gift-edit",
    "title": "The Moody Gift Edit",
    "image": "/boards/the-moody-gift-edit.png",
    "items": [
      {
        "name": "100% cashmere scarf, burgundy (Tavio Velliani)",
        "url": "https://www.amazon.com/dp/B0H55P1Z4Z?tag=feelingpret0e-20"
      },
      {
        "name": "Genuine leather journal (KomalC)",
        "url": "https://www.amazon.com/dp/B074ZLWYJ6?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy mercury glass votive holders, 12 pcs (Volens)",
        "url": "https://www.amazon.com/dp/B0DH1YRRMC?tag=feelingpret0e-20"
      },
      {
        "name": "Amber crystal rocks glasses, set of 2 (Viski)",
        "url": "https://www.amazon.com/dp/B0CZS33RDF?tag=feelingpret0e-20"
      },
      {
        "name": "Genuine leather mini jewelry box, black",
        "url": "https://www.amazon.com/dp/B0GHDN6ML2?tag=feelingpret0e-20"
      },
      {
        "name": "Silk sleep mask, black",
        "url": "https://www.amazon.com/dp/B07J41LJJZ?tag=feelingpret0e-20"
      },
      {
        "name": "Chunky 14K gold plated huggie hoop earrings (Silvora)",
        "url": "https://www.amazon.com/dp/B0GSYHNXCM?tag=feelingpret0e-20"
      },
      {
        "name": "Gold candle snuffer",
        "url": "https://www.amazon.com/dp/B0GR4VHJP5?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "after-dark-outdoor",
    "title": "After Dark Outdoor",
    "image": "/boards/after-dark-outdoor.png",
    "items": [
      {
        "name": "Tabletop alcohol fireplace, glass and black cast iron",
        "url": "https://www.amazon.com/dp/B0HLKNXK53?tag=feelingpret0e-20"
      },
      {
        "name": "Heathered indoor/outdoor flatweave rug, charcoal (Unique Loom)",
        "url": "https://www.amazon.com/dp/B0192IBGQ2?tag=feelingpret0e-20"
      },
      {
        "name": "Black metal candle lantern, 20 in (Bdor)",
        "url": "https://www.amazon.com/dp/B0B2C5KGNP?tag=feelingpret0e-20"
      },
      {
        "name": "Black hurricane pillar candle holders, set of 2 (NUPTIO)",
        "url": "https://www.amazon.com/dp/B0D833KGSB?tag=feelingpret0e-20"
      },
      {
        "name": "Outdoor waterproof pillow covers, carbon gray, 18 x 18, set of 2 (HER HWA)",
        "url": "https://www.amazon.com/dp/B0FYC5TB8J?tag=feelingpret0e-20"
      },
      {
        "name": "Teak wood serving tray (Vesta Homes)",
        "url": "https://www.amazon.com/dp/B0CG6CVRXR?tag=feelingpret0e-20"
      },
      {
        "name": "Matte black stoneware dinnerware, 12 pc (E-far)",
        "url": "https://www.amazon.com/dp/B0DR89LBZ2?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked wine glasses, set of 6 (Classic Touch)",
        "url": "https://www.amazon.com/dp/B0CP9TXZ4F?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-gift-guide",
    "title": "The Moody Gift Guide",
    "image": "/boards/the-moody-gift-guide.png",
    "items": [
      {
        "name": "Cashmere scarf, burgundy (100% cashmere)",
        "url": "https://www.amazon.com/dp/B0H55P1Z4Z?tag=feelingpret0e-20"
      },
      {
        "name": "Leather journal (genuine leather)",
        "url": "https://www.amazon.com/dp/B074ZLWYJ6?tag=feelingpret0e-20"
      },
      {
        "name": "Mercury glass votives, burgundy (12 pcs)",
        "url": "https://www.amazon.com/dp/B0DH1YRRMC?tag=feelingpret0e-20"
      },
      {
        "name": "Amber rocks glasses (crystal, set of 2)",
        "url": "https://www.amazon.com/dp/B0CZS33RDF?tag=feelingpret0e-20"
      },
      {
        "name": "Leather jewelry box, black (mini travel)",
        "url": "https://www.amazon.com/dp/B0GHDN6ML2?tag=feelingpret0e-20"
      },
      {
        "name": "Silk sleep mask, black",
        "url": "https://www.amazon.com/dp/B07J41LJJZ?tag=feelingpret0e-20"
      },
      {
        "name": "Huggie hoop earrings (chunky 14K gold plated)",
        "url": "https://www.amazon.com/dp/B0GSYHNXCM?tag=feelingpret0e-20"
      },
      {
        "name": "Candle snuffer, gold",
        "url": "https://www.amazon.com/dp/B0GR4VHJP5?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-pet-parent-edit",
    "title": "The Moody Pet Parent Edit",
    "image": "/boards/the-moody-pet-parent-edit.png",
    "items": [
      {
        "name": "Gray bolster dog bed, $18.96",
        "url": "https://www.amazon.com/dp/B094HXYVC2?tag=feelingpret0e-20"
      },
      {
        "name": "Wood raised feeder with ceramic bowl, $100.69",
        "url": "https://www.amazon.com/dp/B01GKB97TW?tag=feelingpret0e-20"
      },
      {
        "name": "Irish wool blackwatch plaid throw, $227.00",
        "url": "https://www.amazon.com/dp/B01MYRZI5P?tag=feelingpret0e-20"
      },
      {
        "name": "Woven hyacinth bone-shaped toy basket, $32.99",
        "url": "https://www.amazon.com/dp/B0DCTXTLT8?tag=feelingpret0e-20"
      },
      {
        "name": "Black ceramic dog bowl, $16.99",
        "url": "https://www.amazon.com/dp/B0CJG2WLJK?tag=feelingpret0e-20"
      },
      {
        "name": "Plain black ceramic jar with lid (treat jar), $22.98",
        "url": "https://www.amazon.com/dp/B0DMDY5NQ4?tag=feelingpret0e-20"
      },
      {
        "name": "Short black leather leash, $9.98",
        "url": "https://www.amazon.com/dp/B0D9Y9WJBF?tag=feelingpret0e-20"
      },
      {
        "name": "Black slate board (set of 8), used as a pet bowl placemat, $32.38",
        "url": "https://www.amazon.com/dp/B0FY5MX999?tag=feelingpret0e-20"
      },
      {
        "name": "Bronze paw-print leash hook, $16.99",
        "url": "https://www.amazon.com/dp/B01LZGQKA1?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-tween-girl-edit",
    "title": "The Moody Tween Girl Edit",
    "image": "/boards/the-moody-tween-girl-edit.png",
    "items": [
      {
        "name": "Blush & pink abstract wall art (set of 2, no text), $9.99",
        "url": "https://www.amazon.com/dp/B0F32NSCLY?tag=feelingpret0e-20"
      },
      {
        "name": "Black metal heart hanging mirror, $45.69",
        "url": "https://www.amazon.com/dp/B0CCX4HT7Y?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy velvet bow pillow covers (2), $24.99",
        "url": "https://www.amazon.com/dp/B0H9SMDKDT?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate checkered throw, $12.99",
        "url": "https://www.amazon.com/dp/B0D25Y3L41?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy velvet travel jewelry box, $19.99",
        "url": "https://www.amazon.com/dp/B0G3T88TCX?tag=feelingpret0e-20"
      },
      {
        "name": "Black jewelry tree stand with walnut base, $17.99",
        "url": "https://www.amazon.com/dp/B082B59374?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy knit slipper socks, $9.99",
        "url": "https://www.amazon.com/dp/B0FGPFGSKL?tag=feelingpret0e-20"
      },
      {
        "name": "Antique gold metal vanity mirror (hand-held or tabletop), $24.75",
        "url": "https://www.amazon.com/dp/B07CHHG5X8?tag=feelingpret0e-20"
      },
      {
        "name": "Gold photo clip holders, $8.59",
        "url": "https://www.amazon.com/dp/B0BMQ2J4D4?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "black-ceramic-pumpkin-gold-stem",
    "title": "Black Ceramic Pumpkin with Gold Stem",
    "image": "/boards/black-ceramic-pumpkin-gold-stem.png",
    "items": [
      {
        "name": "Black Ceramic Pumpkin with Gold Stem",
        "url": "https://www.amazon.com/dp/B0GY37CCRP?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "wabi-sabi-espresso-ceramic-vase",
    "title": "Wabi-Sabi Espresso Ceramic Vase",
    "image": "/boards/wabi-sabi-espresso-ceramic-vase.png",
    "items": [
      {
        "name": "Wabi-Sabi Espresso Ceramic Vase",
        "url": "https://www.amazon.com/dp/B0CDB6ZDTR?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "antique-gold-crown-arch-mirror",
    "title": "Antique Gold Crown Arch Mirror",
    "image": "/boards/antique-gold-crown-arch-mirror.png",
    "items": [
      {
        "name": "Antique Gold Crown Arch Mirror",
        "url": "https://www.amazon.com/dp/B0FR4QQWSZ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "olive-velvet-quilted-throw",
    "title": "Olive Velvet Quilted Throw",
    "image": "/boards/olive-velvet-quilted-throw.png",
    "items": [
      {
        "name": "Olive Velvet Quilted Throw",
        "url": "https://www.amazon.com/dp/B0G4SM973J?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "dark-bronze-taper-holders",
    "title": "Dark Bronze Taper Holders",
    "image": "/boards/dark-bronze-taper-holders.png",
    "items": [
      {
        "name": "Dark Bronze Taper Holders",
        "url": "https://www.amazon.com/dp/B0DDTBTLMZ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "black-marble-votive-holders",
    "title": "Black Marble Votive Holders",
    "image": "/boards/black-marble-votive-holders.png",
    "items": [
      {
        "name": "Black Marble Votive Holders",
        "url": "https://www.amazon.com/dp/B0DHNKCHWL?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-kitchen-edit",
    "title": "Moody Kitchen Edit",
    "image": "/boards/moody-kitchen-edit.png",
    "items": [
      {
        "name": "vancasso Sabine cream ceramic canisters, set of 3",
        "url": "https://www.amazon.com/dp/B0B79JG2BL?tag=feelingpret0e-20"
      },
      {
        "name": "Glass olive oil cruet",
        "url": "https://www.amazon.com/dp/B089R63SWT?tag=feelingpret0e-20"
      },
      {
        "name": "Gold measuring cups & spoons, wood handles",
        "url": "https://www.amazon.com/dp/B0FWXRQFBJ?tag=feelingpret0e-20"
      },
      {
        "name": "Brazos Home walnut serving board",
        "url": "https://www.amazon.com/dp/B086RP9DZ4?tag=feelingpret0e-20"
      },
      {
        "name": "Tall wooden salt & pepper mills",
        "url": "https://www.amazon.com/dp/B08MD85GLM?tag=feelingpret0e-20"
      },
      {
        "name": "Antique brass taper holders, set of 3",
        "url": "https://www.amazon.com/dp/B0BV9XJF8Q?tag=feelingpret0e-20"
      },
      {
        "name": "Wooden paper towel holder (acacia)",
        "url": "https://www.amazon.com/dp/B0FZJSFVP3?tag=feelingpret0e-20"
      },
      {
        "name": "Pure flax linen kitchen towels, set of 2",
        "url": "https://www.amazon.com/dp/B08ZRZRSBY?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "cozy-gift-basket",
    "title": "Cozy Gift Basket",
    "image": "/boards/cozy-gift-basket.png",
    "items": [
      {
        "name": "Ribbed amber glass tealight holder",
        "url": "https://www.amazon.com/dp/B0GYW53PQV?tag=feelingpret0e-20"
      },
      {
        "name": "Fringe Studio embossed cream stoneware mug",
        "url": "https://www.amazon.com/dp/B0CC3SXG7G?tag=feelingpret0e-20"
      },
      {
        "name": "Satin sleep mask, copper brown",
        "url": "https://www.amazon.com/dp/B0FZ9MFXCX?tag=feelingpret0e-20"
      },
      {
        "name": "Litfun chocolate fuzzy slippers",
        "url": "https://www.amazon.com/dp/B0C1BKFK7Y?tag=feelingpret0e-20"
      },
      {
        "name": "Leather cosmetic pouch",
        "url": "https://www.amazon.com/dp/B0C81BLDSZ?tag=feelingpret0e-20"
      },
      {
        "name": "Vandroop walnut mini tray / catchall",
        "url": "https://www.amazon.com/dp/B0C65XGPCS?tag=feelingpret0e-20"
      },
      {
        "name": "BEDELITE cream sherpa throw",
        "url": "https://www.amazon.com/dp/B0H6FJ5XKH?tag=feelingpret0e-20"
      },
      {
        "name": "Honygebia solid walnut book stand",
        "url": "https://www.amazon.com/dp/B0D3FH2ZLP?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "dark-organic-bath",
    "title": "Dark Organic Bath",
    "image": "/boards/dark-organic-bath.png",
    "items": [
      {
        "name": "Natural black Marquina marble soap dispenser",
        "url": "https://www.amazon.com/dp/B0GC535SD7?tag=feelingpret0e-20"
      },
      {
        "name": "Amber glass soap dispenser",
        "url": "https://www.amazon.com/dp/B0DHCPMLCR?tag=feelingpret0e-20"
      },
      {
        "name": "Natural travertine-marble canister with lid",
        "url": "https://www.amazon.com/dp/B0D45DYHXQ?tag=feelingpret0e-20"
      },
      {
        "name": "Rust-brown waffle bath towels, set of 2",
        "url": "https://www.amazon.com/dp/B0GZVP36J2?tag=feelingpret0e-20"
      },
      {
        "name": "Sweejar cream ceramic jar with wood lid",
        "url": "https://www.amazon.com/dp/B0F7WFKQRC?tag=feelingpret0e-20"
      },
      {
        "name": "Nolimas matte black stainless towel hooks",
        "url": "https://www.amazon.com/dp/B07K7HJPVQ?tag=feelingpret0e-20"
      },
      {
        "name": "KES matte black toilet paper stand",
        "url": "https://www.amazon.com/dp/B07Q7H142G?tag=feelingpret0e-20"
      },
      {
        "name": "Casafield woven water hyacinth hamper with lid",
        "url": "https://www.amazon.com/dp/B0D9ZRW39M?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-shelf-styling",
    "title": "Moody Shelf Styling",
    "image": "/boards/moody-shelf-styling.png",
    "items": [
      {
        "name": "Walnut wood bookends",
        "url": "https://www.amazon.com/dp/B0859XM3Z9?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked brown glass vase",
        "url": "https://www.amazon.com/dp/B0BZVN3T6D?tag=feelingpret0e-20"
      },
      {
        "name": "Matte black ribbed ceramic vase",
        "url": "https://www.amazon.com/dp/B0D8LFJ8S1?tag=feelingpret0e-20"
      },
      {
        "name": "White wood knot sculpture",
        "url": "https://www.amazon.com/dp/B0BBH5ZDP4?tag=feelingpret0e-20"
      },
      {
        "name": "Travertine and brass taper candlestick, 7.75 in",
        "url": "https://www.amazon.com/dp/B0FX972NDZ?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut storage box with slide lid",
        "url": "https://www.amazon.com/dp/B0D2XQ7RT9?tag=feelingpret0e-20"
      },
      {
        "name": "Reclaimed wood chain, 3 links",
        "url": "https://www.amazon.com/dp/B08DPQ73VN?tag=feelingpret0e-20"
      },
      {
        "name": "Cream scalloped pedestal bowl",
        "url": "https://www.amazon.com/dp/B0GWPTBF2R?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "espresso-martini-after-dark",
    "title": "Espresso Martini After Dark",
    "image": "/boards/espresso-martini-after-dark.png",
    "items": [
      {
        "name": "Smoke gray coupe glasses, set of 6",
        "url": "https://www.amazon.com/dp/B0GVM7QMSK?tag=feelingpret0e-20"
      },
      {
        "name": "Espresso martini round framed art",
        "url": "https://www.amazon.com/dp/B0G5142Y32?tag=feelingpret0e-20"
      },
      {
        "name": "Two-tone gold and gunmetal cocktail shaker",
        "url": "https://www.amazon.com/dp/B09GW8DX88?tag=feelingpret0e-20"
      },
      {
        "name": "Gold cocktail picks",
        "url": "https://www.amazon.com/dp/B0F4316JCS?tag=feelingpret0e-20"
      },
      {
        "name": "Glass coffee bean jar with wood lid",
        "url": "https://www.amazon.com/dp/B0CWGDMS7W?tag=feelingpret0e-20"
      },
      {
        "name": "Amber ribbed stemless glasses",
        "url": "https://www.amazon.com/dp/B0G4Q9QZLV?tag=feelingpret0e-20"
      },
      {
        "name": "Black marble tray, 12x8",
        "url": "https://www.amazon.com/dp/B0C7QH4CRT?tag=feelingpret0e-20"
      },
      {
        "name": "Gold muddler, bar spoon and jigger set",
        "url": "https://www.amazon.com/dp/B0D49JWVZS?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "girls-night-after-dark",
    "title": "Girls Night After Dark",
    "image": "/boards/girls-night-after-dark.png",
    "items": [
      {
        "name": "Burgundy velvet bow hair clips",
        "url": "https://www.amazon.com/dp/B0FRDMBKHX?tag=feelingpret0e-20"
      },
      {
        "name": "Gold mirror disco ball, 8 in",
        "url": "https://www.amazon.com/dp/B0C81LHGCG?tag=feelingpret0e-20"
      },
      {
        "name": "Gold taper candle holders, set of 3",
        "url": "https://www.amazon.com/dp/B0FNR7VWB7?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy votive candles in glass, set of 4",
        "url": "https://www.amazon.com/dp/B0D9JNKYDW?tag=feelingpret0e-20"
      },
      {
        "name": "Red & gold Art Deco coupe glasses, set of 2",
        "url": "https://www.amazon.com/dp/B0D79PC3QR?tag=feelingpret0e-20"
      },
      {
        "name": "Plush leopard makeup bag",
        "url": "https://www.amazon.com/dp/B0FPMGTRY3?tag=feelingpret0e-20"
      },
      {
        "name": "Black satin pajama short set",
        "url": "https://www.amazon.com/dp/B0CFX1T5S9?tag=feelingpret0e-20"
      },
      {
        "name": "Leopard scalloped cloth napkins, set of 4",
        "url": "https://www.amazon.com/dp/B0D2XY95JG?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "cognac-leather-accent-chair",
    "title": "Cognac Leather Accent Chair",
    "image": "/boards/cognac-leather-accent-chair.png",
    "items": [
      {
        "name": "Yaheetech mid-century cognac faux leather accent chair, walnut frame",
        "url": "https://www.amazon.com/dp/B0BHWSVY2D?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "gold-pleated-shade-table-lamp",
    "title": "Gold Pleated-Shade Table Lamp",
    "image": "/boards/gold-pleated-shade-table-lamp.png",
    "items": [
      {
        "name": "Gold Pleated-Shade Table Lamp",
        "url": "https://www.amazon.com/dp/B0DKN843L4?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "rosso-levanto-marble-tray",
    "title": "Rosso Levanto Marble Tray",
    "image": "/boards/rosso-levanto-marble-tray.png",
    "items": [
      {
        "name": "Rosso Levanto Marble Tray",
        "url": "https://www.amazon.com/dp/B0CT5C68HH?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "walnut-brown-wood-pedestal-bowl",
    "title": "Walnut-Brown Pedestal Bowl",
    "image": "/boards/walnut-brown-wood-pedestal-bowl.png",
    "items": [
      {
        "name": "Walnut-Brown Pedestal Bowl",
        "url": "https://www.amazon.com/dp/B0F952ZX3H?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "chocolate-velvet-lumbar-pillow-covers",
    "title": "Chocolate Velvet Lumbar Covers",
    "image": "/boards/chocolate-velvet-lumbar-pillow-covers.png",
    "items": [
      {
        "name": "Chocolate Velvet Lumbar Covers",
        "url": "https://www.amazon.com/dp/B0C6THZN5G?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "walnut-wood-bookends",
    "title": "Walnut Wood Bookends",
    "image": "/boards/walnut-wood-bookends.png",
    "items": [
      {
        "name": "Walnut Wood Bookends",
        "url": "https://www.amazon.com/dp/B0F8TPYPRF?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "travertine-brass-candlestick",
    "title": "Travertine & Brass Candlestick",
    "image": "/boards/travertine-brass-candlestick.png",
    "items": [
      {
        "name": "Travertine & Brass Candlestick",
        "url": "https://www.amazon.com/dp/B0FX972NDZ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "antique-brass-taper-holders",
    "title": "Antique Brass Taper Holders",
    "image": "/boards/antique-brass-taper-holders.png",
    "items": [
      {
        "name": "Antique Brass Taper Holders",
        "url": "https://www.amazon.com/dp/B0BV9XJF8Q?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "dark-walnut-serving-board",
    "title": "Dark Walnut Serving Board",
    "image": "/boards/dark-walnut-serving-board.png",
    "items": [
      {
        "name": "Dark Walnut Serving Board",
        "url": "https://www.amazon.com/dp/B086RP9DZ4?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "black-marble-bowl",
    "title": "Black Marble Bowl",
    "image": "/boards/black-marble-bowl.png",
    "items": [
      {
        "name": "Black Marble Bowl",
        "url": "https://www.amazon.com/dp/B0F7KZNTJY?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-girl-boo-basket",
    "title": "The Moody Girl Boo Basket",
    "image": "/boards/the-moody-girl-boo-basket.png",
    "items": [
      {
        "name": "Brown floppy-ear bunny plush, 17.7 in (WEIGEDU)",
        "url": "https://www.amazon.com/dp/B0D89TWVPB?tag=feelingpret0e-20"
      },
      {
        "name": "Hand-woven abaca storage basket, brown (happimess)",
        "url": "https://www.amazon.com/dp/B0DRDTYWT2?tag=feelingpret0e-20"
      },
      {
        "name": "Genuine suede shearling-lined slippers, chestnut (bebealy)",
        "url": "https://www.amazon.com/dp/B0FCBBK3L8?tag=feelingpret0e-20"
      },
      {
        "name": "Brown ceramic pumpkin jar with lid, 8 in (Boston International)",
        "url": "https://www.amazon.com/dp/B0H3MJ97TR?tag=feelingpret0e-20"
      },
      {
        "name": "Teddy bear ceramic mug, 12 oz (Heardbeli)",
        "url": "https://www.amazon.com/dp/B0BVHZ8GQW?tag=feelingpret0e-20"
      },
      {
        "name": "Handmade knitted pumpkins, set of 3, caramel/brown/cream (Briful)",
        "url": "https://www.amazon.com/dp/B0DT5ZTHDH?tag=feelingpret0e-20"
      },
      {
        "name": "Brown unscented pillar candle, 3x6 in",
        "url": "https://www.amazon.com/dp/B0FK5DT9GX?tag=feelingpret0e-20"
      },
      {
        "name": "Gold face roller & gua sha set (Yeamon)",
        "url": "https://www.amazon.com/dp/B0C7QWF83P?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-coffee-shop-edit",
    "title": "The Moody Coffee Shop Edit",
    "image": "/boards/the-moody-coffee-shop-edit.png",
    "items": [
      {
        "name": "Acacia wood coffee canister with wooden scoop, 21 oz (KicthNet)",
        "url": "https://www.amazon.com/dp/B0H1Z9XG84?tag=feelingpret0e-20"
      },
      {
        "name": "Rustic brown wood mug tree, 6 hooks (Dorhors)",
        "url": "https://www.amazon.com/dp/B09JCL2DB8?tag=feelingpret0e-20"
      },
      {
        "name": "Ribbed glass syrup dispensers with gold pumps, 10 oz, 2 pack (TIWPAJS)",
        "url": "https://www.amazon.com/dp/B0F9Y5JHVY?tag=feelingpret0e-20"
      },
      {
        "name": "Black porcelain espresso cups with saucers and spoons, set of 4 (homEdge)",
        "url": "https://www.amazon.com/dp/B0CZNMSMFR?tag=feelingpret0e-20"
      },
      {
        "name": "Black marble tray, 13 x 7.5 in (Cork & Mill)",
        "url": "https://www.amazon.com/dp/B0CZYSMX9C?tag=feelingpret0e-20"
      },
      {
        "name": "Amber glass coffee mugs, 12 oz, set of 2 (Serro)",
        "url": "https://www.amazon.com/dp/B0CP4JM9CN?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate brown waffle cotton kitchen towels, 8 pack (Cotton Craft)",
        "url": "https://www.amazon.com/dp/B00ECXGUJ6?tag=feelingpret0e-20"
      },
      {
        "name": "Matte gold espresso spoons, set of 6 (FULLYWARE)",
        "url": "https://www.amazon.com/dp/B0957TGH7X?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "vanity-after-dark",
    "title": "Vanity After Dark",
    "image": "/boards/vanity-after-dark.png",
    "items": [
      {
        "name": "Antique gold carved arch tabletop mirror",
        "url": "https://www.amazon.com/dp/B0CLNNY2X7?tag=feelingpret0e-20"
      },
      {
        "name": "Hammered brass 3-tier jewelry dish stand (MyGift)",
        "url": "https://www.amazon.com/dp/B0BQV3SJ51?tag=feelingpret0e-20"
      },
      {
        "name": "Amber glass perfume spray bottles, 1.7 oz, 2 pack (Segbeauty)",
        "url": "https://www.amazon.com/dp/B0FF38XCD3?tag=feelingpret0e-20"
      },
      {
        "name": "Wine red velvet jewelry box (Giftop)",
        "url": "https://www.amazon.com/dp/B07ZWSSX61?tag=feelingpret0e-20"
      },
      {
        "name": "Black natural marble vanity tray, 12 in",
        "url": "https://www.amazon.com/dp/B0DPWQHMV5?tag=feelingpret0e-20"
      },
      {
        "name": "Wine red velvet quilted makeup bag (HFLZBRO)",
        "url": "https://www.amazon.com/dp/B0DPKH4D2J?tag=feelingpret0e-20"
      },
      {
        "name": "Matte black ceramic cup, for brushes",
        "url": "https://www.amazon.com/dp/B0DCJMT6KX?tag=feelingpret0e-20"
      },
      {
        "name": "Gold metal claw clips, 6 pack (LUKACY)",
        "url": "https://www.amazon.com/dp/B091N923Y9?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-bedroom-retreat",
    "title": "The Moody Bedroom Retreat",
    "image": "/boards/the-moody-bedroom-retreat.png",
    "items": [
      {
        "name": "Antique gold oval pivot wall mirror, 24 x 41 in (Kate and Laurel Darbridge)",
        "url": "https://www.amazon.com/dp/B0GW93R2V5?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate brown velvet channel-quilted comforter set, queen, 3 pc (MUSSEL)",
        "url": "https://www.amazon.com/dp/B0GKFJ4NZQ?tag=feelingpret0e-20"
      },
      {
        "name": "Dark moody peony still-life art, vintage gold frame",
        "url": "https://www.amazon.com/dp/B0GD5YPRKG?tag=feelingpret0e-20"
      },
      {
        "name": "Espresso merino-cashmere ripple throw with fringe",
        "url": "https://www.amazon.com/dp/B07H9F2YQ5?tag=feelingpret0e-20"
      },
      {
        "name": "Ivory boucle pillow covers, 18x18, set of 2 (MIULEE)",
        "url": "https://www.amazon.com/dp/B0CQC8QSW4?tag=feelingpret0e-20"
      },
      {
        "name": "Dark wood brown vintage distressed rug, 5x7 (Jainmy)",
        "url": "https://www.amazon.com/dp/B0GGHJ7LXF?tag=feelingpret0e-20"
      },
      {
        "name": "Brass gold taper candlesticks, set of 6 (NLBTW)",
        "url": "https://www.amazon.com/dp/B0CRRKDKVT?tag=feelingpret0e-20"
      },
      {
        "name": "Natural black marble tray, 9.8 x 5.9 in (OAIQNUJ)",
        "url": "https://www.amazon.com/dp/B0CF9852R8?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-home-office-edit",
    "title": "The Moody Home Office Edit",
    "image": "/boards/the-moody-home-office-edit.png",
    "items": [
      {
        "name": "Cognac brown leather mid-century desk chair (Bananister)",
        "url": "https://www.amazon.com/dp/B0DD3BBN7M?tag=feelingpret0e-20"
      },
      {
        "name": "Solid wood writing desk, walnut finish (ODCVKRT)",
        "url": "https://www.amazon.com/dp/B0F946Z7NH?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage gold-framed river landscape wall art (GdTosllpvb)",
        "url": "https://www.amazon.com/dp/B0GS17G4JD?tag=feelingpret0e-20"
      },
      {
        "name": "Dark brown leather desk blotter with side rails, 30 x 18 (Dacasso)",
        "url": "https://www.amazon.com/dp/B0FDM95LR8?tag=feelingpret0e-20"
      },
      {
        "name": "Brass rotating armillary hourglass, 60 min",
        "url": "https://www.amazon.com/dp/B086WDB4QN?tag=feelingpret0e-20"
      },
      {
        "name": "Antique brass cast-iron taper candle holders, set of 2 (HUTUTUKJ)",
        "url": "https://www.amazon.com/dp/B0H35XSJ31?tag=feelingpret0e-20"
      },
      {
        "name": "Gold laser-cut geometric pencil cup (Deco 79)",
        "url": "https://www.amazon.com/dp/B07BB3V5HS?tag=feelingpret0e-20"
      },
      {
        "name": "Black marble pen cup (WORHE)",
        "url": "https://www.amazon.com/dp/B09TQM61N9?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-fireplace-mantel-edit",
    "title": "The Moody Fireplace Mantel Edit",
    "image": "/boards/the-moody-fireplace-mantel-edit.png",
    "items": [
      {
        "name": "Antique gold ornate oval wall mirror, 18 x 24 in (SIMON'S SHOP)",
        "url": "https://www.amazon.com/dp/B0GZN6V7Q6?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage gold-framed mountain meadow landscape wall art",
        "url": "https://www.amazon.com/dp/B0GXJPWHSS?tag=feelingpret0e-20"
      },
      {
        "name": "Preserved burgundy red eucalyptus stems, 20 pcs",
        "url": "https://www.amazon.com/dp/B0D1MZ83WT?tag=feelingpret0e-20"
      },
      {
        "name": "Antique brass taper candlesticks, set of 3 (Perfnique)",
        "url": "https://www.amazon.com/dp/B0FK2KBVK9?tag=feelingpret0e-20"
      },
      {
        "name": "Large black wabi-sabi ceramic vase, 11 in",
        "url": "https://www.amazon.com/dp/B0GWCW1JLT?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage gold crane figurines, set of 2 (NIKKY HOME)",
        "url": "https://www.amazon.com/dp/B0G37JBQD4?tag=feelingpret0e-20"
      },
      {
        "name": "Nero Marquina black marble pedestal bowl, 9.8 in",
        "url": "https://www.amazon.com/dp/B0HBC5VT68?tag=feelingpret0e-20"
      },
      {
        "name": "Dark brown wood pedestal riser, 12 x 7 in (Amyhill)",
        "url": "https://www.amazon.com/dp/B0BNVTLCB4?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "midnight-movie-boo-basket",
    "title": "Midnight Movie Boo Basket",
    "image": "/boards/midnight-movie-boo-basket.png",
    "items": [
      {
        "name": "Black woven cotton rope gift basket with handles, 15 x 10 x 9 in (WILLITAT)",
        "url": "https://www.amazon.com/dp/B0G43DLLW7?tag=feelingpret0e-20"
      },
      {
        "name": "Black knit throw with fringe, 50x60 (Homiest)",
        "url": "https://www.amazon.com/dp/B0D5QH18HW?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage gold chamberstick taper holders, set of 2 (NIKKY HOME)",
        "url": "https://www.amazon.com/dp/B0DYCVC5K8?tag=feelingpret0e-20"
      },
      {
        "name": "Matte black wabi-sabi ceramic bowl (salomayes)",
        "url": "https://www.amazon.com/dp/B0GV2F58NM?tag=feelingpret0e-20"
      },
      {
        "name": "Black mug with white ghosts, 14 oz (Sweet Water Decor)",
        "url": "https://www.amazon.com/dp/B0D647Y84K?tag=feelingpret0e-20"
      },
      {
        "name": "Embossed glass canister with acacia lid, 34 oz (ComSaf)",
        "url": "https://www.amazon.com/dp/B0H3TF8VDD?tag=feelingpret0e-20"
      },
      {
        "name": "Solid black unscented pillar candle (Mega Candles)",
        "url": "https://www.amazon.com/dp/B0BM548XQJ?tag=feelingpret0e-20"
      },
      {
        "name": "Black mulberry silk sleep mask (LULUSILK)",
        "url": "https://www.amazon.com/dp/B01LYN8P86?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-witching-hour-boo-basket",
    "title": "The Witching Hour Boo Basket",
    "image": "/boards/the-witching-hour-boo-basket.png",
    "items": [
      {
        "name": "Black hand-woven willow basket with handle (LIOOBO)",
        "url": "https://www.amazon.com/dp/B0D4YBDN1V?tag=feelingpret0e-20"
      },
      {
        "name": "Gold crescent moon candle holders, set of 2 (MrMrKura)",
        "url": "https://www.amazon.com/dp/B0DM27S4KK?tag=feelingpret0e-20"
      },
      {
        "name": "Smoky gray ribbed glass jar with wood lid, 25 oz",
        "url": "https://www.amazon.com/dp/B0GYL5PYDR?tag=feelingpret0e-20"
      },
      {
        "name": "Black cauldron ceramic mug, 12 oz",
        "url": "https://www.amazon.com/dp/B0H1WD8YYH?tag=feelingpret0e-20"
      },
      {
        "name": "Wine red velvet moon & stars cosmetic bag",
        "url": "https://www.amazon.com/dp/B0FFSK13QY?tag=feelingpret0e-20"
      },
      {
        "name": "Black taper candles, 10 in, 4 pack (Everymoment)",
        "url": "https://www.amazon.com/dp/B0GX28NC63?tag=feelingpret0e-20"
      },
      {
        "name": "Black moon ceramic jewelry dish (BIHOIB)",
        "url": "https://www.amazon.com/dp/B08Y71T872?tag=feelingpret0e-20"
      },
      {
        "name": "Black lace oversized scrunchies (Dimeho)",
        "url": "https://www.amazon.com/dp/B0F6YCWTBB?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-dark-romance-boo-basket",
    "title": "The Dark Romance Boo Basket",
    "image": "/boards/the-dark-romance-boo-basket.png",
    "items": [
      {
        "name": "Brown wicker gift basket with handles (Kingwillow)",
        "url": "https://www.amazon.com/dp/B01KCMRYWW?tag=feelingpret0e-20"
      },
      {
        "name": "Dark wood keepsake boxes with hinged lids, set of 2 (Saijax)",
        "url": "https://www.amazon.com/dp/B0CH9FW6LY?tag=feelingpret0e-20"
      },
      {
        "name": "Garnet red textured pillar candle, 3x6 in, unscented (Root Candles)",
        "url": "https://www.amazon.com/dp/B0759QNF69?tag=feelingpret0e-20"
      },
      {
        "name": "Red velvet jewelry box (Oirlv)",
        "url": "https://www.amazon.com/dp/B08LL29DZX?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy glass heart trinket box",
        "url": "https://www.amazon.com/dp/B0CQ2J4NJR?tag=feelingpret0e-20"
      },
      {
        "name": "Gold refillable perfume atomizers, 5 ml",
        "url": "https://www.amazon.com/dp/B0GXWVJCB5?tag=feelingpret0e-20"
      },
      {
        "name": "Gold compact mirror, 1x/2x (MIHAGUTY)",
        "url": "https://www.amazon.com/dp/B08NTNQMZ5?tag=feelingpret0e-20"
      },
      {
        "name": "Dark red velvet hair bow clips, 3 in",
        "url": "https://www.amazon.com/dp/B0CN4G5V68?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-entryway-edit",
    "title": "The Moody Entryway Edit",
    "image": "/boards/the-moody-entryway-edit.png",
    "items": [
      {
        "name": "Vintage gold arched baroque wall mirror, 16 x 24 in (Keonjinn)",
        "url": "https://www.amazon.com/dp/B0DFQ2X5W9?tag=feelingpret0e-20"
      },
      {
        "name": "Grand console table, 66 in, walnut wirebrush (Plank+Beam)",
        "url": "https://www.amazon.com/dp/B0DK7VFMXW?tag=feelingpret0e-20"
      },
      {
        "name": "Black metal candle lanterns, set of 2",
        "url": "https://www.amazon.com/dp/B0H7RD1PBP?tag=feelingpret0e-20"
      },
      {
        "name": "Large rustic brown ceramic vase, 13.2 in",
        "url": "https://www.amazon.com/dp/B0H86M3B58?tag=feelingpret0e-20"
      },
      {
        "name": "Faux olive branches, 28 in, 4 pcs (SHACOS)",
        "url": "https://www.amazon.com/dp/B07R21HCMT?tag=feelingpret0e-20"
      },
      {
        "name": "Antique brass cast iron taper candlesticks, set of 3 (NUPTIO)",
        "url": "https://www.amazon.com/dp/B0FPQLZ5KB?tag=feelingpret0e-20"
      },
      {
        "name": "Black marble oval catchall tray, 10.6 in",
        "url": "https://www.amazon.com/dp/B0DG58KRS4?tag=feelingpret0e-20"
      },
      {
        "name": "Black metal umbrella stand (Mango Steam)",
        "url": "https://www.amazon.com/dp/B078HDDCC7?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-after-hours-hostess-edit",
    "title": "The After Hours Hostess Edit",
    "image": "/boards/the-after-hours-hostess-edit.png",
    "items": [
      {
        "name": "Hammered gold double-wall ice bucket with lid and tongs, 3 L",
        "url": "https://www.amazon.com/dp/B0GX1BX32G?tag=feelingpret0e-20"
      },
      {
        "name": "Ribbed smoke glass carafe with gold lid, 44 oz (DUJUST)",
        "url": "https://www.amazon.com/dp/B0CL9LQR1N?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut solid wood serving and cutting board, 20 x 13.75 in (HexClad)",
        "url": "https://www.amazon.com/dp/B0F9YVSSPL?tag=feelingpret0e-20"
      },
      {
        "name": "Brass metal tray with handles (Kate and Laurel Halsey)",
        "url": "https://www.amazon.com/dp/B0GL3LPW5S?tag=feelingpret0e-20"
      },
      {
        "name": "Linen-feel brown cocktail napkins",
        "url": "https://www.amazon.com/dp/B08MWML2JP?tag=feelingpret0e-20"
      },
      {
        "name": "Smoke coupe cocktail glasses, set of 4 (Lenox Curva Luxe)",
        "url": "https://www.amazon.com/dp/B0GKQZJZYX?tag=feelingpret0e-20"
      },
      {
        "name": "Gold cocktail picks with holder (Lexenic)",
        "url": "https://www.amazon.com/dp/B0D452YZR2?tag=feelingpret0e-20"
      },
      {
        "name": "Cast brass wall-mounted bottle opener",
        "url": "https://www.amazon.com/dp/B07R817R1Z?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-laundry-room-edit",
    "title": "The Moody Laundry Room Edit",
    "image": "/boards/the-moody-laundry-room-edit.png",
    "items": [
      {
        "name": "Wooden folding clothes drying rack (Home IT)",
        "url": "https://www.amazon.com/dp/B0117PHGP8?tag=feelingpret0e-20"
      },
      {
        "name": "Black metal wire storage bin, 12 x 12 x 10 in (DII)",
        "url": "https://www.amazon.com/dp/B01CH7TMAW?tag=feelingpret0e-20"
      },
      {
        "name": "Brown vintage washable runner rug, 2x6",
        "url": "https://www.amazon.com/dp/B0F7RBWMCP?tag=feelingpret0e-20"
      },
      {
        "name": "Dark walnut wood floating shelves (Urbandi)",
        "url": "https://www.amazon.com/dp/B0CZNBNBBL?tag=feelingpret0e-20"
      },
      {
        "name": "Amber glass dispensers with black pumps, 2 pack (AmazerBath)",
        "url": "https://www.amazon.com/dp/B0948W716F?tag=feelingpret0e-20"
      },
      {
        "name": "Dark brown woven paper rope baskets, 2 pack (StorageWorks)",
        "url": "https://www.amazon.com/dp/B08XZFL9ZN?tag=feelingpret0e-20"
      },
      {
        "name": "Amber square glass canister with wood lid, 61 oz (ANSQU)",
        "url": "https://www.amazon.com/dp/B0G13423VC?tag=feelingpret0e-20"
      },
      {
        "name": "Antique brass double coat hooks, 2 pack (SDH)",
        "url": "https://www.amazon.com/dp/B0855LDDTJ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-reading-nook",
    "title": "The Moody Reading Nook",
    "image": "/boards/the-moody-reading-nook.png",
    "items": [
      {
        "name": "Leather magazine holder basket, 16 x 10 x 12 in (deco 79)",
        "url": "https://www.amazon.com/dp/B0CM7Q8KD9?tag=feelingpret0e-20"
      },
      {
        "name": "Chunky cotton knit throw blanket, chocolate (YnM)",
        "url": "https://www.amazon.com/dp/B0D3WKJLPM?tag=feelingpret0e-20"
      },
      {
        "name": "Velvet throw pillow covers, set of 2, oxblood (Jeneoo)",
        "url": "https://www.amazon.com/dp/B09GFSKZHF?tag=feelingpret0e-20"
      },
      {
        "name": "Wooden book stand (TILISMA)",
        "url": "https://www.amazon.com/dp/B08LDWH7VF?tag=feelingpret0e-20"
      },
      {
        "name": "Gold metal arched bookends (Chunful)",
        "url": "https://www.amazon.com/dp/B0H8S8NNTX?tag=feelingpret0e-20"
      },
      {
        "name": "Reactive glaze stoneware mug, 18 oz",
        "url": "https://www.amazon.com/dp/B0H3ZTL7X4?tag=feelingpret0e-20"
      },
      {
        "name": "Antique brass chamberstick candle holder (Healifty)",
        "url": "https://www.amazon.com/dp/B0BHSSQLC5?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked grey glass tealight holders, set of 12 (VOHO)",
        "url": "https://www.amazon.com/dp/B0FC276233?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-wine-bar-edit",
    "title": "The Moody Wine Bar Edit",
    "image": "/boards/the-moody-wine-bar-edit.png",
    "items": [
      {
        "name": "Walnut wood wave countertop wine rack, 12 bottle, 3 tier (TRUDING)",
        "url": "https://www.amazon.com/dp/B0F2DRSJBG?tag=feelingpret0e-20"
      },
      {
        "name": "Dublin crystal wine decanter (Godinger)",
        "url": "https://www.amazon.com/dp/B0CQPMQ78B?tag=feelingpret0e-20"
      },
      {
        "name": "Smokey wine glasses, set of 6, 18 oz",
        "url": "https://www.amazon.com/dp/B0CLVD39J1?tag=feelingpret0e-20"
      },
      {
        "name": "Gold metal countertop wine rack, 5 bottle",
        "url": "https://www.amazon.com/dp/B0BNDKW853?tag=feelingpret0e-20"
      },
      {
        "name": "White marble wine bottle chiller (Kota Japan)",
        "url": "https://www.amazon.com/dp/B088LLMCJ9?tag=feelingpret0e-20"
      },
      {
        "name": "100% linen cocktail napkins, red garnet, set of 12 (Solino Home)",
        "url": "https://www.amazon.com/dp/B07LCLB4Q9?tag=feelingpret0e-20"
      },
      {
        "name": "Black marble coasters, set of 4 with holder",
        "url": "https://www.amazon.com/dp/B0FTW1F9K2?tag=feelingpret0e-20"
      },
      {
        "name": "Gold waiter's corkscrew",
        "url": "https://www.amazon.com/dp/B09HC6M4K3?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-mediterranean-kitchen",
    "title": "The Moody Mediterranean Kitchen",
    "image": "/boards/the-moody-mediterranean-kitchen.png",
    "items": [
      {
        "name": "Walnut cutting boards, set of 3 (Fibogollo)",
        "url": "https://www.amazon.com/dp/B0H1CQ96BV?tag=feelingpret0e-20"
      },
      {
        "name": "Ceramic reactive glaze plates, set of 6 (Pokini)",
        "url": "https://www.amazon.com/dp/B0DW3RNKVS?tag=feelingpret0e-20"
      },
      {
        "name": "Pure linen kitchen towels, olive French stripe",
        "url": "https://www.amazon.com/dp/B09GVZP4NS?tag=feelingpret0e-20"
      },
      {
        "name": "Handmade ceramic pedestal bowl, 11.3 in (1DOT2)",
        "url": "https://www.amazon.com/dp/B0H1HDKNKH?tag=feelingpret0e-20"
      },
      {
        "name": "Hammered brushed gold utensil holder (Monarch Abode)",
        "url": "https://www.amazon.com/dp/B0F5T4DJ5R?tag=feelingpret0e-20"
      },
      {
        "name": "Amber glass olive oil dispenser, 16.9 oz",
        "url": "https://www.amazon.com/dp/B0BQJMG9J4?tag=feelingpret0e-20"
      },
      {
        "name": "Olive wood salad servers (Rock & Branch)",
        "url": "https://www.amazon.com/dp/B0DX8HFJF7?tag=feelingpret0e-20"
      },
      {
        "name": "Olive wood cooking utensils, 6 piece (Gudamaye)",
        "url": "https://www.amazon.com/dp/B0BC5JFVQ7?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-christmas-wishlist",
    "title": "The Moody Christmas Wishlist",
    "image": "/boards/the-moody-christmas-wishlist.png",
    "items": [
      {
        "name": "Chocolate Flannel Fleece Plush Throw (HYSEAS)",
        "url": "https://www.amazon.com/dp/B015007LRY?tag=feelingpret0e-20"
      },
      {
        "name": "Black 40 oz Stainless Tumbler with Handle (Hasle Outfitters)",
        "url": "https://www.amazon.com/dp/B0BRKFQR1N?tag=feelingpret0e-20"
      },
      {
        "name": "Black Genuine Sheepskin Leather Gloves",
        "url": "https://www.amazon.com/dp/B08KSDRN9Q?tag=feelingpret0e-20"
      },
      {
        "name": "14K Gold Hoop Earrings",
        "url": "https://www.amazon.com/dp/B0H5TNSSX8?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "cozy-girl-christmas",
    "title": "Cozy Girl Christmas",
    "image": "/boards/cozy-girl-christmas.png",
    "items": [
      {
        "name": "Cream Velvet-Touch Plush Sherpa Throw, folded (Elegant Comfort)",
        "url": "https://www.amazon.com/dp/B0CKZT393V?tag=feelingpret0e-20"
      },
      {
        "name": "Chestnut Australian Sheepskin Suede Scuff Slippers (Parfeying)",
        "url": "https://www.amazon.com/dp/B099Z737DQ?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Speckled Stoneware-Look Ceramic Mug (Bosmarlin)",
        "url": "https://www.amazon.com/dp/B091SQ4T6S?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Thick Knit Wool-Blend Boot Socks (Weweya)",
        "url": "https://www.amazon.com/dp/B0C9PRL9ZF?tag=feelingpret0e-20"
      },
      {
        "name": "Camel 100% Cashmere Fringed Scarf",
        "url": "https://www.amazon.com/dp/B0CC21Z1K2?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "dark-and-girly-holiday-finds",
    "title": "Dark & Girly Holiday Finds",
    "image": "/boards/dark-and-girly-holiday-finds.png",
    "items": [
      {
        "name": "Black Soft Fleece Throw (Amazon Basics)",
        "url": "https://www.amazon.com/dp/B0DNQ4MR7M?tag=feelingpret0e-20"
      },
      {
        "name": "Black Quilted Shoulder Bag with Gold Chain (Gladdon)",
        "url": "https://www.amazon.com/dp/B0B38NZ18B?tag=feelingpret0e-20"
      },
      {
        "name": "Black Velvet Long-Tail Hair Bow",
        "url": "https://www.amazon.com/dp/B0DMJFLM19?tag=feelingpret0e-20"
      },
      {
        "name": "Freshwater Pearl Drop Earrings (The Pearl Source)",
        "url": "https://www.amazon.com/dp/B00LLIV2L6?tag=feelingpret0e-20"
      },
      {
        "name": "Black Round-Toe Bow Ballet Flats",
        "url": "https://www.amazon.com/dp/B09GVCSSTN?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-golden-hour-edit",
    "title": "The Golden Hour Edit",
    "image": "/boards/the-golden-hour-edit.png",
    "items": [
      {
        "name": "Cognac Genuine Leather Tote (Kattee)",
        "url": "https://www.amazon.com/dp/B07MT5VRTF?tag=feelingpret0e-20"
      },
      {
        "name": "Genuine Suede Ballet Flats, Chocolate Brown (PROJECT CLOUD)",
        "url": "https://www.amazon.com/dp/B0H2FRDB3L?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Speckled Stoneware Mug, 15 oz (Warmthmaster)",
        "url": "https://www.amazon.com/dp/B0H6ML7VJB?tag=feelingpret0e-20"
      },
      {
        "name": "Large Gold Metal Claw Clip (MEDOCA)",
        "url": "https://www.amazon.com/dp/B0D8J8MKN7?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-hot-tub-edit",
    "title": "The Moody Hot Tub Edit",
    "image": "/boards/the-moody-hot-tub-edit.png",
    "items": [
      {
        "name": "Teak Outdoor Side Table (Utoplike)",
        "url": "https://www.amazon.com/dp/B0C5SK9NF2?tag=feelingpret0e-20"
      },
      {
        "name": "Matte Black Insulated Ice Bucket with Brass Lid & Scoop, 3.2L",
        "url": "https://www.amazon.com/dp/B0DPH9SK5Q?tag=feelingpret0e-20"
      },
      {
        "name": "Charcoal Turkish Cotton Towel (PÜSKÜL)",
        "url": "https://www.amazon.com/dp/B0BGSB7H7H?tag=feelingpret0e-20"
      },
      {
        "name": "Stainless Steel Stemless Wine Glasses, Set of 4 (WOTOR)",
        "url": "https://www.amazon.com/dp/B0D4YSZ8WZ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-picnic-edit",
    "title": "The Moody Picnic Edit",
    "image": "/boards/the-moody-picnic-edit.png",
    "items": [
      {
        "name": "Wicker Picnic Basket with Lid & Liner",
        "url": "https://www.amazon.com/dp/B00JOL7J6Y?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy Plaid Fringed Throw (VHC Brands Eston)",
        "url": "https://www.amazon.com/dp/B0CFLFZ8HF?tag=feelingpret0e-20"
      },
      {
        "name": "Antique Brass Glass Lantern, 12\"",
        "url": "https://www.amazon.com/dp/B0GJKFBP75?tag=feelingpret0e-20"
      },
      {
        "name": "Acacia Wood Charcuterie Board with Handle",
        "url": "https://www.amazon.com/dp/B0FPF453LT?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-outdoor-kitchen-edit",
    "title": "The Moody Outdoor Kitchen Edit",
    "image": "/boards/the-moody-outdoor-kitchen-edit.png",
    "items": [
      {
        "name": "Acacia Wood Serving Tray with Gold Handles, 17x13 (Cirella Home)",
        "url": "https://www.amazon.com/dp/B0HFN9VKM6?tag=feelingpret0e-20"
      },
      {
        "name": "End-Grain Walnut Cutting Board, 20x15 (THETCHRY)",
        "url": "https://www.amazon.com/dp/B0H6DCBNZT?tag=feelingpret0e-20"
      },
      {
        "name": "Matte Black Stoneware Dinnerware Set (Gibson Home Zuma)",
        "url": "https://www.amazon.com/dp/B0C67FGTT2?tag=feelingpret0e-20"
      },
      {
        "name": "Hurricane Candle Lanterns with Wood Base, Set of 2 (Houmury)",
        "url": "https://www.amazon.com/dp/B0FPCZ9VYV?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "closet-after-dark",
    "title": "Closet After Dark",
    "image": "/boards/closet-after-dark.png",
    "items": [
      {
        "name": "Gold Display Risers for Handbags, Set of 3",
        "url": "https://www.amazon.com/dp/B092V728WG?tag=feelingpret0e-20"
      },
      {
        "name": "Black Walnut Wood Jewelry Box with Brass Handle (Homruilink)",
        "url": "https://www.amazon.com/dp/B0D6G9SX5P?tag=feelingpret0e-20"
      },
      {
        "name": "Antique Brass Coat Hooks, 5 Pack (CABDM)",
        "url": "https://www.amazon.com/dp/B0FDB9216V?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Tufted Velvet Round Ottoman with Gold Base (Ornavo Home Beverly)",
        "url": "https://www.amazon.com/dp/B0848HGY9N?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-layered-moody-bed",
    "title": "The Layered Moody Bed",
    "image": "/boards/the-layered-moody-bed.png",
    "items": [
      {
        "name": "Cross-Stitch Velvet Quilt Set, Light Taupe (EverGrace)",
        "url": "https://www.amazon.com/dp/B0D5B5NZF3?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Velvet Pillow Covers, 20x20, Set of 2 (MIULEE)",
        "url": "https://www.amazon.com/dp/B07VLL8T2Y?tag=feelingpret0e-20"
      },
      {
        "name": "Warm Beige Chenille Waffle Throw (Amélie Home)",
        "url": "https://www.amazon.com/dp/B0D1K5JMKV?tag=feelingpret0e-20"
      },
      {
        "name": "Deep Gold Round Tray, 14 inch, Brass-Tone Stainless Steel (i-lan)",
        "url": "https://www.amazon.com/dp/B0CXD932WB?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-dusty-rose-vanity-edit",
    "title": "The Dusty Rose Vanity Edit",
    "image": "/boards/the-dusty-rose-vanity-edit.png",
    "items": [
      {
        "name": "Antique Gold Vintage Tabletop Vanity Mirror, 12x9.8",
        "url": "https://www.amazon.com/dp/B0D9N9R8KG?tag=feelingpret0e-20"
      },
      {
        "name": "Mauve Textured Velvet Ottoman Stool with Gold Base (MEXIYA Della)",
        "url": "https://www.amazon.com/dp/B07F7VH1V1?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Ribbed Glass Makeup Brush Holder (Fvstar)",
        "url": "https://www.amazon.com/dp/B0B8YWVNHN?tag=feelingpret0e-20"
      },
      {
        "name": "Large Burgundy Velvet Hair Bow Barrette (EmilyRose Couture)",
        "url": "https://www.amazon.com/dp/B0BNW9WQFC?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-book-lovers-night-in",
    "title": "The Book Lover's Night In",
    "image": "/boards/the-book-lovers-night-in.png",
    "items": [
      {
        "name": "Reading Pillow for Sitting Up in Bed, Corduroy Backrest Pillow with Arms, Side Pocket & Wa",
        "url": "https://www.amazon.com/dp/B0G7YW8RMK?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Throw Blanket, 50\"x60\", Soft Sherpa Blanket for Couch or Bed",
        "url": "https://www.amazon.com/dp/B0GYQJ3TZS?tag=feelingpret0e-20"
      },
      {
        "name": "Solid Wooden Book Stand 16\" x 9.5\" x 6\" Extra Large Display Stand",
        "url": "https://www.amazon.com/dp/B0FLWRS3KZ?tag=feelingpret0e-20"
      },
      {
        "name": "MIXVOVA 6 Pcs Leather Bookmark with Tassel, Classic Style Bookmark, 0.05 Inches Thin Handm",
        "url": "https://www.amazon.com/dp/B0DP5Y62L2?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-coffee-lover-gift-edit",
    "title": "The Gift Edit for the Coffee Lover",
    "image": "/boards/the-coffee-lover-gift-edit.png",
    "items": [
      {
        "name": "Bodum 27oz Bistro Gooseneck Electric Water Kettle, Pour Over Coffee & Tea, Stainless Steel",
        "url": "https://www.amazon.com/dp/B07G2MBM6L?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage Wooden Manual Coffee Grinder, Hand Crank Coffee Mill with Ceramic Burr, Adjustable",
        "url": "https://www.amazon.com/dp/B07B9F7KBM?tag=feelingpret0e-20"
      },
      {
        "name": "Kalita Style Coffee dripper, 102, 4 cups, Brown",
        "url": "https://www.amazon.com/dp/B0038L2I3A?tag=feelingpret0e-20"
      },
      {
        "name": "KKC HOME ACCENTS 40 oz Glass Coffee Container (Holds 1 lb Coffee Beans) with Airtight Bamb",
        "url": "https://www.amazon.com/dp/B07Z8X4JTG?tag=feelingpret0e-20"
      },
      {
        "name": "MORA Espresso Mug Set of 2 with Saucers, 4 oz Ceramic Cups for Espresso and Small Coffee M",
        "url": "https://www.amazon.com/dp/B0GWNDTFBD?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-gift-edit-for-mom",
    "title": "The Gift Edit for Mom",
    "image": "/boards/the-gift-edit-for-mom.png",
    "items": [
      {
        "name": "Fishers Finery Men's 100% Pure Cashmere Winter Scarf; 2-Ply Ultra Plush",
        "url": "https://www.amazon.com/dp/B07GDTP899?tag=feelingpret0e-20"
      },
      {
        "name": "SUNDAYSILKS™ 100% Mulberry Silk Pillowcase, Silk Pillow Cases for Hair & Skin, Superior to",
        "url": "https://www.amazon.com/dp/B0DDNLKBWL?tag=feelingpret0e-20"
      },
      {
        "name": "Aspen & Fog Scented Candle - 75 Hour Burn",
        "url": "https://www.amazon.com/dp/B08CBWWMVY?tag=feelingpret0e-20"
      },
      {
        "name": "100% Solid Brass Clawfoot Dish - Pedestal Dish - 4.6 in - Candle Dish - Candle Holder - Ca",
        "url": "https://www.amazon.com/dp/B0CVRV7NGY?tag=feelingpret0e-20"
      },
      {
        "name": "Aesop Resurrection Aromatique Hand Balm, to Soften and Hydrate Hands, 2.4oz",
        "url": "https://www.amazon.com/dp/B000IB0GYQ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-holiday-cocktail-hour",
    "title": "The Holiday Cocktail Hour",
    "image": "/boards/the-holiday-cocktail-hour.png",
    "items": [
      {
        "name": "Nick and Nora Coupe Cocktail Glasses - Handblown Set of 2, Small Plain Vintage Coupe Glass",
        "url": "https://www.amazon.com/dp/B07NQWH7QY?tag=feelingpret0e-20"
      },
      {
        "name": "Barfly M37009GD Cocktail Tin, Set (18 oz and 28 oz), Gold",
        "url": "https://www.amazon.com/dp/B074HPD254?tag=feelingpret0e-20"
      },
      {
        "name": "Fortessa Jupiter Beaded Hobnail Glass, 10 Ounce Double Old Fashioned (Set of 4), Smoke Gra",
        "url": "https://www.amazon.com/dp/B09ZVLC3LG?tag=feelingpret0e-20"
      },
      {
        "name": "OGGI 6-Piece Slim Bartender Kit - Ideal Bar Cart Accessories, Great Decor and Accessories",
        "url": "https://www.amazon.com/dp/B0DJDX72YV?tag=feelingpret0e-20"
      },
      {
        "name": "Barfly Cocktail Picks, Grooved, Gold Plated, Set 12, 4.5\"",
        "url": "https://www.amazon.com/dp/B0BMDZ5JZ3?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-homebody-gift-edit",
    "title": "The Gift Edit for the Homebody",
    "image": "/boards/the-homebody-gift-edit.png",
    "items": [
      {
        "name": "CUSHIONAIRE Keto Womens Slippers Slip-On Suede Mule Slipper - Cozy & Stylish, Memory Foam",
        "url": "https://www.amazon.com/dp/B0DGZHJRJ1?tag=feelingpret0e-20"
      },
      {
        "name": "Vanilla Soy Candle, 8.8 oz – Cream Ceramic Jar",
        "url": "https://www.amazon.com/dp/B0H8PZSF6C?tag=feelingpret0e-20"
      },
      {
        "name": "Handmade Ceramic Clay Coffee Mug - Brown Swirl 14oz",
        "url": "https://www.amazon.com/dp/B09QZ2TTB3?tag=feelingpret0e-20"
      },
      {
        "name": "Fibogollo 2 Pack Acacia Wood Breakfast Tray,Folding Bed Tray Table",
        "url": "https://www.amazon.com/dp/B0FG2JLGFR?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-housewarming-gift-edit",
    "title": "The Gift Edit Housewarming",
    "image": "/boards/the-housewarming-gift-edit.png",
    "items": [
      {
        "name": "Sonder Los Angeles Alfred Cutting Board Made in USA | Black Walnut End Grain Cutting Board",
        "url": "https://www.amazon.com/dp/B07Y2YMYML?tag=feelingpret0e-20"
      },
      {
        "name": "Key Holder Wall Mount, Solid Wood Key Holder for Wall with 4 Brass Hooks & Hidden Magnets,",
        "url": "https://www.amazon.com/dp/B0FMSBSRYR?tag=feelingpret0e-20"
      },
      {
        "name": "LE TAUCI Plant Pots, 4.1+5.1+6.5 inch, Set of 3, Reactive Glaze Beige",
        "url": "https://www.amazon.com/dp/B08F7TP4TN?tag=feelingpret0e-20"
      },
      {
        "name": "Calloway Mills Border Doormat 24\" x 36\" (Black)",
        "url": "https://www.amazon.com/dp/B07H3BQCLV?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-stocking-stuffers",
    "title": "The Moody Stocking Stuffers",
    "image": "/boards/the-moody-stocking-stuffers.png",
    "items": [
      {
        "name": "Acetate Hair Claw Clip, Dark Tortoise, 4 Inch Large Hair Clip for Women",
        "url": "https://www.amazon.com/dp/B0HCBWBMVM?tag=feelingpret0e-20"
      },
      {
        "name": "Slip Silk Assorted Scrunchies, Set of 3 | Dark Brown | Made with slipsilk™",
        "url": "https://www.amazon.com/dp/B0CNTWWCLH?tag=feelingpret0e-20"
      },
      {
        "name": "Moyel Warm Wool Cashmere Socks for Women Thermal Winter Socks",
        "url": "https://www.amazon.com/dp/B0DMJ6X9VV?tag=feelingpret0e-20"
      },
      {
        "name": "handmade leather keychain,leather Vintage durability keychain, Gift For Birthday",
        "url": "https://www.amazon.com/dp/B0CLNTVK6P?tag=feelingpret0e-20"
      },
      {
        "name": "Maison Louis Marie No.04 Bois de Balincourt Santal Perfume Oil Mini, 3 ml",
        "url": "https://www.amazon.com/dp/B0BCR43TL6?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-moody-thanksgiving-sideboard",
    "title": "The Moody Thanksgiving Sideboard",
    "image": "/boards/the-moody-thanksgiving-sideboard.png",
    "items": [
      {
        "name": "AIDEA Acacia Wood Serving Bowl for Fruits or Salads, 11\" Diameter x 4.5\" Height, Wooden Si",
        "url": "https://www.amazon.com/dp/B0912MVHXR?tag=feelingpret0e-20"
      },
      {
        "name": "Pfaltzgraff Autumn Berry Gravy Boat, Cream, 9 Inches",
        "url": "https://www.amazon.com/dp/B07X2T8638?tag=feelingpret0e-20"
      },
      {
        "name": "WÜSTHOF Stainless 2-Piece Carving Knife Set",
        "url": "https://www.amazon.com/dp/B0C52VNFFP?tag=feelingpret0e-20"
      },
      {
        "name": "KIVY Butter Dish Black Marble with airtight glass lid - Dishwasher Safe",
        "url": "https://www.amazon.com/dp/B0DPGJNZDR?tag=feelingpret0e-20"
      },
      {
        "name": "Gisly Gold 12 Pieces Serving Utensils Include Large Serving Spoons,Slotted Serving Spoons,",
        "url": "https://www.amazon.com/dp/B0DH2328ZD?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-slow-christmas-morning",
    "title": "The Slow Christmas Morning",
    "image": "/boards/the-slow-christmas-morning.png",
    "items": [
      {
        "name": "Merino Wool Socks for Women, Winter Warm Thermal Thick Boot Socks 4 Pairs",
        "url": "https://www.amazon.com/dp/B0G2WSSCW7?tag=feelingpret0e-20"
      },
      {
        "name": "Bosmarlin Large Ceramic Coffee Mug Set of 2, Stoneware Jumbo Latte Mugs for Office and Hom",
        "url": "https://www.amazon.com/dp/B08HVLJBF6?tag=feelingpret0e-20"
      },
      {
        "name": "Sweet Water Decor Warm & Cozy Candle, 9oz Amber Glass Jar, Winter Scents",
        "url": "https://www.amazon.com/dp/B0C28S8CY8?tag=feelingpret0e-20"
      },
      {
        "name": "Women's 100% Genuine Australian Sheepskin Scuff Slippers",
        "url": "https://www.amazon.com/dp/B088T4YC8X?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "the-thanksgiving-dessert-table",
    "title": "The Thanksgiving Dessert Table",
    "image": "/boards/the-thanksgiving-dessert-table.png",
    "items": [
      {
        "name": "Acacia Wood Cake Stand with Glass Lid–12\" Magnetic Base for Parties&Kitchen",
        "url": "https://www.amazon.com/dp/B0FNM1J9VN?tag=feelingpret0e-20"
      },
      {
        "name": "Hanobe Wooden Cake Pedestal Stand 12\" Display Riser Plate for Home Decor",
        "url": "https://www.amazon.com/dp/B0CG31ZCWZ?tag=feelingpret0e-20"
      },
      {
        "name": "9 Inch Ceramic Pie Pan, Fluted Baking Dish with Brown Glaze Rim, Oven Safe",
        "url": "https://www.amazon.com/dp/B0CX7Y4MKN?tag=feelingpret0e-20"
      },
      {
        "name": "Ceramic Plates Set of 4, 8.5-Inch Speckled Stoneware Plates, Beige Dessert Plates, Modern",
        "url": "https://www.amazon.com/dp/B0GZW385JZ?tag=feelingpret0e-20"
      },
      {
        "name": "2-Piece Gold Cake Server & Pie Cutter Set, Stainless Steel with Gold Finish",
        "url": "https://www.amazon.com/dp/B0GCSFZB6Z?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "baby-its-dark-outside",
    "title": "Baby, It's Dark Outside",
    "image": "/boards/baby-its-dark-outside.png",
    "items": [
      {
        "name": "Black woven gift basket",
        "url": "https://www.amazon.com/dp/B0B34ZBZVV?tag=feelingpret0e-20"
      },
      {
        "name": "Black chunky knit throw blanket",
        "url": "https://www.amazon.com/dp/B0BCPZC924?tag=feelingpret0e-20"
      },
      {
        "name": "Cashmere vanilla candle",
        "url": "https://www.amazon.com/dp/B0F2218YHS?tag=feelingpret0e-20"
      },
      {
        "name": "Matte black ceramic coffee mug",
        "url": "https://www.amazon.com/dp/B07QG3L41B?tag=feelingpret0e-20"
      },
      {
        "name": "Whittard luxury hot chocolate",
        "url": "https://www.amazon.com/dp/B00LL9JI84?tag=feelingpret0e-20"
      },
      {
        "name": "Black faux fur slippers",
        "url": "https://www.amazon.com/dp/B08DXYZT8L?tag=feelingpret0e-20"
      },
      {
        "name": "Charcoal gray fuzzy socks",
        "url": "https://www.amazon.com/dp/B0FLPWKRFB?tag=feelingpret0e-20"
      },
      {
        "name": "Black silk sleep mask",
        "url": "https://www.amazon.com/dp/B08LTGMVBX?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "espresso-yourself-this-winter",
    "title": "Espresso Yourself This Winter",
    "image": "/boards/espresso-yourself-this-winter.png",
    "items": [
      {
        "name": "Espresso brown woven basket",
        "url": "https://www.amazon.com/dp/B0CQKF99H2?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate brown faux fur throw",
        "url": "https://www.amazon.com/dp/B09L13TZTQ?tag=feelingpret0e-20"
      },
      {
        "name": "Mocha knit beanie",
        "url": "https://www.amazon.com/dp/B0HNZT8FF4?tag=feelingpret0e-20"
      },
      {
        "name": "Faux fur earmuffs",
        "url": "https://www.amazon.com/dp/B0FHPCHYRG?tag=feelingpret0e-20"
      },
      {
        "name": "Tortoise insulated coffee tumbler",
        "url": "https://www.amazon.com/dp/B0H3WQRDY6?tag=feelingpret0e-20"
      },
      {
        "name": "Espresso & roast coffee candle",
        "url": "https://www.amazon.com/dp/B0DFVWX5NL?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate-covered espresso beans",
        "url": "https://www.amazon.com/dp/B0FVB2J2ZL?tag=feelingpret0e-20"
      },
      {
        "name": "Brown knit touchscreen gloves",
        "url": "https://www.amazon.com/dp/B0HHK15LNH?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "cold-nights-dark-delights",
    "title": "Cold Nights, Dark Delights",
    "image": "/boards/cold-nights-dark-delights.png",
    "items": [
      {
        "name": "Black woven gift basket (14x10x6 in, with gift bags & ribbon)",
        "url": "https://www.amazon.com/dp/B0DZB7RBM7?tag=feelingpret0e-20"
      },
      {
        "name": "Wine satin pillowcases",
        "url": "https://www.amazon.com/dp/B08LPQ6T35?tag=feelingpret0e-20"
      },
      {
        "name": "Black cherry merlot candle",
        "url": "https://www.amazon.com/dp/B0GQCFYKVX?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy quilted makeup bag",
        "url": "https://www.amazon.com/dp/B00PSPBAII?tag=feelingpret0e-20"
      },
      {
        "name": "Godiva Gold dark chocolate gift box",
        "url": "https://www.amazon.com/dp/B0FDM7N4ZV?tag=feelingpret0e-20"
      },
      {
        "name": "Wine sherpa slipper socks",
        "url": "https://www.amazon.com/dp/B0FNM9Z5SL?tag=feelingpret0e-20"
      },
      {
        "name": "24K gold under-eye patches",
        "url": "https://www.amazon.com/dp/B0C4NWGVTF?tag=feelingpret0e-20"
      },
      {
        "name": "Burgundy claw clip",
        "url": "https://www.amazon.com/dp/B0HFRR8MHQ?tag=feelingpret0e-20"
      },
      {
        "name": "e.l.f. berry tinted lip balm",
        "url": "https://www.amazon.com/dp/B0DZPBWN1L?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "after-dark-the-moody-nighttime-routine",
    "title": "After Dark: The Moody Nighttime Routine",
    "image": "/boards/after-dark-the-moody-nighttime-routine.png",
    "items": [
      {
        "name": "Black Satin Pajamas",
        "url": "https://www2.hm.com/en_us/productpage.1260335003.html"
      },
      {
        "name": "Amber Glass Holders",
        "url": "https://www.amazon.com/dp/B0DGSJLL22?tag=feelingpret0e-20"
      },
      {
        "name": "Black Sleep Mask",
        "url": "https://www.amazon.com/dp/B0CGLMKX9N?tag=feelingpret0e-20"
      },
      {
        "name": "Cashmere + Vanilla",
        "url": "https://www.amazon.com/dp/B0CBCZ49D2?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Fleece Robe",
        "url": "https://www.hunkemoller.com/soft-fleece-bathrobe-brown-307127.html"
      },
      {
        "name": "Amber Travel Bottles",
        "url": "https://www.amazon.com/dp/B0FWBPFL1F?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "slow-mornings-dark-coffee",
    "title": "Slow Mornings, Dark Coffee",
    "image": "/boards/slow-mornings-dark-coffee.png",
    "items": [
      {
        "name": "Rustic Ceramic Mugs",
        "url": "https://www.amazon.com/dp/B0DP7JW9C2?tag=feelingpret0e-20"
      },
      {
        "name": "White Waffle Robe",
        "url": "https://parachutehome.com/products/waffle-robe-white"
      },
      {
        "name": "Leather Journal",
        "url": "https://www.amazon.com/dp/B0F6JVFLWW?tag=feelingpret0e-20"
      },
      {
        "name": "Black French Press",
        "url": "https://www.amazon.com/dp/B0FDBHR65D?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Fuzzy Slippers",
        "url": "https://www.amazon.com/dp/B0BYNYWKC7?tag=feelingpret0e-20"
      },
      {
        "name": "Espresso Candle",
        "url": "https://www.amazon.com/dp/B0CM1XQZ36?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "out-of-office-the-moody-lunch-hour",
    "title": "Out of Office (For an Hour)",
    "image": "/boards/out-of-office-the-moody-lunch-hour.png",
    "items": [
      {
        "name": "Chocolate-Tone Tote",
        "url": "https://www.amazon.com/dp/B0FJXQGFK3?tag=feelingpret0e-20"
      },
      {
        "name": "Quilted Lunch Bag",
        "url": "https://www.amazon.com/dp/B0D1MGJVH4?tag=feelingpret0e-20"
      },
      {
        "name": "Glass Water Bottle",
        "url": "https://www.amazon.com/dp/B09J57Q5VY?tag=feelingpret0e-20"
      },
      {
        "name": "Travel Cutlery",
        "url": "https://www.amazon.com/dp/B0BPMKX8BW?tag=feelingpret0e-20"
      },
      {
        "name": "Brown 2027 Planner",
        "url": "https://www.amazon.com/dp/B0GS4121FC?tag=feelingpret0e-20"
      },
      {
        "name": "Sea Salt Caramels",
        "url": "https://www.amazon.com/dp/B0BHFDFRZS?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "walls-that-whisper",
    "title": "Walls That Whisper",
    "image": "/boards/walls-that-whisper.png",
    "items": [
      {
        "name": "Foggy Forest Photo",
        "url": "https://society6.com/products/the-dense-foggy-forest-black-and-white_framed-art-print"
      },
      {
        "name": "Warm Abstract Trio",
        "url": "https://www.amazon.com/dp/B0G4TSMF6K?tag=feelingpret0e-20"
      },
      {
        "name": "Dark Floral Print",
        "url": "https://www.amazon.com/dp/B0H87HK4Z4?tag=feelingpret0e-20"
      },
      {
        "name": "Ornate Gold-Tone Frame",
        "url": "https://www.amazon.com/dp/B0CJ9SQZBC?tag=feelingpret0e-20"
      },
      {
        "name": "Black Textured Canvas",
        "url": "https://www.amazon.com/dp/B0HD5TJ1GR?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage Landscape",
        "url": "https://www.amazon.com/dp/B0GYDM5SXN?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "powder-room-after-dark",
    "title": "Powder Room After Dark",
    "image": "/boards/powder-room-after-dark.png",
    "items": [
      {
        "name": "Braided Oval Mirror",
        "url": "https://tovfurniture.com/products/ravina-braided-brass-oval-wall-mirror"
      },
      {
        "name": "Brass-Finish Pump",
        "url": "https://www.amazon.com/dp/B06WD8CMCR?tag=feelingpret0e-20"
      },
      {
        "name": "Black Marble Tray",
        "url": "https://www.amazon.com/dp/B0BZDG1H8F?tag=feelingpret0e-20"
      },
      {
        "name": "Botanical Print Trio",
        "url": "https://www.amazon.com/dp/B0FZ84FRCV?tag=feelingpret0e-20"
      },
      {
        "name": "Brass-Tone Sconces",
        "url": "https://www.amazon.com/dp/B0D6B9Z52S?tag=feelingpret0e-20"
      },
      {
        "name": "Chocolate Towel Set",
        "url": "https://www.amazon.com/dp/B08FXY9BBS?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "christmas-slowly-coffee-tree",
    "title": "Christmas, Slowly",
    "image": "/boards/christmas-slowly-coffee-tree.png",
    "items": [
      {
        "name": "Fellow Monty Latte Cup",
        "url": "https://fellowproducts.com/products/monty-milk-art-cups?variant=18635552358515"
      },
      {
        "name": "Fellow Atmos Canister",
        "url": "https://fellowproducts.com/products/atmos-vacuum-canister?variant=30935585292403"
      },
      {
        "name": "Fellow Carter Move Mug (Matte White)",
        "url": "https://fellowproducts.com/products/carter-move-mug?variant=32552875589732"
      },
      {
        "name": "Fellow Stagg EKG Pro Kettle",
        "url": "https://fellowproducts.com/products/stagg-ekg-electric-pour-over-kettle?variant=45391811543140"
      },
      {
        "name": "Fellow Clara French Press",
        "url": "https://fellowproducts.com/products/clara-french-press?variant=32972573278308"
      },
      {
        "name": "Onyx Coffee Lab Monarch Coffee",
        "url": "https://onyxcoffeelab.com/products/monarch?variant=31861823176802"
      }
    ]
  },
  {
    "slug": "a-pilates-christmas-tree",
    "title": "A Pilates Christmas",
    "image": "/boards/a-pilates-christmas-tree.png",
    "items": [
      {
        "name": "Bala Bars",
        "url": "https://shopbala.com/products/bala-bars?variant=39710533648519"
      },
      {
        "name": "Bala Bangles",
        "url": "https://shopbala.com/products/bala-bangles?variant=39657142780039"
      },
      {
        "name": "Bala Pilates Ball",
        "url": "https://shopbala.com/products/bala-ball?variant=39762857918599"
      },
      {
        "name": "Bala Bottle",
        "url": "https://shopbala.com/products/bala-bottle?variant=41989502959751"
      },
      {
        "name": "Bala Hourglass Roller",
        "url": "https://shopbala.com/products/the-hourglass-roller?variant=40893793501319"
      },
      {
        "name": "Bala Grip Socks",
        "url": "https://shopbala.com/products/get-a-grip-socks?variant=40902793789575"
      }
    ]
  },
  {
    "slug": "a-homebody-christmas-tree",
    "title": "A Homebody Christmas",
    "image": "/boards/a-homebody-christmas-tree.png",
    "items": [
      {
        "name": "P.F. Candle Co. Amber + Moss Candle",
        "url": "https://pfcandleco.com/products/amber-moss-standard-candle?variant=11155989701"
      },
      {
        "name": "Vitruvi Stone Diffuser",
        "url": "https://vitruvi.com/products/stone-essential-oil-diffuser?variant=41381103763636"
      },
      {
        "name": "Slip Silk Skinny Scrunchies",
        "url": "https://www.slip.com/products/slip-silk-skinny-scrunchies-light-brown?variant=40025014927463"
      },
      {
        "name": "Slip Silk Pillowcase",
        "url": "https://www.slip.com/products/pillowcase-caramel-queen-zippered?variant=12901737103463"
      },
      {
        "name": "Barefoot Dreams CozyChic Throw",
        "url": "https://www.barefootdreams.com/products/copy-of-cozychic-throw-all-colors?variant=41094016761949"
      },
      {
        "name": "Nodpod Sleep Mask (Mocha)",
        "url": "https://nodpod.com/products/nodpod?variant=47621908267178"
      }
    ]
  },
  {
    "slug": "winter-coffee-bar",
    "title": "Winter Coffee Bar",
    "image": "/boards/winter-coffee-bar.png",
    "items": [
      {
        "name": "Cream Stoneware Mugs",
        "url": "https://www.amazon.com/dp/B09TW5YYYY?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut-Lid Canister",
        "url": "https://www.amazon.com/dp/B0H6FQM889?tag=feelingpret0e-20"
      },
      {
        "name": "Smoked Glass Pump",
        "url": "https://www.amazon.com/dp/B073V6XDWK?tag=feelingpret0e-20"
      },
      {
        "name": "Brown Ribbed Glasses",
        "url": "https://www.amazon.com/dp/B0G6ZG93ZS?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut-Finish Tray Set",
        "url": "https://www.amazon.com/dp/B0GPY1CNJF?tag=feelingpret0e-20"
      },
      {
        "name": "Black + Wood Mug Tree",
        "url": "https://www.amazon.com/dp/B0GWY69BBH?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "snow-day-favorites",
    "title": "Snow Day Favorites",
    "image": "/boards/snow-day-favorites.png",
    "items": [
      {
        "name": "Channel Faux Fur Throw",
        "url": "https://www.amazon.com/dp/B0H4GG3PSP?tag=feelingpret0e-20"
      },
      {
        "name": "Ivory Footed Mugs",
        "url": "https://www.amazon.com/dp/B0FTW4BLFH?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Snack Tray",
        "url": "https://www.amazon.com/dp/B0FQBR51QL?tag=feelingpret0e-20"
      },
      {
        "name": "Teddy Bouclé Slides",
        "url": "https://www.amazon.com/dp/B0HLHDZ292?tag=feelingpret0e-20"
      },
      {
        "name": "500-Piece Wood Puzzle",
        "url": "https://www.amazon.com/dp/B0FT8TLRVD?tag=feelingpret0e-20"
      },
      {
        "name": "Warm Amber Candle",
        "url": "https://www.amazon.com/dp/B0D44QXF5B?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "black-and-white-gallery",
    "title": "Black & White Gallery",
    "image": "/boards/black-and-white-gallery-v2.png",
    "items": [
      {
        "name": "Abstract Canvas",
        "url": "https://www.amazon.com/dp/B0DK33JVKK?tag=feelingpret0e-20"
      },
      {
        "name": "Paris Street Photo",
        "url": "https://www.amazon.com/dp/B0D584KJX8?tag=feelingpret0e-20"
      },
      {
        "name": "One-Line Face Art",
        "url": "https://www.amazon.com/dp/B0HNL54XCC?tag=feelingpret0e-20"
      },
      {
        "name": "Rookery Staircase",
        "url": "https://www.amazon.com/dp/B0D583WXXH?tag=feelingpret0e-20"
      },
      {
        "name": "Vintage Fashion Photo",
        "url": "https://www.amazon.com/dp/B0HJYB7ZGS?tag=feelingpret0e-20"
      },
      {
        "name": "Brushstroke Canvas",
        "url": "https://www.amazon.com/dp/B0H4TKL934?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "holiday-entryway-reset",
    "title": "Holiday Entryway Reset",
    "image": "/boards/holiday-entryway-reset-v3.png",
    "items": [
      {
        "name": "Black Arched Mirror",
        "url": "https://www.amazon.com/dp/B0CTSVSV7R?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Console Table",
        "url": "https://www.amazon.com/dp/B0DQW44PVS?tag=feelingpret0e-20"
      },
      {
        "name": "Woven Basket",
        "url": "https://www.amazon.com/dp/B09F9F8P5R?tag=feelingpret0e-20"
      },
      {
        "name": "Cream Fluted Vase",
        "url": "https://www.amazon.com/dp/B0HQY8KWSN?tag=feelingpret0e-20"
      },
      {
        "name": "Wood Decorative Bowl",
        "url": "https://www.amazon.com/dp/B0F98YYF2S?tag=feelingpret0e-20"
      },
      {
        "name": "Braided Jute Rug",
        "url": "https://www.amazon.com/dp/B0F3JP6WRJ?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "porch-noir-arch",
    "title": "Porch Noir",
    "image": "/boards/porch-noir-arch.png",
    "items": [
      {
        "name": "Spire Floor Lantern",
        "url": "https://www.amazon.com/dp/B0FJLT66BR?tag=feelingpret0e-20"
      },
      {
        "name": "Tall Concrete Planter",
        "url": "https://www.amazon.com/dp/B0DPW1RB14?tag=feelingpret0e-20"
      },
      {
        "name": "Ivory Pillar Candles",
        "url": "https://www.amazon.com/dp/B0B5KZWHVC?tag=feelingpret0e-20"
      },
      {
        "name": "Classic Porch Rocker",
        "url": "https://www.amazon.com/dp/B0GVGJ6XNL?tag=feelingpret0e-20"
      },
      {
        "name": "Black & Tan Plaid Throw",
        "url": "https://www.amazon.com/dp/B08CY71NTV?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-game-night-arch",
    "title": "Moody Game Night",
    "image": "/boards/moody-game-night-arch.png",
    "items": [
      {
        "name": "Walnut Chess Set",
        "url": "https://www.amazon.com/dp/B088CW36HC?tag=feelingpret0e-20"
      },
      {
        "name": "Brass Taper Holders",
        "url": "https://www.amazon.com/dp/B0DTHJYKVH?tag=feelingpret0e-20"
      },
      {
        "name": "Inlaid Backgammon Set",
        "url": "https://www.amazon.com/dp/B004ADTC48?tag=feelingpret0e-20"
      },
      {
        "name": "Walnut Snack Bowls",
        "url": "https://www.amazon.com/dp/B0H6P5B3C4?tag=feelingpret0e-20"
      },
      {
        "name": "Smoke Art Deco Glasses",
        "url": "https://www.amazon.com/dp/B0FWKTRCVF?tag=feelingpret0e-20"
      }
    ]
  },
  {
    "slug": "moody-italian-dinner-classic",
    "title": "Moody Italian Dinner Night",
    "image": "/boards/moody-italian-dinner-classic.png",
    "items": [
      {
        "name": "Walnut Bread Board",
        "url": "https://www.amazon.com/dp/B09Y5VZXDC?tag=feelingpret0e-20"
      },
      {
        "name": "Antique Brass Candlesticks",
        "url": "https://www.amazon.com/dp/B0GBSS9YNN?tag=feelingpret0e-20"
      },
      {
        "name": "Ceramic Olive Oil Cruet",
        "url": "https://www.amazon.com/dp/B0G12V6J7R?tag=feelingpret0e-20"
      },
      {
        "name": "Caramel Pasta Bowls",
        "url": "https://www.amazon.com/dp/B0HGY5WHVF?tag=feelingpret0e-20"
      },
      {
        "name": "Amber Glass Tumblers",
        "url": "https://www.amazon.com/dp/B0D2323NYM?tag=feelingpret0e-20"
      }
    ]
  }
];
