import {sync} from 'glob';
import {rename} from 'node:fs/promises';

const metas = sync('./**/*/meta.json');

for (const meta of metas) {
	rename(meta, meta.replace('meta.json', '_meta.json'));
}
