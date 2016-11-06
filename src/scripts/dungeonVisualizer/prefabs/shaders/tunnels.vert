attribute vec3 position;
attribute vec3 normal;

attribute vec3 offset;
attribute vec3 scale;

uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;

varying vec3 vNormal;
varying vec3 vColor;
varying vec3 nothing;

void main() {
    mat4 modelMat = mat4(
        scale.x, 0., 0., 0.,
        0., scale.y, 0., 0.,
        0., 0., scale.z, 0.,
        offset.x, offset.y, offset.z, 1.
    );
	gl_Position = projectionMatrix * viewMatrix * modelMat * vec4(position, 1.);

	vNormal = mat3(viewMatrix * modelMat) * normal;
    nothing = offset;
}