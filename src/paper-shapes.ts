import * as paper from 'paper';

export function initPaperCanvas() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas) return;

  // Configuração inicial
  paper.setup(canvas);
  resizeCanvas();

  // Cores e estilos
  const strokeColor = new paper.Color(1, 1, 1, 0.4); // Aumentei a opacidade para 0.4
  const strokeWidth = 2;

  // Criar formas usando os paths exatos do seu arquivo original
  const shapes: paper.Path[] = [];
  const positions = calculateInitialPositions();

  const shapePathData = [
    'M231,352l445-156L600,0L452,54L331,3L0,48L231,352',
    'M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z',
    'M0,65l16,138l96,107l270-2L470,0L337,4L0,65z',
    'M333,0L0,94l64,219L29,437l570-151l-196-42L333,0',
    'M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z',
    'M389,352l92-113l195-43l0,0l0,0L445,48l-80,1L122.7,0L0,275.2L162,297L389,352',
    'M50,100L300,150L550,50L750,300L500,250L300,450L50,100',
    'M700,350L500,350L700,500L400,400L200,450L250,350L100,300L150,50L350,100L250,150L450,150L400,50L550,150L350,250L650,150L650,50L700,150L600,250L750,250L650,300L700,350'
  ];

  // Criar as formas originais
  shapePathData.forEach((data, i) => {
    const shape = new paper.Path({
      strokeColor: strokeColor,
      strokeWidth: strokeWidth,
      strokeCap: 'round',
      strokeJoin: 'round'
    });
    
    shape.pathData = data;
    shape.scale(2);
    shape.position = positions[i];
    shapes.push(shape);
  });

  // Animação (mantendo sua lógica original de rotação)
  paper.view.onFrame = () => {
    shapes.forEach((shape, i) => {
      shape.rotate(i % 2 === 0 ? -0.1 : 0.1); // Velocidade original
      shape.opacity = 0.6 + Math.sin(Date.now() * 0.001 + i) * 0.2;
    });
  };

  // Redimensionamento
  window.addEventListener('resize', () => {
    resizeCanvas();
    updateShapePositions(shapes);
  });

  function calculateInitialPositions(): paper.Point[] {
    const { width, height } = paper.view.size;
    const centerX = width / 2;
    const centerY = height / 2;
    
    return [
      new paper.Point((centerX - 50) + (centerX / 2), 150),
      new paper.Point(200, centerY),
      new paper.Point(width - 130, height - 75),
      new paper.Point(0, centerY + 100),
      new paper.Point((centerX / 2) + 100, 100),
      new paper.Point(centerX + 80, height - 50),
      new paper.Point(width + 60, centerY - 50),
      new paper.Point(centerX + 100, centerY + 100)
    ];
  }

  function updateShapePositions(shapes: paper.Path[]) {
    const positions = calculateInitialPositions();
    shapes.forEach((shape, i) => {
      shape.position = positions[i];
      shape.visible = paper.view.size.width > 700 || ![2, 3, 5].includes(i);
    });
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    paper.view.viewSize = new paper.Size(canvas.width, canvas.height);
  }
}