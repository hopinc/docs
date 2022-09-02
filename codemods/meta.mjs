import glob from 'glob';
import {rename} from 'node:fs/promises';

const metas = glob.sync('./**/*/meta.json');

for (const meta of metas) {
	rename(meta, meta.replace('meta.json', '_meta.json'));
}
