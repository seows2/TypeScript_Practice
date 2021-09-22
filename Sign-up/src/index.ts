import { AnyObject } from './types';
import App from './app';

declare global {
  interface Window {
    Handlebars: {
      compile: (template: string) => (data: AnyObject) => string;
    };
    daum: any;
  }
}

const app = new App('#root', {
  title: 'Javascript & TypeScript 연습하기 SeoWS2 - Sign up',
});

app.render();
