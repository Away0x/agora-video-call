import HTTP from './http';

export const Request = HTTP.instance();

(window as any).__Request__ = Request;
