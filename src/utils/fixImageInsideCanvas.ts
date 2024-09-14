import { Point, type TOriginX, type TOriginY, type FabricImage } from "fabric";
import type { templateType } from "../resourcesTypedef";

/**\
 * This function is meant to run in a context in which the canvas is zoomed and larger to fit the entire modal
 * In general the preview of the label editor are 1:1 pixel at 300dpi with the sizes and css scaled.
 */
export const fixImageInsideCanvas = (target: FabricImage, template: templateType) => {
  const { canvas } = target;
  if (!canvas) return;
  const overlayImage = canvas.getObjects('group')[0];
  // constrain image position
  const zoom = canvas.getZoom();

  const center = target.getRelativeCenterPoint();
  let fixOriginX: TOriginX = 'center';
  let fixOriginY: TOriginY = 'center';
  let fixXPos = center.x;
  let fixYPos = center.y;
  let minX = 0;
  let minY = 0;
  let maxX = canvas.width / zoom;
  let maxY = canvas.height / zoom;
  if (template.overlay && overlayImage) {
    const overlayCenter =  overlayImage.getRelativeCenterPoint();
    const overlaySize = overlayImage._getTransformedDimensions();
    const overlayTopLeft = overlayImage.translateToOriginPoint(
      overlayCenter,
      'left',
      'top',
    );
    minX = (template.overlay.x * overlaySize.x + overlayTopLeft.x);
    minY = (template.overlay.y * overlaySize.y + overlayTopLeft.y);
    maxX = (template.overlay.width * overlaySize.x + minX);
    maxY = (template.overlay.height * overlaySize.y + minY);
  }
  // top left corner
  const topLeft = target.translateToOriginPoint(
    center,
    'left',
    'top',
  );
  if (topLeft.x > minX) {
    fixXPos = minX;
    fixOriginX = 'left';
  }
  if (topLeft.y > minY) {
    fixYPos = minY;
    fixOriginY = 'top';
  }

  // bottom left corner
  // max y and max x depends on currenct canvas size and zoom

  const bottomRight = target.translateToOriginPoint(
    center,
    'right',
    'bottom',
  );
  if (bottomRight.x < maxX) {
    fixXPos = maxX;
    fixOriginX = 'right';
  }
  if (bottomRight.y < maxY) {
    fixYPos = maxY;
    fixOriginY = 'bottom';
  }
  target.setPositionByOrigin(
    new Point(fixXPos, fixYPos),
    fixOriginX,
    fixOriginY,
  );
}