import './jeelizFaceFilter.runtime.js';

type JeelizFaceFilterApi = {
	init: (options: Record<string, unknown>) => void;
	resize: () => void;
};

const JEELIZFACEFILTER = window.JEELIZFACEFILTER as JeelizFaceFilterApi;

export default JEELIZFACEFILTER;
