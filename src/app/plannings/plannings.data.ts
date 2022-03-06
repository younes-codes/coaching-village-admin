export interface Planning {
  group: number;
  days: Days[];
}

export interface Days {
  day: string;
  morning: Session[];
  afternoon: Session[];
}

interface Session {
  session: string;
  time: string;
}

export const PLANNING_G1: Planning = {
  group: 1,
  days: [
    {
      day: 'monday',
      morning: [
        {
          session: 'footing plage',
          time: '9h30'
        }
      ], afternoon: [
        {
          session: 'cours collectif',
          time: '18h00'
        }
      ]
    },
    {
      day: 'tuesday',
      morning: [
        {
          session: 'hiit',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'musculation',
          time: '17h00'
        }
      ]
    },
    {
      day: 'wednesday',
      morning: [
        {
          session: 'boxe (fac.)',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'chill',
          time: '-'
        }
      ]
    },
    {
      day: 'thursday',
      morning: [
        {
          session: 'fractionné',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'musculation',
          time: '17h'
        }
      ]
    },
    {
      day: 'friday',
      morning: [
        {
          session: 'chill',
          time: '-'
        }
      ], afternoon: [
        {
          session: 'chill',
          time: '-'
        }
      ]
    },
    {
      day: 'saturday',
      morning: [
        {
          session: 'hiit',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'cours co. (fac.)',
          time: '18h'
        }
      ]
    },
    {
      day: 'sunday',
      morning: [
        {
          session: 'boxe',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'musculation',
          time: '17h'
        }
      ]
    },
  ],
}
export const PLANNING_G2: Planning = {
  group: 1,
  days: [
    {
      day: 'monday',
      morning: [
        {
          session: 'footing plage',
          time: '9h30'
        }
      ], afternoon: [
        {
          session: 'cours collectif',
          time: '18h00'
        }
      ]
    },
    {
      day: 'tuesday',
      morning: [
        {
          session: 'hiit',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'musculation',
          time: '17h00'
        }
      ]
    },
    {
      day: 'wednesday',
      morning: [
        {
          session: 'boxe (fac.)',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'chill',
          time: '-'
        }
      ]
    },
    {
      day: 'thursday',
      morning: [
        {
          session: 'fractionné',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'musculation',
          time: '17h'
        }
      ]
    },
    {
      day: 'friday',
      morning: [
        {
          session: 'chill',
          time: '-'
        }
      ], afternoon: [
        {
          session: 'chill',
          time: '-'
        }
      ]
    },
    {
      day: 'saturday',
      morning: [
        {
          session: 'hiit',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'cours co. (fac.)',
          time: '18h'
        }
      ]
    },
    {
      day: 'sunday',
      morning: [
        {
          session: 'boxe',
          time: '10h'
        }
      ], afternoon: [
        {
          session: 'musculation',
          time: '17h'
        }
      ]
    },
  ],
}

export const PLANNINGS: Planning[] = [PLANNING_G1, PLANNING_G2];

