export interface Country {
    name: {
        common: string;
        official: string;
    };
    tld: string[];
    currencies: {
        [key: string]:  {
            name: string;
            symbol: string;
        }
    };
    region: string;
    subregion: string;
    population: number;
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    borders: string[];
    capital: string[];
    langiages: {
        [key: string]: string
    };
}
