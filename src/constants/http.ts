export const serviceErrorMap: {[k: number]: string} = {
  1009: 'Portrait update failed, image too large.',
  2003: 'Internal server error(code: 2003)',
  2005: 'Internal server error(code: 2005)',
  2006: 'Room join failed, incorrect password',
  2007: 'Internal server error(code: 2007)',
  2008: 'You are not host of this room',
  2009: 'Screen share going already',
  10000: 'Target user not in this room(code: 10000)',
  10001: 'Room not exists(code: 10001), try joining again',
  10002: 'You are not in this room(code: 10002)',
  10003: 'Connecting Server(code: 10003)'
};

export const rtmP2pMessageErrorMap: {[k: number]: string} = {
  1: 'Request failed(code: 1)',
  2: 'Request timeout(code: 2)',
  3: 'Server error(code: 3), try again'
};
