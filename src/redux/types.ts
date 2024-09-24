export type Country = {
    id: string,
    name: {
        common: string;
        official: string;
        nativeName: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    idd: {
        root: string;
        suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    translations: {
        [key: string]: {
            official: string;
            common: string;
        };
    };
    latlng: [number, number];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: {
        [key: string]: {
            f: string;
            m: string;
        };
    };
    flag: string;
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    gini: {
        [year: string]: number;
    };
    fifa: string;
    car: {
        signs: string[];
        side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    coatOfArms: {
        png: string;
        svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
        latlng: [number, number];
    };
    postalCode: {
        format: string;
        regex: string;
    };
    is_visited: boolean,
    trip_notes: string,
};

export interface GenericPaginatedApi<Type> {
    "first": number | null,
    "prev": number | null,
    "next": number | null,
    "last": number | null,
    "pages": number,
    "items": number,
    "data": Type[],
}

export type CountriesPaginated = GenericPaginatedApi<Country>

export type EditTrip = {
    country_id: string,
    is_visited?: boolean,
    trip_notes?: string,
}