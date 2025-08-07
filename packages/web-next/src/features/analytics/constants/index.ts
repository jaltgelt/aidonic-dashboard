export const AID_TYPE_COLORS = {
  Food: 'hsl(var(--aid-food))',
  Medical: 'hsl(var(--aid-medical))',
  Shelter: 'hsl(var(--aid-shelter))',
  Water: 'hsl(var(--aid-water))',
  Education: 'hsl(var(--aid-education))',
} as const;

export const CHART_CONSTANTS = {
  PIE_CHART: {
    OUTER_RADIUS: 80,
    CENTER_Y: '40%',
  },
  LINE_CHART: {
    STROKE_WIDTH: 3,
    DOT_RADIUS: 5,
    ACTIVE_DOT_RADIUS: 7,
  },
} as const;
