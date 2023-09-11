export const signIn = (userData) => {
    return {
      type: 'SIGN_IN',
      payload: userData,
    };
  };