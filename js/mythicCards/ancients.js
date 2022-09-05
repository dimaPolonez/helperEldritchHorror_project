const ancientsData = [
  {
    name: 'Abhoth',
    nameRu: 'Абхот',
    firstStage: {
      greenCards: 1,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 2,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'Antediluvium',
    nameRu: 'Antediluvium',
    firstStage: {
      greenCards: 1,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 3,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'AtlachNacha',
    nameRu: 'Алтач-Нача',
    firstStage: {
      greenCards: 1,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 2,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'Azathoth',
    nameRu: 'Азатот',
    firstStage: {
      greenCards: 1,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 3,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'Cthulthu',
    nameRu: 'Ктулху',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 3,
      brownCards: 0,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'Hastur',
    nameRu: 'Хастур',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 3,
      brownCards: 0,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 5,
      brownCards: 0,
    },
  },
  {
    name: 'Hypnos',
    nameRu: 'Гипнос',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 3,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'IogSothoth',    
    nameRu: 'Йог-Сотот',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 3,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'Ithaqua',
    nameRu: 'Итаква',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 4,
      blueCards: 2,
      brownCards: 0,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'NephrenKa',
    nameRu: 'Нефрен-Ка',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 1,
      blueCards: 3,
      brownCards: 0,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'Nyarlathotep',
    nameRu: 'Ньярлатотеп',
    firstStage: {
      greenCards: 1,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 3,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'RiseOfTheElderThings',
    nameRu: 'Возвышение Старцев',
    firstStage: {
      greenCards: 2,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 3,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 4,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'ShubNiggurath',
    nameRu: 'Шуб-Ниггурат',
    firstStage: {
      greenCards: 1,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 2,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'ShuddeMell',
    nameRu: 'Шудде-Мьелл',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 4,
      blueCards: 2,
      brownCards: 0,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  },
  {
    name: 'Syzygy',
    nameRu: 'Сигизия',
    firstStage: {
      greenCards: 0,
      blueCards: 2,
      brownCards: 2,
    },
    secondStage: {
      greenCards: 3,
      blueCards: 3,
      brownCards: 0,
    },
    thirdStage: {
      greenCards: 3,
      blueCards: 5,
      brownCards: 0,
    },
  },
  {
    name: 'Yig',
    nameRu: 'Йиг',
    firstStage: {
      greenCards: 1,
      blueCards: 2,
      brownCards: 1,
    },
    secondStage: {
      greenCards: 2,
      blueCards: 3,
      brownCards: 1,
    },
    thirdStage: {
      greenCards: 2,
      blueCards: 4,
      brownCards: 0,
    },
  }
]

export default ancientsData