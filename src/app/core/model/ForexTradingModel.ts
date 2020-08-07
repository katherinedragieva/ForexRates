export interface ForexRatesResponse {
    success: boolean,
    timestmap: number,
    base: string,
    date: Date,
    rates: Map<string, number>
 }