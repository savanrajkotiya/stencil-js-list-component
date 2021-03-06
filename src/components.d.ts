/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ListComponent {
        "listdata": any;
        "renderkey": any;
    }
    interface RootComponent {
    }
}
declare global {
    interface HTMLListComponentElement extends Components.ListComponent, HTMLStencilElement {
    }
    var HTMLListComponentElement: {
        prototype: HTMLListComponentElement;
        new (): HTMLListComponentElement;
    };
    interface HTMLRootComponentElement extends Components.RootComponent, HTMLStencilElement {
    }
    var HTMLRootComponentElement: {
        prototype: HTMLRootComponentElement;
        new (): HTMLRootComponentElement;
    };
    interface HTMLElementTagNameMap {
        "list-component": HTMLListComponentElement;
        "root-component": HTMLRootComponentElement;
    }
}
declare namespace LocalJSX {
    interface ListComponent {
        "listdata"?: any;
        "onClickListElement"?: (event: CustomEvent<any>) => void;
        "renderkey"?: any;
    }
    interface RootComponent {
    }
    interface IntrinsicElements {
        "list-component": ListComponent;
        "root-component": RootComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "list-component": LocalJSX.ListComponent & JSXBase.HTMLAttributes<HTMLListComponentElement>;
            "root-component": LocalJSX.RootComponent & JSXBase.HTMLAttributes<HTMLRootComponentElement>;
        }
    }
}
