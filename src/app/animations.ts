import { createAnimation, Animation } from '@ionic/angular';

export function slideInAnimation(baseEl: HTMLElement, opts?: any): Animation {
  const enteringEl = baseEl.querySelector(':scope > ion-content');
  const leavingEl = opts?.leavingEl?.querySelector(':scope > ion-content');

  const enteringAnimation = createAnimation()
    .duration(500)
    .easing('ease-out')
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'translateX(100%)', 'translateX(0)');

  if (enteringEl) enteringAnimation.addElement(enteringEl);

  const leavingAnimation = createAnimation()
    .duration(500)
    .easing('ease-in')
    .fromTo('opacity', '1', '0')
    .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

  if (leavingEl) leavingAnimation.addElement(leavingEl);

  return createAnimation()
    .addAnimation([enteringAnimation, leavingAnimation]);
}

// Você pode copiar e colar as outras animações aqui seguindo o mesmo padrão...
export function fadeAnimation(baseEl: HTMLElement, opts?: any): Animation {
  const enteringEl = baseEl.querySelector(':scope > ion-content');
  const leavingEl = opts?.leavingEl?.querySelector(':scope > ion-content');

  const enteringAnimation = createAnimation()
    .duration(400)
    .easing('ease-in')
    .fromTo('opacity', '0', '1');

  if (enteringEl) enteringAnimation.addElement(enteringEl);

  const leavingAnimation = createAnimation()
    .duration(400)
    .easing('ease-out')
    .fromTo('opacity', '1', '0');

  if (leavingEl) leavingAnimation.addElement(leavingEl);

  return createAnimation()
    .addAnimation([enteringAnimation, leavingAnimation]);
}
export function slideUpAnimation(baseEl: HTMLElement, opts?: any): Animation {
  const enteringEl = baseEl.querySelector(':scope > ion-content');
  const leavingEl = opts?.leavingEl?.querySelector(':scope > ion-content');

  const enteringAnimation = createAnimation()
    .duration(500)
    .easing('ease-out')
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'translateY(100%)', 'translateY(0)');

  if (enteringEl) enteringAnimation.addElement(enteringEl);

  const leavingAnimation = createAnimation()
    .duration(500)
    .easing('ease-in')
    .fromTo('opacity', '1', '0')
    .fromTo('transform', 'translateY(0)', 'translateY(-100%)');

  if (leavingEl) leavingAnimation.addElement(leavingEl);

  return createAnimation()
    .addAnimation([enteringAnimation, leavingAnimation]);
}
export function flipAnimation(baseEl: HTMLElement, opts?: any): Animation {
  const enteringEl = baseEl.querySelector(':scope > ion-content');
  const leavingEl = opts?.leavingEl?.querySelector(':scope > ion-content');

  const enteringAnimation = createAnimation()
    .duration(600)
    .easing('ease-in-out')
    .fromTo('transform', 'rotateY(90deg)', 'rotateY(0deg)')
    .fromTo('opacity', '0', '1');

  if (enteringEl) enteringAnimation.addElement(enteringEl);

  const leavingAnimation = createAnimation()
    .duration(600)
    .easing('ease-in-out')
    .fromTo('transform', 'rotateY(0deg)', 'rotateY(-90deg)')
    .fromTo('opacity', '1', '0');

  if (leavingEl) leavingAnimation.addElement(leavingEl);

  return createAnimation()
    .addAnimation([enteringAnimation, leavingAnimation]);
}
export function zoomAnimation(baseEl: HTMLElement, opts?: any): Animation {
  const enteringEl = baseEl.querySelector(':scope > ion-content');
  const leavingEl = opts?.leavingEl?.querySelector(':scope > ion-content');

  const enteringAnimation = createAnimation()
    .duration(500)
    .easing('cubic-bezier(0.4, 0, 0.2, 1)')
    .fromTo('opacity', '0', '1')
    .fromTo('transform', 'scale(0.8)', 'scale(1)');

  if (enteringEl) enteringAnimation.addElement(enteringEl);

  const leavingAnimation = createAnimation()
    .duration(500)
    .easing('cubic-bezier(0.4, 0, 0.2, 1)')
    .fromTo('opacity', '1', '0')
    .fromTo('transform', 'scale(1)', 'scale(1.2)');

  if (leavingEl) leavingAnimation.addElement(leavingEl);

  return createAnimation()
    .addAnimation([enteringAnimation, leavingAnimation]);
}
export const blurAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .duration(500)
    .easing('ease-in-out')
    .fromTo('filter', 'blur(10px)', 'blur(0)')
    .fromTo('opacity', '0', '1');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(500)
    .easing('ease-in-out')
    .fromTo('filter', 'blur(0)', 'blur(10px)')
    .fromTo('opacity', '1', '0');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
export const scaleBounceAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .duration(500)
    .easing('cubic-bezier(0.68, -0.55, 0.27, 1.55)')
    .fromTo('transform', 'scale(0.5)', 'scale(1)')
    .fromTo('opacity', '0', '1');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(500)
    .easing('ease-in-out')
    .fromTo('transform', 'scale(1)', 'scale(0.5)')
    .fromTo('opacity', '1', '0');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
export const rotateAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .duration(600)
    .easing('ease-in-out')
    .fromTo('transform', 'rotate(-180deg)', 'rotate(0deg)')
    .fromTo('opacity', '0', '1');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(600)
    .easing('ease-in-out')
    .fromTo('transform', 'rotate(0deg)', 'rotate(180deg)')
    .fromTo('opacity', '1', '0');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
export const slideRightAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .duration(400)
    .easing('ease-in-out')
    .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
    .fromTo('opacity', '0', '1');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(400)
    .easing('ease-in-out')
    .fromTo('transform', 'translateX(0)', 'translateX(100%)')
    .fromTo('opacity', '1', '0');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};

export const flipHorizontalAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .duration(700)
    .easing('ease-in-out')
    .fromTo('transform', 'rotateY(-180deg)', 'rotateY(0deg)')
    .fromTo('opacity', '0', '1');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(700)
    .easing('ease-in-out')
    .fromTo('transform', 'rotateY(0deg)', 'rotateY(180deg)')
    .fromTo('opacity', '1', '0');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
export const skewAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .duration(600)
    .easing('ease-in-out')
    .fromTo('transform', 'skewX(30deg)', 'skewX(0deg)')
    .fromTo('opacity', '0', '1');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(600)
    .easing('ease-in-out')
    .fromTo('transform', 'skewX(0deg)', 'skewX(-30deg)')
    .fromTo('opacity', '1', '0');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
export const zoomOutAnimation = (_: HTMLElement, opts: any) => {
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .duration(500)
    .easing('ease-in')
    .fromTo('transform', 'scale(1.5)', 'scale(1)')
    .fromTo('opacity', '0', '1');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(500)
    .easing('ease-in')
    .fromTo('transform', 'scale(1)', 'scale(0.5)')
    .fromTo('opacity', '1', '0');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
