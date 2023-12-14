import { CurrencySchema } from '@/entities/Currency';
import { rtkApi } from '@/shared/api/rtkApi';

const currencySelectApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrency: build.query<CurrencySchema[], void>({
      query: () => ({
        url: 'currencies',
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const useGetCurrency = currencySelectApi.useGetCurrencyQuery;
