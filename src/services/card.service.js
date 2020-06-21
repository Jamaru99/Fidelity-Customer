import { getAuthorized, putAuthorized, post, CARD_BASE_URL } from '@utils';

export const getCardList = (customerId) => getAuthorized(`${CARD_BASE_URL}/list/${customerId}`);
export const incrementCard = (cardId) => putAuthorized(`${CARD_BASE_URL}/increment/${cardId}`);