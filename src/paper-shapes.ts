import * as paper from 'paper';

let resizeListener: (() => void) | undefined;

export function initPaperCanvas() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas) return;

  // Limpa antes de iniciar para evitar conflitos
  cleanupPaperCanvas();

  // Setup inicial
  paper.setup(canvas);
  resizeCanvas();

  const numStars = 150;
  const stars: paper.Path.Circle[] = [];

  for (let i = 0; i < numStars; i++) {
    const star = new paper.Path.Circle({
      center: new paper.Point(Math.random() * paper.view.size.width, Math.random() * paper.view.size.height),
      radius: Math.random() * 2 + 0.5,
      fillColor: 'white'
    });
    (star as any).data = { speed: Math.random() * 0.5 + 0.2 };
    stars.push(star);
  }

  paper.view.onFrame = () => {
    const background = new paper.Path.Rectangle({
      point: [0, 0],
      size: paper.view.size,
      fillColor: 'black'
    });
    background.sendToBack();

    stars.forEach(star => {
      star.position.y += (star as any).data.speed;

      if (star.position.y > paper.view.size.height) {
        star.position.y = 0;
        star.position.x = Math.random() * paper.view.size.width;
      }
    });
  };

  resizeListener = () => {
    resizeCanvas();
    repositionStars();
  };

  window.addEventListener('resize', resizeListener);

  function repositionStars() {
    stars.forEach(star => {
      star.position = new paper.Point(Math.random() * paper.view.size.width, Math.random() * paper.view.size.height);
    });
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    paper.view.viewSize = new paper.Size(canvas.width, canvas.height);
  }
}

export function cleanupPaperCanvas() {
  if (resizeListener) {
    window.removeEventListener('resize', resizeListener);
    resizeListener = undefined;
  }

  if (paper.view) {
    paper.view.onFrame = null;
    paper.project.clear();
  }
}
