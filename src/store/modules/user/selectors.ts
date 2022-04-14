import { RootState } from 'store';

export const getIsAuthSelector = (state: RootState): boolean => Boolean(state.user.currentUser?.id);
