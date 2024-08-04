export interface Places {
    id:              number;
    slug:            string;
    city_slug:       string;
    display:         string;
    ascii_display:   string;
    city_name:       string;
    city_ascii_name: string;
    state:           State;
    country:         Country;
    lat:             string;
    long:            string;
    result_type:     ResultType;
    popularity:      string;
    sort_criteria:   number;
}

export enum Country {
    México = "México",
}

export enum ResultType {
    Airport = "airport",
    City = "city",
    Terminal = "terminal",
}

export enum State {
    Guerrero = "Guerrero",
    Morelos = "Morelos",
    Oaxaca = "Oaxaca",
}
