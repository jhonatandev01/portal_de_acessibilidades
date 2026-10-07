/**
 * Filtros SVG baseados nas matrizes de simulação de deficiência visual cromática (Brettel, Viénot & Mollon).
 */
export function SvgVisionFilters() {
  return (
    <svg aria-hidden="true" className="sr-only" style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        {/* Protanopia (Insensibilidade ao vermelho) */}
        <filter id="filter-protanopia">
          <feColorMatrix
            type="matrix"
            values="0.567, 0.433, 0,     0, 0
                    0.558, 0.442, 0,     0, 0
                    0,     0.242, 0.758, 0, 0
                    0,     0,     0,     1, 0"
          />
        </filter>

        {/* Deuteranopia (Insensibilidade ao verde) */}
        <filter id="filter-deuteranopia">
          <feColorMatrix
            type="matrix"
            values="0.625, 0.375, 0,   0, 0
                    0.70,  0.30,  0,   0, 0
                    0,     0.30,  0.70, 0, 0
                    0,     0,     0,   1, 0"
          />
        </filter>

        {/* Tritanopia (Insensibilidade ao azul) */}
        <filter id="filter-tritanopia">
          <feColorMatrix
            type="matrix"
            values="0.95, 0.05,  0,     0, 0
                    0,    0.433, 0.567, 0, 0
                    0,    0.475, 0.525, 0, 0
                    0,    0,     0,     1, 0"
          />
        </filter>

        {/* Acromatopsia (Monocromacia total) */}
        <filter id="filter-achromatopsia">
          <feColorMatrix
            type="matrix"
            values="0.299, 0.587, 0.114, 0, 0
                    0.299, 0.587, 0.114, 0, 0
                    0.299, 0.587, 0.114, 0, 0
                    0,     0,     0,     1, 0"
          />
        </filter>
      </defs>
    </svg>
  );
}
