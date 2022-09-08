import urlcat from 'urlcat';

export interface Root {
	'_id': string;
	'_rev': string;
	'name': string;
	'dist-tags': {
		beta: string;
		latest: string;
	};
	'versions': Record<
		string,
		{
			name: string;
			version: string;
			main?: string;
			module?: string;
			types?: string;
			repository?: string;
			author?: string;
			license?: string;
			packageManager?: string;
			publishConfig?: Record<string, string>;
			scripts?: Record<string, string>;
			devDependencies: Record<string, string>;
			dependencies: Record<string, string>;
			_id: string;
			gitHead: string;
			dist: {
				'shasum': string;
				'integrity': string;
				'tarball': string;
				'fileCount': number;
				'unpackedSize': number;
				'signatures': {
					keyid: string;
					sig: string;
				}[];
				'npm-signature': string;
			};
			_npmUser: {
				name: string;
				email: string;
			};
			directories: {};
			maintainers: {
				name: string;
				email: string;
			}[];
			_npmOperationalInternal: {
				host: string;
				tmp: string;
			};
			_hasShrinkwrap: boolean;
		}
	>;
	'time': {
		created: string;
		modified: string;
	} & Record<string, string>;
	'maintainers': {
		name: string;
		email: string;
	}[];
	'repository': string;
	'author': string;
	'license': string;
	'readme': string;
	'readmeFilename': string;
	'homepage': string;
}

export async function getPackageDetails(packageName = '@onehop/js') {
	const url = urlcat('https://registry.yarnpkg.com/:package', {
		package: packageName,
	});

	const headers = new Headers({
		accept: 'application/json',
	});

	const request = new Request(url, {
		headers,
		method: 'GET',
	});

	const response = await fetch(request);

	if (!response.ok) {
		throw new Error(
			`Request failed with status ${response.status} ${response.statusText}.`,
		);
	}

	const body = (await response.json()) as Root;

	return body;
}
