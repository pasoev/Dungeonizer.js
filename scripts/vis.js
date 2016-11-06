!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){e.exports=n(46)},3:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={generationMode:{withWalls:!0,isDebug:!1},dungeonParams:{roomSizeDistribution:"normal",dungeonSize:15,roomSizeMean:9,roomSizeDeviation:.75,mainRoomThreshold:1.1,connectivity:.55,density:.3,fromDungeonId:!1,dungeonId:""},visParams:{floorHeight:1,tunnelHeight:1,wallHeight:4,floorTunnelColor:[1,1,1],wallColor:[.6,.6,.6],mainFloorDebugColor:[.6,.1,.1],attachedFloorDebugColor:[.1,.4,.04],trashFloorDebugColor:[.3,.3,.3],trashFloorY:-.9,tunnelDebugHeight:1.2,tunnelDebugColor:[.7,.7,.7]}};t["default"]=n},46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(47),a=o(r),i=n(49),s=o(i),c=n(52),u=o(c),l=n(55),d=o(l),m=n(3),f=o(m),h=function(e){e.children.forEach(function(t){t.name.includes("Dungeon")&&e.remove(t)})},E=function(e,t){var n=new THREE.Object3D;n.name="Dungeon_"+t;var o=e.mstLines&&e.leftAliveLines&&e.delaunayTriangles&&e.trashRooms,r=new s["default"](e.rooms,{isDebug:o,isTrashFloors:!1,config:f["default"].visParams});r.frustumCulled=!1,n.add(r);var a=new u["default"](e.tunnels,{isDebug:o,config:f["default"].visParams});if(a.frustumCulled=!1,n.add(a),e.walls){var i=new u["default"](e.walls,{isDebug:o,config:f["default"].visParams},6);i.frustumCulled=!1,n.add(i)}if(o){var c=new d["default"](e.delaunayTriangles,8947848);n.add(c);var l=new d["default"](e.mstLines,255);n.add(l);var m=new d["default"](e.leftAliveLines,16711680);n.add(m);var h=new s["default"](e.trashRooms,{isDebug:o,isTrashFloors:!0,config:f["default"].visParams});h.frustumCulled=!1,n.add(h)}return n};window.dungeonizer=window.dungeonizer||{},window.dungeonizer.initVisualizer=function(e){e.setClearColor(1118481,!1),e.setPixelRatio(window.devicePixelRatio||1);var t=e.getContext(),n=t.canvas.clientWidth/t.canvas.clientHeight,o=new THREE.PerspectiveCamera(60,n,.1,2e3);o.position.z=-90,o.position.y=110,o.position.x=50,o.lookAt(new THREE.Vector3(0,0,0)),o.updateProjectionMatrix();var r=new a["default"](o,e.domElement),i=new THREE.Scene,s=new THREE.AmbientLight(2105376);i.add(s);var c=new THREE.DirectionalLight(7368816);c.position.set(10,20,10),i.add(c);var u=new THREE.DirectionalLight(7368816);return u.position.set(-30,20,10),i.add(u),{scene:i,update:function(){r.update(),e.render(i,o)},resize:function(e,t){n=e/t,o.aspect!==n&&(o.aspect=n,o.updateProjectionMatrix())},dispose:function(){r.dispose(),h(i)},makeDungeonVisual:function(e,t){h(i);var n=E(e,t);i.add(n)}}}},47:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();window.THREE=THREE,n(48);var a=function(){function e(t,n){o(this,e),this.orbitControls=new THREE.OrbitControls(t,n),this.orbitControls.enableDamping=!0,this.orbitControls.minDistance=1,this.orbitControls.maxDistance=1e3,this.orbitControls.rotateSpeed=.25}return r(e,[{key:"update",value:function(){this.orbitControls.update()}},{key:"dispose",value:function(){this.orbitControls.dispose()}}]),e}();t["default"]=a},48:function(e,t){THREE.OrbitControls=function(e,t){function n(){return 2*Math.PI/60/60*L.autoRotateSpeed}function o(){return Math.pow(.95,L.zoomSpeed)}function r(e){k.theta-=e}function a(e){k.phi-=e}function i(e){L.object instanceof THREE.PerspectiveCamera?V/=e:L.object instanceof THREE.OrthographicCamera?(L.object.zoom=Math.max(L.minZoom,Math.min(L.maxZoom,L.object.zoom*e)),L.object.updateProjectionMatrix(),Z=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),L.enableZoom=!1)}function s(e){L.object instanceof THREE.PerspectiveCamera?V*=e:L.object instanceof THREE.OrthographicCamera?(L.object.zoom=Math.max(L.minZoom,Math.min(L.maxZoom,L.object.zoom/e)),L.object.updateProjectionMatrix(),Z=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),L.enableZoom=!1)}function c(e){B.set(e.clientX,e.clientY)}function u(e){Q.set(e.clientX,e.clientY)}function l(e){K.set(e.clientX,e.clientY)}function d(e){G.set(e.clientX,e.clientY),X.subVectors(G,B);var t=L.domElement===document?L.domElement.body:L.domElement;r(2*Math.PI*X.x/t.clientWidth*L.rotateSpeed),a(2*Math.PI*X.y/t.clientHeight*L.rotateSpeed),B.copy(G),L.update()}function m(e){J.set(e.clientX,e.clientY),$.subVectors(J,Q),$.y>0?i(o()):$.y<0&&s(o()),Q.copy(J),L.update()}function f(e){W.set(e.clientX,e.clientY),q.subVectors(W,K),ne(q.x,q.y),K.copy(W),L.update()}function h(e){}function E(e){e.deltaY<0?s(o()):e.deltaY>0&&i(o()),L.update()}function v(e){switch(e.keyCode){case L.keys.UP:ne(0,L.keyPanSpeed),L.update();break;case L.keys.BOTTOM:ne(0,-L.keyPanSpeed),L.update();break;case L.keys.LEFT:ne(L.keyPanSpeed,0),L.update();break;case L.keys.RIGHT:ne(-L.keyPanSpeed,0),L.update()}}function p(e){B.set(e.touches[0].pageX,e.touches[0].pageY)}function b(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);Q.set(0,o)}function g(e){K.set(e.touches[0].pageX,e.touches[0].pageY)}function T(e){G.set(e.touches[0].pageX,e.touches[0].pageY),X.subVectors(G,B);var t=L.domElement===document?L.domElement.body:L.domElement;r(2*Math.PI*X.x/t.clientWidth*L.rotateSpeed),a(2*Math.PI*X.y/t.clientHeight*L.rotateSpeed),B.copy(G),L.update()}function w(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+n*n);J.set(0,r),$.subVectors(J,Q),$.y>0?s(o()):$.y<0&&i(o()),Q.copy(J),L.update()}function y(e){W.set(e.touches[0].pageX,e.touches[0].pageY),q.subVectors(W,K),ne(q.x,q.y),K.copy(W),L.update()}function R(e){}function H(e){if(L.enabled!==!1){if(e.preventDefault(),e.button===L.mouseButtons.ORBIT){if(L.enableRotate===!1)return;c(e),F=_.ROTATE}else if(e.button===L.mouseButtons.ZOOM){if(L.enableZoom===!1)return;u(e),F=_.DOLLY}else if(e.button===L.mouseButtons.PAN){if(L.enablePan===!1)return;l(e),F=_.PAN}F!==_.NONE&&(document.addEventListener("mousemove",C,!1),document.addEventListener("mouseup",O,!1),L.dispatchEvent(U))}}function C(e){if(L.enabled!==!1)if(e.preventDefault(),F===_.ROTATE){if(L.enableRotate===!1)return;d(e)}else if(F===_.DOLLY){if(L.enableZoom===!1)return;m(e)}else if(F===_.PAN){if(L.enablePan===!1)return;f(e)}}function O(e){L.enabled!==!1&&(h(e),document.removeEventListener("mousemove",C,!1),document.removeEventListener("mouseup",O,!1),L.dispatchEvent(S),F=_.NONE)}function M(e){L.enabled===!1||L.enableZoom===!1||F!==_.NONE&&F!==_.ROTATE||(e.preventDefault(),e.stopPropagation(),E(e),L.dispatchEvent(U),L.dispatchEvent(S))}function x(e){L.enabled!==!1&&L.enableKeys!==!1&&L.enablePan!==!1&&v(e)}function P(e){if(L.enabled!==!1){switch(e.touches.length){case 1:if(L.enableRotate===!1)return;p(e),F=_.TOUCH_ROTATE;break;case 2:if(L.enableZoom===!1)return;b(e),F=_.TOUCH_DOLLY;break;case 3:if(L.enablePan===!1)return;g(e),F=_.TOUCH_PAN;break;default:F=_.NONE}F!==_.NONE&&L.dispatchEvent(U)}}function D(e){if(L.enabled!==!1)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(L.enableRotate===!1)return;if(F!==_.TOUCH_ROTATE)return;T(e);break;case 2:if(L.enableZoom===!1)return;if(F!==_.TOUCH_DOLLY)return;w(e);break;case 3:if(L.enablePan===!1)return;if(F!==_.TOUCH_PAN)return;y(e);break;default:F=_.NONE}}function A(e){L.enabled!==!1&&(R(e),L.dispatchEvent(S),F=_.NONE)}function j(e){e.preventDefault()}this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-(1/0),this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:THREE.MOUSE.LEFT,ZOOM:THREE.MOUSE.MIDDLE,PAN:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return I.phi},this.getAzimuthalAngle=function(){return I.theta},this.reset=function(){L.target.copy(L.target0),L.object.position.copy(L.position0),L.object.zoom=L.zoom0,L.object.updateProjectionMatrix(),L.dispatchEvent(N),L.update(),F=_.NONE},this.update=function(){var t=new THREE.Vector3,o=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),a=o.clone().inverse(),i=new THREE.Vector3,s=new THREE.Quaternion;return function(){var e=L.object.position;return t.copy(e).sub(L.target),t.applyQuaternion(o),I.setFromVector3(t),L.autoRotate&&F===_.NONE&&r(n()),I.theta+=k.theta,I.phi+=k.phi,I.theta=Math.max(L.minAzimuthAngle,Math.min(L.maxAzimuthAngle,I.theta)),I.phi=Math.max(L.minPolarAngle,Math.min(L.maxPolarAngle,I.phi)),I.makeSafe(),I.radius*=V,I.radius=Math.max(L.minDistance,Math.min(L.maxDistance,I.radius)),L.target.add(Y),t.setFromSpherical(I),t.applyQuaternion(a),e.copy(L.target).add(t),L.object.lookAt(L.target),L.enableDamping===!0?(k.theta*=1-L.dampingFactor,k.phi*=1-L.dampingFactor):k.set(0,0,0),V=1,Y.set(0,0,0),!!(Z||i.distanceToSquared(L.object.position)>z||8*(1-s.dot(L.object.quaternion))>z)&&(L.dispatchEvent(N),i.copy(L.object.position),s.copy(L.object.quaternion),Z=!1,!0)}}(),this.dispose=function(){L.domElement.removeEventListener("contextmenu",j,!1),L.domElement.removeEventListener("mousedown",H,!1),L.domElement.removeEventListener("wheel",M,!1),L.domElement.removeEventListener("touchstart",P,!1),L.domElement.removeEventListener("touchend",A,!1),L.domElement.removeEventListener("touchmove",D,!1),document.removeEventListener("mousemove",C,!1),document.removeEventListener("mouseup",O,!1),window.removeEventListener("keydown",x,!1)};var L=this,N={type:"change"},U={type:"start"},S={type:"end"},_={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},F=_.NONE,z=1e-6,I=new THREE.Spherical,k=new THREE.Spherical,V=1,Y=new THREE.Vector3,Z=!1,B=new THREE.Vector2,G=new THREE.Vector2,X=new THREE.Vector2,K=new THREE.Vector2,W=new THREE.Vector2,q=new THREE.Vector2,Q=new THREE.Vector2,J=new THREE.Vector2,$=new THREE.Vector2,ee=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),Y.add(e)}}(),te=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,1),e.multiplyScalar(t),Y.add(e)}}(),ne=function(){var e=new THREE.Vector3;return function(t,n){var o=L.domElement===document?L.domElement.body:L.domElement;if(L.object instanceof THREE.PerspectiveCamera){var r=L.object.position;e.copy(r).sub(L.target);var a=e.length();a*=Math.tan(L.object.fov/2*Math.PI/180),ee(2*t*a/o.clientHeight,L.object.matrix),te(2*n*a/o.clientHeight,L.object.matrix)}else L.object instanceof THREE.OrthographicCamera?(ee(t*(L.object.right-L.object.left)/L.object.zoom/o.clientWidth,L.object.matrix),te(n*(L.object.top-L.object.bottom)/L.object.zoom/o.clientHeight,L.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),L.enablePan=!1)}}();L.domElement.addEventListener("contextmenu",j,!1),L.domElement.addEventListener("mousedown",H,!1),L.domElement.addEventListener("wheel",M,!1),L.domElement.addEventListener("touchstart",P,!1),L.domElement.addEventListener("touchend",A,!1),L.domElement.addEventListener("touchmove",D,!1),window.addEventListener("keydown",x,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}})},49:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(50),i=o(a),s=n(51),c=o(s),u=function l(e,t){var n=t.isDebug,o=t.isTrashFloors,a=t.config;r(this,l);for(var s=[],u=[],d=[],m=n?a.mainFloorDebugColor:a.floorTunnelColor,f=a.attachedFloorDebugColor,h=a.trashFloorDebugColor,E=o?a.trashFloorY:0,v=0;v<e.length;v++)s.push(e[v].x,E,e[v].y),u.push(e[v].w,a.floorHeight,e[v].h),d.push.apply(d,o?h:e[v].isAttached?f:m);var p=new THREE.BoxBufferGeometry(1,1,1),b=new THREE.InstancedBufferGeometry;b.addAttribute("position",p.attributes.position),b.addAttribute("normal",p.attributes.normal),b.addAttribute("uv",p.attributes.uv),b.setIndex(p.index),b.addAttribute("offset",new THREE.InstancedBufferAttribute(new Float32Array(s),3,1)),b.addAttribute("scale",new THREE.InstancedBufferAttribute(new Float32Array(u),3,1)),b.addAttribute("color",new THREE.InstancedBufferAttribute(new Float32Array(d),3,1));var g=THREE.UniformsUtils.clone(THREE.UniformsLib.lights);g.opacity={value:o?.5:1},g.isDebug={value:n?1:0};var T=new THREE.RawShaderMaterial({uniforms:g,vertexShader:i["default"],fragmentShader:c["default"],side:THREE.FrontSide,transparent:!!o,lights:!0}),w=new THREE.Mesh(b,T);return w};t["default"]=u},50:function(e,t){e.exports="attribute vec3 position;\r\nattribute vec3 normal;\r\nattribute vec2 uv;\r\n\r\nattribute vec3 offset;\r\nattribute vec3 scale;\r\nattribute vec3 color;\r\n\r\nuniform mat4 viewMatrix;\r\nuniform mat4 projectionMatrix;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec3 vColor;\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n    mat4 modelMat = mat4(\r\n        scale.x, 0., 0., 0.,\r\n        0., scale.y, 0., 0.,\r\n        0., 0., scale.z, 0.,\r\n        offset.x, offset.y, offset.z, 1.\r\n    );\r\n\tgl_Position = projectionMatrix * viewMatrix * modelMat * vec4(position, 1.);\r\n\r\n\tvNormal = mat3(viewMatrix * modelMat) * normal;\r\n\tvColor = color;\r\n    vUv = uv * vec2(scale.x, scale.z);\r\n}\r\n"},51:function(e,t){e.exports="precision mediump float;\r\nvarying vec3 vNormal;\r\nvarying vec3 vColor;\r\nvarying vec2 vUv;\r\n\r\n#include <common>\r\n#include <lights_pars>\r\n\r\nuniform float opacity;\r\nuniform float isDebug;\r\n\r\nvoid main() {\r\n\r\n    vec2 uv = mod(vUv, 1.) - 0.5;\r\n    float d = clamp(uv.x * uv.x + uv.y * uv.y, 0., 1.);\r\n\tvec3 c = vColor * (isDebug > 0.5 ? 1. : d * d);\r\n\r\n    #if NUM_DIR_LIGHTS > 0\r\n    vec3 light;\r\n\tfor (int i = 0; i < NUM_DIR_LIGHTS; i++) {\r\n\t\tlight = max( dot(normalize(vNormal), directionalLights[i].direction), 0.0) * directionalLights[i].color * 0.5;\r\n\t\tc += light;\r\n\t}\r\n\t#endif\r\n\r\n\tgl_FragColor = vec4(c, opacity);\r\n}\r\n"},52:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=n(53),i=o(a),s=n(54),c=o(s),u=n(50),l=o(u),d=n(51),m=o(d),f=function h(e,t,n){var o=t.isDebug,a=t.config;r(this,h);for(var s=[],u=[],d=[],f=n?a.wallColor:o?a.tunnelDebugColor:a.floorTunnelColor,E=n?a.wallHeight:o?a.tunnelDebugHeight:a.tunnelHeight,v=n?E/2-.5:0,p=void 0,b=void 0,g=void 0,T=void 0,w=void 0,y=0;y<e.length;y+=4){p=e[y+2]-e[y]>e[y+3]-e[y+1],b=p?(e[y]+e[y+2])/2:e[y]+.5,T=p?e[y+2]-e[y]:1,g=p?e[y+1]+.5:(e[y+1]+e[y+3])/2,w=p?1:e[y+3]-e[y+1],s.push(b,v,g),u.push(T,E,w);var R=[Math.abs(Math.sin(157.21355*b)),Math.abs(Math.sin(157.21355*b*g))/3,Math.abs(Math.sin(157.21355*g))];d.push.apply(d,n&&o?R:f)}var H=new THREE.BoxBufferGeometry(1,1,1),C=new THREE.InstancedBufferGeometry;if(n||o)for(var O=0;O<H.attributes.position.array.length/3;O++)H.attributes.position.array[3*O+1]<0?H.attributes.uv.array[2*O+1]=0:H.attributes.uv.array[2*O+1]=1;C.addAttribute("position",H.attributes.position),C.addAttribute("normal",H.attributes.normal),C.addAttribute("uv",H.attributes.uv),C.setIndex(H.index),C.addAttribute("offset",new THREE.InstancedBufferAttribute(new Float32Array(s),3,1)),C.addAttribute("scale",new THREE.InstancedBufferAttribute(new Float32Array(u),3,1)),C.addAttribute("color",new THREE.InstancedBufferAttribute(new Float32Array(d),3,1));var M=THREE.UniformsUtils.clone(THREE.UniformsLib.lights),x=new THREE.RawShaderMaterial({uniforms:M,vertexShader:n||o?i["default"]:l["default"],fragmentShader:n||o?c["default"]:m["default"],side:THREE.FrontSide,transparent:!1,lights:!0});return new THREE.Mesh(C,x)};t["default"]=f},53:function(e,t){e.exports="attribute vec3 position;\r\nattribute vec3 normal;\r\nattribute vec2 uv;\r\nattribute vec3 color;\r\n\r\nattribute vec3 offset;\r\nattribute vec3 scale;\r\n\r\nuniform mat4 viewMatrix;\r\nuniform mat4 projectionMatrix;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec3 vColor;\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n    mat4 modelMat = mat4(\r\n        scale.x, 0., 0., 0.,\r\n        0., scale.y, 0., 0.,\r\n        0., 0., scale.z, 0.,\r\n        offset.x, offset.y, offset.z, 1.\r\n    );\r\n\tgl_Position = projectionMatrix * viewMatrix * modelMat * vec4(position, 1.);\r\n\r\n\tvNormal = mat3(viewMatrix * modelMat) * normal;\r\n    vColor = color;\r\n    vUv = uv;\r\n}\r\n"},54:function(e,t){e.exports="precision mediump float;\r\nvarying vec3 vNormal;\r\n\r\n#include <common>\r\n#include <lights_pars>\r\n\r\nvarying vec3 vColor;\r\nvarying vec2 vUv;\r\n\r\nvoid main() {\r\n\r\n\tvec3 c = vColor * sqrt(vUv.y);\r\n\r\n    #if NUM_DIR_LIGHTS > 0\r\n    vec3 light;\r\n\tfor (int i = 0; i < NUM_DIR_LIGHTS; i++) {\r\n\t\tlight = max( dot(normalize(vNormal), directionalLights[i].direction), 0.0) * directionalLights[i].color * 0.5;\r\n\t\tc += light;\r\n\t}\r\n\t#endif\r\n\r\n\tgl_FragColor = vec4(c, 1.0);\r\n}\r\n"},55:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function r(e,t){n(this,r);for(var o=new THREE.Object3D,a=new THREE.LineBasicMaterial({color:t}),i=0;i<e.length;i+=4){var s=new THREE.Geometry;s.vertices.push(new THREE.Vector3(e[i],1,e[i+1]),new THREE.Vector3(e[i+2],1,e[i+3]));var c=new THREE.Line(s,a);o.add(c)}return o};t["default"]=o}})});