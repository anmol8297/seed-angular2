/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from './error.component';
import * as i3 from './error.service';
const styles_ErrorComponent:any[] = ['.backdrop[_ngcontent-%COMP%] {\n            background-color: rgba(0, 0, 0, 0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height:100vh;\n        }'];
export const RenderType_ErrorComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:0,
    styles:styles_ErrorComponent,data:{}});
export function View_ErrorComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),2,'div',[['class',
      'backdrop']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(1,278528,(null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(2,{'display':0}),
      (_l()(),i0.ɵted(-1,(null as any),['\n'])),(_l()(),i0.ɵeld(4,0,(null as any),
          (null as any),33,'div',[['class','modal'],['role','dialog'],['tabindex',
              '-1']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i0.ɵdid(5,278528,(null as any),0,i1.NgStyle,[i0.KeyValueDiffers,i0.ElementRef,
          i0.Renderer],{ngStyle:[0,'ngStyle']},(null as any)),i0.ɵpod(6,{'display':0}),
      (_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(8,0,(null as any),
          (null as any),28,'div',[['class','modal-dialog'],['role','document']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n        '])),(_l()(),i0.ɵeld(10,0,(null as any),(null as any),
          25,'div',[['class','modal-content']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵeld(12,0,(null as any),(null as any),10,'div',[['class','modal-header']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['\n                '])),(_l()(),i0.ɵeld(14,
          0,(null as any),(null as any),1,'h5',[['class','modal-title']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(15,
          (null as any),['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵeld(17,0,(null as any),(null as any),4,'button',[['aria-label','Close'],
          ['class','close'],['type','button']],(null as any),[[(null as any),'click']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.ErrorComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onErrorHandled()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                    '])),
      (_l()(),i0.ɵeld(19,0,(null as any),(null as any),1,'span',[['aria-hidden','true']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['×'])),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n            '])),(_l()(),i0.ɵeld(24,0,(null as any),(null as any),4,
          'div',[['class','modal-body']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n                '])),
      (_l()(),i0.ɵeld(26,0,(null as any),(null as any),1,'p',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(27,
          (null as any),['',''])),(_l()(),i0.ɵted(-1,(null as any),['\n            '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵeld(30,0,(null as any),
          (null as any),4,'div',[['class','modal-footer']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n                '])),(_l()(),i0.ɵeld(32,0,(null as any),(null as any),
          1,'button',[['class','btn btn-secondary'],['type','button']],(null as any),
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i2.ErrorComponent = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.onErrorHandled()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['Close'])),
      (_l()(),i0.ɵted(-1,(null as any),['\n            '])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,
          (null as any),['\n']))],(_ck,_v) => {
    var _co:i2.ErrorComponent = _v.component;
    const currVal_0:any = _ck(_v,2,0,_co.display);
    _ck(_v,1,0,currVal_0);
    const currVal_1:any = _ck(_v,6,0,_co.display);
    _ck(_v,5,0,currVal_1);
  },(_ck,_v) => {
    var _co:i2.ErrorComponent = _v.component;
    const currVal_2:any = ((_co.error == null)? (null as any): _co.error.title);
    _ck(_v,15,0,currVal_2);
    const currVal_3:any = ((_co.error == null)? (null as any): _co.error.message);
    _ck(_v,27,0,currVal_3);
  });
}
export function View_ErrorComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-error',
      ([] as any[]),(null as any),(null as any),(null as any),View_ErrorComponent_0,
      RenderType_ErrorComponent)),i0.ɵdid(1,114688,(null as any),0,i2.ErrorComponent,
      [i3.ErrorService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const ErrorComponentNgFactory:i0.ComponentFactory<i2.ErrorComponent> = i0.ɵccf('app-error',
    i2.ErrorComponent,View_ErrorComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvaWFtYW4vRG9jdW1lbnRzL05ldy1mb2xkZXIvbmctbm9kZS9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9lcnJvcnMvZXJyb3IuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2lhbWFuL0RvY3VtZW50cy9OZXctZm9sZGVyL25nLW5vZGUvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL2lhbWFuL0RvY3VtZW50cy9OZXctZm9sZGVyL25nLW5vZGUvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvaWFtYW4vRG9jdW1lbnRzL05ldy1mb2xkZXIvbmctbm9kZS9zZWVkLXByb2plY3QvYXNzZXRzL2FwcC9lcnJvcnMvZXJyb3IuY29tcG9uZW50LnRzLkVycm9yQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZGlzcGxheX1cIj48L2Rpdj5cclxuPGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBkaXNwbGF5fVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3sgZXJyb3I/LnRpdGxlIH19PC9oNT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwib25FcnJvckhhbmRsZWQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cD57eyBlcnJvcj8ubWVzc2FnZSB9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwib25FcnJvckhhbmRsZWQoKVwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PiIsIjxhcHAtZXJyb3I+PC9hcHAtZXJyb3I+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztvQkNBQTtNQUFBO2FBQUE7cUJBQUEsZ0RBQXNCO01BQXVDLDBDQUM3RDtVQUFBO2NBQUE7YUFBQTtxQkFBQSxnREFBK0M7TUFBaUMsOENBQzVFO1VBQUE7VUFBQSwwREFBMEM7VUFBQSwrQkFDdEM7VUFBQTtVQUFBLDhCQUEyQjtNQUN2QjtVQUFBO01BQTBCLDBEQUN0QjtVQUFBO1VBQUEsMERBQXdCO1VBQUEsd0JBQXVCO01BQy9DO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBdUQ7Y0FBQTtjQUFBO1lBQUE7WUFBdkQ7VUFBQSxnQ0FBa0Y7TUFDOUU7VUFBQTtNQUF5Qix5Q0FBYztNQUNsQyxzREFDUDtVQUFBLHFCQUNOO1VBQUE7VUFBQSw4QkFBd0I7TUFDcEI7VUFBQSwwREFBRztVQUFBLHdCQUF3QjtNQUN6QixzREFDTjtVQUFBO1VBQUEsNENBQTBCO1VBQUEseUJBQ3RCO1VBQUE7VUFBQTtZQUFBO1lBQUE7WUFBZ0Q7Y0FBQTtjQUFBO1lBQUE7WUFBaEQ7VUFBQSxnQ0FBMkU7TUFBYyxzREFDdkY7VUFBQSxpQkFDSiw4Q0FDSjtVQUFBOztJQWpCWTtJQUF0QixXQUFzQixTQUF0QjtJQUMrQztJQUEvQyxXQUErQyxTQUEvQzs7O0lBSXdDO0lBQUE7SUFNckI7SUFBQTs7OztvQkNYbkI7TUFBQTsrQkFBQSxVQUFBO01BQUE7SUFBQTs7OzsifQ==