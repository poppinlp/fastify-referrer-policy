const fp = require('fastify-plugin');

const referrerPolicy = (app, opts = {}, next) => {
	const DEFAULT_POLICY = 'no-referrer';
	const ALLOWED_POLICIES = new Set([
		'no-referrer',
		'no-referrer-when-downgrade',
		'same-origin',
		'origin',
		'strict-origin',
		'origin-when-cross-origin',
		'strict-origin-when-cross-origin',
		'unsafe-url',
		''
	]);
	const policy = opts.policy !== undefined && ALLOWED_POLICIES.has(opts.policy) && opts.policy || DEFAULT_POLICY;

	app.addHook('onSend', (request, reply, payload, next) => {
		reply.header('Referrer-Policy', policy);
		next();
	});

	next();
};

module.exports = fp(referrerPolicy, {
	fastify: '^1.0.0',
	name: 'fastify-referrer-policy'
});
