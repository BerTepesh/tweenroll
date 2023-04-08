import $ from 'jquery';
import createPlugin from 'jquery-plugin-generator';

import Slider from '../../components/slider';

class MenuSlider extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			'arrows': true,
			'dots': false,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
						breakpoint: 1440,
						settings: {
								slidesToShow: 2,
								slidesToScroll: 2
						}
				},
				{
						breakpoint: 992,
						settings: {
								slidesToShow: 1,
								slidesToScroll: 1
						}
				}
			]
		});
	}

	constructor ($container, opts) {
		super ($container, opts);
	}
}

$.fn.menuSlider = createPlugin(MenuSlider);