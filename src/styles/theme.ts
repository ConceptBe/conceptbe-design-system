const color = {
  c1: '#5F27FF',
  c2: '#0DE361',
  c3: '#E84C4C',
  bg1: '#F5F6F8',
  b: '#000000',
  t: '#666',
  b2: 'rgba(0, 0, 0, 0.87)',
  b4: 'rgba(0, 0, 0, 0.73)',
  b6: 'rgba(0, 0, 0, 0.60)',
  b9: 'rgba(0, 0, 0, 0.40)',
  ba: 'rgba(0, 0, 0, 0.33)',
  l1: 'rgba(0, 0, 0, 0.15)',
  l2: 'rgba(0, 0, 0, 0.10)',
  l3: 'rgba(0, 0, 0, 0.05)',
  w1: '#FFFFFF',
  w2: 'rgba(255, 255, 255, 0.90)',
  disabled: 'rgba(245, 246, 248, 1)',
} as const;

const font = {
  suit12r: {
    fontSize: 12,
    fontWeight: 400,
  },
  suit12m: {
    fontSize: 12,
    fontWeight: 500,
  },
  suit12b: {
    fontSize: 12,
    fontWeight: 700,
  },
  suit13m: {
    fontSize: 13,
    fontWeight: 500,
  },
  suit14r: {
    fontSize: 14,
    fontWeight: 400,
  },
  suit14m: {
    fontSize: 14,
    fontWeight: 500,
  },
  suit14sm: {
    fontSize: 14,
    fontWeight: 600,
  },
  suit14b: {
    fontSize: 14,
    fontWeight: 700,
  },
  suit15ra: {
    fontSize: 15,
    fontWeight: 400,
  },
  suit15rb: {
    fontSize: 15,
    fontWeight: 400,
  },
  suit15m: {
    fontSize: 15,
    fontWeight: 500,
  },
  suit15sb: {
    fontSize: 15,
    fontWeight: 600,
  },
  suit16m: {
    fontSize: 16,
    fontWeight: 500,
  },
  suit16sb: {
    fontSize: 16,
    fontWeight: 600,
  },
  suit18sb: {
    fontSize: 18,
    fontWeight: 600,
  },
  suit22r: {
    fontSize: 22,
    fontWeight: 400,
  },
  suit22sb: {
    fontSize: 22,
    fontWeight: 600,
  },
} as const;

const zIndex = {
  navigation: 1000,
  modalBackdrop: 1010,
  modal: 1020,
  alertBackdrop: 1030,
  alert: 1040,
  spinnerBackdrop: 1050,
  spinner: 1060,
} as const;

export type ColorType = typeof color;
export type FontType = typeof font;
export type ZIndexType = typeof zIndex;
export type ColorKeyType = keyof typeof color;
export type FontKeyType = keyof typeof font;

const theme = {
  color,
  font,
  zIndex,
} as const;

export default theme;
