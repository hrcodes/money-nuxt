export default ({ redirect }) => {
  // console.log('auth middleware', context);
  console.log('auth middleware');

  const loggedIn = false;
  if (!loggedIn) {
    // return redirect('/');
    return redirect('/login');
  }
};
