import { getAuthorized, post, CARD_BASE_URL } from '@utils';

export const getCardList = (customerId) => getAuthorized(`${CARD_BASE_URL}/list/${customerId}`);