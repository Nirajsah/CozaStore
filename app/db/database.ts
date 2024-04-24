import { drizzle } from 'drizzle-orm/node-postgres'
import * as schema from './schema/schema'
import { migrate } from 'drizzle-orm/node-postgres/migrator'
import { Pool } from 'pg'
import { eq } from 'drizzle-orm'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL as string,
})
// const queryClient = postgres(process.env.DATABASE_URL as string)
// const migrationClient = postgres(process.env.DATABASE_URL as string, { max: 1 })
export const db = drizzle(pool, { logger: false })

const Category: schema.NewCategory[] = [
  {
    categoryId: 'keyboard',
    name: 'keyboard',
    description: 'buy different keyboard from any brand available',
    image: 'https://m.media-amazon.com/images/I/6124OpB-LRL.jpg',
  },
  {
    categoryId: 'headphone',
    name: 'Headphone',
    description: 'Find best-fit for your ears',
    image: 'https://m.media-amazon.com/images/I/61rEoEQqn0L.jpg',
  },
  {
    categoryId: 'macbook',
    name: 'MacBook',
    image: 'https://m.media-amazon.com/images/I/61L5QgPvgqL.jpg',
    description: 'Buy Latest MacBooks',
  },
]
const Products: schema.NewProduct[] = [
  {
    categoryId: 'keyboard',
    name: 'Redgear Shadow Blade Mechanical Keyboard with Drive Customization, Spectrum LED Lights, Media Control Knob and Wrist Support (Black)',
    image: 'https://m.media-amazon.com/images/I/61NKGdlO36L.jpg',
    stars: 4.5,
    productId: 'B08T28HSDN',
    price: 2499,
  },
  {
    categoryId: 'keyboard',
    name: 'Redragon K617 Fizz 60% Wired RGB Gaming Keyboard, 61 Keys Compact Mechanical Keyboard w/White and Grey Color Keycaps, Linear Red Switch, Pro Driver/Software Supported',
    image: 'https://m.media-amazon.com/images/I/6124OpB-LRL.jpg',
    stars: 4.6,
    productId: 'B09BVCVTBC',
    price: 2899,
  },
  {
    categoryId: 'keyboard',
    name: 'Quantum QHM9850 Rapid Strike Mechanical Gaming Multimedia Wired Keyboard with 6-Colour RGB LED, 12 Adjustable Lighting Modes, Lasting Durability and Rupee (₹) Key (Black)',
    image: 'https://m.media-amazon.com/images/I/711oEWUIxzL.jpg',
    stars: 4.2,
    productId: 'B0B1MRNF93',
    price: 1599,
  },
  {
    categoryId: 'keyboard',
    name: 'Redgear Blaze Semi-Mechanical wired Gaming keyboard with 3 colour backlit, full aluminium body & Windows key lock for PC ( Black )',
    image: 'https://m.media-amazon.com/images/I/61M2CPqMgwL.jpg',
    stars: 4.3,
    productId: 'B073QQR2H2',
    price: 899,
  },
  {
    categoryId: 'keyboard',
    name: 'Cosmic Byte CB-GK-25 Pandora TKL Mechanical Keyboard with Outemu Blue Switches and Rainbow LED (Black/Grey)',
    image: 'https://m.media-amazon.com/images/I/71keMYO9t4L.jpg',
    stars: 4.2,
    productId: 'B09MR39TX2',
    price: 1699,
  },
  {
    categoryId: 'keyboard',
    name: 'Cosmic Byte CB-GK-28 Vanth Mechanical Keyboard with Outemu Red Switches and Rainbow LED (Black/Grey)',
    image: 'https://m.media-amazon.com/images/I/71PquP2IYaL.jpg',
    stars: 4.3,
    productId: 'B09MR2D475',
    price: 1799,
  },
  {
    categoryId: 'keyboard',
    name: 'Ant Esports MK1200 Mini Wired Mechanical Gaming Keyboard with RGB Backlit Lighting and 60% Compact Form Factor - Red Switch',
    image: 'https://m.media-amazon.com/images/I/512Tz-pFkdS.jpg',
    stars: 4.2,
    productId: 'B093ZXHFX8',
    price: 1899,
  },
  {
    categoryId: 'keyboard',
    name: 'Cosmic Byte CB-GK-27 Vanth Mechanical Keyboard with Outemu Blue Switches and Rainbow LED (Black/Grey)',
    image: 'https://m.media-amazon.com/images/I/71PquP2IYaL.jpg',
    stars: 4.3,
    productId: 'B09MQZY875',
    price: 1799,
  },
  {
    categoryId: 'keyboard',
    name: 'Cosmic Byte CB-GK-32 Themis 61 Key Mechanical Per Key RGB Gaming Keyboard with Outemu Red Switches and Software (Black)',
    image: 'https://m.media-amazon.com/images/I/71utzsmU6qL.jpg',
    stars: 4.5,
    productId: 'B0BF9MN992',
    price: 1999,
  },
  {
    categoryId: 'keyboard',
    name: 'Redragon K630 Dragonborn 60% Wired Pink Single Lighting Gaming Keyboard, 61 Keys Compact Mechanical Keyboard with Brown Switch, Pro Driver Support, Black',
    image: 'https://m.media-amazon.com/images/I/619t8CVd03L.jpg',
    stars: 4.5,
    productId: 'B092HXGKV4',
    price: 2190,
  },
  {
    categoryId: 'keyboard',
    name: 'Redragon Kumara K552 Rainbow LED Backlit TKL Ten Key-Less Mechanical Wired Gaming Keyboard Without Numlock Keys (Black)',
    image: 'https://m.media-amazon.com/images/I/71cngLX2xuL.jpg',
    stars: 4.2,
    productId: 'B016MAK38U',
    price: 2299,
  },
  {
    categoryId: 'keyboard',
    name: 'Cosmic Byte CB-GK-26 Pandora TKL Mechanical Keyboard with Outemu Red Switches and Rainbow LED (Black/Grey)',
    image: 'https://m.media-amazon.com/images/I/71keMYO9t4L.jpg',
    stars: 4.2,
    productId: 'B09MR4SYZF',
    price: 1699,
  },
  {
    categoryId: 'keyboard',
    name: 'Logitech G413 TKL SE Wired Mechanical Gaming Keyboard - Compact Backlit Keyboard with Tactile Mechanical Switches, Anti-Ghosting, Compatible for Windows, macOS - Black',
    image: 'https://m.media-amazon.com/images/I/61aHJIjnH6L.jpg',
    stars: 4.6,
    productId: 'B0B2RCQ3ZX',
    price: 4606,
  },
  {
    categoryId: 'keyboard',
    name: 'EvoFox Fireblade Wired Gaming Keyboard with Multiple Lightning Effects I Compact TKL Design I LED Backlit I 19 Anti Ghosting Keys I Windows Lock Key I Breathing Effect I Spill Resistant I 1.5M Braided Cable with Magnetic Ring (Black)',
    image: 'https://m.media-amazon.com/images/I/61gshB7YIgL.jpg',
    stars: 4.1,
    productId: 'B085366TJW',
    price: 999,
  },
  {
    categoryId: 'keyboard',
    name: 'Redragon K551 RGB LED Backlit Wired Mechanical Gaming Keyboard with Numlock Keys for Windows PC (Black, Blue Switches)',
    image: 'https://m.media-amazon.com/images/I/61R04c4iitL.jpg',
    stars: 4.3,
    productId: 'B019O8YZ4A',
    price: 3199,
  },
  {
    categoryId: 'keyboard',
    name: 'Redragon K551 Rainbow LED Backlit Mechanical Wired Gaming Keyboard with Numlock Keys for Windows PC (Red Switches)',
    image: 'https://m.media-amazon.com/images/I/71QmCQB5BdL.jpg',
    stars: 4.3,
    productId: 'B016M91SS0',
    price: 2999,
  },
  {
    name: 'boAt Rockerz 550 Over Ear Bluetooth Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation, Without Mic (Black)',
    image: 'https://m.media-amazon.com/images/I/61gYxcIGjvL.jpg',
    stars: 4.1,
    productId: 'B0856HY85J',
    price: 1799,
    categoryId: 'headphone',
  },
  {
    name: 'Boult Audio Bass Buds Q2 Lightweight Stereo Wired Over Ear Headphones Set with Mic with Deep Bass, Comfortable Ear Cushions, & Long Cord (Black)',
    image: 'https://m.media-amazon.com/images/I/71zyBVbwO4L.jpg',
    stars: 3.9,
    productId: 'B08FY4FG5X',
    price: 599,
    categoryId: 'headphone',
  },
  {
    name: 'boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Mic Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation (Red)',
    image: 'https://m.media-amazon.com/images/I/61ljxTBpTCL.jpg',
    stars: 4.1,
    productId: 'B0856HNLDK',
    price: 1696,
    categoryId: 'headphone',
  },
  {
    name: 'ZEBRONICS Zeb-Duke Bluetooth Wireless Over Ear Headphone with Mic (Black)',
    image: 'https://m.media-amazon.com/images/I/71p1qpkQy4L.jpg',
    stars: 4,
    productId: 'B088FM4QG4',
    price: 1299,
    categoryId: 'headphone',
  },
  {
    name: 'pTron Studio Over-Ear Bluetooth 5.0 Wireless Headphones with Mic, Hi-Fi Sound with Deep Bass, 12Hrs Playback, Lightweight Wireless Headset, Soft Cushions Earpads, Fast Charging & Aux Port - (Black)',
    image: 'https://m.media-amazon.com/images/I/513PuLtilUL.jpg',
    stars: 3.8,
    productId: 'B07XL8HFNC',
    price: 699,
    categoryId: 'headphone',
  },
  {
    name: 'boAt NIRVANAA 751ANC Hybrid Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Mic,with Up to 65H Playtime,ASAP Charge, Dual Compatibility,Carry Pouch(Silver Sterling)',
    image: 'https://m.media-amazon.com/images/I/61PCjNryx2L.jpg',
    stars: 4,
    productId: 'B09MTR7NRM',
    price: 3499,
    categoryId: 'headphone',
  },
  {
    name: 'Sennheiser HD 206 507364 Wired Over Ear Headphones Without Mic (Black)',
    image: 'https://m.media-amazon.com/images/I/51mNtgnozaL.jpg',
    stars: 4.1,
    productId: 'B01N7S0IPR',
    price: 1490,
    categoryId: 'headphone',
  },
  {
    name: 'JBL Tune 710BT by Harman, 50 Hours Playtime with Quick Charging Wireless Over Ear Headphones with Mic, Dual Pairing, AUX & Voice Assistant Support for Mobile Phones (Black)',
    image: 'https://m.media-amazon.com/images/I/61yOL4YTvLL.jpg',
    stars: 4,
    productId: 'B096G2RN6D',
    price: 4499,
    categoryId: 'headphone',
  },
  {
    name: 'boAt Rockerz 550 Over Ear Bluetooth Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation, Without Mic (Army Green)',
    image: 'https://m.media-amazon.com/images/I/61wkUsZxKjL.jpg',
    stars: 4.1,
    productId: 'B08R7L77T7',
    price: 1799,
    categoryId: 'headphone',
  },
  {
    name: 'pTron Studio Pixel Over-Ear Wireless Gaming Headphones with 30ms Low Latency, 40Hrs Playtime, 40mm Drivers, Punchy Bass, BT5.3, with HD Mic with ENC & Type-C Fast Charging (Black)',
    image: 'https://m.media-amazon.com/images/I/51Y7SIK68KL.jpg',
    stars: 3.8,
    productId: 'B0B4X2WBN1',
    price: 999,
    categoryId: 'headphone',
  },
  {
    name: 'boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation with Mic (Maroon Maverick)',
    image: 'https://m.media-amazon.com/images/I/61IUz4cSa7L.jpg',
    stars: 4.1,
    productId: 'B08R7FBBGR',
    price: 1799,
    categoryId: 'headphone',
  },
  {
    name: 'AKG K361BT Bluetooth Wireless Over Ear Headphones with Mic (Black)',
    image: 'https://m.media-amazon.com/images/I/61NAo+qp8FL.jpg',
    stars: 4,
    productId: 'B07ZL6LK9H',
    price: 5555,
    categoryId: 'headphone',
  },
  {
    name: 'Boult Audio ProBass Thunder Over-Ear Wireless Bluetooth Headphones with Mic, Headset with Long Battery Life',
    image: 'https://m.media-amazon.com/images/I/71q--MThR1L.jpg',
    stars: 3.8,
    productId: 'B088YKSNTX',
    price: 1199,
    categoryId: 'headphone',
  },
  {
    name: 'Sony WH-CH710N Active Noise Cancelling Wireless Headphones Bluetooth Over The Ear Headset with Mic for Phone-Call, 35Hrs Battery Life, Aux, Quick Charge and Google Assistant Support for Mobiles -Blue',
    image: 'https://m.media-amazon.com/images/I/61rEoEQqn0L.jpg',
    stars: 3.9,
    productId: 'B0872FKQZZ',
    price: 8074,
    categoryId: 'headphone',
  },
  {
    name: 'Sennheiser HD 450SE Bluetooth 5.0 Wireless Over Ear Headphone with mic, Alexa Built-in - Active Noise Cancellation, 30-Hour Battery Life, USB-C Fast Charging, Foldable - Black',
    image: 'https://m.media-amazon.com/images/I/71j1dzyRQPS.jpg',
    stars: 4,
    productId: 'B09325WTV5',
    price: 8990,
    categoryId: 'headphone',
  },
  {
    name: 'Sennheiser HD 400s Wired Over The Ear Headphone with Mic (Black)',
    image: 'https://m.media-amazon.com/images/I/61oQCJyAioS.jpg',
    stars: 4.1,
    productId: 'B07N2261R6',
    price: 4240,
    categoryId: 'headphone',
  },
  {
    name: '2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey',
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL.jpg',
    stars: 4.7,
    productId: 'B08N5W4NNB',
    price: 89490,
    categoryId: 'macbook',
  },
  {
    name: '2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold',
    image: 'https://m.media-amazon.com/images/I/71vFKBpKakL.jpg',
    stars: 4.7,
    productId: 'B08N5XSG8Z',
    price: 89990,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Space Grey',
    image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL.jpg',
    stars: 3.8,
    productId: 'B0B3BQ11LP',
    price: 111490,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight',
    image: 'https://m.media-amazon.com/images/I/719C6bJv8jL.jpg',
    stars: 4.7,
    productId: 'B0B3BMKMGP',
    price: 111490,
    categoryId: 'macbook',
  },
  {
    name: '2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver',
    image: 'https://m.media-amazon.com/images/I/71TPda7cwUL.jpg',
    stars: 4.7,
    productId: 'B08N5T6CZ6',
    price: 89990,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Midnight',
    image: 'https://m.media-amazon.com/images/I/719C6bJv8jL.jpg',
    stars: 5,
    productId: 'B0B3BXKV8W',
    price: 139390,
    categoryId: 'macbook',
  },
  {
    name: '2020 Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold',
    image: 'https://m.media-amazon.com/images/I/71vFKBpKakL.jpg',
    stars: 4.7,
    productId: 'B08N5YD6NF',
    price: 117900,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Silver',
    image: 'https://m.media-amazon.com/images/I/71eXNIDUGjL.jpg',
    stars: 4.6,
    productId: 'B0B3BLY13H',
    price: 119900,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Starlight',
    image: 'https://m.media-amazon.com/images/I/710TJuHTMhL.jpg',
    stars: 5,
    productId: 'B0B3C6FBPF',
    price: 111490,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Space Grey',
    image: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL.jpg',
    stars: 4.4,
    productId: 'B0B3C9ZHJZ',
    price: 139390,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Silver',
    image: 'https://m.media-amazon.com/images/I/71eXNIDUGjL.jpg',
    stars: 4.7,
    productId: 'B0B3BS9BRW',
    price: 149900,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Air Laptop with M2 chip: 34.46 cm (13.6-inch) Liquid Retina Display, 8GB RAM, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera. Works with iPhone/iPad; Starlight',
    image: 'https://m.media-amazon.com/images/I/710TJuHTMhL.jpg',
    stars: 4.5,
    productId: 'B0B3BNDM4J',
    price: 149900,
    categoryId: 'macbook',
  },
  {
    name: '2022 Apple MacBook Pro Laptop with M2 chip: 33.74 cm (13.3-inch) Retina Display, 8GB RAM, 256GB SSD ​​​​​​​Storage, Touch Bar, Backlit Keyboard, FaceTime HD Camera​​​; Space Grey ​​​​​​​',
    image: 'https://m.media-amazon.com/images/I/61L5QgPvgqL.jpg',
    stars: 4.6,
    productId: 'B0B3B5BWCT',
    price: 120290,
    categoryId: 'macbook',
  },
  {
    name: '2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey',
    image: 'https://m.media-amazon.com/images/I/71an9eiBxpL.jpg',
    stars: 4.7,
    productId: 'B08N5VSQNG',
    price: 122900,
    categoryId: 'macbook',
  },
]

const Cart = [
  {
    cartId: 2,
    userId: 1,
    productId: 'B0B3BMKMGP',
    quantity: 1,
  },
]
export const MigrateDB = async () => {
  try {
    // await db.insert(schema.category).values(Category)
    // await db.insert(schema.product).values(Products)
    // await db.insert(schema.cart).values(Cart)
    // await db
    //   .update(schema.cart)
    //   .set({ productId: 'B09BVCVTBC' })
    //   .where(eq(schema.cart.userId, 1))
    await migrate(db, { migrationsFolder: 'drizzle' })
    console.log('Migrations completed successfully.')
    process.exit(0)
  } catch (error) {
    console.error('Error running migrations:', error)
  }
}

export const UpdateQuantity = async ({
  productId,
  quantity,
}: {
  productId: string
  quantity: number
}) => {
  try {
    await db
      .update(schema.cart)
      .set({ quantity })
      .where(eq(schema.cart.productId, productId))
    console.log('called')
  } catch (error) {
    return error
  }
}
