export function asyncProcessAuth(): any {}

export function asyncLogoutAuth(): any {
  return (dispatch) => {
    setTimeout(() => {
      window.location.href = '/';
    }, 600);
  };
}
