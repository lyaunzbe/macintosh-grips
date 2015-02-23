precision mediump float;

varying float vindex;
varying vec3  vpos;
uniform float time;

#pragma glslify: hsv = require(glsl-hsv2rgb)

void main() {
  gl_FragColor = mix(
      normalize(vec4(sin(0.3451*(time/100.0))+.25, 1.0, cos(0.5450*vpos.x)*.5,  1.0))
    , normalize(vec4(cos(0.3804*(time/100.0))+.25, sin(0.7647*vpos.z), 1.0, 1.0))
    , clamp((vpos.z + 1.0) * 0.75, 0.0, 1.0)
  );
}
