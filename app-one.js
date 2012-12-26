
  new function () {
	var helper, vector, target;

	LibCanvas.extract();

	helper = new App.Light(new Size(600, 400));
	target = helper.mouse.point;

	vector = helper.createVector( new Circle(100, 100, 20), { zIndex: 2 })
		.setStyle({ stroke: '#900', fill: '#300' });

	helper.mouse.events.add('click', function () {
		var targetVector = helper
			.createVector( new Circle(target.clone(), 2) )
			.setStyle({ fill: '#0f0' });

		vector.animate({
			props: {
				'shape.center.x': target.x,
				'shape.center.y': target.y
			},
			fn: 'elastic-out',
			time: 1000,
			onTick: vector.redraw,
			onComplete: function () {
				targetVector.destroy();
			}
		});
	});
};