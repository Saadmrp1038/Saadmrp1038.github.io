import assert from 'node:assert/strict';
import test from 'node:test';
import {
	BIO_TEXT,
	NEWS_ITEMS,
	RESEARCH_DESCRIPTION,
	RESEARCH_INTERESTS
} from '../src/lib/data/pageData.js';

const MONTHS = new Map([
	['Jan', 0],
	['Feb', 1],
	['Mar', 2],
	['Apr', 3],
	['May', 4],
	['Jun', 5],
	['Jul', 6],
	['Aug', 7],
	['Sep', 8],
	['Oct', 9],
	['Nov', 10],
	['Dec', 11]
]);

function toTimestamp(date) {
	const [month, year] = date.split(' ');
	return Date.UTC(Number(year), MONTHS.get(month), 1);
}

test('news items are valid and newest first', () => {
	const ids = new Set();
	let previousTimestamp = Number.POSITIVE_INFINITY;

	for (const item of NEWS_ITEMS) {
		assert.ok(item.id, 'Every news item needs a stable id');
		assert.ok(!ids.has(item.id), `Duplicate news id: ${item.id}`);
		assert.ok(item.segments.length > 0, `${item.id} needs display content`);

		const timestamp = toTimestamp(item.date);
		assert.ok(Number.isFinite(timestamp), `${item.id} has an invalid date`);
		assert.ok(timestamp <= previousTimestamp, `${item.id} is out of chronological order`);

		for (const segment of item.segments) {
			assert.ok(segment.text?.trim(), `${item.id} contains an empty segment`);
			if (segment.href) {
				assert.equal(new URL(segment.href).protocol, 'https:');
			}
		}

		ids.add(item.id);
		previousTimestamp = timestamp;
	}
});

test('homepage biography and research interests are populated', () => {
	assert.ok(BIO_TEXT.short.trim());
	assert.ok(BIO_TEXT.full.trim());
	assert.ok(RESEARCH_INTERESTS.length > 0);
	assert.ok(RESEARCH_INTERESTS.every((interest) => interest.trim()));

	const linkedResearchProjects = new Map(
		RESEARCH_DESCRIPTION.filter((segment) => segment.href).map((segment) => [
			segment.text,
			segment.href
		])
	);
	assert.equal(linkedResearchProjects.get('SREGym'), 'https://github.com/SREGym/SREGym');
	assert.equal(linkedResearchProjects.get('Specula'), 'https://arxiv.org/abs/2607.25333');
});
