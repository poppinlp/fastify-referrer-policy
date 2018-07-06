import test from 'ava';
import fastify from 'fastify';
import plugin from '../src/index';

test.beforeEach(t => {
	const app = fastify();

	app.get('/', (request, reply) => {
		reply.send('hello world');
	});

	t.context.app = app;
});

const mock = async (t, opts) => {
	const rsp = await t.context.app.register(plugin, opts).inject({
		method: 'get',
		url: '/'
	});
	return rsp.headers['referrer-policy'];
};

test('default header should be no-referrer', async t => {
	const header = await mock(t);
	t.is(header, 'no-referrer');
});

[
	'no-referrer',
	'no-referrer-when-downgrade',
	'same-origin',
	'origin',
	'strict-origin',
	'origin-when-cross-origin',
	'strict-origin-when-cross-origin',
	'unsafe-url',
	''
].forEach(policy => {
	test(`can set the header to "${policy}"`, async t => {
		const header = await mock(t, { policy });
		t.is(header, policy);
	});
});

[
	'garbage',
	'sameorigin',
	123,
	false,
	null,
	{},
	[],
	['same-origin'],
	/cool_regex/g
].forEach(policy => {
	test(`should use default header for invalid policy "${JSON.stringify(policy)}"`, async t => {
		const header = await mock(t, { policy });
		t.is(header, 'no-referrer');
	});
});
