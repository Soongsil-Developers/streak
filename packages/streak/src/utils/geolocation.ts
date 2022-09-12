export interface Coord {
  latitude: number;
  longitude: number;
}

export interface Coords {
  latitude: {
    max: number;
    min: number;
  };
  longitude: {
    max: number;
    min: number;
  };
}

export interface SSUBuilding {
  [key: string]: Coords[];
}

const SSU: Coords[] = [
  {
    latitude: {
      max: 37.4971,
      min: 37.4957,
    },
    longitude: {
      max: 126.9553,
      min: 126.9546,
    },
  },
  {
    latitude: {
      max: 37.4968,
      min: 37.4957,
    },
    longitude: {
      max: 126.9545,
      min: 126.9542,
    },
  },
  {
    latitude: {
      max: 37.4975,
      min: 37.4953,
    },
    longitude: {
      max: 126.9588,
      min: 126.9554,
    },
  },
  {
    latitude: {
      max: 37.4956,
      min: 37.4951,
    },
    longitude: {
      max: 126.9609,
      min: 126.9589,
    },
  },
  {
    latitude: {
      max: 37.4979,
      min: 37.4974,
    },
    longitude: {
      max: 126.9578,
      min: 126.9558,
    },
  },
  {
    latitude: {
      max: 37.4948,
      min: 37.4943,
    },
    longitude: {
      max: 126.9602,
      min: 126.9592,
    },
  },
];

const SSU_Building: SSUBuilding = {
  baird_hall: [
    {
      latitude: {
        max: 37.4966,
        min: 37.4962,
      },
      longitude: {
        max: 126.9568,
        min: 126.9559,
      },
    },
  ],
  soongduk: [
    {
      latitude: {
        max: 37.4967,
        min: 37.4964,
      },
      longitude: {
        max: 126.9555,
        min: 126.9548,
      },
    },
  ],
  cultural_center: [
    {
      latitude: {
        max: 37.4967,
        min: 37.4963,
      },
      longitude: {
        max: 126.9544,
        min: 126.954,
      },
    },
  ],
  ahnEkitai_memorial_hall: [
    {
      latitude: {
        max: 37.4959,
        min: 37.4957,
      },
      longitude: {
        max: 126.9554,
        min: 126.9547,
      },
    },
  ],
  hyeongnam: [
    {
      latitude: {
        max: 37.4958,
        min: 37.4956,
      },
      longitude: {
        max: 126.9566,
        min: 126.9558,
      },
    },
  ],
  educational_center: [
    {
      latitude: {
        max: 37.4979,
        min: 37.4978,
      },
      longitude: {
        max: 126.9571,
        min: 126.9566,
      },
    },
  ],
  white_horse_center: [
    {
      latitude: {
        max: 37.4979,
        min: 37.4978,
      },
      longitude: {
        max: 126.9565,
        min: 126.9558,
      },
    },
  ],
  hankyungchik: [
    {
      latitude: {
        max: 37.4958,
        min: 37.4954,
      },
      longitude: {
        max: 126.9579,
        min: 126.9573,
      },
    },
  ],
  sinyang: [
    {
      latitude: {
        max: 37.4966,
        min: 37.4962,
      },
      longitude: {
        max: 126.9583,
        min: 126.9581,
      },
    },
  ],
  library: [
    {
      latitude: {
        max: 37.4965,
        min: 37.496,
      },
      longitude: {
        max: 126.9588,
        min: 126.9584,
      },
    },
  ],
  information_island: [
    {
      latitude: {
        max: 37.4948,
        min: 37.4943,
      },
      longitude: {
        max: 126.9602,
        min: 126.9594,
      },
    },
  ],
};

// TODO
// * 베어드홀
// 37.4963, 126.9559
// 37.4966, 126.956
// 37.4962, 126.9567
// 37.4965, 126.9568
// * 숭덕
// 37.4965, 126.9548
// 37.4967, 126.9548
// 37.4964, 126.9555
// 37.4966, 126.95555
// * 문화관
// 37.4963, 126.9544
// 37.4967, 126.9544
// 37.4967, 126.9544
// 37.4966, 126.954
// * 안익태 기념관
// 37.4959, 126.9548
// 37.4957, 126.9554
// 37.495755, 126.955390
// 37.4957, 126.9547
//  * 형남 공학관
// 37.4958, 126.9566
// 37.4956, 126.9566
// 37.4958, 126.9559
// 37.4957, 126.9558
// * 교육관
// 37.4979, 126.9566
// 37.4978, 126.9566
// 37.4978, 126.9571
// 37.4978, 126.9571
// * 백마관
// 37.4979, 126.9558
// 37.4978, 126.9558
// 37.4979, 126.9565
// 37.4978, 126.9565
// * 한경직
// 37.4954, 126.9578
// 37.4957, 126.9579
// 37.4958, 126.9573
// 37.4954, 126.9573
// * 신양관
// 37.4962, 126.9583
// 37.4963, 126.9581
// 37.4966, 126.9583
// 37.4966, 126.9581
// * 정보섬
// 37.4944, 126.9594
// 37.4943, 126.9599
// 37.4947, 126.9602
// 37.4948, 126.9596
// * 도서관
// 37.496, 126.9587
// 37.4965, 126.9585
// 37.4961, 126.9584
// 37.4964, 126.9588

/**
 * Check isSSU
 */
const isSSU = (target: Coords, myLocation: Coord) => {
  if (
    myLocation.latitude <= target.latitude.max &&
    myLocation.latitude >= target.latitude.min
  ) {
    if (
      myLocation.longitude <= target.longitude.max &&
      myLocation.longitude >= target.longitude.min
    )
      return true;
    return false;
  }
  return false;
};

/**
 * iterate Coords
 */
const iterateCoords = (targets: Coords[], myLocation: Coord) => {
  let flag = false;
  targets.forEach((target) => {
    if (isSSU(target, { ...myLocation })) {
      flag = true;
    }
  });
  return flag;
};

/**
 * Return SSU Building
 *
 * @param latitude - The first input number
 * @param longitude - The second input number
 *
 * @beta
 */

const getSSUGeolocation = (latitude: number, longitude: number) => {
  if (!latitude || !longitude) throw new Error('empty latitude or longitude');

  let ssu = iterateCoords(SSU, { latitude, longitude });
  let SSUBuilding = '';

  // 1. 숭실대 안에 있는지, 없는지 체크

  SSU.forEach((target) => {
    if (isSSU(target, { latitude, longitude })) {
      ssu = true;
    }
  });

  // 1-1. 숭실대가 아니라면 false 리턴
  if (!ssu) return { ssu, SSUBuilding };

  // 2. 숭실대라면 어느 건물에 있는지 체크
  for (const [key, value] of Object.entries(SSU_Building)) {
    if (iterateCoords(value, { latitude, longitude })) {
      SSUBuilding = key;
      return { ssu, SSUBuilding };
    }
  }

  return { ssu, SSUBuilding };
};

export default getSSUGeolocation;
