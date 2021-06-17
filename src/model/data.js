const Images = [
  {image: require('../../assets/banners/Food.jpg')},
  {image: require('../../assets/banners/bread.jpg')},
  {image: require('../../assets/banners/food-banner1.jpg')},
  {image: require('../../assets/banners/food-banner2.jpg')},
  {image: require('../../assets/banners/food-banner3.jpg')},
  {image: require('../../assets/banners/oats.jpeg')},
  {image: require('../../assets/banners/taco.jpg')},
  {image: require('../../assets/banners/rice.png')},
  {image: require('../../assets/banners/jam.jpg')},
  {image: require('../../assets/banners/eggs.jpg')},
  {image: require('../../assets/banners/apples.jpg')},
  {image: require('../../assets/banners/drumstick.jpg')},
];

export const DATA = [
  {
    id: '1',
    coordinate: {
      latitude: 13.05903344, 
      longitude:  77.5930292,
    },
    title: 'Vegetables, Cereals ',
    description: `There 4 different leafy vegetables including olives, broccolli, tomatos and many different vegetables beetroot, carrot, panner etc.`,
    image: Images[0].image,
    quantity: '8-10',
    pickuptime: '5 pm',
    phonenumber: '+91 6305670461'
  },
  {
    id: '2',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: 'A Packet of bread',
    description: `This is fresh bread packet as we are leaving our home town we are giving 
                  away this bread packet, this pack is expires within a week`,
    image: Images[1].image,
    quantity:1,
    pickuptime: ' 1 pm',
    phonenumber: '+91 9985788714'
  },
  {
    id: '3',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    title: '1 kg pack of Rice',
    description: `Rice packet which is best before 10 months`,
    image: Images[7].image,
    quantity:2,
    pickuptime: '3 pm',
    phonenumber: '+91 7993939744'
  },
  {
    id: '4',
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: '2 packs of meal',
    description: `please collect the meal by end of the day`,
    image: Images[2].image,
    quantity:2,
    pickuptime: 'Anytime by end of the day',
    phonenumber: '+91 8546916528'
  },
  {
    id: '5',
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
    title: 'Many dishes ',
    description: `5 different types of curries (chicken curry, aloo curry, panner curry, baby corn curry) with 4 packects of parata, curd and some great staters all are packed please collect them by evening 5 pm.`,
    image: Images[4].image,
    quantity:4,
    pickuptime: 'before 5 pm',
    phonenumber: '+91 9591016091'
  },
  {
    id: '6',
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
    title: 'Oats 500 gm',
    description: `Oats packet 500gm in weight best before 2 months from now, collect this within 2 weeks from now`,
    image: Images[5].image,
    quantity:2,
    pickuptime: '3 pm',
    phonenumber: '+91 9652154792'
  },
  {
    id: '7',
    coordinate: {
      latitude: 13.045262,
      longitude:  77.62685,
    },
    title: 'Tacos Meal',
    description: `This is a taco meal freshly cooked get them by end of the day, Incase you want them contact me.`,
    image: Images[6].image,
    quantity:3,
    pickuptime: ' upto 7:30 pm',
    phonenumber: '+91 8328423167'
  },
  {
    id: '8',
    coordinate: {
      latitude: 13.116908886148371, 
      longitude: 77.6007253578328,
    },
    title: 'A basket of eggs',
    description: `These are basket of eggs, we would like to give them please contact us if needed. These are available for 2 days. `,
    image: Images[9].image,
    quantity:2,
    pickuptime: '9am - 7 pm ',
    phonenumber: '+91 7386622691'
  },
  {
    id: '9',
    coordinate: {
      latitude: 13.121598975699339, 
      longitude: 77.62240251727921,
    },
    title: 'A jar of Strawberry jam',
    description: `Fresh and delicious straberry jam amazing on bread and stuff best before 4 weeks from now `,
    image: Images[8].image,
    quantity:2,
    pickuptime: '3 pm',
    phonenumber: '+91 7993939744'
  },
  {
    id: '10',
    coordinate: {
      latitude: 13.02026177322884, 
      longitude: 77.5288485529354,
    },
    title: '8 small apples',
    description: `Small apples which are tasty, if u want them contact us and collect them with 3 days `,
    image: Images[10].image,
    quantity:8,
    pickuptime: '10 am - 6pm',
    phonenumber: '+91 9652154782'
  },
  {
    id: '11',
    coordinate: {
      latitude: 14.597642801746026, 
      longitude: 78.51345191942615, 
    },
    title: 'A small bag of drumsticks',
    description: `This is a small bag of drumstick of 500 gm, please take them by end of day Happy cooking!`,
    image: Images[11].image,
    quantity:1,
    pickuptime: '10am- 8 pm',
    phonenumber: '+91 9652154792'
  },
];
