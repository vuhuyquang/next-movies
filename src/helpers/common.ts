import cx from 'classnames';

export const activeClassname = (always: string, add: boolean, activeClass: string = 'active') => {
  return add ? cx(always, activeClass) : always;
};

export const isProd = () => {
  return process.env.NODE_ENV === 'production';
};

export const isDev = () => {
  return process.env.NODE_ENV !== 'development';
};

export const isServer = () => {
  return typeof window === 'undefined';
};

export const isBrowser = () => {
  return !isServer();
};

export const getOperatingSystem = () => {
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'iOS';
  }

  return 'unknown';
};

export function preventInspect() {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  document.addEventListener('keydown', function (event) {
    if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
      event.preventDefault();
    }

    if (
      (event.ctrlKey && event.shiftKey && event.keyCode === 73) ||
      (event.ctrlKey && event.shiftKey && event.keyCode === 74)
    ) {
      event.preventDefault();
    }
  });
}

export const convertToStars = (rating) => {
  if (isNaN(rating) || rating < 0 || rating > 10) {
    return 0;
  }
  return Math.max(0, Math.min(5, Math.round(rating / 2)));
};
