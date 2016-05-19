// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE in the project root for license information.

/// <reference path="../PanelHost/PanelHost.ts"/>

namespace fabric {
  /**
   * Panel Host
   *
   * A host for the panel control
   *
   */
  const ANIMATE_IN_STATE = "animate-in";
  const ANIMATE_OUT_STATE = "animate-out";
  const ANIMATION_END = 400;

  export class Panel {

    private _panel: Element;
    private _panelHost: PanelHost;
    private _direction: string;
    private _animateOverlay: boolean;

    /**
     *
     * @param {HTMLElement} container - the target container for an instance of Panel
     * @constructor
     */
    constructor(panel: Element,  direction?: string, animateOverlay?: boolean) {
      this._panel = panel;
      this._direction = direction || "right";
      this._animateOverlay = animateOverlay || true;
      this._panelHost = new fabric.PanelHost(this._panel, this._animateInPanel);
    }

    public dismiss(callBack?: Function) {
      this._panel.classList.add(ANIMATE_OUT_STATE);
      setTimeout(() => {
        this._panelHost.dismiss();
        if (callBack) {
          callBack();
        }
      }, ANIMATION_END);
    }

    private _animateInPanel(layer: Element) {
      layer.classList.add(ANIMATE_IN_STATE);
    }
  }
}
